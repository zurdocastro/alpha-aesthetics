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
 * It asks for the Stripe secret key, so nothing lands in your shell history.
 * STRIPE_SECRET_KEY is still honoured for CI.
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

/** Key from the environment, piped stdin, or a hidden prompt — never an argument. */
function readHiddenFromTty() {
  const fd = fs.openSync("/dev/tty", "rs");
  process.stderr.write("Stripe secret key (input hidden): ");
  const wasRaw = process.stdin.isRaw;
  if (process.stdin.setRawMode) process.stdin.setRawMode(true);
  let key = "";
  const buf = Buffer.alloc(1);
  for (;;) {
    let n;
    try {
      n = fs.readSync(fd, buf, 0, 1);
    } catch (e) {
      if (e.code === "EAGAIN") continue;
      throw e;
    }
    if (n === 0) break;
    const ch = buf.toString("utf8");
    if (ch === "\n" || ch === "\r" || ch === "") break;
    if (ch === "") {
      process.stderr.write("\n");
      process.exit(130);
    }
    if (ch === "") {
      key = key.slice(0, -1);
      continue;
    }
    key += ch;
  }
  if (process.stdin.setRawMode) process.stdin.setRawMode(!!wasRaw);
  fs.closeSync(fd);
  process.stderr.write("\n");
  return key.trim();
}

function getKey() {
  if (process.env.STRIPE_SECRET_KEY) return process.env.STRIPE_SECRET_KEY.trim();
  if (!process.stdin.isTTY) {
    try {
      return fs.readFileSync(0, "utf8").trim();
    } catch {
      return "";
    }
  }
  try {
    return readHiddenFromTty();
  } catch {
    return "";
  }
}

process.env.STRIPE_SECRET_KEY = getKey();

if (!/^sk_(live|test)_[A-Za-z0-9]+$/.test(process.env.STRIPE_SECRET_KEY)) {
  console.error(
    "\n❌ No usable Stripe secret key.\n" +
      "   It must start with sk_live_ or sk_test_. Provide it by any of:\n" +
      "     • run the script and paste it at the prompt\n" +
      '     • pipe it:  printf "%s" "$KEY" | node scripts/sync-stripe-prices.js\n' +
      "     • environment:  STRIPE_SECRET_KEY=sk_live_... node scripts/sync-stripe-prices.js\n"
  );
  process.exit(1);
}

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
