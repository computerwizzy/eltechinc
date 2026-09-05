import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, ChevronRight, Gauge, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { EltechLogo } from './EltechLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.navHome },
    { href: '#nosotros', label: t.navAbout },
    { href: '#beneficios', label: t.navBenefits },
    { href: '#mision-vision', label: t.navMission },
    { href: '#calculadora', label: t.navCalculator },
    { href: '#clientes', label: t.navClients },
    { href: '#contacto', label: t.navContact },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl py-3' 
        : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4'
    }`}>
      {/* Top micro-bar for quick phone, USA HQ and language switcher */}
      <div className="hidden lg:block border-b border-slate-800/60 pb-2 mb-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center text-cyan-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
              {t.topBarBadge}
            </span>
            <span className="hidden 2xl:inline text-slate-700">|</span>
            <span className="hidden 2xl:inline text-slate-400">{t.topBarAdvisory}</span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] uppercase font-extrabold tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.5 rounded">
                {lang === 'en' ? 'Main HQ' : 'Sede Principal'}
              </span>
              <strong className="font-bold text-white tracking-wide">{t.usaOffice}</strong>
            </div>
            <span className="text-slate-700">|</span>
            <a 
              href="tel:+525522245283" 
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
              {t.mexicoOffice}
            </a>

            {/* Language Switcher in Top Bar */}
            <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-full p-0.5 ml-1" id="header-lang-switcher-top">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-cyan-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-cyan-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Cambiar a Español"
              >
                ES
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')} 
          className="flex items-center space-x-3 group flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          id="header-logo-link"
          aria-label="Eltech, Inc."
        >
          <EltechLogo 
            className="h-10 sm:h-11 md:h-12" 
            variant="fused"
            theme="dark"
            showTagline={true}
            id="header-eltech-logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-5 text-[13px] 2xl:text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1 px-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <a
            href="#contacto"
            onClick={(e) => scrollToSection(e, '#contacto')}
            className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider py-2 px-3.5 rounded-lg shadow-md shadow-cyan-500/20 transition-all duration-200 hover:shadow-cyan-500/40"
            id="header-cta-button"
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{t.demoButton}</span>
          </a>
        </div>

        {/* Mobile menu button and language toggle (shown only when top bar is hidden on mobile/tablet) */}
        <div className="flex items-center space-x-2 xl:hidden">
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5 text-xs lg:hidden" id="header-lang-switcher-mobile">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded font-bold text-xs transition-colors ${
                lang === 'en' ? 'bg-cyan-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-1 rounded font-bold text-xs transition-colors ${
                lang === 'es' ? 'bg-cyan-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Abrir Menú"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 px-6 py-5 mt-2 space-y-3">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800/80">
            {t.mobileNavTitle}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-slate-300 hover:text-cyan-400 text-base py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <div className="flex items-center space-x-2 text-xs py-1">
              <span className="text-[10px] uppercase font-extrabold tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.5 rounded">
                {lang === 'en' ? 'Main HQ' : 'Sede Principal'}
              </span>
              <span className="font-bold text-white">{t.usaOffice}</span>
            </div>
            <a
              href="tel:+525522245283"
              className="flex items-center text-cyan-400 text-sm font-semibold py-1"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.mexicoOffice}
            </a>
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
            >
              {t.heroCtaDemo}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
