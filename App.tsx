import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import MisionVision from './components/MisionVision';
import FleetCalculator from './components/FleetCalculator';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const [contactPrefillMessage, setContactPrefillMessage] = useState<string>('');

  const handleApplyToContact = (summary: string) => {
    setContactPrefillMessage(summary);
  };

  return (
    <div className="bg-slate-950 text-slate-300 font-sans min-h-screen selection:bg-cyan-500 selection:text-white antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <MisionVision />
        <FleetCalculator onApplyToContact={handleApplyToContact} />
        <Clients />
        <Contact initialMessage={contactPrefillMessage} />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
