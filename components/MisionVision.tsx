import React from 'react';
import { Target, Compass, Leaf, Cpu, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const MisionVision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="mision-vision" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/40 rounded-full border border-cyan-800/40 mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>{t.missionVisionBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.missionVisionTitle}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            {t.missionVisionSubtitle}
          </p>
        </div>

        {/* 2-Column Grid: Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Mission Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div className="relative h-56 bg-slate-800 overflow-hidden">
              <img 
                src="/images/mision-img.jpg" 
                alt="Eltech Automotive Electronics Laboratory" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center space-x-1.5">
                <Target className="w-4 h-4" />
                <span>{t.missionTag}</span>
              </div>
            </div>

            <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.missionHeading}
                </h3>
                <blockquote className="text-slate-300 text-base leading-relaxed italic border-l-2 border-cyan-500 pl-4 py-1">
                  {t.missionQuote}
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-900 border border-slate-700/80 text-cyan-300 px-3 py-1 rounded-md flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{t.missionPill1}</span>
                </span>
                <span className="bg-slate-900 border border-slate-700/80 text-emerald-300 px-3 py-1 rounded-md flex items-center space-x-1">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>{t.missionPill2}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div className="relative h-56 bg-slate-800 overflow-hidden">
              <img 
                src="/images/vision-img.jpg" 
                alt="Eltech Global Vision" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-blue-950/80 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center space-x-1.5">
                <Compass className="w-4 h-4" />
                <span>{t.visionTag}</span>
              </div>
            </div>

            <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.visionHeading}
                </h3>
                <blockquote className="text-slate-300 text-base leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1">
                  {t.visionQuote}
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-900 border border-slate-700/80 text-blue-300 px-3 py-1 rounded-md flex items-center space-x-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{t.visionPill1}</span>
                </span>
                <span className="bg-slate-900 border border-slate-700/80 text-slate-300 px-3 py-1 rounded-md flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.visionPill2}</span>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MisionVision;
