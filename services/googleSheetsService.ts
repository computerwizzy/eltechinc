import { AntiSpamSignals, ContactFormData, LeadRecord } from '../types';

const STORAGE_KEYS = {
  WEBHOOK_URL: 'eltech_script_webhook_url',
  SHEET_NAME: 'eltech_sheet_name',
  LEADS: 'eltech_lead_records',
};

// 1. URL Resolution (checks localStorage first, falls back to VITE_GOOGLE_SCRIPT_URL)
export const getStoredScriptUrl = (): string => {
  const localUrl = localStorage.getItem(STORAGE_KEYS.WEBHOOK_URL);
  if (localUrl && localUrl.trim().length > 0) {
    return localUrl.trim();
  }
  const envUrl = (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim();
  }
  return '';
};

export const saveStoredScriptUrl = (url: string) => {
  localStorage.setItem(STORAGE_KEYS.WEBHOOK_URL, url.trim());
};

// 2. Lead Record History (zero data loss)
export const getStoredLeads = (): LeadRecord[] => {
  const data = localStorage.getItem(STORAGE_KEYS.LEADS);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const saveLeadRecord = (formData: ContactFormData, synced: boolean = false): LeadRecord => {
  const leads = getStoredLeads();
  const newLead: LeadRecord = {
    id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
    timestamp: new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
    name: formData.name,
    company: formData.company,
    email: formData.email,
    phone: formData.phone,
    fleetSize: formData.fleetSize || 'N/A',
    engineTypes: formData.engineTypes || 'N/A',
    message: formData.message || 'N/A',
    requestDemo: formData.requestDemo,
    syncedToGoogleSheets: synced,
    syncedAt: synced ? new Date().toISOString() : undefined,
  };

  const updated = [newLead, ...leads];
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  return newLead;
};

export const markLeadSynced = (leadId: string) => {
  const leads = getStoredLeads();
  const updated = leads.map(l => l.id === leadId ? { ...l, syncedToGoogleSheets: true, syncedAt: new Date().toISOString() } : l);
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
};

export const deleteStoredLead = (leadId: string) => {
  const leads = getStoredLeads();
  const updated = leads.filter(l => l.id !== leadId);
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
};

// 3. Direct Post to Google Apps Script Web App
export const sendLeadToGoogleAppsScript = async (
  formData: ContactFormData,
  overrideUrl?: string,
  signals?: AntiSpamSignals
): Promise<{ success: boolean; error?: string }> => {
  const targetUrl = overrideUrl || getStoredScriptUrl();

  if (!targetUrl || !targetUrl.startsWith('http')) {
    return {
      success: false,
      error: 'No Google Apps Script Web App URL configured. Please configure your Web App URL in the settings.',
    };
  }

  const payload = {
    timestamp: new Date().toLocaleString('en-US', { timeZoneName: 'short' }),
    name: formData.name,
    company: formData.company,
    email: formData.email,
    phone: formData.phone,
    fleetSize: formData.fleetSize || 'N/A',
    engineTypes: formData.engineTypes || 'N/A',
    requestDemo: formData.requestDemo ? 'YES - Demo Requested' : 'NO',
    message: formData.message || '',
    source: window.location.hostname || 'Eltech Website',
    // Anti-spam signals. doPost quarantines anything that fails these; a payload
    // with no `fv` at all is a direct POST to the endpoint rather than a real
    // form submission.
    hp: signals?.hp ?? '',
    elapsedMs: signals?.elapsedMs ?? 0,
    fv: signals?.fv ?? '',
  };

  try {
    // Mode 'no-cors' allows browser POST to Google Apps Script Web App without CORS rejection
    await fetch(targetUrl, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (err: any) {
    console.error('Failed to post to Google Apps Script:', err);
    return {
      success: false,
      error: err?.message || 'Network error while delivering to Google Sheets.',
    };
  }
};

// 4. Download CSV backup of leads
export const exportLeadsToCSV = () => {
  const leads = getStoredLeads();
  if (leads.length === 0) return;

  const headers = ['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Fleet Size', 'Engine Types', 'Demo Requested', 'Message', 'Synced to Sheet'];
  const rows = leads.map(l => [
    `"${l.timestamp}"`,
    `"${l.name.replace(/"/g, '""')}"`,
    `"${l.company.replace(/"/g, '""')}"`,
    `"${l.email.replace(/"/g, '""')}"`,
    `"${l.phone.replace(/"/g, '""')}"`,
    `"${(l.fleetSize || '').replace(/"/g, '""')}"`,
    `"${(l.engineTypes || '').replace(/"/g, '""')}"`,
    `"${l.requestDemo ? 'YES' : 'NO'}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${l.syncedToGoogleSheets ? 'YES' : 'NO'}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `eltech-leads-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Ready-to-use Google Apps Script source code
export const GOOGLE_APPS_SCRIPT_CODE = `/**
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
`;
