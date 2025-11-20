import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TimefoldTimeline from './components/TimefoldTimeline';
import CraftChamber from './components/CraftChamber';
import BrandValues from './components/BrandValues';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-stone-50 relative selection:bg-stone-200 selection:text-stone-900">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-40 mix-blend-multiply"></div>
      
      <Navigation />
      
      <main className="relative z-0">
        <Hero />
        <TimefoldTimeline />
        <CraftChamber />
        <BrandValues />
      </main>

      <Footer />
    </div>
  );
};

export default App;