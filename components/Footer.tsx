import React from 'react';
import { ShieldCheck, Phone, MapPin, Mail, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { EltechLogo } from './EltechLogo';

const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <EltechLogo 
              className="h-12 sm:h-14" 
              variant="fused"
              theme="dark"
              showTagline={true}
              id="footer-eltech-logo"
            />

            <p className="text-slate-400 leading-relaxed text-xs">
              {t.footerDesc}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-cyan-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t.footerTelemetryNote}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              {t.footerSectionsTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollTo('#hero')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navHome}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#nosotros')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navAbout}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#beneficios')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navBenefits}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#mision-vision')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navMission}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#calculadora')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navCalculator}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#clientes')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navClients}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#contacto')} 
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{t.navContact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Backing */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              {t.footerContactTitle}
            </h4>

            <div className="space-y-3">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center space-x-2 mb-0.5">
                    <strong className="text-white">{t.contactUsaTitle}</strong>
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">
                      {t.contactUsaTag}
                    </span>
                  </div>
                  <div className="font-bold text-white">USA: 3031 Pelham Pkwy, Alabama 35124</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 px-2 py-1">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center space-x-2 mb-0.5">
                    <strong className="text-slate-200">{t.contactMexicoTitle}</strong>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                      {t.contactMexicoTag}
                    </span>
                  </div>
                  <div>
                    <a href="tel:+525522245283" className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs">
                      {t.contactMexicoPhoneLabel}: +52 (55) 2224-5283
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 px-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">{t.contactUsaEmailLabel}:</strong>{" "}
                  <a href="mailto:contacto@eltechtechnology.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    contacto@eltechtechnology.com
                  </a>
                </div>
              </div>

              <div className="mt-2 p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-300">
                {t.footerTrustNote}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 space-y-3 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} {t.footerCopyright}
          </div>
          <div className="flex items-center space-x-4">
            <span>{t.footerPill1}</span>
            <span>•</span>
            <span>{t.footerPill2}</span>
            <span>•</span>
            <span>{t.footerPill3}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
