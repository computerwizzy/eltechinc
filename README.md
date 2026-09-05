# Eltech Technology — Soluciones Modernas

Official Eltech, Inc. website: Truck Fuel Boost, ECU reprogramming, fleet fuel savings,
telemetry and automotive consulting.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Contact form → Google Sheets

Form submissions are POSTed to a Google Apps Script Web App, which appends a row to your sheet.

1. Open your Google Sheet → **Extensions → Apps Script**.
2. Paste the contents of [apps-script/Code.gs](apps-script/Code.gs), replacing whatever is there.
3. **Deploy → New deployment → Web app**, *Execute as: Me*, *Who has access: Anyone*.
4. Copy the resulting `https://script.google.com/macros/s/.../exec` URL.
5. Set it as `VITE_GOOGLE_SCRIPT_URL` in [.env](.env).

`.env` is committed on purpose: Vercel builds straight from GitHub, so the value is
picked up automatically on every push with no dashboard configuration. Vite inlines
`VITE_*` into the client bundle at build time, so this URL ships to browsers either
way and is not a secret.

Run `setupSheet` once from the Apps Script editor to create the styled header row
before the first real submission arrives.

To point a local dev server at a different deployment, create `.env.local`
(gitignored) with the same key — it overrides `.env`.

The endpoint is deployed with *Who has access: Anyone*, which is required for visitor
submissions. It only appends rows and never reads the sheet, so the exposure is spam
rather than data loss.
