/**
 * Google Apps Script for Eltech Technology Website Form Submissions
 *
 * Setup:
 * 1. In your Google Sheet, click Extensions > Apps Script
 * 2. Replace all code in Code.gs with this snippet
 * 3. Run setupSheet once (select it in the toolbar dropdown > Run)
 * 4. Click Deploy > New deployment
 * 5. Choose type: "Web app"
 * 6. Configuration:
 *    - Description: "Eltech Form Hook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required for website visitor submissions)
 * 7. Click Deploy, Authorize access, and copy the Web App URL!
 *
 * IMPORTANT: after editing this script you must Deploy > Manage deployments >
 * edit the active deployment > Version: "New version" > Deploy. Saving alone
 * does not update the live Web App.
 */

/** Minimum seconds a human plausibly needs to fill the form. */
var MIN_FILL_SECONDS = 3;

/** Reject a repeat submission from the same person within this window. */
var DUPLICATE_WINDOW_MINUTES = 10;

/** How many recent rows to scan when checking for duplicates. */
var DUPLICATE_SCAN_ROWS = 200;

/**
 * Run this once from the Apps Script editor (select setupSheet > Run) to create
 * the "Leads" and "Spam" tabs and their styled header rows immediately, without
 * waiting for the first form submission. Safe to re-run: it never touches
 * existing rows.
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = ss.getSheetByName("Leads") || ss.insertSheet("Leads");
  if (sheet.getLastRow() === 0) {
    writeHeaders_(sheet);
  }
  sheet.setColumnWidth(1, 170); // Timestamp
  sheet.setColumnWidth(2, 160); // Contact Name
  sheet.setColumnWidth(3, 180); // Company / Fleet
  sheet.setColumnWidth(4, 210); // Email
  sheet.setColumnWidth(5, 150); // Phone
  sheet.setColumnWidth(9, 320); // Message

  var spam = getSpamSheet_(ss);

  SpreadsheetApp.getUi().alert(
    'Eltech: "' + sheet.getName() + '" is ready to receive submissions.\n\n' +
    'Rejected submissions are quarantined in "' + spam.getName() + '" with the ' +
    'reason they were flagged, so nothing is silently discarded. Review it ' +
    'occasionally in case a real lead was caught by mistake.'
  );
}

/** Writes the styled, frozen header row. Shared by setupSheet and doPost. */
function writeHeaders_(sheet) {
  sheet.appendRow([
    "Timestamp",
    "Contact Name",
    "Company / Fleet",
    "Email Address",
    "Phone / WhatsApp",
    "Fleet Size (Units)",
    "Engine Types",
    "Free Pilot Demo",
    "Message / Specifications",
    "Source"
  ]);
  sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#0f172a").setFontColor("#38bdf8");
  sheet.setFrozenRows(1);
}

/** Returns the quarantine sheet, creating it with headers if needed. */
function getSpamSheet_(ss) {
  var spam = ss.getSheetByName("Spam");
  if (!spam) {
    spam = ss.insertSheet("Spam");
  }
  if (spam.getLastRow() === 0) {
    writeHeaders_(spam);
    spam.getRange(1, 11).setValue("Rejected Because");
    spam.getRange(1, 11).setFontWeight("bold").setBackground("#0f172a").setFontColor("#f87171");
    spam.setColumnWidth(11, 260);
  }
  return spam;
}

/* -------------------------------------------------------------------------- */
/*  Spam classification                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Grades a string for machine-generated gibberish, returning:
 *   2 - strong evidence, enough on its own
 *   1 - weak evidence, needs a second field to corroborate
 *   0 - looks human
 *
 * Strong signal: 3+ lower-to-upper case flips inside one word, as in
 * "atMiYIRnjtXfNCfCRlMiIJV". Real names and companies essentially never do
 * this, so one field is enough to reject.
 *
 * Weak signal: an implausibly low vowel ratio, as in "Qpvwswrky". This one
 * alone would misjudge real consonant-heavy names ("Krzysztof"), so it only
 * counts when another field is also suspicious.
 *
 * Only words of 8+ letters are graded, so short real tokens like "GHO",
 * "DD15" and "ISX15" are never touched.
 */
function randomTextScore_(value) {
  if (!value) return 0;
  var words = String(value).trim().split(/\s+/);
  var score = 0;

  for (var i = 0; i < words.length; i++) {
    var w = words[i].replace(/[^A-Za-z]/g, '');
    if (w.length < 8) continue;

    var flips = 0;
    for (var j = 1; j < w.length; j++) {
      var prevIsLower = w.charAt(j - 1) === w.charAt(j - 1).toLowerCase();
      var currIsUpper = w.charAt(j) === w.charAt(j).toUpperCase() &&
                        w.charAt(j) !== w.charAt(j).toLowerCase();
      if (prevIsLower && currIsUpper) flips++;
    }
    if (flips >= 3) return 2;

    var vowels = (w.match(/[aeiouAEIOU]/g) || []).length;
    if (vowels / w.length < 0.2) score = 1;
  }
  return score;
}

