import React from 'react';
import { Building2, Award, FileCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Clients: React.FC = () => {
  const { lang, t } = useLanguage();

  const clientsList = [
    {
      name: 'ETN (Enlaces Terrestres Nacionales)',
      type: lang === 'en' ? 'Luxury Passenger Motorcoach Carrier' : 'Autotransporte de Pasajeros Gran Confort',
      desc: lang === 'en' 
        ? 'Injection map recalibration for federal trunk corridors, fuel savings, and passenger ride smoothness.'
        : 'Optimización de mapas de inyección para rutas troncales federales y confort de marcha.',
      badge: lang === 'en' ? 'Featured Client' : 'Cliente Destacado'
    },
    {
      name: 'Ómnibus de México',
      type: lang === 'en' ? 'Long-Distance Passenger Line' : 'Línea de Pasajeros de Larga Distancia',
      desc: lang === 'en'
        ? 'Specific fuel consumption management and sustained economy across continuous 24/7 operations.'
        : 'Control de consumo específico y rendimiento en flota de servicio continuo.',
      badge: lang === 'en' ? 'Extensive Fleet' : 'Flota Extensa'
    },
    {
      name: 'TCMR',
      type: lang === 'en' ? 'Heavy Freight & Raw Materials Logistics' : 'Transporte de Carga Pesada e Insumos',
      desc: lang === 'en'
        ? 'Low-RPM torque enhancement for industrial heavy haulage with immediate diesel reduction.'
        : 'Aumento de torque a bajas RPM para transporte de carga industrial con ahorro de diésel.',
      badge: lang === 'en' ? 'Heavy Freight' : 'Carga Pesada'
    },
    {
      name: 'Grupo Herradura Occidente (GHO)',
      type: lang === 'en' ? 'Major Transportation Consortium' : 'Consorcio de Autotransporte',
      desc: lang === 'en'
        ? 'Comprehensive operational program for maintenance, logistics, and fuel energy efficiency.'
        : 'Programa integral de mantenimiento, logística y ahorro de energía combustible.',
      badge: lang === 'en' ? 'Consortium' : 'Consorcio'
    },
    {
      name: 'Autobuses Noreste',
      type: lang === 'en' ? 'Regional Transit Network' : 'Red de Transporte Regional',
      desc: lang === 'en'
        ? 'Custom calibrations for routes with extreme summer heat and severe climatic variations.'
        : 'Calibración para rutas con altas temperaturas extremas y variaciones climáticas.',
      badge: lang === 'en' ? 'Regional' : 'Regional'
    },
    {
      name: 'TAP (Transportes del Pacífico)',
      type: lang === 'en' ? 'Pacific Coast Freight & Passenger Routes' : 'Rutas Costa y Pacífico',
      desc: lang === 'en'
        ? 'Real-time telemetry monitoring and non-intrusive software tuning of fleet units.'
        : 'Monitoreo de telemetría y reprogramación no intrusiva de unidades.',
      badge: lang === 'en' ? 'Pacific Lines' : 'Pacífico'
    },
    {
      name: 'AERS (Estrella Roja del Sur)',
      type: lang === 'en' ? 'Intercity Passenger & Link Services' : 'Servicio de Pasajeros y Enlace',
      desc: lang === 'en'
        ? 'Reduction of greenhouse emissions and precision audit of specific fuel burn rates.'
        : 'Reducción de emisiones y auditoría de consumos específicos.',
      badge: lang === 'en' ? 'Southern Route' : 'Ruta Sur'
    },
    {
      name: 'PARIKUNI',
      type: lang === 'en' ? 'Central & Mountain Transit Service' : 'Transporte Michoacán y Centro',
      desc: lang === 'en'
        ? 'Torque delivery optimized specifically for mountain grades and sharp elevation shifts.'
        : 'Mapas de par optimizados para rutas de sierra y curvas cerradas de montaña.',
      badge: lang === 'en' ? 'Mountain Routes' : 'Montaña'
    },
    {
      name: 'AMEALSENSES & Omnisur Integra',
      type: lang === 'en' ? 'Suburban & Metropolitan Transport' : 'Transporte Conurbado y Foráneo',
      desc: lang === 'en'
        ? 'Effective process management, operational risk auditing, and operating maintenance control.'
        : 'Gestión eficaz de procesos, control de riesgos y presupuestos operativos.',
      badge: lang === 'en' ? 'Auditing' : 'Auditoría'
    },
  ];

  return (
    <section id="clientes" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/40 rounded-full border border-cyan-800/40 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.clientsBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.clientsTitle}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            {t.clientsSubtitle}
          </p>
        </div>

        {/* Deutsche Bank Special Highlight Card */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-cyan-950/60 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold text-cyan-400 tracking-wider bg-cyan-950/80 px-3 py-1 rounded-md border border-cyan-500/30">
                <Award className="w-3.5 h-3.5" />
                <span>{t.dbTag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.dbHeading}
              </h3>
              <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
                {t.dbText}
              </p>
            </div>
            <div className="flex-shrink-0 bg-slate-950/80 border border-slate-700 p-4 rounded-xl text-center min-w-[200px]">
              <FileCheck className="w-8 h-8 text-cyan-400 mx-auto mb-1.5" />
              <div className="text-xs font-semibold text-white">{t.dbBoxTitle}</div>
              <div className="text-[11px] text-cyan-300 font-mono mt-0.5">{t.dbBoxStandards}</div>
              <div className="text-[10px] text-slate-400 mt-1">{t.dbBoxNote}</div>
            </div>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clientsList.map((client, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all hover:bg-slate-900"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-base font-bold text-white leading-snug">{client.name}</h4>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-800/40 px-2 py-0.5 rounded">
                  {client.badge}
                </span>
              </div>
              <div className="text-xs text-cyan-300/90 font-medium mb-2">{client.type}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{client.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
