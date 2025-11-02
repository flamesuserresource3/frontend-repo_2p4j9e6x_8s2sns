import React from 'react';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import SolutionsSection from './components/SolutionsSection';
import PricingAndContactSection from './components/PricingAndContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter'] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-widest text-white">AJANTEK</a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white">Hakkımızda</a>
            <a href="#services" className="hover:text-white">Hizmetler</a>
            <a href="#pricing" className="hover:text-white">Fiyatlandırma</a>
            <a href="#demo" className="rounded-full bg-white px-4 py-1.5 font-medium text-black hover:bg-white/90">Canlı Demo</a>
          </nav>
        </div>
      </header>

      <main className="[scroll-padding-top:64px]">
        <HeroSection />
        <OverviewSection />
        <SolutionsSection />
        <PricingAndContactSection />
      </main>
    </div>
  );
}
