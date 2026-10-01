/**
 * ALPHA AESTHETICS & HEALTH — DETAIL CONTENT FOR EVERYTHING THAT IS NOT A PEPTIDE
 *
 * Same shape and same keys as js/peptide-info.js (product id from cart-data.js),
 * so the popup reads both files as one map. Split in two because the peptides
 * come from the supplier's catalog and these are the clinic's own menu — one
 * gets replaced wholesale if the supplier changes, the other does not.
 *
 * `facts` is the table at the bottom: the handful of numbers a patient actually
 * decides on — how long it takes, how many sessions, how much downtime.
 *
 * WHERE THIS COPY COMES FROM
 * - The clinic's own service pages, which already describe most of this menu.
 *   Reused rather than rewritten so the shop and the pages cannot drift apart.
 * - Manufacturer labelling for the branded products (Galderma, Cartessa, VI
 *   Aesthetics, Ortho Molecular, EVEXIAS).
 * Nothing here was invented. Where the clinic has not published a detail — the
 * two IV blends' ingredients, what the weight-loss visit fee includes — the
 * copy says what is known and stops, rather than guessing on a medical page.
 */

const ALPHA_PRODUCT_INFO = {
  // ══════════════════════════════════════════════ INJECTABLES: NEUROTOXINS
  "dysport-unit": {
    blurb:
      "Dysport® (abobotulinumtoxinA) is an FDA-approved neuromodulator that temporarily relaxes the muscles that crease the skin into frown lines, forehead lines and crow's feet.",
    action: "Priced per unit — you buy the dose your anatomy needs, not a flat package.",
    benefits: [
      "Tends to show up a little sooner than Botox, typically in 2–3 days.",
      "Spreads slightly more in the tissue, which many injectors prefer for broader areas like the forehead.",
      "Softens the lines without freezing expression when the dose is mapped to your own muscle pattern.",
    ],
    facts: [
      ["Priced", "Per unit"],
      ["Results visible", "2–3 days"],
      ["Typical duration", "3–4 months"],
      ["Downtime", "None"],
    ],
  },
  "botox-unit": {
    blurb:
      "Botox® Cosmetic (onabotulinumtoxinA) is the original FDA-approved neuromodulator for frown lines, forehead lines and crow's feet.",
    action: "Priced per unit — you buy the dose your anatomy needs, not a flat package.",
    benefits: [
      "The most studied neuromodulator on the market, with decades of safety data.",
      "Results appear in 3–7 days and hold for about 3–4 months.",
      "Dosed area by area, so one side of a brow can be treated differently from the other.",
    ],
    facts: [
      ["Priced", "Per unit"],
      ["Results visible", "3–7 days"],
      ["Typical duration", "3–4 months"],
      ["Downtime", "None"],
    ],
  },

  // ══════════════════════════════════════════════ INJECTABLES: RESTYLANE
  "restylane-lyft": {
    blurb:
      "Restylane® Lyft is a firmer hyaluronic acid gel built to restore volume where the face has flattened — cheeks and midface, and the back of the hands.",
    action: "Lifts and rebuilds structure rather than filling a single line.",
    benefits: [
      "Adds fullness to cheeks that have lost projection with age.",
      "FDA-approved for the back of the hands, where lost volume makes tendons and veins stand out.",
      "Contains lidocaine, so the injection itself numbs as it goes in.",
    ],
    facts: [
      ["Type", "Hyaluronic acid filler"],
      ["Results", "Immediate, settled at ~2 weeks"],
      ["Typical duration", "Up to 12 months"],
      ["Downtime", "Swelling or bruising for a few days"],
    ],
  },
  "restylane-defyne": {
    blurb:
      "Restylane® Defyne uses Galderma's XpresHAn cross-linking to stay flexible, so it fills deep laugh lines and chin without stiffening the way the face moves.",
    action: "For deeper folds that still have to move naturally.",
    benefits: [
      "Smooths deep nasolabial folds and marionette lines.",
      "FDA-approved for chin retrusion — adding projection to a weak chin without surgery.",
      "Designed to flex with expression, so the result holds when you talk and smile.",
    ],
    facts: [
      ["Type", "Hyaluronic acid filler (XpresHAn)"],
      ["Results", "Immediate, settled at ~2 weeks"],
      ["Typical duration", "Up to 12 months"],
      ["Downtime", "Swelling or bruising for a few days"],
    ],
  },
  "restylane-refine": {
    blurb:
      "The softest gel in the XpresHAn family, for mild to moderate laugh lines where a firmer filler would read as heavy.",
    action: "For lighter lines that need softening, not volume.",
    benefits: [
      "Smooths mild to moderate nasolabial folds and marionette lines.",
      "Flexible enough to keep natural movement in the lower face.",
      "A lighter option when Defyne would be more product than the area needs.",
    ],
    facts: [
      ["Type", "Hyaluronic acid filler (XpresHAn)"],
      ["Results", "Immediate, settled at ~2 weeks"],
      ["Typical duration", "Up to 12 months"],
      ["Downtime", "Swelling or bruising for a few days"],
    ],
  },
  "restylane-contour": {
    blurb:
      "Restylane® Contour is formulated specifically for the midface — it restores cheek definition while staying soft enough to move with your expression.",
    action: "Cheek definition that still looks like your own face in motion.",
    benefits: [
      "FDA-approved for cheek augmentation and midface contour deficiency.",
      "Built with XpresHAn technology so the cheek moves naturally when you smile.",
      "Contains lidocaine for comfort during injection.",
    ],
    facts: [
      ["Type", "Hyaluronic acid filler (XpresHAn)"],
      ["Results", "Immediate, settled at ~2 weeks"],
      ["Typical duration", "Up to 12 months"],
      ["Downtime", "Swelling or bruising for a few days"],
    ],
  },
  "restylane-l": {
    blurb:
      "The original Restylane® gel with lidocaine — the versatile workhorse of the line, used for lips and moderate facial wrinkles and folds.",
    action: "Adds volume and smooths folds, with lidocaine mixed in.",
    benefits: [
      "Adds fullness and definition to the lips.",
      "Smooths moderate nasolabial folds and similar facial wrinkles.",
      "The longest track record in the Restylane family.",
    ],
    facts: [
      ["Type", "Hyaluronic acid filler"],
      ["Results", "Immediate, settled at ~2 weeks"],
      ["Typical duration", "~6 months in lips, longer elsewhere"],
      ["Downtime", "Swelling or bruising for a few days"],
    ],
  },

  // ══════════════════════════════════════════════ INJECTABLES: PDO THREADS
  "pdo-full": {
    blurb:
      "A full-face thread lift: absorbable PDO (polydioxanone) threads placed under the skin to reposition sagging tissue and trigger new collagen along every thread as it dissolves.",
    action: "Lifts the face without surgery, anaesthesia or a scar.",
    benefits: [
      "Repositions lax tissue along the cheeks, jawline and neck in a single session.",
      "The thread dissolves in 4–6 months, but the collagen it builds keeps working after it is gone.",
      "Done under local anaesthetic, with no incisions and no general anaesthesia.",
    ],
    facts: [
      ["Material", "PDO — absorbable, same suture used in surgery"],
      ["Session", "About 60–90 minutes"],
      ["Downtime", "Swelling and tightness for 3–7 days"],
      ["Typical duration", "12–18 months"],
    ],
  },
  "pdo-nasolabial": {
    blurb:
      "Smooth PDO threads placed through the nasolabial folds — the lines running from nose to mouth corner. Unlike barbed lifting threads, these work by building collagen along their length.",
    action: "Thickens and firms the skin of the fold rather than filling it.",
    benefits: [
      "Softens the nose-to-mouth lines by improving the skin itself.",
      "Can be combined with filler, which adds volume while the threads add structure.",
      "No incisions — the threads go in through a fine needle.",
    ],
    facts: [
      ["Material", "PDO smooth threads"],
      ["Session", "About 30–45 minutes"],
      ["Downtime", "Mild swelling or bruising for 2–5 days"],
      ["Typical duration", "12–18 months"],
    ],
  },
  "pdo-marionette": {
    blurb:
      "Smooth PDO threads for the marionette lines — the creases that run down from the mouth corners and pull the lower face into a frown at rest.",
    action: "Firms the skin along the crease and lifts the corner of the mouth.",
    benefits: [
      "Targets the lines that make a neutral face look unhappy.",
      "Builds collagen along each thread as it absorbs.",
      "Pairs well with a small amount of filler at the mouth corner.",
    ],
    facts: [
      ["Material", "PDO smooth threads"],
      ["Session", "About 30–45 minutes"],
      ["Downtime", "Mild swelling or bruising for 2–5 days"],
      ["Typical duration", "12–18 months"],
    ],
  },
  "pdo-eye-trough": {
    blurb:
      "Fine PDO threads for the tear trough — the hollow under the eye where thin skin and lost support read as permanent tiredness.",
    action: "Thickens very thin under-eye skin instead of filling the hollow.",
    benefits: [
      "Improves the crepey texture of the under-eye without adding volume that can look puffy.",
      "An option for patients where filler in the tear trough is not a good fit.",
      "Uses the finest threads in the range, placed by a provider trained in the area.",
    ],
    facts: [
      ["Material", "PDO smooth threads"],
      ["Session", "About 30 minutes"],
      ["Downtime", "Bruising is common under the eye — allow 5–7 days"],
      ["Typical duration", "12–18 months"],
    ],
  },
  "pdo-lips": {
    blurb:
      "Very fine PDO threads placed in and around the lip border to firm the vermillion edge and soften the vertical smoker's lines above it.",
    action: "Definition and texture at the lip border, without adding lip volume.",
    benefits: [
      "Sharpens a lip border that has blurred with age.",
      "Softens the fine vertical lines above the upper lip.",
      "An alternative for patients who want definition but not a fuller lip.",
    ],
    facts: [
      ["Material", "PDO smooth threads"],
      ["Session", "About 30 minutes"],
      ["Downtime", "Swelling for 2–4 days — lips swell more than other areas"],
      ["Typical duration", "12–18 months"],
    ],
  },

  // ══════════════════════════════════════════════ BODY CONTOURING: PHYSIQ
  "physiq-5session": {
    blurb:
      "The full recommended course on the Cartessa™ PHYSIQ. Its STEP technology pairs SDM laser energy, which heats fat cells until they die off naturally, with EMS electrodes that contract and strengthen the muscle underneath — in the same session.",
    action: "The complete five-session protocol, which is what the device is designed around.",
    benefits: [
      "Four independent applicators treat several zones at once, so a session is short.",
      "Fat cells removed in the treated zone do not come back.",
      "No needles, no incisions and no downtime — you go straight back to your day.",
    ],
    facts: [
      ["Includes", "5 sessions"],
      ["Session time", "24–36 minutes"],
      ["Downtime", "None"],
      ["Applicators", "4, placed simultaneously"],
    ],
  },
  "physiq-single": {
    blurb:
      "One session on the Cartessa™ PHYSIQ — SDM laser energy to reduce fat and EMS muscle stimulation to tone, delivered hands-free in one appointment.",
    action: "A single session, for topping up a course or trying the device first.",
    benefits: [
      "Same protocol as the package, billed one session at a time.",
      "Hands-free — the applicators do the work while you sit.",
      "A common pairing for patients on a medical weight-loss plan dealing with muscle loss.",
    ],
    facts: [
      ["Includes", "1 session"],
      ["Session time", "24–36 minutes"],
      ["Downtime", "None"],
      ["Recommended course", "5 sessions"],
    ],
  },

  // ══════════════════════════════════════════════ BODY CONTOURING: VIRTUE RF
  // Every Virtue RF entry shares the same protocol; only the area changes.
  // VIRTUE_FACTS is spliced in at the bottom of this file rather than repeated
  // ten times, so correcting the session count is a one-line edit.
  "virtue-face": {
    blurb:
      "Cartessa™ Virtue RF on the full face. Insulated gold-plated microneedles carry radiofrequency energy into the dermis — the layer that makes collagen — while the surface of the skin is protected.",
    action: "Tightens, smooths texture and softens lines across the whole face.",
    benefits: [
      "Firms lax skin and softens lines on the forehead, around the eyes and around the mouth.",
      "Visibly reduces enlarged pores by tightening the tissue around them.",
      "Safe for every skin tone — Fitzpatrick I through VI — because the energy bypasses the epidermis.",
    ],
  },
  "virtue-face-neck": {
    blurb:
      "Virtue RF across the face and down the neck, where skin is thinner and laxity shows first. Treating both in one session keeps the jawline and the neck from aging out of step.",
    action: "Face and neck together, so the result stops at nothing visible.",
    benefits: [
      "Firms the jawline and jowls along with the face.",
      "Addresses the horizontal neck lines and crepey texture that give away age.",
      "One numbing period and one recovery instead of two separate appointments.",
    ],
  },
  "virtue-face-neck-chest": {
    blurb:
      "The full visible zone — face, neck and décolletage. The chest takes decades of sun exposure and is one of the first areas to show crepey skin and sun damage.",
    action: "Covers everything that shows above a neckline.",
    benefits: [
      "Treats the sun-damaged chest most patients forget until it no longer matches the face.",
      "Keeps face, neck and chest aging at the same rate.",
      "The most efficient way to buy the three areas — one session, one recovery.",
    ],
  },
  "virtue-arms": {
    blurb:
      "Virtue RF on the upper arms, where loose skin is a structural problem rather than a fat one — which is why exercise alone rarely fixes it.",
    action: "Tightens crepey, lax skin on the upper arms.",
    benefits: [
      "Builds collagen in skin that has lost its spring.",
      "A non-surgical option where the alternative is an arm lift and its scar.",
      "Pairs with PHYSIQ when there is both loose skin and stubborn fat.",
    ],
  },
  "virtue-abdomen": {
    blurb:
      "Virtue RF on the abdomen — for skin laxity and texture after pregnancy or weight loss, where the shape is right but the skin has not caught up.",
    action: "Tightens abdominal skin and improves its texture.",
    benefits: [
      "Addresses loose skin left behind after significant weight loss.",
      "Improves the texture of stretched post-pregnancy skin.",
      "Treats skin quality, which fat-reduction devices alone do not.",
    ],
  },
  "virtue-thighs": {
    blurb:
      "Virtue RF on the thighs, for the crepey, dimpled skin texture that shows most in the inner thigh and above the knee.",
    action: "Firms thigh skin and smooths its surface.",
    benefits: [
      "Improves the loose skin of the inner thigh.",
      "Builds collagen in the area above the knee, where skin folds as it loosens.",
      "No incisions and no compression garments afterwards.",
    ],
  },
  "virtue-buttox": {
    blurb:
      "Virtue RF on the buttocks, targeting skin laxity and the dimpled surface texture rather than volume or shape.",
    action: "Firms the skin of the buttocks and smooths its texture.",
    benefits: [
      "Tightens lax skin without implants or fat transfer.",
      "Improves surface dimpling by rebuilding dermal collagen.",
      "Commonly combined with PHYSIQ, which works on the muscle underneath.",
    ],
  },
  "virtue-scars": {
    blurb:
      "Virtue RF over scars — acne scarring, surgical scars, and the indented atrophic scars that topical treatments cannot reach.",
    action: "Breaks down scar tissue and rebuilds normal skin in its place.",
    benefits: [
      "Controlled micro-injury and heat break down the fibrous tissue that holds a scar indented.",
      "Significantly improves atrophic (pitted) acne scarring.",
      "Low risk of post-inflammatory pigment change, including on deeper skin tones.",
    ],
  },
  "virtue-stretch-marks": {
    blurb:
      "Virtue RF on stretch marks. A stretch mark is a dermal scar — which is why creams do so little and why a treatment that reaches the dermis can change it.",
    action: "Remodels the dermal scarring that makes up a stretch mark.",
    benefits: [
      "Works at the depth where the stretch mark actually is.",
      "Improves both the texture and the colour difference over a series.",
      "Treats older white stretch marks as well as newer red ones.",
    ],
  },
  "virtue-submental": {
    blurb:
      "Virtue RF under the chin — the submental area, where even slight laxity blurs the line between jaw and neck.",
    action: "Tightens under the chin to sharpen the jawline.",
    benefits: [
      "Firms the small, awkward area that makes a profile look heavier than it is.",
      "Defines the jawline without filler or surgery.",
      "The shortest Virtue RF session, and the most-requested single area.",
    ],
  },

  // ══════════════════════════════════════════════ SKIN TREATMENTS: VI PEEL
  "vi-peel": {
    blurb:
      "The original VI Peel — a medical-grade chemical peel safe on every skin tone, for uneven tone, rough texture, early lines and congested skin.",
    action: "Resurfaces the skin to reveal smoother, brighter skin underneath.",
    benefits: [
      "Visible results in about 7 days, with peeling concentrated on days 3–5.",
      "Painless to apply — the peel is self-neutralising and takes about 30 minutes in the chair.",
      "Safe for Fitzpatrick I–VI, unlike many peels that risk pigment change on deeper skin.",
    ],
  },
  "vi-peel-advanced": {
    blurb:
      "VI Peel Advanced adds a retinoic acid and antioxidant boost to the original formula, aimed at skin that has started to show real aging rather than early changes.",
    action: "The anti-aging formulation — built for fine lines and loss of firmness.",
    benefits: [
      "Targets fine lines, wrinkles and loss of elasticity.",
      "Formulated for patients around 40 and up, or anyone with significant sun damage.",
      "Same 7-day cycle and same comfort as the original peel.",
    ],
  },
  "vi-peel-precision-plus": {
    blurb:
      "VI Peel Precision Plus adds a pigment-correcting booster for melasma, sun spots and the brown marks left behind after a breakout.",
    action: "The pigment formulation — for brown patches and uneven tone.",
    benefits: [
      "Works on melasma, which is notoriously resistant to most treatments.",
      "Fades sun spots and post-inflammatory hyperpigmentation.",
      "Safe on darker skin tones, where aggressive pigment treatments often backfire.",
    ],
  },
  "vi-peel-purify": {
    blurb:
      "VI Peel Purify is formulated for active acne — it clears out congestion, reduces oil and calms the bacteria driving the breakouts.",
    action: "The acne formulation — for skin that is breaking out now.",
    benefits: [
      "Clears existing breakouts and reduces how often new ones form.",
      "Cuts excess oil and unclogs congested pores.",
      "Suitable for teenage and adult acne alike.",
    ],
  },
  "vi-peel-purify-precision": {
    blurb:
      "Purify with Precision Plus combines both boosters: it treats the active breakouts and the brown marks the previous ones left behind, in one peel.",
    action: "For acne and post-acne pigmentation at the same time.",
    benefits: [
      "The usual case — most acne patients are fighting both at once.",
      "Avoids the sequencing problem of treating the acne first and the marks months later.",
      "The most complete VI Peel formulation for acne-prone skin.",
    ],
  },
  "vi-peel-body-small": {
    blurb:
      "VI Peel Body for a smaller area — the back of the hands, the chest, the back of the arms. Body skin takes as much sun as the face and is treated far less.",
    action: "Medical-grade peeling for a smaller body area.",
    benefits: [
      "Treats sun damage and rough texture on hands, chest or arms.",
      "Improves keratosis pilaris, the rough bumps on the backs of the arms.",
      "Same formulation strength as the facial peel, sized for the body.",
    ],
  },
  "vi-peel-body-large": {
    blurb:
      "VI Peel Body for a larger area — full back, full chest, or both upper arms, where sun damage and texture cover more ground than a small peel reaches.",
    action: "Medical-grade peeling for a large body area.",
    benefits: [
      "Covers the full back or chest in one session.",
      "Addresses back acne and the marks it leaves.",
      "Evens out sun damage across a whole area rather than patchily.",
    ],
  },

  // ══════════════════════════════════════════════ SKIN TREATMENTS: FACIALS
  "facial-signature": {
    blurb:
      "Our 45-minute signature facial — cleansing, exfoliation, extractions and a nourishing mask, built around your skin on the day rather than a fixed protocol.",
    action: "The maintenance facial, and the right first appointment if you are new to us.",
    benefits: [
      "Personalised at every step rather than run from a script.",
      "Includes extractions, which most express facials skip.",
      "A good way to have your skin assessed before committing to peels or devices.",
    ],
    facts: [
      ["Session", "45 minutes"],
      ["Downtime", "None"],
      ["Good for", "First visits and ongoing maintenance"],
    ],
  },
  "facial-sports": {
    blurb:
      "A 60-minute facial for active skin — the sweat-driven breakouts, enlarged pores and dehydration that come with training hard and showering often.",
    action: "Built around the skin problems that exercise actually causes.",
    benefits: [
      "Clears the congestion that sweat and friction leave behind.",
      "Rehydrates skin stripped by frequent washing and chlorine.",
      "Popular with men, who are often underserved by standard facial menus.",
    ],
    facts: [
      ["Session", "60 minutes"],
      ["Downtime", "None"],
      ["Good for", "Athletes and anyone training most days"],
    ],
  },
  "facial-teen": {
    blurb:
      "A gentle 30-minute facial for younger skin — acne, clogged pores and oiliness, treated calmly, with the habits explained along the way.",
    action: "Treats the skin and teaches the routine that keeps it clear.",
    benefits: [
      "Formulated gently for skin that over-reacts to aggressive products.",
      "Addresses clogged pores and oil without stripping the skin.",
      "Teaches good habits early, which does more over a decade than any single treatment.",
    ],
    facts: [
      ["Session", "30 minutes"],
      ["Downtime", "None"],
      ["Good for", "Teenage and early-twenties skin"],
    ],
  },

  // ══════════════════════════════════════════════ SKIN TREATMENTS: RED LIGHT
  "rlt-single": {
    blurb:
      "Red light therapy uses specific wavelengths — technology NASA developed for plant growth and wound healing — to stimulate collagen, calm inflammation and raise cellular energy.",
    action: "A single 20-minute session, standalone or added to another treatment.",
    benefits: [
      "No discomfort and no downtime — you lie under the light.",
      "Stimulates collagen production and speeds healing.",
      "Often added after a peel or microneedling to calm the skin down.",
    ],
    facts: [
      ["Session", "20 minutes"],
      ["Downtime", "None"],
      ["Best used", "In a series — effects are cumulative"],
    ],
  },
  "rlt-5pack": {
    blurb:
      "Five red light sessions. The effect is cumulative, so a course does considerably more than the same number of one-off visits spread across a year.",
    action: "A short course, at a lower per-session price.",
    benefits: [
      "Five sessions at $45 each instead of $50.",
      "Enough sessions to see the collagen and inflammation effects build.",
      "A sensible entry point before committing to the ten-session course.",
    ],
    facts: [
      ["Includes", "5 sessions"],
      ["Session", "20 minutes each"],
      ["Downtime", "None"],
    ],
  },
  "rlt-10pack": {
    blurb:
      "Ten red light sessions — the full course, and the best value per session on the menu.",
    action: "The complete course at the lowest per-session price.",
    benefits: [
      "Ten sessions at $40 each instead of $50 — a $100 saving.",
      "A long enough run to judge what red light does for your skin.",
      "Can be used on its own or as recovery support alongside other treatments.",
    ],
    facts: [
      ["Includes", "10 sessions"],
      ["Session", "20 minutes each"],
      ["Downtime", "None"],
    ],
  },

  // ══════════════════════════════════════════════ SKINCARE PRODUCTS
  // Medical-grade, sold only through the practice. Expanded from the one-line
  // descriptions already on skin-and-products.html.
  "brightening-4": {
    blurb:
      "Pre-soaked pads at the entry strength of our brightening range — gentle enough for daily use while actives work on uneven tone.",
    action: "Daily exfoliation plus brightening, in one wipe.",
    benefits: [
      "The right starting strength if you have never used an active brightening product.",
      "Exfoliates and brightens in a single step, which most routines fail at because of the step count.",
      "Pads remove the guesswork of how much product to use.",
    ],
    facts: [["Strength", "4% — entry level"], ["Use", "Daily"]],
  },
  "brightening-6": {
    blurb:
      "The middle strength of the brightening range, for moderate hyperpigmentation that the 4% pads have taken as far as they can.",
    action: "A step up in strength for established discolouration.",
    benefits: [
      "For sun spots and uneven tone that have not shifted at the lower strength.",
      "The usual next step after several months on 4%.",
      "Same single-step routine, stronger actives.",
    ],
    facts: [["Strength", "6% — moderate"], ["Use", "Daily, as tolerated"]],
  },
  "brightening-8": {
    blurb:
      "Clinical strength, for stubborn dark spots. This is the top of the range and is worth a word with your provider before you start.",
    action: "The strongest brightening pads we carry.",
    benefits: [
      "For dark spots that have resisted lower strengths.",
      "Often paired with an in-clinic VI Peel Precision Plus for pigment.",
      "Strong enough that building up tolerance matters — ask us about frequency.",
    ],
    facts: [["Strength", "8% — clinical"], ["Use", "Ask your provider"]],
  },
  "brightening-pads": {
    blurb:
      "Brightening pads at our standard concentration — daily exfoliation with brightening actives, at the most accessible price in the range.",
    action: "The everyday option in the brightening range.",
    benefits: [
      "Exfoliates and brightens as part of a daily routine.",
      "The least expensive way to try the range.",
      "Ask us which strength suits your skin — we carry 4%, 6% and 8% alongside this.",
    ],
    facts: [["Use", "Daily"]],
  },
  "cleanser-papaya": {
    blurb:
      "An enzyme cleanser that uses papaya enzymes to lift dead surface cells rather than scrubbing them off — no grit, no micro-tears.",
    action: "Gentle daily cleansing with a mild enzymatic exfoliation.",
    benefits: [
      "Enzymes dissolve dead cells instead of abrading the skin.",
      "Gentle enough for daily use, including on skin using retinol.",
      "The least expensive product we carry, and a good first medical-grade purchase.",
    ],
    facts: [["Type", "Enzyme cleanser"], ["Use", "Morning and night"]],
  },
  "cleanser-green-tea": {
    blurb:
      "An antioxidant-rich cleanser built around green tea, formulated for skin that reacts to most cleansers — redness, tightness, stinging.",
    action: "Cleanses and calms sensitive or reactive skin.",
    benefits: [
      "Green tea polyphenols calm inflammation rather than provoke it.",
      "For rosacea-prone or easily irritated skin.",
      "Leaves the skin barrier intact instead of stripped.",
    ],
    facts: [["Type", "Antioxidant cleanser"], ["Use", "Morning and night"]],
  },
  "serum-collagen-vitc": {
    blurb:
      "A vitamin C serum with collagen support — the single most evidence-backed daytime active there is, for brightening and defending against free-radical damage.",
    action: "Brightens, firms and protects during the day.",
    benefits: [
      "Vitamin C fades discolouration and evens tone over weeks.",
      "Neutralises the free radicals UV generates, so it works alongside sunscreen rather than replacing it.",
      "Supports the skin's own collagen production.",
    ],
    facts: [["Use", "Morning, under SPF"], ["Pairs with", "Daily Defense BB Cream"]],
  },
  "serum-ha": {
    blurb:
      "A hyaluronic acid serum. HA holds many times its weight in water, which is what plumps dehydrated skin and makes fine lines less visible within days.",
    action: "Deep hydration and immediate plumping.",
    benefits: [
      "Visible plumping quickly — dehydration lines fill out first.",
      "Layers under any moisturiser without pilling.",
      "Suits every skin type, including oily skin that is also dehydrated.",
    ],
    facts: [["Use", "Morning and night, on damp skin"], ["Type", "Hyaluronic acid"]],
  },
  "serum-resurfacing": {
    blurb:
      "An exfoliating serum for texture — roughness, dullness and the uneven surface that makes makeup sit badly.",
    action: "Smooths and evens skin texture over time.",
    benefits: [
      "Chemical exfoliation reaches more evenly than any scrub.",
      "Improves how skincare applied afterwards absorbs.",
      "Gentle enough to work into a routine without a recovery period.",
    ],
    facts: [["Use", "Night, start 2–3× a week"], ["Note", "Use SPF — exfoliated skin burns faster"]],
  },
  "serum-peptide-cream": {
    blurb:
      "A regenerative cream built on peptides and growth factors — signalling molecules that tell skin cells to produce collagen and repair.",
    action: "Supports collagen production and skin repair.",
    benefits: [
      "Peptides work by signalling rather than exfoliating, so there is no irritation period.",
      "A common pairing after microneedling or Virtue RF, when the skin is actively rebuilding.",
      "Can be used alongside retinol, on alternate nights.",
    ],
    facts: [["Use", "Night"], ["Pairs with", "Virtue RF and microneedling recovery"]],
  },
  "serum-retinol": {
    blurb:
      "Physician-grade 0.5% retinol. Retinol is the most proven anti-aging ingredient available without a prescription — at a strength over-the-counter formulas are not allowed to use.",
    action: "Accelerates cell turnover for anti-aging and renewal.",
    benefits: [
      "Softens fine lines, evens tone and refines texture over months, not days.",
      "0.5% is a meaningful clinical strength, not a token amount.",
      "Expect an adjustment period — start twice a week and build up.",
    ],
    facts: [["Strength", "0.5% retinol"], ["Use", "Night, build up slowly"], ["Note", "Daily SPF is not optional on retinol"]],
  },
  "bb-cream": {
    blurb:
      "A tinted moisturiser with SPF — hydration, light coverage and daily sun protection in the one step most people will actually do every morning.",
    action: "Moisturiser, tint and SPF in one.",
    benefits: [
      "Daily SPF, which protects every other treatment you have paid for.",
      "Light coverage that evens tone without reading as makeup.",
      "One step instead of three, which is why it gets used.",
    ],
    facts: [["Type", "Tinted SPF moisturiser"], ["Use", "Every morning"]],
  },
  "night-moisturizer": {
    blurb:
      "An overnight recovery moisturiser with peptides and ceramides — peptides to signal repair, ceramides to rebuild the barrier that holds water in.",
    action: "Repairs and rebuilds the skin barrier overnight.",
    benefits: [
      "Ceramides restore the barrier that actives, weather and age wear down.",
      "Works with the skin's own overnight repair cycle.",
      "Pairs with retinol — it offsets the dryness retinol causes.",
    ],
    facts: [["Use", "Night"], ["Pairs with", "Vita Renew retinol"]],
  },
  "eye-complex": {
    blurb:
      "An eye treatment for dark circles, puffiness and fine lines. Eye skin is the thinnest on the body, which is why face products are usually too heavy for it.",
    action: "Targets the three things that age the eye area.",
    benefits: [
      "Formulated for skin far thinner and more reactive than the rest of the face.",
      "Addresses dark circles, puffiness and crepiness together.",
      "Complements under-eye treatments like PDO threads or filler.",
    ],
    facts: [["Use", "Morning and night"], ["Apply", "Ring finger, tap — do not drag"]],
  },

  // ══════════════════════════════════════════════ SUPPLEMENTS
  // Professional lines sold through practices rather than retail: Ortho
  // Molecular (Adren-All, Bergamot BPF, CM Core, Core Restore, HiPhenolic,
  // Ortho Biotic), EVEXIAS (ADK 10, HRT-Complete, BPC-157 LipoTab) and Boiron
  // (Arnicare). Claims are kept to supported structure/function wording and
  // every one of these carries the FDA disclaimer in the popup footer.
  "supp-adk10": {
    blurb:
      "Vitamins A, D3 and K2 in one capsule, at 10,000 IU of D3. The three work together: D3 absorbs the calcium, K2 directs it into bone instead of arteries, and A supports the immune side.",
    action: "Supports bone density, calcium handling and immune function.",
    benefits: [
      "Pairs D3 with K2, which plain vitamin D products leave out.",
      "A common companion to hormone pellet therapy, where bone density matters.",
      "10,000 IU is a clinical dose — worth checking your vitamin D level first.",
    ],
    facts: [["Form", "Capsule"], ["Vitamin D3", "10,000 IU"], ["Also contains", "Vitamin A, vitamin K2 (MK-7)"]],
  },
  "supp-adren-all": {
    blurb:
      "An adrenal formula built on adaptogenic botanicals — rhodiola, eleuthero, schisandra and licorice — with micronutrients and adrenal concentrate.",
    action: "Supports a normal stress response and steady energy.",
    benefits: [
      "Adaptogens are studied for helping the body resist fatigue under ongoing stress.",
      "Supports healthy cortisol and DHEA patterns rather than stimulating.",
      "Often used where fatigue persists after hormones and thyroid come back normal.",
    ],
    facts: [["Form", "Capsule"], ["Brand", "Ortho Molecular"]],
  },
  "supp-arnicare": {
    blurb:
      "Boiron Arnicare — homeopathic arnica montana, as a topical gel and oral pellets, used for bruising and muscle soreness.",
    action: "For the bruising that comes with injectables.",
    benefits: [
      "The standard recommendation before and after filler, threads or neurotoxin.",
      "Gel for the surface and pellets to take by mouth, in one purchase.",
      "Our least expensive product, and the one most often bought alongside a treatment.",
    ],
    facts: [["Form", "Topical gel + oral pellets"], ["Brand", "Boiron"], ["Type", "Homeopathic"]],
  },
  "supp-bcomplex": {
    blurb:
      "A full B-vitamin complex in methylated, already-active forms — which matters for the significant share of people whose genetics make converting the standard forms inefficient.",
    action: "Supports energy metabolism and nervous system function.",
    benefits: [
      "Methylated folate and B12 skip a conversion step the body may not do well.",
      "B vitamins drive the reactions that turn food into usable energy.",
      "Supports healthy homocysteine, a cardiovascular marker.",
    ],
    facts: [["Form", "Capsule"], ["Type", "Methylated B complex"]],
  },
  "supp-bergamot": {
    blurb:
      "Citrus bergamot extract standardised to 38% Bergamot Polyphenolic Fraction (Bergamonte®) — the fraction the cholesterol research was actually done on.",
    action: "Supports cholesterol levels already in the normal range.",
    benefits: [
      "Standardised to the specific polyphenol fraction, not just bergamot powder.",
      "Supports healthy cholesterol and cardiovascular markers.",
      "A frequent pairing with hormone optimisation, where lipids are tracked anyway.",
    ],
    facts: [["Form", "60 capsules"], ["Brand", "Ortho Molecular"], ["Standardised to", "38% BPF"]],
  },
  "supp-bpc157": {
    blurb:
      "BPC-157 in a liposomal tablet taken by mouth. The liposomal delivery is what the formulation is for — peptides are normally broken down in the gut before they can be absorbed.",
    action: "An oral route to a peptide otherwise given by injection.",
    benefits: [
      "Studied for gut lining integrity and soft-tissue repair.",
      "No injection, no reconstitution, no needles to store.",
      "Research and education only — talk to a provider about whether it fits your situation.",
    ],
    facts: [["Form", "Liposomal tablet"], ["Route", "Oral"]],
  },
  "supp-cmcore": {
    blurb:
      "Cetyl myristoleate with supporting nutrients, for joint comfort and mobility. CM is a fatty acid studied for lubricating joints and moderating the inflammation around them.",
    action: "Supports joint comfort, mobility and flexibility.",
    benefits: [
      "Targets joint stiffness and the discomfort that limits range of motion.",
      "A different mechanism from glucosamine, so it is sometimes tried after that has not helped.",
      "90 capsules — a longer run than most joint products at this price.",
    ],
    facts: [["Form", "90 capsules"], ["Brand", "Ortho Molecular"]],
  },
  "supp-corerestore-choc": {
    blurb:
      "The Core Restore kit — a structured liver detox program with three formulas (Core Support, Alpha Base and PhytoCore) that work on both phase I and phase II detoxification pathways, with a patient handbook.",
    action: "A guided detoxification program, not a single supplement.",
    benefits: [
      "Supports both phases of liver detoxification — pushing phase I alone can backfire.",
      "Targets hormone-disrupting compounds and unhealthy estrogen metabolites.",
      "Comes as a complete program with instructions, so there is nothing to figure out.",
    ],
    facts: [["Flavour", "Chocolate"], ["Form", "Multi-product kit + handbook"], ["Brand", "Ortho Molecular"]],
  },
  "supp-corerestore-vanilla": {
    blurb:
      "The same Core Restore detox program in French vanilla — three formulas supporting phase I and phase II liver detoxification, with a patient handbook.",
    action: "A guided detoxification program, not a single supplement.",
    benefits: [
      "Identical to the chocolate kit — only the protein powder flavour differs.",
      "Supports the clearance of environmental toxins and hormone disruptors.",
      "Structured day by day, so adherence does not depend on willpower.",
    ],
    facts: [["Flavour", "Vanilla"], ["Form", "Multi-product kit + handbook"], ["Brand", "Ortho Molecular"]],
  },
  "supp-hiphenolic": {
    blurb:
      "A concentrated polyphenol blend — Metabolaid® (lemon verbena and hibiscus) with green coffee bean extract standardised for chlorogenic acids, plus magnesium.",
    action: "Supports blood pressure already in the normal range, and appetite control.",
    benefits: [
      "Supports healthy blood pressure through plant polyphenols rather than stimulants.",
      "Increases satiety, which is where most weight-management attempts fail.",
      "Includes magnesium, which most people are short on anyway.",
    ],
    facts: [["Form", "Capsule"], ["Brand", "Ortho Molecular"]],
  },
  "supp-hrt-e": {
    blurb:
      "The EVEXIAS companion formula for estrogen therapy — bioavailable vitamins, a methylated B complex and nutraceuticals aimed at how the body metabolises estrogen.",
    action: "Formulated to pair with female hormone pellet therapy.",
    benefits: [
      "Supports healthy estrogen metabolism, so the hormone you are given is used well.",
      "Built by the same people behind the EvexiPEL pellets our clinic places.",
      "Supports the detoxification pathways that clear hormone metabolites.",
    ],
    facts: [["Form", "Capsule"], ["Brand", "EVEXIAS"], ["Pairs with", "Female pellet therapy"]],
  },
  "supp-hrt-t": {
    blurb:
      "The EVEXIAS companion formula for testosterone therapy — aimed at testosterone metabolism, free testosterone levels and the cardiovascular and cognitive side of hormone optimisation.",
    action: "Formulated to pair with male hormone pellet therapy.",
    benefits: [
      "Supports free testosterone, which is the fraction that actually does the work.",
      "Supports the detoxification pathways involved in hormone metabolism.",
      "Can be taken alongside pellets or on its own.",
    ],
    facts: [["Form", "Capsule"], ["Brand", "EVEXIAS"], ["Pairs with", "Male pellet therapy"]],
  },
  "supp-orthobiotic": {
    blurb:
      "A seven-strain probiotic chosen for strains that survive stomach acid and actually adhere to the intestinal wall — the two things that separate a working probiotic from an expensive one.",
    action: "Supports gut flora, intestinal integrity and immune function.",
    benefits: [
      "Strains selected to survive the gastrointestinal transit, not just to look good on a label.",
      "Supports the gut barrier, which a large share of immune function depends on.",
      "A common recommendation after antibiotics or during a detox program.",
    ],
    facts: [["Form", "30 capsules"], ["Brand", "Ortho Molecular"], ["Strains", "7"]],
  },
  "supp-thyroid": {
    blurb:
      "A thyroid support formula — the micronutrients thyroid hormone production and conversion depend on, for patients whose labs are in range but who still feel the symptoms.",
    action: "Supports normal thyroid function.",
    benefits: [
      "Supplies the nutrient cofactors thyroid hormone synthesis requires.",
      "Supports the conversion of T4 into the active T3 form.",
      "Not a replacement for thyroid medication — ask us before combining the two.",
    ],
    facts: [["Form", "Capsule"], ["Note", "Ask our team for the current label panel"]],
  },

  // ══════════════════════════════════════════════ MEDICAL WEIGHT LOSS
  // NOTE FOR THE CLINIC: these four visit prices do not say anywhere on the
  // site whether the medication is included in the fee. That is the first
  // question every buyer will have. Tell us the answer and it goes in here.
  "wl-initial-consult": {
    blurb:
      "The starting appointment for the weight-loss program — health history, current medications, weight-related concerns, and whether a GLP-1 is the right tool for you.",
    action: "Determines eligibility before anything is prescribed.",
    benefits: [
      "You generally qualify at a BMI of 27 or higher, which this visit confirms.",
      "A real medical assessment, not a questionnaire.",
      "If GLP-1 therapy is not right for you, we will say so at this visit.",
    ],
    facts: [["Required", "Before starting any GLP-1 protocol"], ["With", "Our medical team"]],
  },
  "wl-semaglutide-visit": {
    blurb:
      "A program visit on semaglutide — the active ingredient in Ozempic® and Wegovy®. It is a GLP-1 receptor agonist: it mimics a natural hormone to blunt appetite, slow stomach emptying and steady blood sugar.",
    action: "Where your dose is reviewed, titrated and monitored.",
    benefits: [
      "Clinical trials show an average 15% body weight reduction over 68 weeks.",
      "Our protocol starts low and titrates up based on your response and tolerance.",
      "Ongoing physician oversight rather than a prescription you are left alone with.",
    ],
    facts: [["Medication", "Semaglutide (GLP-1)"], ["Before this", "Initial Consultation, $75"]],
  },
  "wl-tirzepatide-low": {
    blurb:
      "A program visit on tirzepatide at the starting doses — the active ingredient in Mounjaro® and Zepbound®, and a dual GLP-1 and GIP agonist, so it works on two hunger hormones rather than one.",
    action: "The entry dose tier, where most patients begin tirzepatide.",
    benefits: [
      "Studies show up to 22% body weight reduction — higher than semaglutide.",
      "2.5 mg and 5 mg are the standard starting and first step-up doses.",
      "Starting low is what keeps the nausea manageable.",
    ],
    facts: [["Medication", "Tirzepatide 2.5 or 5 mg"], ["Before this", "Initial Consultation, $75"]],
  },
  "wl-tirzepatide-mid": {
    blurb:
      "A program visit on tirzepatide at 7.5 or 10 mg — the middle dose tier, reached by titrating up once the starting doses are tolerated.",
    action: "The mid dose tier of the tirzepatide protocol.",
    benefits: [
      "The step up most patients reach after a few months on the starting doses.",
      "Dual GLP-1 and GIP action on appetite and blood sugar.",
      "Your provider decides each step up from your response, not a fixed calendar.",
    ],
    facts: [["Medication", "Tirzepatide 7.5 or 10 mg"], ["Before this", "A lower tier, titrated up"]],
  },
  "wl-tirzepatide-high": {
    blurb:
      "A program visit on tirzepatide at 12.5 or 15 mg — the highest dose tier, and the one the strongest trial results were measured at.",
    action: "The top dose tier of the tirzepatide protocol.",
    benefits: [
      "15 mg is the maximum approved dose and where the ~22% weight reduction figure comes from.",
      "Reached only by titrating through the lower tiers.",
      "Monitored at every visit — higher doses need closer oversight.",
    ],
    facts: [["Medication", "Tirzepatide 12.5 or 15 mg"], ["Before this", "A lower tier, titrated up"]],
  },

  // ══════════════════════════════════════════════ HORMONE & WELLNESS: EVEXIPEL
  "evexipel-consult": {
    blurb:
      "The hormone consultation — your symptoms, your history, and whether bioidentical pellet therapy is the right answer to them. Most people never get their hormones tested at all.",
    action: "The first step for anyone considering pellet therapy.",
    benefits: [
      "Covers the symptoms people write off as stress or age — fatigue, weight, mood, sleep, libido.",
      "Determines what lab work you need before anything is placed.",
      "For men and women alike.",
    ],
    facts: [["With", "Our medical team"], ["Next step", "Pre-pellet labs"]],
  },
  "evexipel-labs-male": {
    blurb:
      "The baseline hormone panel for men, drawn before any pellet is placed. Pellets are dosed from these numbers — without them the dose would be a guess.",
    action: "Establishes your starting levels so the dose is calculated, not estimated.",
    benefits: [
      "Measures where you actually are before anything changes.",
      "Gives a baseline to compare the post-pellet labs against.",
      "The male panel — the female panel measures different markers.",
    ],
    facts: [["When", "Before the pellet procedure"], ["Panel", "Male"]],
  },
  "evexipel-labs-female": {
    blurb:
      "The baseline hormone panel for women, drawn before any pellet is placed, so the dose is calculated from your own levels rather than a standard starting amount.",
    action: "Establishes your starting levels so the dose is calculated, not estimated.",
    benefits: [
      "Measures where you actually are before anything changes.",
      "Gives a baseline to compare the post-pellet labs against.",
      "The female panel — the male panel measures different markers.",
    ],
    facts: [["When", "Before the pellet procedure"], ["Panel", "Female"]],
  },
  "evexipel-male-procedure": {
    blurb:
      "The EvexiPEL pellet insertion for men. Bioidentical hormone pellets, matched to your labs, placed under the skin at the upper hip through a small incision under local anaesthetic.",
    action: "Steady hormone release for months, with nothing to remember daily.",
    benefits: [
      "Releases steadily for 3–6 months — no daily pills, no patches, no peaks and troughs.",
      "Dosed from your own pre-pellet labs rather than a standard amount.",
      "An in-office procedure of about 15 minutes.",
    ],
    facts: [["Lasts", "3–6 months"], ["Placed", "Upper hip, under local anaesthetic"], ["Requires", "Pre-pellet labs first"]],
  },
  "evexipel-female-procedure": {
    blurb:
      "The EvexiPEL pellet insertion for women — bioidentical pellets dosed from your own labs, placed under the skin at the upper hip under local anaesthetic.",
    action: "Steady hormone release for months, with nothing to remember daily.",
    benefits: [
      "Addresses the fatigue, brain fog, mood swings, sleep and libido changes that get blamed on stress.",
      "Steady release avoids the daily rollercoaster of pills and creams.",
      "An in-office procedure of about 15 minutes.",
    ],
    facts: [["Lasts", "3–6 months"], ["Placed", "Upper hip, under local anaesthetic"], ["Requires", "Pre-pellet labs first"]],
  },
  "evexipel-post-labs-male": {
    blurb:
      "The follow-up panel for men after pellets are placed, to confirm the dose actually landed where it was aimed.",
    action: "Checks the dose against your real response, not the expected one.",
    benefits: [
      "Confirms the pellet dose produced the levels it was calculated for.",
      "Catches an over- or under-dose before the next insertion repeats it.",
      "Cheaper than the baseline panel — fewer markers are needed.",
    ],
    facts: [["When", "After the pellet procedure"], ["Panel", "Male"]],
  },
  "evexipel-post-labs-female": {
    blurb:
      "The follow-up panel for women after pellets are placed, to confirm the dose produced the levels it was calculated for.",
    action: "Checks the dose against your real response, not the expected one.",
    benefits: [
      "Confirms the dose landed correctly for your body.",
      "Informs the dose at your next insertion.",
      "Cheaper than the baseline panel — fewer markers are needed.",
    ],
    facts: [["When", "After the pellet procedure"], ["Panel", "Female"]],
  },
  "evexipel-followup-t-injection": {
    blurb:
      "A testosterone injection given as part of follow-up care between pellet insertions — for example to bridge a gap or to top up levels the post-pellet labs came back short on.",
    action: "Follow-up testosterone dosing between pellet cycles.",
    benefits: [
      "Keeps levels steady if symptoms return before the next insertion is due.",
      "Given in-office by our clinical team.",
      "Priced differently from the standalone cypionate injection — ask us which applies to you.",
    ],
    facts: [["Route", "Intramuscular injection"], ["Context", "Follow-up care between pellets"]],
  },
  "evexipel-t-cypionate": {
    blurb:
      "Testosterone cypionate given by intramuscular injection — the long-standing standard form of injectable testosterone, typically repeated weekly or every other week.",
    action: "The injection itself, for patients on an injection protocol.",
    benefits: [
      "The conventional alternative to pellets for testosterone replacement.",
      "A straightforward in-office visit.",
      "A prescription and current labs are required — this is not sold without them.",
    ],
    facts: [["Route", "Intramuscular injection"], ["Medication", "Testosterone cypionate"]],
  },

  // ══════════════════════════════════════════════ HORMONE & WELLNESS: SERMORELIN
  "sermorelin-injection": {
    blurb:
      "Sermorelin prompts your own pituitary gland to release more growth hormone. That is the important distinction: it is not synthetic HGH, it is your own production, nudged.",
    action: "Raises your own growth hormone rather than replacing it.",
    benefits: [
      "Works with the body's own feedback loops, which synthetic HGH overrides.",
      "Studied for body composition, sleep depth, recovery and energy.",
      "Popular with anti-aging patients and active adults alike.",
    ],
    facts: [["Route", "Injection"], ["Mechanism", "Stimulates your own pituitary"]],
  },

  // ══════════════════════════════════════════════ HORMONE & WELLNESS: IV THERAPY
  // The two blends' ingredient lists are not published anywhere on the site, so
  // the copy points at the team instead of inventing a formula.
  "iv-executive": {
    blurb:
      "One of our two IV infusions, delivered straight into the bloodstream so none of it is lost to digestion — which is the whole point of giving nutrients this way.",
    action: "An IV infusion in a private room, in about 45 minutes.",
    benefits: [
      "100% bioavailability — nothing is lost crossing the gut.",
      "Administered by our clinical team in a comfortable, private setting.",
      "Add-ons available to customise the infusion.",
    ],
    facts: [["Time", "About 45 minutes"], ["Current blend", "Ask our team — formulations are adjusted"]],
  },
  "iv-natural-defense": {
    blurb:
      "Our immune-focused IV infusion, delivered directly into the bloodstream and administered by our clinical team in about 45 minutes.",
    action: "An IV infusion built around immune support.",
    benefits: [
      "Bypasses the digestive system entirely, so the full dose reaches circulation.",
      "The option patients ask for heading into travel or a demanding stretch.",
      "Add-ons available to customise the infusion.",
    ],
    facts: [["Time", "About 45 minutes"], ["Current blend", "Ask our team — formulations are adjusted"]],
  },
  "iv-glutathione-addon": {
    blurb:
      "Glutathione added to any infusion. Often called the body's master antioxidant — it is central to liver detoxification and is poorly absorbed when taken by mouth, which is why it is given IV.",
    action: "An add-on, not a standalone drip.",
    benefits: [
      "The IV route solves glutathione's main problem: oral absorption is poor.",
      "Supports the liver's detoxification pathways.",
      "Added to either IV at checkout or at your appointment.",
    ],
    facts: [["Type", "IV add-on"], ["Requires", "A base IV infusion"]],
  },
  "iv-amino-addon": {
    blurb:
      "An amino acid blend added to any infusion — the building blocks for muscle repair and a long list of metabolic processes, delivered directly.",
    action: "An add-on, not a standalone drip.",
    benefits: [
      "Supports muscle recovery after hard training.",
      "Commonly added by patients on a weight-loss protocol, where protein intake drops.",
      "Added to either IV at checkout or at your appointment.",
    ],
    facts: [["Type", "IV add-on"], ["Requires", "A base IV infusion"]],
  },

  // ══════════════════════════════════════════════ CONSULTATIONS
  "muse-consult": {
    blurb:
      "A one-to-one consultation about MUSE cells — Multilineage-differentiating Stress-Enduring cells, an active area of regenerative science research first described in 2010.",
    action: "An education-first conversation, not a treatment booking.",
    benefits: [
      "We walk through what is currently understood, and what is not.",
      "Grounded in your own health history rather than a general pitch.",
      "If it is not a fit for your goals, we will tell you that.",
    ],
    facts: [
      ["Format", "One-to-one with our clinical team"],
      ["Important", "Educational only — no treatment, cure or outcome is offered or implied"],
    ],
  },
  "peptide-education-session": {
    blurb:
      "A session on how peptide compounding actually works — what a compounding pharmacy does, why a prescription is part of the process, and the questions worth asking any provider before you consider anything.",
    action: "The process explained, so you can have an informed conversation.",
    benefits: [
      "Covers the mechanics of compounding, not a product pitch.",
      "No specific products and no recommendations are made in this session.",
      "Leaves you able to judge a provider's answers for yourself.",
    ],
    facts: [["Format", "One-to-one with our team"], ["Covers", "The process — not product recommendations"]],
  },
};

/**
 * Virtue RF runs the same protocol whatever the area, so the numbers live here
 * once. Repeating them ten times above is how nine of them end up stale.
 */
const VIRTUE_FACTS = [
  ["Sessions", "3–4, spaced 4–6 weeks"],
  ["Treatment time", "About 30 minutes"],
  ["Numbing", "Applied 30–45 minutes before"],
  ["Downtime", "24–48 hours of redness"],
  ["Skin types", "All — Fitzpatrick I–VI"],
];

/** VI Peel likewise: one protocol, seven formulations. */
const VI_PEEL_FACTS = [
  ["In-office time", "About 30 minutes"],
  ["Peeling", "Days 3–5"],
  ["Results", "About 7 days"],
  ["Protocol", "A series of 3–6, four weeks apart"],
];

for (const [id, info] of Object.entries(ALPHA_PRODUCT_INFO)) {
  if (!info.facts) info.facts = id.startsWith("virtue-") ? VIRTUE_FACTS : VI_PEEL_FACTS;
}

if (typeof window !== "undefined") window.ALPHA_PRODUCT_INFO = ALPHA_PRODUCT_INFO;
if (typeof module !== "undefined") module.exports = { ALPHA_PRODUCT_INFO };
