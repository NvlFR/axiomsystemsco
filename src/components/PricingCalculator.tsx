import React, { useState } from "react";
import { ArrowRight, Zap, CheckCircle2, Layers, Target, Clock, MessageSquare } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

// Tipe sistem yang bisa dibangun
const botTypes = [
  { id: "sniper", name: "Ticket / Queue Sniper", icon: "⚡", desc: "Automasi checkout & antrean cepat" },
  { id: "scraper", name: "Web Scraper & Monitor", icon: "🔍", desc: "Ekstraksi & pantau data real-time" },
  { id: "clawbot", name: "ClawBot AI Agent", icon: "🤖", desc: "Setup OpenClaw — AI agent di WhatsApp/Telegram/Slack" },
  { id: "whatsapp", name: "WhatsApp Automation", icon: "💬", desc: "Bot WA custom untuk bisnis" },
  { id: "automation", name: "Task & Workflow Bot", icon: "⚙️", desc: "Otomasi proses bisnis internal" },
  { id: "integration", name: "System Integration", icon: "🔗", desc: "Hubungkan sistem & API eksternal" },
  { id: "other", name: "Custom / Lainnya", icon: "🛠️", desc: "Ceritakan kebutuhan spesifik kamu" },
];

// Skala bisnis
const scaleOptions = [
  { id: "startup", name: "Startup / Personal", desc: "1–5 pengguna, volume rendah" },
  { id: "smb", name: "Bisnis Kecil–Menengah", desc: "Tim kecil, volume moderat" },
  { id: "enterprise", name: "Perusahaan / Enterprise", desc: "Banyak pengguna, mission-critical" },
];

// Timeline
const timelines = [
  { id: "rush", name: "ASAP (< 2 minggu)", badge: "Rush" },
  { id: "normal", name: "1–4 minggu", badge: null },
  { id: "flexible", name: "Fleksibel (1–2 bulan)", badge: null },
];

// Keunggulan Axiom yang ditampilkan di panel kanan
const highlights = [
  { icon: Zap, text: "Delivery cepat, rata-rata 7–14 hari kerja" },
  { icon: Layers, text: "Sistem custom — bukan template off-the-shelf" },
  { icon: Target, text: "Anti-ban & proxy-ready by default" },
  { icon: Clock, text: "Free maintenance 14 hari post-launch" },
  { icon: MessageSquare, text: "Direct access ke engineer, no middlemen" },
];

