import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileSpreadsheet, 
  AlertCircle, 
  Copy, 
  Check, 
  Download, 
  Trash2, 
  Sparkles,
  Link,
  ChevronRight,
  SendHorizontal
} from 'lucide-react';
import { 
  getStoredScriptUrl, 
  saveStoredScriptUrl, 
  getStoredLeads, 
  deleteStoredLead, 
  exportLeadsToCSV, 
  sendLeadToGoogleAppsScript, 
  GOOGLE_APPS_SCRIPT_CODE 
} from '../services/googleSheetsService';
import { LeadRecord } from '../types';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUrlChange?: (url: string) => void;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({
  isOpen,
  onClose,
  onUrlChange,
}) => {
  const [scriptUrl, setScriptUrl] = useState<string>('');
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [testing, setTesting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'setup' | 'leads'>('setup');

  useEffect(() => {
    if (isOpen) {
      const currentUrl = getStoredScriptUrl();
      setScriptUrl(currentUrl);
      setLeads(getStoredLeads());
      setStatusMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveUrl = () => {
    const trimmed = scriptUrl.trim();
    if (trimmed && !trimmed.startsWith('https://script.google.com/macros/s/')) {
      setStatusMessage({
        type: 'error',
        text: 'The URL should start with "https://script.google.com/macros/s/...". Please verify your Web App URL.',
      });
      return;
    }

    saveStoredScriptUrl(trimmed);
    if (onUrlChange) onUrlChange(trimmed);
    setStatusMessage({
      type: 'success',
      text: trimmed ? 'Google Apps Script Web App URL saved successfully!' : 'URL cleared.',
    });
  };

  const handleTestConnection = async () => {
    const target = scriptUrl.trim();
    if (!target) {
      setStatusMessage({
        type: 'error',
        text: 'Please paste your Google Apps Script Web App URL first.',
      });
      return;
    }

    setTesting(true);
    setStatusMessage({ type: 'info', text: 'Sending test submission to your Google Sheet...' });

    const result = await sendLeadToGoogleAppsScript({
      name: 'Jaime Gonzalez (Test Ping)',
      company: 'Eltech Technology Test',
      email: 'jaime@computerwizzy.com',
      phone: '+1 (555) 019-2834',
      fleetSize: '25 Units',
      engineTypes: 'Cummins ISX15 / Detroit DD15',
      message: 'Automated test from website integration setup.',
      requestDemo: true,
    }, target);

    setTesting(false);

    if (result.success) {
      saveStoredScriptUrl(target);
      if (onUrlChange) onUrlChange(target);
      setStatusMessage({
        type: 'success',
        text: 'Success! Test row sent directly to your Google Sheet. Check your spreadsheet to confirm!',
      });
    } else {
      setStatusMessage({
        type: 'error',
        text: result.error || 'Failed to send test. Ensure the Web App is deployed with "Who has access: Anyone".',
      });
    }
  };

  const handleDeleteLead = (id: string) => {
    deleteStoredLead(id);
    setLeads(getStoredLeads());
  };

  const isConfigured = Boolean(scriptUrl && scriptUrl.startsWith('https://script.google.com/'));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        id="google-sheets-modal" 
        className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-200 my-6 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-400">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Google Sheets Form Hook
                </h3>
                {isConfigured ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded-full">
                    Setup Required
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                Direct, free, and autonomous connection via Google Apps Script (No visitor login required)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6">
          <button
            onClick={() => setActiveTab('setup')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'setup'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Link className="w-3.5 h-3.5" />
            Setup & Web App URL
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Captured Leads ({leads.length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Status Alert */}
          {statusMessage && (
            <div className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 border ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300'
                : statusMessage.type === 'error'
                ? 'bg-red-950/50 border-red-500/50 text-red-300'
                : 'bg-cyan-950/50 border-cyan-500/50 text-cyan-300'
            }`}>
              {statusMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />}
              {statusMessage.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
              {statusMessage.type === 'info' && <Sparkles className="w-4 h-4 shrink-0 mt-0.5 animate-spin" />}
              <div className="flex-1">{statusMessage.text}</div>
            </div>
          )}

          {activeTab === 'setup' ? (
            <div className="space-y-6">
              {/* Web App URL Input */}
              <div className="p-4 sm:p-5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Link className="w-3.5 h-3.5 text-cyan-400" />
                    Your Google Apps Script Web App URL:
                  </label>
                  <span className="text-[11px] text-slate-500">
                    Runs 24/7 on Google's cloud servers
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    placeholder="https://script.google.com/macros/s/AKfyc.../exec"
                    value={scriptUrl}
                    onChange={(e) => setScriptUrl(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveUrl}
                      className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs rounded-xl transition shadow-md whitespace-nowrap"
                    >
                      Save URL
                    </button>
                    <button
                      onClick={handleTestConnection}
                      disabled={testing || !scriptUrl}
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition shadow-md whitespace-nowrap disabled:opacity-50 flex items-center gap-1.5"
                    >
                      <SendHorizontal className={`w-3.5 h-3.5 ${testing ? 'animate-pulse' : ''}`} />
                      <span>{testing ? 'Testing...' : 'Send Test Lead'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400">
                  Every form submission on the website is delivered directly to this URL and appended as a new row in your Google Sheet.
                </p>
              </div>

              {/* 3 Simple Setup Steps */}
              <div className="p-4 sm:p-5 bg-slate-950/40 border border-slate-800 rounded-xl space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  3-Minute Setup Guide (Do this once):
                </h4>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-white">Create or Open your Google Sheet</p>
                      <p className="text-slate-400 text-[11px]">
                        Open <a href="https://sheets.new" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline inline-flex items-center gap-0.5">sheets.new <ChevronRight className="w-3 h-3" /></a>, click on the top menu <strong>Extensions</strong> → <strong>Apps Script</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      2
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-white">Paste the Google Apps Script Code</p>
                        <button
                          onClick={handleCopyCode}
                          className="px-2.5 py-1 bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-[11px] font-semibold rounded-lg transition flex items-center gap-1"
                        >
                          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          {copied ? 'Copied to Clipboard!' : 'Copy Script'}
                        </button>
                      </div>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        Replace any existing code in the editor with this script:
                      </p>

                      <div className="mt-2 relative">
                        <pre className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-[10px] text-cyan-300 font-mono max-h-36 overflow-y-auto">
                          {GOOGLE_APPS_SCRIPT_CODE}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-white">Deploy as Web App & Paste URL</p>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        In the Apps Script editor, click <strong>Deploy</strong> → <strong>New deployment</strong>.
                        Select <strong>Web app</strong>. Set <em>Execute as:</em> <strong>Me</strong> and <em>Who has access:</em> <strong>Anyone</strong> (this allows the website form to submit). Click <strong>Deploy</strong>, copy the resulting Web App URL, and paste it in the box above!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Saved Lead Records</h4>
                  <p className="text-xs text-slate-400">
                    Local backup of all inquiries submitted through this browser
                  </p>
                </div>
                {leads.length > 0 && (
                  <button
                    onClick={exportLeadsToCSV}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition border border-slate-700"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    Export CSV Backup
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
                  No inquiries recorded yet. Try submitting the contact form on the website!
                </div>
              ) : (
                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                  {leads.map((l) => (
                    <div 
                      key={l.id} 
                      className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{l.name}</span>
                          <span className="text-cyan-400 font-semibold">• {l.company}</span>
                          {l.requestDemo && (
                            <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-700 px-1.5 py-0.2 rounded font-medium">
                              Demo Requested
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {l.email} • {l.phone} • {l.fleetSize} units • {l.engineTypes}
                        </div>
                        {l.message && (
                          <div className="text-[11px] text-slate-400 mt-1 italic line-clamp-1">
                            "{l.message}"
                          </div>
                        )}
                        <div className="text-[10px] text-slate-500 mt-1">
                          {l.timestamp}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => handleDeleteLead(l.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
                          title="Delete record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <div className="text-xs text-slate-400">
            {isConfigured ? (
              <span className="text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Connected to Google Sheets
              </span>
            ) : (
              <span className="text-slate-500">
                Submissions will also trigger the official email client fallback
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSheetsModal;
