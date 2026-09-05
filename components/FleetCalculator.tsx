import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, Sparkles, ArrowRight, RotateCcw, Leaf } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface FleetCalculatorProps {
  onApplyToContact?: (summary: string) => void;
}

const FleetCalculator: React.FC<FleetCalculatorProps> = ({ onApplyToContact }) => {
  const { lang, t } = useLanguage();
  const [truckCount, setTruckCount] = useState<number>(20);
  const [monthlyKm, setMonthlyKm] = useState<number>(12000);
  const [kmPerLiter, setKmPerLiter] = useState<number>(2.6);
  const [dieselPrice, setDieselPrice] = useState<number>(lang === 'en' ? 3.85 : 24.50);
  const [savingsPct, setSavingsPct] = useState<number>(4.5);
  const [currency, setCurrency] = useState<'MXN' | 'USD'>(lang === 'en' ? 'USD' : 'MXN');

  // Update default currency and price when language changes if untouched
  useEffect(() => {
    if (lang === 'en') {
      setCurrency('USD');
      setDieselPrice(3.85); // typical USD per gallon/equivalent factor
    } else {
      setCurrency('MXN');
      setDieselPrice(24.50);
    }
  }, [lang]);

  // Math Calculations
  const metrics = useMemo(() => {
    const totalKmPerMonth = truckCount * monthlyKm;
    const currentMonthlyLiters = totalKmPerMonth / kmPerLiter;
    
    // With savings: saved liters
    const savedMonthlyLiters = currentMonthlyLiters * (savingsPct / 100);
    const savedAnnualLiters = savedMonthlyLiters * 12;

    const price = dieselPrice;
    const monthlySavingsMoney = savedMonthlyLiters * price;
    const annualSavingsMoney = savedAnnualLiters * price;

    // CO2 reduction: approx 2.68 kg CO2 per liter of diesel burned
    const annualCo2Tons = (savedAnnualLiters * 2.68) / 1000;

    return {
      currentMonthlyLiters,
      savedMonthlyLiters,
      savedAnnualLiters,
      monthlySavingsMoney,
      annualSavingsMoney,
      annualCo2Tons
    };
  }, [truckCount, monthlyKm, kmPerLiter, dieselPrice, savingsPct]);

  const handleApplyToContact = () => {
    let summaryText = '';
    if (lang === 'en') {
      summaryText = `Hello Eltech Engineering, I used your Truck Fuel Boost simulator for my fleet of ${truckCount} vehicles (${monthlyKm.toLocaleString()} km/month, current fuel economy ${kmPerLiter} km/L). The projected savings at ${savingsPct}% is approximately ${metrics.savedMonthlyLiters.toLocaleString(undefined, { maximumFractionDigits: 0 })} liters of diesel/month (${currency} $${metrics.monthlySavingsMoney.toLocaleString(undefined, { maximumFractionDigits: 0 })}/month). I would like to schedule a free pilot demo unit.`;
    } else {
      summaryText = `Hola Eltech, he calculado en su simulador Truck Fuel Boost para mi flota de ${truckCount} unidades (${monthlyKm.toLocaleString()} km/mes, rendimiento actual ${kmPerLiter} km/L). El ahorro proyectado al ${savingsPct}% es de aproximadamente ${metrics.savedMonthlyLiters.toLocaleString(undefined, { maximumFractionDigits: 0 })} litros/mes (${currency} $${metrics.monthlySavingsMoney.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mes). Deseo solicitar una prueba piloto gratuita.`;
    }
    
    if (onApplyToContact) {
      onApplyToContact(summaryText);
    }

    const contactEl = document.querySelector('#contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setTruckCount(20);
    setMonthlyKm(12000);
    setKmPerLiter(2.6);
    setDieselPrice(lang === 'en' ? 3.85 : 24.50);
    setSavingsPct(4.5);
  };

  const currencySymbol = currency === 'USD' ? '$ USD' : '$ MXN';

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-950/40 rounded-full border border-cyan-800/40 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calcBadge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.calcTitle1}<span className="text-cyan-400">{t.calcTitleHighlight}</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                {t.calcParamsTitle}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrency(c => c === 'MXN' ? 'USD' : 'MXN')}
                  className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-700/50 px-2.5 py-1 rounded-md hover:bg-cyan-900/60 transition-colors"
                >
                  {t.calcCurrencyLabel} {currency}
                </button>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white p-1 rounded transition-colors"
                  title={t.calcResetTooltip}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Slider 1: Trucks */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="truckCountInput" className="font-semibold text-slate-200">{t.calcTrucksLabel}</label>
                <span className="font-mono font-bold text-cyan-400 text-base">{truckCount} {t.calcTrucksUnits}</span>
              </div>
              <input
                id="truckCountInput"
                type="range"
                min="1"
                max="200"
                value={truckCount}
                onChange={(e) => setTruckCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>1 {t.calcTrucksUnits}</span>
                <span>50</span>
                <span>100</span>
                <span>200 {t.calcTrucksUnits}</span>
              </div>
            </div>

            {/* Slider 2: Monthly KM */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="monthlyKmInput" className="font-semibold text-slate-200">{t.calcKmLabel}</label>
                <span className="font-mono font-bold text-cyan-400 text-base">{monthlyKm.toLocaleString()} km</span>
              </div>
              <input
                id="monthlyKmInput"
                type="range"
                min="3000"
                max="25000"
                step="500"
                value={monthlyKm}
                onChange={(e) => setMonthlyKm(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>3,000 km</span>
                <span>10,000 km</span>
                <span>18,000 km</span>
                <span>25,000 km</span>
              </div>
            </div>

            {/* Slider 3: Current Km per Liter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="kmPerLiterInput" className="font-semibold text-slate-200">{t.calcKmPerLiterLabel}</label>
                <span className="font-mono font-bold text-cyan-400 text-base">{kmPerLiter.toFixed(1)} km/L</span>
              </div>
              <input
                id="kmPerLiterInput"
                type="range"
                min="1.8"
                max="4.5"
                step="0.1"
                value={kmPerLiter}
                onChange={(e) => setKmPerLiter(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>1.8 km/L ({t.calcKmPerLiterLowNote})</span>
                <span>3.0 km/L</span>
                <span>4.5 km/L</span>
              </div>
            </div>

            {/* Slider 4: Diesel Price */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="dieselPriceInput" className="font-semibold text-slate-200">{t.calcDieselPriceLabel} ({currency})</label>
                <span className="font-mono font-bold text-cyan-400 text-base">
                  ${dieselPrice.toFixed(2)} {currency === 'USD' ? 'USD' : 'MXN'}
                </span>
              </div>
              <input
                id="dieselPriceInput"
                type="range"
                min={currency === 'USD' ? 1.00 : 20.00}
                max={currency === 'USD' ? 6.00 : 29.00}
                step={currency === 'USD' ? 0.05 : 0.25}
                value={dieselPrice}
                onChange={(e) => setDieselPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Slider 5: Savings Percentage Target */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="savingsPctInput" className="font-semibold text-cyan-300 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>{t.calcSavingsTargetLabel}</span>
                </label>
                <span className="font-mono font-black text-cyan-400 text-lg">{savingsPct.toFixed(1)}%</span>
              </div>
              <input
                id="savingsPctInput"
                type="range"
                min="3.0"
                max="8.0"
                step="0.5"
                value={savingsPct}
                onChange={(e) => setSavingsPct(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span className="text-cyan-400 font-medium">{t.calcSavingsConservative}</span>
                <span className="text-cyan-300 font-bold">{t.calcSavingsAverage}</span>
                <span>{t.calcSavingsSevere}</span>
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                  {t.calcResultsTitle}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded">
                  {t.calcResultsTelemetryBadge}
                </span>
              </div>

              {/* Big Savings Numbers */}
              <div className="mt-6 space-y-5">
                
                {/* Monthly Money Savings */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                  <div className="text-xs text-slate-400 font-medium">{t.calcMonthlyMoneyLabel}</div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mt-1">
                    {currencySymbol} {metrics.monthlySavingsMoney.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t.calcMonthlyLitersEq} <strong className="text-slate-200">{metrics.savedMonthlyLiters.toLocaleString(undefined, { maximumFractionDigits: 0 })} {lang === 'en' ? 'liters' : 'litros'}</strong> {lang === 'en' ? 'of diesel per month.' : 'de diésel ahorrados al mes.'}
                  </div>
                </div>

                {/* Annual Money Savings */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                  <div className="text-xs text-slate-400 font-medium">{t.calcAnnualMoneyLabel}</div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                    {currencySymbol} {metrics.annualSavingsMoney.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t.calcAnnualLitersEq} <strong className="text-slate-200">{metrics.savedAnnualLiters.toLocaleString(undefined, { maximumFractionDigits: 0 })} {lang === 'en' ? 'liters' : 'litros'}</strong> {lang === 'en' ? 'of diesel annually.' : 'de diésel al año.'}
                  </div>
                </div>

                {/* Ecological Reduction */}
                <div className="flex items-center space-x-3 bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 text-xs text-slate-300">
                  <Leaf className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-emerald-300">
                      {t.calcCo2Headline} {metrics.annualCo2Tons.toFixed(1)} {lang === 'en' ? 'metric tons of CO₂ per year' : 'toneladas de CO₂ al año'}
                    </span>
                    <p className="text-[11px] text-slate-400">
                      {t.calcCo2Note}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={handleApplyToContact}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-500/25 transition-all text-sm uppercase tracking-wider"
                id="calculator-apply-button"
              >
                <span>{t.calcApplyCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400">
                {t.calcDisclaimer}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FleetCalculator;
