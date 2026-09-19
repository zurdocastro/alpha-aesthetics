/**
 * MAKE STRIPE MATCH THE PRICES IN js/cart-data.js
 *
 * A Stripe Price is immutable — you cannot change its amount. Repricing means
 * creating a new Price on the same Product, pointing the catalog at it, and
 * archiving the old one so nothing can still be sold at the previous amount.
 *
 * The job here is "make Stripe agree with cart-data.js", not "raise prices by
 * X". That makes it safe to re-run: a second run finds everything already
 * matching and does nothing. A script that applied a delta would double it.
 *
 * ---------------------------------------------------------------------
 * HOW TO RUN
 * ---------------------------------------------------------------------
 *   node scripts/sync-stripe-prices.js --dry-run     # show what would change
 *   node scripts/sync-stripe-prices.js               # do it
 *
 * It asks for the key at a hidden prompt, so nothing lands in your shell
 * history. Use a RESTRICTED key (rk_) scoped to read and write on Prices —
 * rotating it cannot take the live site's checkout down, which rotating the
 * site's sk_ key has done twice. STRIPE_SECRET_KEY is still honoured for CI.
 *
 * AFTER RUNNING: commit js/cart-data.js. Until that is pushed, the live site
 * still points at the old price ids.
 * ---------------------------------------------------------------------
 */

const fs = require("fs");
const path = require("path");

const CART_DATA_PATH = path.join(__dirname, "..", "js", "cart-data.js");
const DRY_RUN = process.argv.includes("--dry-run");
const ONLY = (process.argv.find((a) => a.startsWith("--category=")) || "").split("=")[1];

const { getStripeKey } = require("./stripe-key.js");
process.env.STRIPE_SECRET_KEY = getStripeKey(
  "sync-stripe-prices.js",
  "read and write access to Prices"
);

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

function loadProducts() {
  const fileContents = fs.readFileSync(CART_DATA_PATH, "utf8");
  const match = fileContents.match(/const ALPHA_PRODUCTS = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error("Could not find ALPHA_PRODUCTS in cart-data.js");
  return { products: eval(match[1]), fileContents };
}

function centsFromDisplay(display) {
  const m = String(display).match(/\$([\d,.]+)/);
  if (!m) return null;
  return Math.round(parseFloat(m[1].replace(/,/g, "")) * 100);
}

function money(cents) {
  return "$" + (cents / 100).toFixed(2);
}

async function main() {
  const { products, fileContents } = loadProducts();

  let candidates = products.filter(
    (p) => p.priceId && p.priceId.startsWith("price_") && centsFromDisplay(p.priceDisplay) !== null
  );
  if (ONLY) candidates = candidates.filter((p) => p.category === ONLY);

  // Per-unit items multiply at checkout, so the display string is the unit
  // price and comparing it to the Stripe amount is still correct.
  console.log(
    `\nChecking ${candidates.length} product(s) against Stripe` +
      (ONLY ? ` in category "${ONLY}"` : "") +
      (DRY_RUN ? "  (DRY RUN — nothing will change)" : "") +
      "\n"
  );

  let updatedContents = fileContents;
  let changed = 0,
    matched = 0;
  const failed = [];

  for (const item of candidates) {
    const want = centsFromDisplay(item.priceDisplay);
    try {
      const current = await stripe.prices.retrieve(item.priceId);

      if (current.unit_amount === want && current.active) {
        matched++;
        continue;
      }

      const label = `${item.name.padEnd(34)} ${money(current.unit_amount)} → ${money(want)}`;
      if (DRY_RUN) {
        console.log(`  · would reprice ${label}`);
        changed++;
        continue;
      }

      const created = await stripe.prices.create({
        product: current.product,
        unit_amount: want,
        currency: current.currency || "usd",
      });

      // Archive the old one so nothing can still check out at the old amount.
      await stripe.prices.update(current.id, { active: false });

      const pattern = new RegExp(`(id: "${item.id}"[\\s\\S]*?priceId: ")${item.priceId}(")`);
      if (!pattern.test(updatedContents)) {
        throw new Error("could not find its priceId in cart-data.js to update");
      }
      updatedContents = updatedContents.replace(pattern, `$1${created.id}$2`);

      console.log(`  ✓ repriced ${label}  ${created.id}`);
      changed++;
    } catch (err) {
      console.log(`  ✗ FAILED   ${item.name} — ${err.message}`);
      failed.push(item.name);
    }
  }

  console.log(
    `\n${changed} ${DRY_RUN ? "would be repriced" : "repriced"}, ${matched} already matching, ${failed.length} failed.`
  );

  if (failed.length) {
    console.log(`Failed: ${failed.join(", ")}`);
    process.exitCode = 1;
  }

  if (DRY_RUN) {
    console.log("Nothing was changed and js/cart-data.js was not touched.");
    return;
  }

  if (changed === 0) {
    console.log("Stripe already matches the catalog — js/cart-data.js left untouched.");
    return;
  }

  fs.writeFileSync(CART_DATA_PATH, updatedContents, "utf8");
  console.log("js/cart-data.js updated with the new Price IDs.");
  console.log("\nNext: commit and push, or the live site keeps the old prices.");
}

main().catch((err) => {
  console.error("\n❌ " + err.message + "\n");
  process.exit(1);
});
