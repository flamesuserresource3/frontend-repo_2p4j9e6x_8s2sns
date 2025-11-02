import React from 'react';
import { CalendarCheck2, Clock } from 'lucide-react';

export default function OverviewSection() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold md:text-4xl">Hakkımızda</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Ajantek, restoran, butik otel, klinik ve KOBİ’ler için telefon ve sosyal medya kanallarında 7/24 çalışan yapay zekâ ajanları geliştirir. Amacımız müşteri etkileşimini kaybetmeden otomatikleştirip hizmet kalitesini ve geliri artırmaktır.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-white/80" />
              <h3 className="text-xl font-semibold">Onboarding — 5 Adımda</h3>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-white/70">
              <li>Kısa brief (30 dk)</li>
              <li>Erişimlerin paylaşılması (numara, sosyal hesaplar, takvim)</li>
              <li>NLU / senaryo eğitimi (2–5 iş günü)</li>
              <li>Pilot & test (3–7 gün)</li>
              <li>Canlı geçiş & 30 gün optimizasyon</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <CalendarCheck2 className="h-5 w-5 text-white/80" />
              <h3 className="text-xl font-semibold">Entegrasyonlar</h3>
            </div>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>WhatsApp Business API (360dialog/WATI/Twilio), Instagram Messaging API, Facebook Graph</li>
              <li>Twilio veya diğer VoIP sağlayıcıları (call recording)</li>
              <li>Google Calendar / Outlook sync</li>
              <li>Ödemeler: Stripe / PayPal (isteğe bağlı)</li>
              <li>Opsiyonel teknik: S3 (transcript), Postgres, vector DB (Pinecone/Qdrant) — RAG için</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
