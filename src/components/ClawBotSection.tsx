import React, { useState } from "react";
import { Brain, Zap, Cpu, MessageSquare, Globe, Shield, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

// Detail dua varian ClawBot yang di-support
const variants = [
  {
    id: "openclaw",
    badge: "Full Power",
    badgeColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/30",
    name: "OpenClaw",
    tagline: "The AI that actually does things.",
    description:
      "AI agent personal yang bisa benar-benar bekerja — browsing web, isi form, eksekusi script, dan hadir langsung di WhatsApp, Telegram, atau Slack bisnis kamu.",
    url: "https://openclaw.ai",
    accentColor: "fuchsia",
    glowColor: "rgba(217, 70, 239, 0.15)",
    borderHover: "hover:border-fuchsia-500/40",
    features: [
      { icon: MessageSquare, label: "Multi-platform", desc: "WhatsApp · Telegram · Discord · Slack · iMessage" },
      { icon: Globe, label: "Kontrol Browser", desc: "Browsing, fill form, ekstraksi data dari semua situs" },
      { icon: Cpu, label: "Akses Sistem Penuh", desc: "Baca/tulis file, run script, eksekusi perintah langsung" },
      { icon: Brain, label: "Memori Permanen", desc: "Ingat context & preferensi user secara permanen" },
      { icon: Sparkles, label: "Kustom Skill", desc: "Build plugin sendiri atau pakai community skills" },
      { icon: Shield, label: "Privacy-First", desc: "Data tetap di local machine klien — tidak dikirim ke cloud" },
    ],
  },
  {
    id: "picoclaw",
    badge: "Lightweight",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    name: "PicoClaw",
    tagline: "Ultra-efficient AI. $10 hardware. 10MB RAM.",
    description:
      "Varian ultra-ringan dari ClawBot — didesain untuk jalan di hardware murah (Raspberry Pi, microcontroller RISC-V). Boot dalam 1 detik, footprint 99% lebih kecil.",
    url: "https://picoclaw.io",
    accentColor: "cyan",
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderHover: "hover:border-cyan-500/40",
    features: [
      { icon: Zap, label: "Boot 400× Lebih Cepat", desc: "Startup kurang dari 1 detik di hardware 0.6GHz" },
      { icon: Cpu, label: "Footprint 10MB", desc: "99% lebih ringan dari solusi AI serupa" },
      { icon: MessageSquare, label: "Multi-Channel", desc: "Telegram · Discord · Slack · LINE · WeChat · QQ" },
      { icon: Globe, label: "Deployment Edge", desc: "Jalan di RISC-V, ARM64, x86_64 — satu binary" },
      { icon: Shield, label: "Biaya Ultra Rendah", desc: "Cukup hardware $10 — 98% lebih murah dari Mac mini" },
      { icon: Brain, label: "AI-Bootstrapped", desc: "Core dibangun 95% oleh AI agent dengan human review" },
    ],
  },
];

// Langkah setup yang Axiom handle
const setupSteps = [
  { step: "01", title: "Konsultasi & Pilih Varian", desc: "Kita tentuin OpenClaw atau PicoClaw sesuai kebutuhan dan budget klien." },
  { step: "02", title: "Provisioning Server/Hardware", desc: "Setup VPS atau hardware edge — semua kita handle dari awal." },
  { step: "03", title: "Instalasi & Konfigurasi", desc: "Install ClawBot, connect ke platform chat, dan konfigurasi semua setting." },
  { step: "04", title: "Custom Skills Development", desc: "Build skill & plugin custom sesuai workflow bisnis klien." },
  { step: "05", title: "Testing & Handover", desc: "Uji coba menyeluruh, training penggunaan, dan serahkan ke klien." },
];

export default function ClawBotSection() {
  const [activeVariant, setActiveVariant] = useState<"openclaw" | "picoclaw">("openclaw");
  const current = variants.find((v) => v.id === activeVariant)!;

  const handleGetSetup = () => {
    const message =
      `Halo Axiom! Saya tertarik dengan jasa setup ${current.name} (${current.tagline}).\n\n` +
      `Mohon info lebih lanjut tentang proses dan estimasi biaya setup-nya. Terima kasih!`;
    window.open(`https://wa.me/6285199256640?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 px-6 relative border-t border-white/[0.08] bg-[#0a0a0b] overflow-hidden">
      {/* Background ambient glow — berubah sesuai varian aktif */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] blur-[140px] rounded-full -z-10 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse, ${current.glowColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-6xl mx-auto space-y-16">

        {/* ═══ Header ═══ */}
        <Reveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            {/* Trending badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-mono mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-400" />
              </span>
              Sedang Tren — Setup AI Agent
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              ClawBot:{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI yang Benar-Benar Bekerja
              </span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Bukan chatbot biasa — ini AI agent yang bisa browsing, nulis kode, kirim email, dan hadir di chat app yang sudah kamu pakai sehari-hari.{" "}
              <span className="text-white font-medium">Axiom handle setup-nya dari A sampai Z.</span>
            </p>
          </div>
        </Reveal>

        {/* ═══ Variant Toggle ═══ */}
        <Reveal delay={100}>
          <div className="flex justify-center">
            <div className="inline-flex gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.id as "openclaw" | "picoclaw")}
                  className={cn(
                    "relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                    activeVariant === v.id
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  {activeVariant === v.id && (
                    <div className={cn(
                      "absolute inset-0 rounded-xl opacity-30",
                      v.id === "openclaw" ? "bg-fuchsia-500/30" : "bg-cyan-500/30"
                    )} />
                  )}
                  <span className={cn(
                    "relative z-10 px-2 py-0.5 rounded text-[10px] font-bold border",
                    v.badgeColor
                  )}>{v.badge}</span>
                  <span className="relative z-10">{v.name}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ═══ Main Card ═══ */}
        <Reveal delay={150}>
          <div className={cn(
            "relative rounded-3xl border border-white/[0.08] bg-[#0f1011] overflow-hidden transition-all duration-500",
            current.borderHover
          )}>
            {/* Top gradient bar */}
            <div className={cn(
              "h-px w-full",
              current.id === "openclaw"
                ? "bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent"
                : "bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
            )} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — info */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Header */}
                <div className="space-y-3">
                  <div className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border", current.badgeColor)}>
                    <Sparkles className="w-3 h-3" />
                    {current.badge} · {current.name}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{current.name}</h3>
                  <p className={cn(
                    "text-sm font-mono",
                    current.id === "openclaw" ? "text-fuchsia-300" : "text-cyan-300"
                  )}>
                    {current.tagline}
                  </p>
                  <p className="text-zinc-400 leading-relaxed">{current.description}</p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map(({ icon: Icon, label, desc }, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                        current.id === "openclaw"
                          ? "bg-fuchsia-500/10 border border-fuchsia-500/20"
                          : "bg-cyan-500/10 border border-cyan-500/20"
                      )}>
                        <Icon className={cn("w-4 h-4", current.id === "openclaw" ? "text-fuchsia-400" : "text-cyan-400")} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white leading-tight">{label}</div>
                        <div className="text-[11px] text-zinc-500 leading-snug mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Source link */}
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Pelajari lebih lanjut di {current.url.replace("https://", "")}
                </a>
              </div>

              {/* Right — Setup steps + CTA */}
              <div className={cn(
                "p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/[0.08] flex flex-col gap-8",
                current.id === "openclaw"
                  ? "bg-gradient-to-br from-fuchsia-900/10 to-transparent"
                  : "bg-gradient-to-br from-cyan-900/10 to-transparent"
              )}>
                <div className="space-y-4">
                  <p className={cn(
                    "text-xs font-mono uppercase tracking-widest",
                    current.id === "openclaw" ? "text-fuchsia-400" : "text-cyan-400"
                  )}>
                    Yang Axiom Handle
                  </p>
                  <div className="space-y-3">
                    {setupSteps.map(({ step, title, desc }) => (
                      <div key={step} className="flex items-start gap-4">
                        <span className={cn(
                          "text-xs font-mono font-bold flex-shrink-0 mt-1",
                          current.id === "openclaw" ? "text-fuchsia-500" : "text-cyan-500"
                        )}>
                          {step}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white">{title}</div>
                          <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3 mt-auto">
                  <button
                    onClick={handleGetSetup}
                    className={cn(
                      "w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group transition-all duration-300",
                      current.id === "openclaw"
                        ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white shadow-[0_0_30px_rgba(217,70,239,0.25)]"
                        : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                    )}
                  >
                    <span>Setup {current.name} Sekarang</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest">
                    Konsultasi Gratis · Estimasi dalam 1 Jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ═══ Compare Badge Bar ═══ */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "OpenClaw", value: "Fitur Lengkap", sub: "Server / Desktop", color: "text-fuchsia-400" },
              { label: "vs", value: "Pilih Sesuai", sub: "Kebutuhan Klien", color: "text-zinc-500" },
              { label: "PicoClaw", value: "Ultra-Ringan", sub: "Edge / IoT Hardware", color: "text-cyan-400" },
            ].map(({ label, value, sub, color }, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                <div className={cn("text-xs font-mono uppercase tracking-widest", color)}>{label}</div>
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-zinc-500">{sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
