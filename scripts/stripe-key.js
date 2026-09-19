/**
 * HOW THE MAINTENANCE SCRIPTS GET A STRIPE KEY
 *
 * Shared because this is credential handling: three copies of it is how one
 * gets a fix and the others quietly keep the old behaviour.
 *
 * Order: environment (for CI), piped stdin, then a hidden prompt. Never a
 * command-line argument — that puts a live key in the shell history, and it
 * asks people to get a variable name and a value the right way round, which
 * has been fumbled more than once here.
 *
 * RESTRICTED KEYS ARE PREFERRED. A key starting rk_ can be scoped to just
 * Products and Prices in the Stripe dashboard, and rotating it does not touch
 * the sk_ key the live site uses. Rotating the site's key has taken checkout
 * down twice; a restricted key removes that whole failure mode.
 */

const fs = require("fs");

const KEY_SHAPE = /^(sk|rk)_(live|test)_[A-Za-z0-9]+$/;

function readHiddenFromTty() {
  const fd = fs.openSync("/dev/tty", "rs");
  process.stderr.write("Stripe key (input hidden): ");

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

/**
 * @param {string} scriptName  shown in the error so the fix can be copied.
 * @param {string} permissions what a restricted key needs for this script.
 * @returns {string} a validated key; exits the process if there is not one.
 */
function getStripeKey(scriptName, permissions) {
  let key = "";

  if (process.env.STRIPE_SECRET_KEY) {
    key = process.env.STRIPE_SECRET_KEY.trim();
  } else if (!process.stdin.isTTY) {
    try {
      key = fs.readFileSync(0, "utf8").trim();
    } catch {
      key = "";
    }
  } else {
    try {
      key = readHiddenFromTty();
    } catch {
      key = "";
    }
  }

  if (!KEY_SHAPE.test(key)) {
    console.error(
      "\n❌ No usable Stripe key.\n" +
        "   It must start with rk_ (restricted) or sk_ (secret).\n\n" +
        "   Preferred: a restricted key — Stripe -> Developers -> API keys ->\n" +
        `   Create restricted key, with ${permissions}. Rotating it cannot take\n` +
        "   the live site's checkout down, which the site's sk_ key can.\n\n" +
        "   Provide it by any of:\n" +
        `     • run the script and paste it at the prompt\n` +
        `     • pipe it:  printf "%s" "$KEY" | node scripts/${scriptName}\n` +
        `     • environment:  STRIPE_SECRET_KEY=rk_live_... node scripts/${scriptName}\n`
    );
    process.exit(1);
  }

  return key;
}

module.exports = { getStripeKey, KEY_SHAPE };
