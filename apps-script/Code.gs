/**
 * Google Apps Script for Eltech Technology Website Form Submissions
 * Instructions:
 * 1. In your Google Sheet, click Extensions > Apps Script
 * 2. Replace all code in Code.gs with this snippet
 * 3. Click Deploy > New deployment
 * 4. Choose type: "Web app"
 * 5. Configuration:
 *    - Description: "Eltech Form Hook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required for website visitor submissions)
 * 6. Click Deploy, Authorize access, and copy the Web App URL!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Leads") || ss.getActiveSheet();
    
    // Create professional headers on row 1 if sheet is empty
    if (sheet.getLastRow() === 0) {
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
    
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
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
