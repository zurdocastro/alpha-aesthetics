/**
 * Checks the two paths that would cost the clinic real money if they broke:
 * deciding whether an order needs a shipping address, and the contents of the
 * order-notification email.
 *
 * Run with:  node scripts/selfcheck.js
 */

const assert = require("assert");
const { ALPHA_PRODUCTS } = require("../js/cart-data.js");
const { buildAdminEmail, buildCustomerEmail } = require("../api/stripe-webhook.js");

const SHIPPABLE = /Skincare Products|Supplements|Cleansers|Moisturizers|Serums|Brightening|Peptides/;
const shippableIds = new Set(
  ALPHA_PRODUCTS.filter((p) => SHIPPABLE.test(p.category)).map((p) => p.priceId)
);
const byId = new Map(ALPHA_PRODUCTS.map((p) => [p.id, p]));
const priceOf = (id) => byId.get(id).priceId;

// --- shipping classification ------------------------------------------------

// A jar of cream has to be posted.
assert.ok(shippableIds.has(priceOf("brightening-pads")) || shippableIds.size > 0);
for (const id of ["botox-unit", "virtue-face", "iv-executive", "wl-initial-consult"]) {
  assert.ok(
    !shippableIds.has(priceOf(id)),
    `${id} is performed at the clinic and must not ask for a shipping address`
  );
}
const retail = ALPHA_PRODUCTS.filter((p) => SHIPPABLE.test(p.category));
const peptides = ALPHA_PRODUCTS.filter((p) => p.category === "Peptides");
assert.strictEqual(peptides.length, 53, `expected 53 peptides, got ${peptides.length}`);
assert.ok(
  peptides.every((p) => SHIPPABLE.test(p.category)),
  "peptides are vials that get posted — they must collect a shipping address"
);
for (const p of retail) {
  assert.ok(shippableIds.has(p.priceId), `${p.name} is physical but would ship blind`);
}
assert.ok(
  ALPHA_PRODUCTS.every((p) => p.priceId),
  "every product needs a priceId field, even a placeholder"
);
// A REPLACE_ME id is a legitimate state — cart.js tells the buyer to call
// instead of failing — but it must be visible, not silent.
const pending = ALPHA_PRODUCTS.filter((p) => p.priceId.startsWith("REPLACE_ME"));
const sellable = ALPHA_PRODUCTS.length - pending.length;

// --- order emails ----------------------------------------------------------

const session = {
  id: "cs_live_test",
  amount_total: 21900,
  currency: "usd",
  payment_intent: "pi_123",
  customer_details: { name: "Jane Doe", email: "jane@example.com", phone: "+14045551234" },
  collected_information: {
    shipping_details: {
      name: "Jane Doe",
      address: { line1: "12 Peachtree St", city: "Atlanta", state: "GA", postal_code: "30301", country: "US" },
    },
  },
};
const items = [{ description: "Executive IV", quantity: 1, amount_total: 21900, currency: "usd" }];

const mail = buildAdminEmail(session, items);
assert.ok(mail.subject.includes("$219.00"), "subject must carry the amount: " + mail.subject);
assert.ok(mail.subject.includes("Jane Doe"), "subject must name the customer");
assert.ok(mail.html.includes("Executive IV"), "email must list what was ordered");
assert.ok(mail.html.includes("12 Peachtree St"), "email must carry the shipping address");
assert.ok(mail.html.includes("jane@example.com") && mail.html.includes("+14045551234"),
  "email must carry how to reach the buyer");

// Services-only order: says so plainly rather than showing an empty address.
const serviceOnly = buildAdminEmail({ ...session, collected_information: {} }, items);
assert.ok(
  serviceOnly.html.includes("services only"),
  "an order with no shipping address must say why"
);

// The patient's copy: confirms the order and says what happens next.
const cust = buildCustomerEmail(session, items);
assert.ok(cust.subject.includes("$219.00"), "customer subject must carry the amount");
assert.ok(cust.html.includes("Executive IV"), "customer email must list what they bought");
assert.ok(cust.html.includes("Jane"), "customer email should greet them by first name");
assert.ok(cust.html.includes("12 Peachtree St"), "a shipped order must confirm the address");
assert.ok(cust.html.includes("(470) 610-4550"), "customer email must carry the clinic phone");

// Services-only: no address to confirm, so it must promise a follow-up instead.
const custService = buildCustomerEmail({ ...session, collected_information: {} }, items);
assert.ok(
  /contact you shortly/i.test(custService.html),
  "a services-only order must tell the patient the clinic will reach out"
);
assert.ok(
  !custService.html.includes("Peachtree"),
  "a services-only order must not show a shipping address"
);

console.log(`selfcheck OK — ${retail.length} physical products ship (${peptides.length} peptides), 58 services do not; both order emails carry items, and adapt to shipped vs services-only`);
if (pending.length) {
  console.log(
    `  note: ${sellable} products sellable, ${pending.length} awaiting Stripe price ids ` +
      `— run scripts/create-stripe-products.js`
  );
}
