import React from 'react';
import { 
  ShieldCheck, 
  TrendingDown, 
  Wrench, 
  Leaf, 
  Radio, 
  Coins, 
  CheckCircle2, 
  FileCheck2, 
  Award,
  ChevronRight,
  Truck
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const comprehensiveResults = [
    {
      icon: TrendingDown,
      title: t.res1Title,
      desc: t.res1Desc
    },
    {
      icon: Wrench,
      title: t.res2Title,
      desc: t.res2Desc
    },
    {
      icon: FileCheck2,
      title: t.res3Title,
      desc: t.res3Desc
    },
    {
      icon: Leaf,
      title: t.res4Title,
      desc: t.res4Desc
    },
    {
      icon: ShieldCheck,
      title: t.res5Title,
      desc: t.res5Desc
    },
    {
      icon: Coins,
      title: t.res6Title,
      desc: t.res6Desc
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/40 rounded-full border border-cyan-800/40 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.benefitsBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.benefitsTitle1}<span className="text-cyan-400">{t.benefitsTitleHighlight}</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            {t.benefitsSubtitle}
          </p>
        </div>

        {/* 5 Core Pillars from beneficios.html */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left Column: Big Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pillar 1 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 rounded-xl flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {t.pillar1Title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {t.pillar1Text}
                  </p>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-cyan-300 font-medium">
                    {t.pillar1TrustNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Certainty and Telemetry */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 rounded-xl flex-shrink-0">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {t.pillar3Title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.pillar3Text}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 & 5: Self-funding & Free Demo */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-2">
                  <Coins className="w-5 h-5" />
                  <h4 className="text-white text-base">{t.pillar4Title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.pillar4Text}
                </p>
              </div>

              <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-2xl p-5 hover:border-cyan-400 transition-all">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold mb-2">
                  <Truck className="w-5 h-5" />
                  <h4 className="text-white text-base">{t.pillar5Title}</h4>
                </div>
                <p className="text-xs text-cyan-200 leading-relaxed">
                  {t.pillar5Text}
                </p>
              </div>
            </div>

            {/* Footnote for the asterisk on Pillar 5 (free demo) */}
            <p className="text-[11px] text-slate-500 italic">
              {t.benefitsFootnote}
            </p>

          </div>

          {/* Right Column: Visual Card with Original Image and Advisory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-48 bg-slate-800 overflow-hidden">
                <img 
                  src="/images/beneficios-img.jpg" 
                  alt="Eltech Technology Benefits" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                    {t.advisoryTag}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {t.advisoryHeading}
                  </h4>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t.advisoryDesc}
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{t.advisoryBullet1}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{t.advisoryBullet2}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{t.advisoryBullet3}</span>
                  </li>
                </ul>

                <button
                  onClick={() => scrollTo('#contacto')}
                  className="w-full mt-2 inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md shadow-cyan-500/20"
                >
                  <span>{t.advisoryCta}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Comprehensive Results from Point 2 */}
        <div className="mt-8 pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              {t.resultsSectionTitle}
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              {t.resultsSectionSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {comprehensiveResults.map((res, index) => {
              const IconComp = res.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-5 hover:border-cyan-500/40 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{res.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
