import React from 'react';
import { Gauge, Fuel, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 bg-slate-950 overflow-hidden">
      {/* Background Engineering Grids & Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/images/header-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm shadow-inner">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            {t.heroTitlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              {t.heroTitleGradient}
            </span>
          </h1>

          {/* Subtitle with authentic wording */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            {t.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <button
              onClick={() => scrollTo('#contacto')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
              id="hero-demo-button"
            >
              <Fuel className="w-4 h-4" />
              <span>{t.heroCtaDemo}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#calculadora')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold py-3.5 px-7 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all text-sm"
              id="hero-calculator-button"
            >
              <Gauge className="w-4 h-4 text-cyan-400" />
              <span>{t.heroCtaCalc}</span>
            </button>
          </div>

          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-4 transition-all backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black text-white">{t.metric1Val}</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{t.metric1Label}</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-4 transition-all backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black text-white">{t.metric2Val}</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{t.metric2Label}</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-4 transition-all backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                <Gauge className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black text-white">{t.metric3Val}</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{t.metric3Label}</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-4 transition-all backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black text-white">{t.metric4Val}</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{t.metric4Label}</p>
            </div>
          </div>

          {/* Fleet Endorsement Footnote */}
          <div className="mt-10 pt-6 border-t border-slate-800/70 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <span className="text-slate-500 uppercase tracking-widest font-semibold text-[11px]">
              {t.endorsementsTitle}
            </span>
            <span className="font-semibold text-slate-300">ETN</span>
            <span className="font-semibold text-slate-300">TCMR</span>
            <span className="font-semibold text-slate-300">Ómnibus de México</span>
            <span className="font-semibold text-slate-300">Noreste</span>
            <span className="font-semibold text-slate-300">Grupo Herradura (GHO)</span>
            <span className="font-semibold text-cyan-300">{t.advisorBadge}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
