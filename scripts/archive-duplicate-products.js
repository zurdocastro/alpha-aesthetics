/**
 * ALPHA AESTHETICS & HEALTH — ARCHIVE DUPLICATE PRODUCTS
 *
 * Finds products that share the exact same name, keeps only the MOST
 * RECENTLY created one active, and archives (deactivates) the older
 * duplicates and their prices. Nothing is deleted — archived items just
 * stop showing as "Active" and can't be used for new checkouts.
 *
 * Run from the repo root; it asks for the key at a hidden prompt:
 *   node scripts/archive-duplicate-products.js
 *
 * Use a RESTRICTED key (rk_) scoped to read and write on Products and Prices
 * rather than the secret key the live site uses — rotating that one takes
 * checkout down until Vercel is updated.
 */

const Stripe = require("stripe");

const { getStripeKey } = require("./stripe-key.js");
const key = getStripeKey(
  "archive-duplicate-products.js",
  "read and write access to Products and Prices"
);
const stripe = new Stripe(key);

async function listAllActiveProducts() {
  const products = [];
  let starting_after;
  while (true) {
    const page = await stripe.products.list({
      active: true,
      limit: 100,
      starting_after,
    });
    products.push(...page.data);
    if (!page.has_more) break;
    starting_after = page.data[page.data.length - 1].id;
  }
  return products;
}

async function main() {
  const products = await listAllActiveProducts();
  console.log(`Found ${products.length} active products.`);

  const byName = {};
  for (const p of products) {
    if (!byName[p.name]) byName[p.name] = [];
    byName[p.name].push(p);
  }

  let archivedProducts = 0;
  let archivedPrices = 0;

  for (const name of Object.keys(byName)) {
    const group = byName[name];
    if (group.length < 2) continue;

    group.sort((a, b) => b.created - a.created);
    const [keep, ...duplicates] = group;

    console.log(`\n"${name}" has ${group.length} copies — keeping ${keep.id} (newest), archiving ${duplicates.length} older one(s).`);

    for (const dup of duplicates) {
      const prices = await stripe.prices.list({ product: dup.id, active: true, limit: 100 });
      for (const price of prices.data) {
        await stripe.prices.update(price.id, { active: false });
        archivedPrices++;
      }
      await stripe.products.update(dup.id, { active: false });
      archivedProducts++;
      console.log(`  ✅ Archived duplicate product ${dup.id}`);
    }
  }

  console.log(`\nDone. Archived ${archivedProducts} duplicate product(s) and ${archivedPrices} price(s).`);
}

main().catch((err) => {
  console.error("Script failed:", err.message);
  process.exit(1);
});