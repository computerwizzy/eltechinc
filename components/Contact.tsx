import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Send, Building, ShieldCheck, FileSpreadsheet, Sliders, Check } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../LanguageContext';
import { GoogleSheetsModal } from './GoogleSheetsModal';
import { 
  getStoredScriptUrl, 
  saveLeadRecord, 
  markLeadSynced, 
  sendLeadToGoogleAppsScript 
} from '../services/googleSheetsService';

interface ContactProps {
  initialMessage?: string;
}

const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    fleetSize: '',
    engineTypes: '',
    message: initialMessage,
    requestDemo: true,
  });

  // Google Sheets Hook state
  const [scriptUrl, setScriptUrl] = useState<string>('');
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [sheetSyncSuccess, setSheetSyncSuccess] = useState<boolean>(false);

  useEffect(() => {
    const url = getStoredScriptUrl();
    setScriptUrl(url);
  }, []);

  // Keep synced if initialMessage changes from calculator
  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({
        ...prev,
        message: initialMessage,
        requestDemo: true
      }));
    }
  }, [initialMessage]);

  const [status, setStatus] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [mailtoUrl, setMailtoUrl] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, requestDemo: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSheetSyncSuccess(false);
    
    // 1. Immediately preserve lead in local storage backup queue (zero data loss)
    const newLead = saveLeadRecord(formData, false);
    
    // 2. Deliver directly to Google Sheets via Google Apps Script Web App (No visitor auth needed!)
    let isSyncedToSheets = false;

    if (scriptUrl) {
      try {
        const sendRes = await sendLeadToGoogleAppsScript(formData, scriptUrl);
        if (sendRes.success) {
          markLeadSynced(newLead.id);
          isSyncedToSheets = true;
          setSheetSyncSuccess(true);
        }
      } catch (sheetErr) {
        console.warn('Google Sheets delivery warning:', sheetErr);
      }
    }

    // 3. Construct official corporate email payload as secondary notification channel
    const subject = encodeURIComponent(`Inquiry / Demo Request: ${formData.company} (${formData.name})`);
    const body = encodeURIComponent(
`Attention: Eltech, Inc. Engineering & Technical Consulting Team
Official Recipient: contacto@eltechtechnology.com

CLIENT & FLEET DETAILS:
----------------------------------------
Full Name: ${formData.name}
Company / Fleet: ${formData.company}
Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Fleet Size: ${formData.fleetSize || 'Not specified'}
Engine Models: ${formData.engineTypes || 'Not specified'}
Free Pilot Demo Requested: ${formData.requestDemo ? 'YES' : 'NO'}

MESSAGE / FLEET SPECIFICS:
${formData.message || 'No additional notes provided.'}

----------------------------------------
Sent via Eltech Technology Portal`
    );

    const generatedMailto = `mailto:contacto@eltechtechnology.com?subject=${subject}&body=${body}`;
    setMailtoUrl(generatedMailto);
    setIsSubmitted(true);
    setIsSubmitting(false);

    if (isSyncedToSheets) {
      setStatus(lang === 'en'
        ? 'Your inquiry has been successfully delivered and added to our Google Sheets registry.'
        : 'Su consulta ha sido enviada exitosamente y registrada en nuestra hoja de Google Sheets.'
      );
    } else {
      setStatus(lang === 'en'
        ? 'Your inquiry has been recorded and is ready to be delivered directly to contacto@eltechtechnology.com.'
        : 'Su consulta ha sido registrada y está lista para ser entregada a contacto@eltechtechnology.com.'
      );
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      fleetSize: '',
      engineTypes: '',
      message: '',
      requestDemo: true,
    });
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSheetSyncSuccess(false);
    setStatus('');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/40 rounded-full border border-cyan-800/40 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contactBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Official Contact Data */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* USA Corporate Headquarters (Main Office) */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-2xl p-6 shadow-2xl space-y-4 relative overflow-hidden ring-1 ring-cyan-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider flex items-center space-x-1.5">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>{t.contactUsaTitle}</span>
                </span>
                <span className="text-[10px] text-cyan-300 bg-cyan-950/90 border border-cyan-500/60 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                  {t.contactUsaTag}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white flex items-center justify-between">
                <span>Eltech, Inc.</span>
                <span className="text-xs font-semibold text-slate-400">Alabama, USA</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.contactUsaDesc}
              </p>
              
              <div className="space-y-3 pt-1 text-sm text-slate-300">
                <div className="flex items-start space-x-3 p-3.5 bg-slate-900/90 rounded-xl border border-cyan-500/30 shadow-inner">
                  <Building className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-cyan-300/80 font-semibold">{t.contactUsaAddressLabel}</div>
                    <div className="font-bold text-white text-base">
                      USA: 3031 Pelham Pkwy, Alabama 35124
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">{t.contactUsaEmailLabel}</div>
                    <a href="mailto:contacto@eltechtechnology.com" className="font-semibold text-cyan-300 hover:text-cyan-200 text-sm">
                      contacto@eltechtechnology.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecu-Lab México Office (Regional Lab) */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                  {t.contactMexicoTitle}
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded font-semibold">
                  {t.contactMexicoTag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Ecu-Lab México</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.contactMexicoDesc}
              </p>

              <div className="space-y-3 pt-1 text-sm text-slate-300">
                <a 
                  href="tel:+525522245283" 
                  className="flex items-center space-x-3 p-3 bg-slate-900/80 rounded-xl hover:bg-slate-850 hover:text-cyan-400 transition-colors border border-slate-800"
                >
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">{t.contactMexicoPhoneLabel}</div>
                    <div className="font-bold text-white text-base">+52 55 2224-5283</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                  <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">{t.contactMexicoLocLabel}</div>
                    <div className="font-medium text-slate-200 text-sm">{t.contactMexicoCity}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 bg-cyan-950/30 border border-cyan-700/30 rounded-xl space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.contactGuaranteeTitle}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t.contactGuaranteeDesc}
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* Google Sheets Sync Indicator & Quick Settings */}
            <div className="mb-6 p-3 bg-slate-900/90 border border-slate-800/90 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${scriptUrl ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <div className="flex items-center gap-1.5 font-medium text-slate-300">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>
                    {scriptUrl 
                      ? (lang === 'en' ? 'Google Sheets Hook Active (Auto-Syncs 24/7)' : 'Hook de Google Sheets Activo (Sincroniza 24/7)')
                      : (lang === 'en' ? 'Google Sheets Webhook Available' : 'Webhook de Google Sheets Disponible')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSheetsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg transition border border-slate-700"
                >
                  <Sliders className="w-3 h-3 text-cyan-400" />
                  <span>{scriptUrl ? (lang === 'en' ? 'Hook Settings' : 'Configurar Hook') : (lang === 'en' ? 'Connect Google Sheet' : 'Conectar Google Sheet')}</span>
                </button>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.contactSuccessTitle}</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  {status}
                </p>

                {/* Live Google Sheets Synchronization Confirmation */}
                {sheetSyncSuccess && (
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 max-w-lg mx-auto flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">
                      {lang === 'en' 
                        ? 'Appended directly as a new row in your Google Sheet!' 
                        : '¡Registrado directamente como nueva fila en su Google Sheet!'}
                    </span>
                  </div>
                )}

                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 max-w-lg mx-auto text-left space-y-2">
                  <div className="text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                    {lang === 'en' ? 'Direct Destination:' : 'Destino Directo:'}
                  </div>
                  <div className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded border border-slate-800 break-all">
                    contacto@eltechtechnology.com
                  </div>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {mailtoUrl && (
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all shadow-md"
                      id="send-mail-app-btn"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Open in Email App' : 'Abrir en Correo'}</span>
                    </a>
                  )}
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-colors border border-slate-700"
                  >
                    <span>{t.contactResetBtn}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{t.contactFormHeading}</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.contactFormSubtitle}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contactFieldName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.contactPlaceholderName}
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contactFieldCompany}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder={t.contactPlaceholderCompany}
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contactFieldEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="contact@company.com"
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contactFieldPhone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (205) 555-0199 / +52 55..."
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fleetSize" className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contactFieldFleetSize}
                    </label>
                    <select
                      id="fleetSize"
                      name="fleetSize"
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    >
                      <option value="">{t.contactFleetSelectPlaceholder}</option>
                      <option value="1-5">{t.contactFleetOption1}</option>
                      <option value="6-20">{t.contactFleetOption2}</option>
                      <option value="21-50">{t.contactFleetOption3}</option>
                      <option value="51-100">{t.contactFleetOption4}</option>
                      <option value="100+">{t.contactFleetOption5}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="engineTypes" className="text-xs font-semibold text-slate-300 block mb-1">
                      {t.contactFieldEngines}
                    </label>
                    <input
                      type="text"
                      id="engineTypes"
                      name="engineTypes"
                      value={formData.engineTypes}
                      onChange={handleChange}
                      placeholder={t.contactPlaceholderEngines}
                      className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Demo Request Highlight Checkbox */}
                <div className="p-3.5 bg-cyan-950/40 border border-cyan-500/40 rounded-xl flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="requestDemo"
                    checked={formData.requestDemo}
                    onChange={handleCheckbox}
                    className="w-4 h-4 mt-1 accent-cyan-400 rounded cursor-pointer"
                  />
                  <label htmlFor="requestDemo" className="text-xs text-slate-200 cursor-pointer">
                    <strong className="text-cyan-300">{t.contactDemoCheckboxStrong}</strong>
                    {t.contactDemoCheckboxText}
                  </label>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300 block mb-1">
                    {t.contactFieldMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder={t.contactPlaceholderMessage}
                    className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-500/25 transition-all text-sm uppercase tracking-wider disabled:opacity-60"
                  id="contact-submit-btn"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? (lang === 'en' ? 'Submitting & Syncing...' : 'Enviando y Sincronizando...') : t.contactSubmitBtn}</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  {t.contactPrivacyNotice}
                </p>
              </form>
            )}

          </div>

        </div>

      </div>

      {/* Google Sheets Modal Manager */}
      <GoogleSheetsModal
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
        onConfigChange={(newCfg) => setSheetsConfig(newCfg)}
      />
    </section>
  );
};

export default Contact;
