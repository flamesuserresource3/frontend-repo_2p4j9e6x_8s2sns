import React from 'react';
import { Phone, MessageSquare, Inbox, Calendar, BarChart3 } from 'lucide-react';

const Feature = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <ul className="mt-3 space-y-2 text-sm text-white/70">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function SolutionsSection() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold md:text-4xl">Hizmetler</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white/80" />
              <h3 className="text-xl font-semibold">PhoneAgent — Telefon Ajanı</h3>
            </div>
            <p className="mt-2 text-white/70">7/24 çağrıları karşılama, rezervasyon/randevu/sipariş alma, canlı personele aktarım.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Feature title="Öne çıkan" items={["Çağrı kaydı", "Transkript", "Takvim senkronizasyonu"]} />
              <Feature title="Kurulum süresi" items={["24–72 saat"]} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-white/80" />
              <h3 className="text-xl font-semibold">SocialAgent — Çok Kanallı Sosyal Ajan</h3>
            </div>
            <p className="mt-2 text-white/70">WhatsApp, Instagram, Facebook mesaj/yorum yönetimi; sipariş yönlendirme; ödeme linki sunma.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Feature title="Öne çıkan" items={["Unified inbox", "Otomatik DM/yorum cevapları", "Kanal bazlı rapor"]} />
              <Feature title="Kurulum süresi" items={["48–96 saat"]} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-white/80">
              <Inbox className="h-5 w-5" />
              <span className="text-sm uppercase tracking-widest">Unified Inbox</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Tüm kanalları tek yerden yönetin.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="h-5 w-5" />
              <span className="text-sm uppercase tracking-widest">Takvim Sync</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Google/Outlook ile çift yönlü senkronizasyon.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-white/80">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm uppercase tracking-widest">Raporlama</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Kanal ve dönüşüm bazlı gelişmiş raporlar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
