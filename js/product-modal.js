/**
 * ALPHA AESTHETICS & HEALTH — PRODUCT DETAIL POPUP
 *
 * Include on any page with a .price-item catalog, AFTER cart-data.js:
 *   <script src="/js/peptide-info.js"></script>
 *   <script src="/js/product-modal.js"></script>
 *
 * Turns each product name into a button that opens a dialog with its detail.
 *
 * Detail comes from two files keyed by product id: peptide-info.js for the 50
 * compounded peptides, product-info.js for the other 86. A product photo is
 * picked up by convention from images/products/<id>.jpg when one exists — no
 * code or data change is needed to add one, and the popup simply has no picture
 * until the file is dropped in.
 *
 * Uses <dialog>, so Escape-to-close, the backdrop and focus trapping come from
 * the browser instead of being re-implemented here.
 */

(function () {
  // Two content files, one lookup: peptide-info.js is the supplier catalog,
  // product-info.js is the clinic's own menu. Keyed the same, so they merge.
  const INFO = Object.assign({}, window.ALPHA_PEPTIDE_INFO, window.ALPHA_PRODUCT_INFO);
  const PRODUCTS = window.ALPHA_PRODUCTS || [];
  if (!PRODUCTS.length) return;

  /**
   * Where each category is already described on the site, and how its items
   * are delivered. `rx` decides which footer note is honest: a compounded
   * peptide is dispensed on a prescription, a face cream is not.
   */
  const CATEGORY = {
    "Peptides":           { page: "peptide-education.html", label: "Peptide Compounding", rx: "prescription" },
    "Injectables":        { page: "injectables.html",       label: "Injectables & Fillers", rx: "clinic" },
    "Body Contouring":    { page: "body-contouring.html",   label: "Body Contouring", rx: "clinic" },
    "Skin Treatments":    { page: "skin-and-products.html", label: "Skin Treatments", rx: "clinic" },
    "Hormone & Wellness": { page: "hormone-wellness.html",  label: "Hormone & Wellness", rx: "prescription" },
    "Medical Weight Loss":{ page: "weight-loss.html",       label: "Medical Weight Loss", rx: "prescription" },
    "Consultations":      { page: "booking.html",           label: "Consultations", rx: "clinic" },
    "Skincare Products":  { page: "skin-and-products.html", label: "Skincare & Products", rx: "retail" },
    "Supplements":        { page: "skin-and-products.html", label: "Skincare & Products", rx: "supplement" },
  };

  // Virtue RF and PHYSIQ have their own pages; the category page is the fallback.
  const SUBCATEGORY_PAGE = {
    "PHYSIQ": "physiq.html",
    "Virtue RF Face": "virtue-rf.html",
    "Virtue RF Body": "virtue-rf.html",
    "MUSE Cell": "muse-cells.html",
    "Education": "peptide-education.html",
  };

  /**
   * Only things you can hold get a photo probe. A treatment has no product
   * shot, so probing for one is a 404 on every open that will never resolve.
   */
  const PHOTO_CATEGORIES = /Peptides|Skincare Products|Supplements/;

  const NOTES = {
    prescription:
      "Research and education only. Dispensed on a prescription written by a " +
      "licensed provider after an individual assessment.",
    clinic:
      "Performed at the clinic. Suitability is confirmed by a licensed provider " +
      "before any treatment.",
    retail: "",
    // Required as soon as the copy makes structure/function claims, which every
    // supplement description does.
    supplement:
      "These statements have not been evaluated by the Food and Drug " +
      "Administration. This product is not intended to diagnose, treat, cure " +
      "or prevent any disease.",
  };

  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));

  const style = document.createElement("style");
  style.textContent = `
    /* The text is 17px tall inside a 48px row — too small to hit on a phone.
       Padding grows the tap target to fill the row and the negative margin
       takes the layout back, so nothing moves and neighbouring rows do not
       overlap. */
    .pep-open {
      background: none; border: 0; cursor: pointer;
      padding: 15px 0; margin: -15px 0;
      font: inherit; color: inherit; text-align: left;
      transition: color .15s, border-color .15s;
    }
    .pep-open > span {
      border-bottom: 1px dotted rgba(74,143,160,0.55);
      transition: border-color .15s;
    }
    .pep-open:hover, .pep-open:focus-visible { color: var(--teal, #4a8fa0); }
    .pep-open:hover > span, .pep-open:focus-visible > span { border-bottom-color: var(--teal, #4a8fa0); }
    .pep-open:focus-visible { outline: 2px solid var(--teal, #4a8fa0); outline-offset: 3px; }

    /* Column layout with a scrolling middle: the longest peptide runs past a
       phone screen, and without this the prescription notice and Add to Cart
       sit below the fold with no way to reach them. */
    /* display lives ONLY on [open]. Putting it on the bare #pepDialog outranks
       the browser's own "dialog:not([open]) becomes display:none" on
       specificity, and the dialog stays painted in normal flow after it
       closes: visible, with no backdrop, sitting on top of the page. */
    #pepDialog {
      border: 0; border-radius: 6px; padding: 0; width: min(560px, calc(100vw - 32px));
      max-height: min(86vh, 780px);
      margin: auto; /* display:flex drops the UA centering, so restore it */
      box-shadow: 0 24px 60px rgba(0,0,0,0.28); color: #333;
      font-family: 'Montserrat', system-ui, sans-serif;
    }
    #pepDialog[open] { display: flex; flex-direction: column; }
    #pepDialog::backdrop { background: rgba(26,58,66,0.55); }
    .pep-head {
      position: relative; flex: 0 0 auto;
      padding: 24px 52px 18px 28px; border-bottom: 1px solid #e0ddd9;
      display: flex; align-items: flex-start; gap: 16px;
    }
    .pep-head h2 {
      font-family: 'Cormorant Garamond', Georgia, serif; font-size: 27px;
      color: var(--teal-dark, #3a7080); line-height: 1.2; margin: 0 0 4px; font-weight: 400;
    }
    .pep-cat { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--teal, #4a8fa0); font-weight: 700; }
    .pep-price { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 27px; color: var(--teal-dark, #3a7080); margin-left: auto; white-space: nowrap; }
    /* Pinned top-right instead of riding the flex flow, so it cannot end up on
       a line of its own when the header wraps on a narrow screen. */
    .pep-close {
      position: absolute; top: 14px; right: 14px;
      background: none; border: 0; font-size: 28px; line-height: 1; color: #999;
      cursor: pointer; padding: 4px 8px;
    }
    .pep-close:hover { color: #333; }
    .pep-close:focus-visible { outline: 2px solid var(--teal, #4a8fa0); outline-offset: 2px; }

    .pep-body {
      flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch;
      padding: 22px 28px; font-size: 13.5px; line-height: 1.85; color: #555;
    }
    .pep-body h3 {
      font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
      color: var(--teal, #4a8fa0); font-weight: 700; margin: 22px 0 10px;
    }
    .pep-body h3:first-child { margin-top: 0; }
    .pep-action { font-weight: 600; color: #333; }
    /* contain, not cover: a bottle cropped to fill the box loses its label,
       which is the only reason the photo is there. */
    .pep-img {
      width: 100%; max-height: 220px; object-fit: contain;
      background: #faf8f6; border-radius: 4px; margin: 0 0 18px;
    }
    .pep-more { margin: 22px 0 0; padding-top: 16px; border-top: 1px solid #efece8; }
    .pep-more a { color: var(--teal, #4a8fa0); font-weight: 600; }
    .pep-body ul { margin: 0; padding-left: 18px; }
    .pep-body li { margin-bottom: 7px; }
    .pep-dose { width: 100%; border-collapse: collapse; font-size: 13px; }
    .pep-dose th {
      text-align: left; font-weight: 600; color: #777; padding: 6px 14px 6px 0;
      white-space: nowrap; vertical-align: top; font-size: 12px;
    }
    .pep-dose td { padding: 6px 0; color: #333; }
    .pep-dose tr + tr th, .pep-dose tr + tr td { border-top: 1px solid #efece8; }

    .pep-foot {
      flex: 0 0 auto; margin: 0; padding: 16px 28px 22px;
      border-top: 1px solid #e0ddd9; background: #fff;
      display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
    }
    .pep-rx { font-size: 11.5px; line-height: 1.7; color: #8a8a8a; flex: 1 1 220px; margin: 0; }

    @media (max-width: 520px) {
      .pep-head { flex-wrap: wrap; gap: 4px; padding-bottom: 16px; }
      .pep-price { margin-left: 0; width: 100%; font-size: 24px; }
      .pep-body { padding: 18px 22px; }
      .pep-foot { padding: 14px 22px 18px; }
      .pep-foot .alpha-add-to-cart { width: 100%; margin-left: 0; }
    }
  `;
  document.head.appendChild(style);

  const dialog = document.createElement("dialog");
  dialog.id = "pepDialog";
  dialog.setAttribute("aria-labelledby", "pepTitle");
  document.body.appendChild(dialog);

  const esc = (t) =>
    String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function table(heading, rows) {
    const clean = (rows || []).filter(([, v]) => v);
    if (!clean.length) return "";
    return `
      <h3>${esc(heading)}</h3>
      <table class="pep-dose"><tbody>
        ${clean.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}
      </tbody></table>`;
  }

  function doseRows(d) {
    return table("Typical Schedule", [
      ["Concentration", d.concentration],
      ["Frequency", d.frequency],
      ["Dose", d.dose ? `${d.dose} clicks` : null],
      ["Duration", d.duration],
      ["Break", d.breakPeriod],
    ]);
  }

  function render(id) {
    const p = byId.get(id);
    if (!p) return;
    const info = INFO[id] || {};
    const cat = CATEGORY[p.category] || {};
    const page = SUBCATEGORY_PAGE[p.subcategory] || cat.page;
    const note = NOTES[cat.rx] || "";

    const moreLink = page
      ? `<p class="pep-more"><a href="${esc(page)}">
           Read more about ${esc(cat.label || p.category)} &rarr;
         </a></p>`
      : "";

    // "Studied For" is the honest heading for a research peptide and the wrong
    // one for a facial. The schedule table is what distinguishes them.
    const benefitsHeading = info.dosing ? "Studied For" : "What to Know";

    // By convention, not by data: drop images/products/<id>.jpg in and it shows
    // up. The <img> removes itself when there is no file, so a product whose
    // photo has not been taken yet looks deliberate rather than broken.
    const photo = PHOTO_CATEGORIES.test(p.category)
      ? `<img class="pep-img" src="images/products/${esc(p.id)}.jpg" alt="">`
      : "";

    dialog.innerHTML = `
      <div class="pep-head">
        <button class="pep-close" aria-label="Close">&times;</button>
        <div>
          <span class="pep-cat">${esc(p.subcategory || p.category)}</span>
          <h2 id="pepTitle">${esc(p.name)}</h2>
        </div>
        <span class="pep-price">${esc(p.priceDisplay)}</span>
      </div>
      <div class="pep-body">
        ${photo}
        ${info.blurb ? `<p>${esc(info.blurb)}</p>` : ""}
        ${info.action ? `<p class="pep-action" style="margin-top:14px">${esc(info.action)}</p>` : ""}
        ${
          info.benefits && info.benefits.length
            ? `<h3>${benefitsHeading}</h3><ul>${info.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
            : ""
        }
        ${info.dosing ? doseRows(info.dosing) : table("At a Glance", info.facts)}
        ${moreLink}
      </div>
      <div class="pep-foot">
        ${note ? `<p class="pep-rx">${esc(note)}</p>` : '<span class="pep-rx"></span>'}
        <button class="alpha-add-to-cart" data-product-id="${esc(p.id)}">Add to Cart</button>
      </div>`;

    dialog.querySelector(".pep-close").addEventListener("click", () => dialog.close());

    const img = dialog.querySelector(".pep-img");
    if (img) img.addEventListener("error", () => img.remove());

    // The dialog is built after cart.js has already wired the page, so its own
    // Add to Cart needs hooking up or it silently does nothing.
    if (window.alphaWireAddToCart) window.alphaWireAddToCart();
  }

  // Clicking the backdrop closes it; <dialog> reports those clicks on itself.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  /** Swap each catalog name for a button, but only where there is detail to show. */
  document.querySelectorAll(".price-item").forEach((row) => {
    const btn = row.querySelector(".alpha-add-to-cart");
    const id = btn && btn.dataset.productId;
    if (!id) return;
    const prod = byId.get(id);
    // Nothing to say about it beyond the price already on the row — leave the
    // name as plain text instead of a control that opens an empty box.
    if (!prod || (!INFO[id] && !CATEGORY[prod.category])) return;

    const nameEl = row.querySelector("span");
    if (!nameEl || nameEl.classList.contains("price-amt")) return;

    const opener = document.createElement("button");
    opener.type = "button";
    opener.className = "pep-open";
    const label = document.createElement("span");
    label.textContent = nameEl.textContent;
    opener.appendChild(label);
    opener.setAttribute("aria-haspopup", "dialog");
    opener.addEventListener("click", () => {
      render(id);
      dialog.showModal();
    });

    nameEl.textContent = "";
    nameEl.appendChild(opener);
  });
})();
