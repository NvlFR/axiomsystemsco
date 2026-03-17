import React from "react";
import Reveal from "./Reveal";
import { Star, Quote, CheckCircle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Andik P.",
    role: "Owner",
    company: "CV Maju Logistics, Surabaya",
    content: "Dulu 4 jam tiap pagi cuma buat input data — sekarang jalan sendiri lewat WA dalam 5 menit. Bisa fokus ke hal yang lebih penting.",
    before: "4 Jam / Hari",
    after: "5 Menit",
    metric: "95% Operational Time Saved",
    verified: true,
    image: "/testimonials/andik.png"
  },
  {
    name: "Raka S.",
    role: "Founder",
    company: "Skyline Event Organizer",
    content: "Sistem ticketing Axiom bener-bener game changer. Booking slot yang biasanya manual dan rebutan, sekarang otomatis. ROI balik modal dalam seminggu.",
    before: "Manual & Lambat",
    after: "Otomatis & Presisi",
    metric: "100% Automatic Slot Fill Rate",
    verified: true,
    image: "/testimonials/raka.png"
  },
  {
    name: "Meta V.",
    role: "Data Analyst",
    company: "Agensi Riset Pasar",
    content: "Dulu tim gue 2 orang kerja 8 jam buat ngumpulin data kompetitor. Sekarang jalan otomatis tiap malam, pagi udah ada di dashboard rapi.",
    before: "16 Jam/Hari (2 Staf)",
    after: "Otomatis 24/7",
    metric: "10x Data Extraction Efficiency",
    verified: true,
    image: "/testimonials/meta.png"
  },
  {
    name: "Budi H.",
    role: "Sales Manager",
    company: "Toko Sparepart Auto",
    content: "Orderan masuk via WA ribuan chat dapet dilayani bot dengan lancar. Tidak ada lagi customer yang kabur karena lama dibalas.",
    before: "Response Time 2 Jam",
    after: "Instant Reply",
    metric: "40% Conversion Increase",
    verified: true,
    image: "/testimonials/budi.png"
  },
  {
    name: "Sari W.",
    role: "Operations Director",
    company: "PT Distribusi Pangan",
    content: "Input laporan harian dari 50+ sales lapangan sekarang otomatis masuk ke database pusat. Gak perlu rekap manual lagi di Excel.",
    before: "Rekap Manual 1 Hari",
    after: "Real-time Update",
    metric: "Zero Human Error",
    verified: true,
    image: "/testimonials/sari.png"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
              Trusted by <span className="text-emerald-400">Action-Takers</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Bukan sekadar kata-kata, tapi hasil nyata yang bisa diverifikasi dari klien kami.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
                <Quote className="w-10 h-10 text-emerald-500/20 absolute top-6 right-8 group-hover:text-emerald-500/40 transition-colors" />

                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  {t.verified && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3" />
                      Verified Client
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col mb-8">
                  {/* Quote Container - will grow to fill space */}
                  <div className="flex-1 mb-6">
                    <p className="text-zinc-300 text-lg leading-relaxed italic">
                      "{t.content}"
                    </p>
                  </div>

                  {/* Before/After Box - now pushed to the bottom of the content area */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-tight">BEFORE</div>
                      <div className="text-sm font-medium text-zinc-400 line-through decoration-zinc-600 truncate">{t.before}</div>
                    </div>
                    <div className="space-y-1 border-l border-white/5 pl-3">
                      <div className="text-[10px] uppercase text-emerald-500/70 font-bold tracking-tight">AFTER</div>
                      <div className="text-sm font-bold text-emerald-400 truncate">{t.after}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-emerald-500/20 bg-emerald-500/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={t.image} 
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white truncate">{t.name}</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest truncate">{t.role} @ {t.company}</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-xs font-bold text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    {t.metric}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
