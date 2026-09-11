/**
 * ALPHA AESTHETICS & HEALTH — PEPTIDE DETAIL POPUP
 *
 * Include on peptide-education.html AFTER cart-data.js and peptide-info.js:
 *   <script src="/js/peptide-info.js"></script>
 *   <script src="/js/peptide-modal.js"></script>
 *
 * Turns each product name in the catalog into a button that opens a dialog
 * with that peptide's detail. Names without an entry in ALPHA_PEPTIDE_INFO are
 * left as plain text rather than offering a control that opens nothing.
 *
 * Uses <dialog>, so Escape-to-close, the backdrop and focus trapping come from
 * the browser instead of being re-implemented here.
 */

(function () {
  const INFO = window.ALPHA_PEPTIDE_INFO;
  const PRODUCTS = window.ALPHA_PRODUCTS || [];
  if (!INFO) return;

  const byId = new Map(PRODUCTS.map((p) => [p.id, p]));

  const style = document.createElement("style");
  style.textContent = `
    .pep-open {
      background: none; border: 0; padding: 0; margin: 0; cursor: pointer;
      font: inherit; color: inherit; text-align: left;
      border-bottom: 1px dotted rgba(74,143,160,0.55);
      transition: color .15s, border-color .15s;
    }
    .pep-open:hover, .pep-open:focus-visible { color: var(--teal, #4a8fa0); border-bottom-color: var(--teal, #4a8fa0); }
    .pep-open:focus-visible { outline: 2px solid var(--teal, #4a8fa0); outline-offset: 3px; }

    /* Column layout with a scrolling middle: the longest peptide runs past a
       phone screen, and without this the prescription notice and Add to Cart
       sit below the fold with no way to reach them. */
    #pepDialog {
      border: 0; border-radius: 6px; padding: 0; width: min(560px, calc(100vw - 32px));
      max-height: min(86vh, 780px); display: flex; flex-direction: column;
      margin: auto; /* display:flex drops the UA centering, so restore it */
      box-shadow: 0 24px 60px rgba(0,0,0,0.28); color: #333;
      font-family: 'Montserrat', system-ui, sans-serif;
    }
    #pepDialog[open] { display: flex; }
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

  function doseRows(d) {
    const rows = [
      ["Concentration", d.concentration],
      ["Frequency", d.frequency],
      ["Dose", d.dose ? `${d.dose} clicks` : null],
      ["Duration", d.duration],
      ["Break", d.breakPeriod],
    ].filter(([, v]) => v);
    if (!rows.length) return "";
    return `
      <h3>Typical Schedule</h3>
      <table class="pep-dose"><tbody>
        ${rows.map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join("")}
      </tbody></table>`;
  }

  function render(id) {
    const p = byId.get(id);
    const info = INFO[id];
    if (!p || !info) return;

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
        ${info.blurb ? `<p>${esc(info.blurb)}</p>` : ""}
        ${info.action ? `<p class="pep-action" style="margin-top:14px">${esc(info.action)}</p>` : ""}
        ${
          info.benefits && info.benefits.length
            ? `<h3>Studied For</h3><ul>${info.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
            : ""
        }
        ${info.dosing ? doseRows(info.dosing) : ""}
      </div>
      <div class="pep-foot">
        <p class="pep-rx">
          Research and education only. Dispensed on a prescription written by a
          licensed provider after an individual assessment.
        </p>
        <button class="alpha-add-to-cart" data-product-id="${esc(p.id)}">Add to Cart</button>
      </div>`;

    dialog.querySelector(".pep-close").addEventListener("click", () => dialog.close());

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
    if (!id || !INFO[id]) return;

    const nameEl = row.querySelector("span");
    if (!nameEl || nameEl.classList.contains("price-amt")) return;

    const opener = document.createElement("button");
    opener.type = "button";
    opener.className = "pep-open";
    opener.textContent = nameEl.textContent;
    opener.setAttribute("aria-haspopup", "dialog");
    opener.addEventListener("click", () => {
      render(id);
      dialog.showModal();
    });

    nameEl.textContent = "";
    nameEl.appendChild(opener);
  });
})();
