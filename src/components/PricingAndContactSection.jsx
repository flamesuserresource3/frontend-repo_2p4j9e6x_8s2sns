import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, CreditCard, Send, Mail } from 'lucide-react';

function PriceCard({ title, price, features, highlight }) {
  return (
    <div className={`flex flex-col rounded-2xl border bg-white/5 p-6 ${highlight ? 'border-white/30' : 'border-white/10'}`}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">Başlangıç: <span className="text-white font-medium">{price}</span></p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#demo" className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90">Demo Talep Et</a>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold text-white">Dashboard Özeti</h4>
        <ShieldCheck className="h-5 w-5 text-white/70" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-black/40 p-4">
          <p className="text-xs text-white/60">Aktif ajanlar</p>
          <p className="mt-1 text-2xl font-semibold">PhoneAgent, SocialAgent</p>
        </div>
        <div className="rounded-xl bg-black/40 p-4">
          <p className="text-xs text-white/60">Günlük çağrı</p>
          <p className="mt-1 text-2xl font-semibold">132</p>
        </div>
        <div className="rounded-xl bg-black/40 p-4">
          <p className="text-xs text-white/60">Günlük rezervasyon</p>
          <p className="mt-1 text-2xl font-semibold">47</p>
        </div>
        <div className="rounded-xl bg-black/40 p-4">
          <p className="text-xs text-white/60">Conversion</p>
          <p className="mt-1 text-2xl font-semibold">35%</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-white/50">Son 5 transkript</p>
        <ul className="mt-2 space-y-2 text-sm text-white/70">
          {[1,2,3,4,5].map(i => (
            <li key={i} className="truncate rounded-lg border border-white/10 bg-black/40 px-3 py-2">#T-{1000+i} — Özet transkript örneği...</li>
          ))}
        </ul>
        <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 hover:bg-white/10">Export CSV</button>
      </div>
    </div>
  );
}

export default function PricingAndContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="pricing" className="w-full bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold md:text-4xl">Paketler — Şeffaf Başlangıç Fiyatları</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PriceCard
            title="Telefon-Only"
            price="$449 / ay"
            features={[
              '1 telefon hattı',
              'Çağrı kayıt & transkript',
              'Takvim sync',
              'Temel rapor'
            ]}
          />
          <PriceCard
            title="Çok Kanallı (Phone + Social)"
            price="$549 / ay"
            features={[
              'Telefon + WhatsApp + Instagram + Facebook yönetimi',
              'Gelişmiş raporlar',
              'Canlı aktarma'
            ]}
            highlight
          />
        </div>
        <p className="mt-4 text-sm text-white/60">
          Not: Fiyatlar işletme büyüklüğüne ve entegrasyon gereksinimine göre artabilir; özel kurulum ücretleri ve teklifler söz konusu olabilir.
        </p>
        <p className="mt-2 text-sm text-white/60">Ödeme & iade: Aylık abonelik; ilk 14 gün demo/deneme sonrası memnun kalmazsanız koşula bağlı iade seçenekleri sunulur.</p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <DashboardPreview />

          <div id="demo" className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-white/80" />
              <h3 className="text-xl font-semibold">İletişim / Demo Formu</h3>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-200">
                Talebiniz alındı — 24 saat içinde dönüş yapılacaktır.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="business" placeholder="Business name" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                  <input required name="contact" placeholder="Contact person" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required type="email" name="email" placeholder="E-mail" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                  <input required name="phone" placeholder="Phone" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <select name="channel" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/80 focus:border-white/30">
                    <option value="Phone">Phone</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                  </select>
                  <input name="volume" placeholder="Aylık tahmini çağrı/mesaj hacmi" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="time" placeholder="Tercih edilen demo zamanı" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                  <div />
                </div>
                <textarea name="message" rows="4" placeholder="Mesaj" className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30" />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90">
                  <Send className="h-4 w-4" /> Gönder
                </button>
              </form>
            )}

            <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
              Ajantek KVKK & GDPR uyumludur. Kişisel veriler yalnızca hizmet amaçlı işlenir; veriler TLS ile transfer edilir ve at-rest şifreleme ile saklanır. DPA talebi üzerine sağlanır.
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold">SSS</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Kurulum ne kadar sürer?</p>
              <p className="mt-1 text-sm text-white/70">24–96 saat; entegrasyon karmaşıklığına göre.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Veriler güvende mi?</p>
              <p className="mt-1 text-sm text-white/70">Evet — KVKK/GDPR uyumluluğu, TLS ve at-rest şifreleme.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Canlı personele aktarım var mı?</p>
              <p className="mt-1 text-sm text-white/70">Evet, otomatik veya manuel aktarım seçenekleri mevcut.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Fiyatlar sabit mi?</p>
              <p className="mt-1 text-sm text-white/70">Başlangıç fiyatları bellidir; bazı durumlarda işletme ihtiyaçlarına göre ek ücret uygulanır.</p>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Ajantek. Demo için: <a href="mailto:ajantek.ai@gmail.com" className="underline hover:text-white">ajantek.ai@gmail.com</a></p>
          <p className="mt-1 text-xs text-white/40">KVKK/GDPR uyumlu. DPA on request.</p>
          <p className="mt-6 text-xs text-white/50">Görünüş: luxury, minimal, dark theme — az öğe, yüksek kontrastlı KPI’ler, profesyonel fotoğraf veya minimal illüstrasyonlar.</p>
        </footer>
      </div>
    </section>
  );
}
