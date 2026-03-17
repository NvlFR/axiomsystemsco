import React, { useState } from "react";
import { Brain, Zap, Cpu, MessageSquare, Globe, Shield, ArrowRight, ExternalLink, Sparkles, Loader2 } from "lucide-react";
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
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] max-w-full blur-[140px] rounded-full -z-10 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse, ${current.glowColor} 0%, transparent 70%)` }}
      />

      <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">

        {/* ═══ Header ═══ */}
        <Reveal>
          <div className="text-left md:text-center space-y-4 max-w-3xl mx-auto">
            {/* Trending badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Sedang Tren — Setup AI Agent
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
              ClawBot:{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-200 bg-clip-text text-transparent">
                The Agent of Work
              </span>
            </h2>
            <div className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Bukan chatbot biasa — ini AI agent yang bisa browsing, nulis kode, kirim email, dan hadir di chat app yang sudah kamu pakai sehari-hari.{" "}
              <span className="text-white font-medium block mt-3 md:mt-2">Axiom handle setup-nya dari A sampai Z, tuntas tanpa pusing.</span>
            </div>
          </div>
        </Reveal>

        {/* ═══ Variant Toggle ═══ */}
        <Reveal delay={100}>
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="inline-flex flex-nowrap w-max gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.id as "openclaw" | "picoclaw")}
                  className={cn(
                    "relative px-6 md:px-8 py-3 rounded-xl text-base font-black transition-all duration-300 flex flex-col items-center justify-center gap-1 min-w-[120px] md:min-w-[160px]",
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
                    "relative z-10 text-[9px] md:text-[10px] uppercase tracking-widest font-black opacity-80",
                    v.badgeColor.split(" ")[0] // Take the text color part
                  )}>{v.badge}</span>
                  <span className="relative z-10 text-sm md:text-base uppercase tracking-tight">{v.name}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ═══ Main Card ═══ */}
        <Reveal delay={150}>
          <div className={cn(
            "relative rounded-3xl border border-white/[0.08] bg-[#0f1011] overflow-hidden transition-all duration-500 -mx-2 sm:mx-0",
            current.borderHover
          )}>
            {/* Top gradient bar */}
            <div className={cn(
              "h-px w-full",
              current.id === "openclaw"
                ? "bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent"
                : "bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
            )} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
              {/* Left — Visual Mockup + Setup Steps */}
              <div className={cn(
                "p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col gap-6 sm:gap-8",
                current.id === "openclaw"
                  ? "bg-gradient-to-br from-fuchsia-900/10 to-transparent"
                  : "bg-gradient-to-br from-cyan-900/10 to-transparent"
              )}>
                {/* Visual Mockup (Chat/Agent Interface) */}
                <div className="relative rounded-2xl bg-[#0c0d0e] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden group/mockup flex flex-col h-[280px] sm:h-[400px]">
                   {/* Chat Header */}
                   <div className="h-12 sm:h-14 bg-white/[0.03] border-b border-white/[0.08] px-4 flex items-center gap-3 flex-shrink-0 backdrop-blur-md">
                      <div className={cn(
                        "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border",
                        current.id === "openclaw" ? "bg-fuchsia-500/10 border-fuchsia-500/30" : "bg-cyan-500/10 border-cyan-500/30"
                      )}>
                         <Brain className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", current.id === "openclaw" ? "text-fuchsia-400" : "text-cyan-400")} />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-xs font-semibold text-white">ClawBot Agent</div>
                        <div className="text-[9px] sm:text-[10px] text-zinc-500 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                           Online & Ready
                        </div>
                      </div>
                   </div>
                   
                   {/* Chat Timeline */}
                   <div className="p-3 sm:p-5 flex-1 flex flex-col gap-3 sm:gap-4 overflow-hidden relative">
                      {/* Background watermark */}
                      <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none">
                        <MessageSquare className="w-32 h-32 sm:w-48 sm:h-48" />
                      </div>

                      {/* User Message */}
                      <div className="flex justify-end relative z-10 w-full">
                         <div className="bg-white/10 text-zinc-200 text-[11px] sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl rounded-tr-sm max-w-[90%] sm:max-w-[85%] leading-relaxed">
                            Please scrape all latest orders from the dashboard and put them in my GSheet.
                         </div>
                      </div>

                      {/* Bot Message */}
                      <div className="flex justify-start relative z-10 w-full animate-in fade-in slide-in-from-bottom-2 duration-700">
                         <div className="bg-[#1a1b1e] border border-white/[0.05] text-zinc-300 text-[11px] sm:text-xs p-3 rounded-2xl rounded-tl-sm w-[95%] sm:w-[85%] space-y-2 sm:space-y-3 shadow-lg">
                            <p>On it! ⚡ Executing workflow...</p>
                            
                            {/* Inner Terminal / Operation Frame */}
                            <div className="bg-black/50 rounded-lg p-2.5 sm:p-3 font-mono text-[9px] sm:text-[10px] space-y-1.5 sm:space-y-2 border border-white/[0.05]">
                               <div className="flex items-center justify-between text-zinc-500 border-b border-white/[0.05] pb-1.5 sm:pb-2 mb-1">
                                  <span>PROCESS LOG</span>
                                  <span className={current.id === "openclaw" ? "text-fuchsia-500" : "text-cyan-500"}>Running</span>
                               </div>
                               <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">
                                  <span className="text-emerald-500 shrink-0">✓</span> Accessing portal...
                               </div>
                               <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">
                                  <span className="text-emerald-500 shrink-0">✓</span> Bypassing captchas...
                               </div>
                               <div className="flex items-center gap-1.5 sm:gap-2 text-white whitespace-nowrap overflow-hidden text-ellipsis">
                                  <Loader2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin text-zinc-400 shrink-0" /> Extracting 142 rows...
                               </div>
                            </div>

                            <p className="text-[9px] sm:text-[10px] text-zinc-500 flex items-center gap-1.5">
                                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 shrink-0" />
                                <span className="truncate">Action requires no human intervention.</span>
                            </p>
                         </div>
                      </div>
                   </div>
                   
                   {/* Overlay Text */}
                   <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/mockup:opacity-100 transition-opacity">
                      <span className="text-[9px] sm:text-[10px] font-mono text-white/70 uppercase tracking-widest">Workflow_Simulation</span>
                   </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className={cn(
                    "text-[10px] sm:text-xs font-mono uppercase tracking-widest font-black mb-1",
                    current.id === "openclaw" ? "text-fuchsia-400" : "text-cyan-400"
                  )}>
                    Axiom Implementation Workflow
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 gap-y-4 sm:gap-y-5">
                    {setupSteps.map(({ step, title, desc }) => (
                      <div key={step} className="space-y-1 sm:space-y-1.5 group/step">
                        <div className="flex items-center gap-2">
                           <span className={cn(
                              "text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-white/5 border border-white/10 shrink-0",
                              current.id === "openclaw" ? "text-fuchsia-500" : "text-cyan-500"
                           )}>
                              {step}
                           </span>
                           <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">{title}</div>
                        </div>
                        <div className="text-[10px] text-zinc-400 leading-relaxed pl-7 sm:pl-8 pr-2">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Info + Feature List + CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-between space-y-12">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border", current.badgeColor)}>
                      <Sparkles className="w-3 h-3" />
                      {current.badge} · {current.name}
                    </div>
                    <h3 className="text-4xl font-black text-white tracking-tight">{current.name}</h3>
                    <p className={cn(
                      "text-lg font-mono",
                      current.id === "openclaw" ? "text-fuchsia-300" : "text-cyan-300"
                    )}>
                      {current.tagline}
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-lg">{current.description}</p>
                  </div>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {current.features.map(({ icon: Icon, label, desc }, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group/feat">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                          current.id === "openclaw"
                            ? "bg-fuchsia-500/10 border border-fuchsia-500/20"
                            : "bg-cyan-500/10 border border-cyan-500/20"
                        )}>
                          <Icon className={cn("w-5 h-5", current.id === "openclaw" ? "text-fuchsia-400" : "text-cyan-400")} />
                        </div>
                        <div>
                          <div className="text-sm font-black text-white leading-tight uppercase tracking-tight">{label}</div>
                          <div className="text-xs text-zinc-500 leading-relaxed mt-1">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Source link & Action */}
                <div className="space-y-6">
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Protocol Specifications: {current.url.replace("https://", "")}
                  </a>
                  
                  <button
                    onClick={handleGetSetup}
                    className={cn(
                      "w-full py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 group transition-all duration-300 transform hover:scale-[1.02]",
                      current.id === "openclaw"
                        ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white shadow-[0_20px_40px_rgba(217,70,239,0.3)]"
                        : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                    )}
                  >
                    <span>Deploy {current.name} Infrastructure</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
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
