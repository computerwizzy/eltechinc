import React from 'react';
import { Cpu, Activity, Shield, Sliders, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const analysisFactors = [
    { title: t.factor1Title, desc: t.factor1Desc },
    { title: t.factor2Title, desc: t.factor2Desc },
    { title: t.factor3Title, desc: t.factor3Desc },
    { title: t.factor4Title, desc: t.factor4Desc },
    { title: t.factor5Title, desc: t.factor5Desc },
    { title: t.factor6Title, desc: t.factor6Desc },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/40 rounded-full border border-cyan-800/40 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.aboutBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.aboutTitle1}<span className="text-cyan-400">{t.aboutTitleHighlight}</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Evolution Concept Banner */}
        <div className="bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-850 border border-slate-700/80 rounded-2xl p-6 sm:p-8 mb-16 shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                {t.aboutBannerTag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.aboutBannerHeading}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.aboutBannerText}
              </p>
              <div className="flex items-center space-x-3 bg-cyan-950/50 border border-cyan-500/30 rounded-lg p-3.5 text-cyan-200 text-sm">
                <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>
                  <strong>{t.aboutNonIntrusiveTitle}</strong>{t.aboutNonIntrusiveText}
                </span>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-950/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>{t.aboutPhysicsTitle}</span>
                <Activity className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{t.aboutPhysicsTorqueLabel}</span>
                  <span className="font-bold text-cyan-400">{t.aboutPhysicsTorqueVal}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{t.aboutPhysicsRpmLabel}</span>
                  <span className="font-bold text-emerald-400">{t.aboutPhysicsRpmVal}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{t.aboutPhysicsConsumptionLabel}</span>
                  <span className="font-bold text-cyan-300">{t.aboutPhysicsConsumptionVal}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400">{t.aboutPhysicsVerificationLabel}</span>
                  <span className="font-bold text-white">{t.aboutPhysicsVerificationVal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars / Questions from nosotros.html */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-7 hover:border-cyan-500/50 transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5 flex items-center">
              {t.q1Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.q1Text}
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-7 hover:border-cyan-500/50 transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5 flex items-center">
              {t.q2Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.q2Text}
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-7 hover:border-cyan-500/50 transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-bold">
              3
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5 flex items-center">
              {t.q3Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.q3Text}
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-7 hover:border-cyan-500/50 transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-bold">
              4
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5 flex items-center">
              {t.q4Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.q4Text}
            </p>
          </div>

        </div>

        {/* Factors of analysis grid */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sliders className="w-4 h-4" />
            <span>{t.factorsTitle}</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {analysisFactors.map((factor, index) => (
              <div key={index} className="flex items-start space-x-3 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{factor.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
