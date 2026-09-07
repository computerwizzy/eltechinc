import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, translations } from './translations';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Read initial language from localStorage or auto-detect from browser navigator
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('eltech_lang');
      if (saved === 'es' || saved === 'en') return saved;

      // Auto-detect browser/system language
      if (typeof window !== 'undefined' && window.navigator) {
        const browserLang = (navigator.languages && navigator.languages.length > 0)
          ? navigator.languages[0]
          : navigator.language;
        if (browserLang && browserLang.toLowerCase().startsWith('es')) {
          return 'es';
        }
      }

      return 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('eltech_lang', newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.title = "Eltech Technology - Truck Fuel Boost & ECU Reprogramming";
    } else {
      document.title = "Eltech Technology - Soluciones Modernas";
    }
  }, [lang]);

  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