export default function PricingCalculator() {
  const [selectedBot, setSelectedBot] = useState<string | null>(null);
  const [selectedScale, setSelectedScale] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Cek apakah form sudah cukup terisi untuk submit
  const isReady = selectedBot && selectedScale && selectedTimeline;

  const handleGetQuote = () => {
    if (!isReady) return;

    const botLabel = botTypes.find((b) => b.id === selectedBot)?.name ?? selectedBot;
    const scaleLabel = scaleOptions.find((s) => s.id === selectedScale)?.name ?? selectedScale;
    const timelineLabel = timelines.find((t) => t.id === selectedTimeline)?.name ?? selectedTimeline;

    const message =
      `Halo Axiom! Saya ingin mendiskusikan project:\n\n` +
      `🤖 Jenis Sistem: ${botLabel}\n` +
      `📊 Skala Bisnis: ${scaleLabel}\n` +
      `⏱️ Timeline: ${timelineLabel}\n\n` +
      `Mohon berikan estimasi harga dan timeline detail untuk kebutuhan saya.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6285199256640?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative border-t border-white/[0.08] bg-[#08090a] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Project Scoping</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Ceritakan Project Kamu
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Tidak ada harga fix — setiap sistem dibangun custom.{" "}
              <span className="text-white font-medium">Isi 3 pertanyaan</span>{" "}
              di bawah, dan kami kasih estimasi langsung via WhatsApp.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/[0.08] bg-[#0f1011] rounded-3xl overflow-hidden shadow-2xl">

            {/* ═══ FORM PANEL (kiri) ═══ */}
            <div className="lg:col-span-8 p-8 md:p-12 space-y-10">

              {/* Step 1: Jenis Sistem */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs flex items-center justify-center font-bold">1</span>
                  <label className="text-sm font-semibold text-white uppercase tracking-wider">
                    Jenis sistem apa yang kamu butuhkan?
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {botTypes.map((bot) => {
                    const isSelected = selectedBot === bot.id;
                    return (
                      <button
                        key={bot.id}
                        onClick={() => setSelectedBot(bot.id)}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all duration-200 group relative overflow-hidden",
                          isSelected
                            ? "bg-white/[0.06] border-indigo-500/60 text-white shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                            : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                        )}
                      >
                        {/* Glow saat selected */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none" />
                        )}
                        <div className="relative z-10 space-y-1.5">
                          <span className="text-xl">{bot.icon}</span>
                          <div className="font-semibold text-sm leading-tight">{bot.name}</div>
                          <div className="text-[11px] text-zinc-500 leading-tight">{bot.desc}</div>
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-indigo-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Skala Bisnis */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs flex items-center justify-center font-bold">2</span>
                  <label className="text-sm font-semibold text-white uppercase tracking-wider">
                    Skala bisnis kamu?
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {scaleOptions.map((scale) => {
                    const isSelected = selectedScale === scale.id;
                    return (
                      <button
                        key={scale.id}
                        onClick={() => setSelectedScale(scale.id)}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all duration-200 flex items-start justify-between gap-2",
                          isSelected
                            ? "bg-white/[0.06] border-indigo-500/60 text-white"
                            : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/20"
                        )}
                      >
                        <div className="space-y-1">
                          <div className={cn("font-semibold text-sm", isSelected ? "text-white" : "text-zinc-300")}>
                            {scale.name}
                          </div>
                          <div className="text-[11px] text-zinc-500 leading-tight">{scale.desc}</div>
                        </div>
                        <div className={cn(
                          "mt-0.5 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all",
                          isSelected ? "bg-indigo-500 border-indigo-500" : "border-zinc-700"
                        )}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs flex items-center justify-center font-bold">3</span>
                  <label className="text-sm font-semibold text-white uppercase tracking-wider">
                    Timeline yang kamu inginkan?
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {timelines.map((t) => {
                    const isSelected = selectedTimeline === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTimeline(t.id)}
                        className={cn(
                          "flex-1 p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-2",
                          isSelected
                            ? "bg-white/[0.06] border-indigo-500/60 text-white"
                            : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/20"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span className={cn("text-sm font-semibold", isSelected ? "text-white" : "text-zinc-300")}>
                            {t.name}
                          </span>
                          {t.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                              {t.badge}
                            </span>
                          )}
                        </div>
                        <div className={cn(
                          "w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center",
                          isSelected ? "bg-indigo-500 border-indigo-500" : "border-zinc-700"
                        )}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ═══ CTA PANEL (kanan) ═══ */}
            <div className="lg:col-span-4 bg-gradient-to-br from-indigo-900/20 to-[#08090a] border-t lg:border-t-0 lg:border-l border-white/[0.08] p-8 md:p-10 flex flex-col justify-between gap-8 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Highlights */}
              <div className="relative z-10 space-y-3">
                <p className="text-xs font-mono text-indigo-300 uppercase tracking-widest mb-5">
                  Yang kamu dapatkan
                </p>
                {highlights.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <span className="text-sm text-zinc-400 leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button + Disclaimer */}
              <div className="relative z-10 space-y-4">
                {/* Progress indicator */}
                <div className="flex gap-1.5 mb-2">
                  {[selectedBot, selectedScale, selectedTimeline].map((val, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 flex-1 rounded-full transition-all duration-300",
                        val ? "bg-indigo-500" : "bg-white/10"
                      )}
                    />
                  ))}
                </div>
                <p className="text-xs text-zinc-500">
                  {!isReady
                    ? `Lengkapi ${[!selectedBot, !selectedScale, !selectedTimeline].filter(Boolean).length} pilihan lagi`
                    : "Siap! Klik untuk dapatkan estimasi via WhatsApp."}
                </p>

                <button
                  onClick={handleGetQuote}
                  disabled={!isReady}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group text-sm",
                    isReady
                      ? "bg-white text-black hover:bg-zinc-100 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                      : "bg-white/10 text-zinc-600 cursor-not-allowed"
                  )}
                >
                  <span>{submitted ? "Terkirim! ✓" : "Dapatkan Estimasi Gratis"}</span>
                  {!submitted && (
                    <ArrowRight className={cn(
                      "w-4 h-4 transition-transform",
                      isReady && "group-hover:translate-x-1"
                    )} />
                  )}
                </button>

                <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
                  Gratis · Tanpa Komitmen · Respon dalam 1 jam
                </p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
