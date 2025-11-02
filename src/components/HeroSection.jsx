import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft radial gradient vignette to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/80">AJANTEK</p>
        <h1 className="text-balance font-['Manrope'] text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Ajantek — 7/24 Lüks Yapay Zekâ Resepsiyonisti
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Telefon ve sosyal medya üzerinden rezervasyon, sipariş ve müşteri taleplerini markan adına otomatikleştiren AI ajanlar.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#demo" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
            Canlı Demo Talep Et
          </a>
          <a href="#pricing" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
            Paketleri Gör
          </a>
        </div>
      </div>
    </section>
  );
}
