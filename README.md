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
2. Paste the script from the site's **"Conectar Google Sheet"** modal (Contact section → Copy Script).
3. **Deploy → New deployment → Web app**, *Execute as: Me*, *Who has access: Anyone*.
4. Copy the resulting `https://script.google.com/macros/s/.../exec` URL.
5. Set it as `VITE_GOOGLE_SCRIPT_URL` in [.env.local](.env.local) (and in the Vercel project's
   environment variables) so it applies to every visitor, then rebuild.

Pasting the URL in the modal only saves it to that one browser's `localStorage` — useful for testing,
but the env var is what makes the hook work for real visitors.