/**
 * Collapses an address to the identity behind it, so one spammer cycling
 * through dot- and plus-variants of a single Gmail account is recognised as a
 * repeat sender. Gmail ignores dots and everything after a "+".
 */
function normalizeEmail_(email) {
  var raw = String(email || '').trim().toLowerCase();
  var at = raw.lastIndexOf('@');
  if (at < 1) return raw;

  var local = raw.substring(0, at);
  var domain = raw.substring(at + 1);

  var plus = local.indexOf('+');
  if (plus > -1) local = local.substring(0, plus);

  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    local = local.replace(/\./g, '');
    domain = 'gmail.com';
  }
  return local + '@' + domain;
}

/** True when the address is not even shaped like an email address. */
function invalidEmail_(email) {
  return !/^[^\s@]+@[^\s@.]+\.[^\s@]{2,}$/.test(String(email || '').trim());
}

/**
 * Has this identity already submitted inside the duplicate window? Scans only
 * the most recent rows so the check stays cheap as the sheet grows.
 */
function isRecentDuplicate_(sheet, email) {
  var identity = normalizeEmail_(email);
  if (!identity) return false;

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;

  var first = Math.max(2, lastRow - DUPLICATE_SCAN_ROWS + 1);
  var rows = sheet.getRange(first, 1, lastRow - first + 1, 4).getValues();
  var cutoff = Date.now() - DUPLICATE_WINDOW_MINUTES * 60 * 1000;

  for (var i = 0; i < rows.length; i++) {
    if (normalizeEmail_(rows[i][3]) !== identity) continue;
    var when = new Date(rows[i][0]).getTime();
    // An unparseable timestamp is treated as recent: better to quarantine a
    // duplicate than to let a flood through on a formatting quirk.
    if (isNaN(when) || when >= cutoff) return true;
  }
  return false;
}

/**
 * Returns "" for a submission that should be filed as a lead, or a short
 * human-readable reason it was rejected. Ordered cheapest and most certain
 * first, so the reason recorded is the most informative one.
 */
function rejectionReason_(data, leadsSheet) {
  if (!data.fv) {
    return 'No form marker - posted directly to the endpoint, not through the website form';
  }
  if (String(data.hp || '').trim() !== '') {
    return 'Honeypot field filled - only an automated client can see that input';
  }

  var elapsed = Number(data.elapsedMs);
  if (isFinite(elapsed) && elapsed > 0 && elapsed < MIN_FILL_SECONDS * 1000) {
    return 'Submitted in ' + (elapsed / 1000).toFixed(1) + 's - faster than a human can fill the form';
  }
  if (invalidEmail_(data.email)) {
    return 'Email address is malformed: ' + String(data.email || '(empty)').substring(0, 60);
  }

  var graded = [
    { label: 'name',         score: randomTextScore_(data.name) },
    { label: 'company',      score: randomTextScore_(data.company) },
    { label: 'engine types', score: randomTextScore_(data.engineTypes) },
    { label: 'message',      score: randomTextScore_(data.message) }
  ];
  var strong = [], weak = [];
  for (var g = 0; g < graded.length; g++) {
    if (graded[g].score === 2) strong.push(graded[g].label);
    else if (graded[g].score === 1) weak.push(graded[g].label);
  }
  // One unmistakably random field is enough; borderline ones need a second.
  if (strong.length >= 1) {
    return 'Machine-generated text in ' + strong.concat(weak).join(', ');
  }
  if (weak.length >= 2) {
    return 'Machine-generated text in ' + weak.join(', ');
  }

  if (isRecentDuplicate_(leadsSheet, data.email)) {
    return 'Same sender already submitted within ' + DUPLICATE_WINDOW_MINUTES + ' minutes';
  }
  return '';
}

/* -------------------------------------------------------------------------- */
/*  Web app entry points                                                       */
/* -------------------------------------------------------------------------- */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Leads") || ss.getActiveSheet();

    if (sheet.getLastRow() === 0) {
      writeHeaders_(sheet);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = (e && e.parameter) || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var row = [
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.fleetSize || "",
      data.engineTypes || "",
      data.requestDemo || "",
      data.message || "",
      data.source || "Website"
    ];

    var reason = rejectionReason_(data, sheet);

    if (reason) {
      // Quarantined, not discarded: a false positive stays recoverable.
      getSpamSheet_(ss).appendRow(row.concat([reason]));
      return ContentService
        .createTextOutput(JSON.stringify({ "status": "rejected", "message": reason }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Lead appended successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Eltech Technology Google Sheets Web App is active and ready.")
    .setMimeType(ContentService.MimeType.TEXT);
}
