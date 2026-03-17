import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Database, Brain, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";

const WORDS = ["Operations", "Systems", "Workflows", "Pipelines"];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Parallax State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Animation State
  const [terminalInView, setTerminalInView] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTerminalInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Text Rotation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % WORDS.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Parallax Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Sensitivity
    const y = (e.clientY - top - height / 2) / 25;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Live Terminal Typing Effect
  const [logs, setLogs] = useState<string[]>([
    "> Initializing Axiom Core v4.2...",
    "> Establishing proxy tunnel (Residential-UK)...",
    "> Bypassing security headers...",
    "> Connection encrypted...",
  ]);

  useEffect(() => {
    const sequence = [
      {
        text: "> Manual process detected. Aborting human interaction...",
        delay: 800,
      },
      { text: "> Injecting automation script...", delay: 1800 },
      { text: "> Speed optimized: +4000%", delay: 2900 },
      { text: "> Task completed in 32ms.", delay: 3500 },
      { text: "> Waiting for next command...", delay: 4200 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      setLogs([
        "> Initializing Axiom Core v4.2...",
        "> Establishing proxy tunnel (Residential-UK)...",
      ]);
      sequence.forEach(({ text, delay }) => {
        const timeout = setTimeout(() => {
          setLogs((prev) => [...prev.slice(-5), text]);
        }, delay);
        timeouts.push(timeout);
      });
    };

    runSequence();
    const loop = setInterval(runSequence, 6000);

    return () => {
      clearInterval(loop);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col justify-start text-left overflow-hidden pt-[76px] md:pt-20 pb-4 md:pb-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="space-y-2 md:space-y-10">
            {/* Floating Badge */}
            <div className="animate-fade-in-up [animation-delay:0ms] flex justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-sm text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/20 transition-all cursor-pointer group shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="flex items-center gap-1.5 align-middle">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                  <span className="font-semibold text-white/90 tracking-tight leading-none pt-[1px]">
                    Accepting New Projects
                  </span>
                </span>
                <span className="w-[1px] h-3 bg-white/10 mx-2"></span>
                <span className="text-zinc-300 font-medium leading-none pt-[1px]">Q2 2026 Slot Available</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 text-white/30 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Provocative Headline */}
            <h1 className="animate-fade-in-up [animation-delay:200ms] text-[38px] sm:text-[48px] md:text-[60px] lg:text-[76px] font-bold tracking-tighter leading-[1.05] text-white">
              The End of{" "}
              <span className="relative inline-block mt-1 md:mt-0">
                <span className="text-white block md:inline drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]">Manual Work</span>
                <span className="absolute -top-6 -right-4 md:-top-5 md:-right-3 text-[7px] font-mono text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30 rotate-6 select-none pointer-events-none tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md z-20">
                  END_OF_ERA
                </span>
              </span>
              <span className="block mt-3 md:mt-2 text-[15px] sm:text-[18px] md:text-2xl lg:text-3xl font-normal text-zinc-400 tracking-tight leading-loose md:leading-tight whitespace-nowrap">
                <span>Own your time. Automate{" "}</span>
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 font-extrabold inline-block transition-all duration-700 ease-in-out ${fade
                      ? "opacity-100 transform translate-y-0 filter blur-0"
                      : "opacity-0 transform translate-y-4 filter blur-sm"
                    }`}
                >
                  {WORDS[textIndex]}.
                </span>
              </span>
            </h1>

            {/* Subheadline (Improved Contrast & Flow) */}
            <p className="animate-fade-in-up [animation-delay:400ms] text-[14px] md:text-[20px] text-zinc-400 max-w-[340px] md:max-w-xl leading-relaxed font-normal tracking-wide text-pretty md:text-balance">
              Era kerja manual sudah berakhir. Sistem Axiom membangun{" "}
              <span className="text-white font-semibold">infrastruktur berperforma tinggi</span> yang kamu butuhkan untuk skala bisnis{" "}
              <span className="text-white font-semibold italic underline decoration-emerald-500/40 underline-offset-4">tanpa harus menambah tim.</span>
              <span className="block mt-5 text-emerald-400 font-mono text-[10px] md:text-xs tracking-widest font-bold antialiased leading-none">
                ✓ KLIEN KAMI MENGHEMAT RATA-RATA 40 JAM KERJA PER MINGGU.
              </span>
            </p>

            {/* CTA Buttons (Enhanced) */}
            <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row gap-2 justify-start pt-0 items-center sm:items-start w-full sm:w-auto">
              <Button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-contact-modal"))
                }
                className="h-[50px] md:h-[60px] w-full sm:w-auto px-10 rounded-[20px] bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white transition-all text-sm md:text-lg font-black border-0 relative group overflow-hidden shadow-[0_15px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.5)] active:scale-95 duration-300 ring-1 ring-white/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  SCALE MY BUSINESS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                {/* Shiny overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>

              <a href="#services" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  className="h-[50px] md:h-[60px] w-full sm:w-auto px-8 rounded-[20px] bg-white/[0.02] border border-white/[0.05] text-zinc-500 hover:text-white hover:bg-white/5 text-sm md:text-base font-medium transition-all group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-2">
                    Lihat Kemampuan Kami
                    <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-100" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Element (High Clarity) */}
          <div className="hidden lg:block relative h-full min-h-[550px] animate-fade-in [animation-delay:1000ms]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Energy Grid */}
              <div className="relative w-full aspect-square max-w-[500px]">
                {/* Background Glows (Higher Opacity) */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/15 blur-[80px] rounded-full animate-pulse"></div>

                {/* Rotating Rings (Clearly Visible) */}
                <div className="absolute inset-0 border-[1.5px] border-blue-500/30 rounded-full animate-[spin_25s_linear_infinite] shadow-[0_0_20px_rgba(59,130,246,0.1)]"></div>
                <div className="absolute inset-8 border-[1.5px] border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                <div className="absolute inset-20 border-[1px] border-white/10 rounded-full animate-[spin_40s_linear_infinite]"></div>

                {/* Visual Pipeline Logic (Cards) */}
                {/* Card 1: Data Ingest */}
                <div className="absolute top-[0%] left-[0%] w-48 glass-panel rounded-2xl p-4 border-blue-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] animate-float [animation-duration:5s] z-30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-black text-white tracking-widest uppercase font-mono">Input_Stream</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  </div>
                  <div className="mt-2 flex justify-between items-center text-[9px] font-mono">
                    <span className="text-zinc-500 uppercase">Rate</span>
                    <span className="text-emerald-400 font-bold">928MB/s</span>
                  </div>
                </div>

                {/* Card 2: Logic Engine */}
                <div className="absolute top-[35%] right-[-5%] w-52 glass-panel rounded-2xl p-4 border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float [animation-duration:6s] [animation-delay:1s] z-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black text-white tracking-widest uppercase font-mono">Axiom_Neural</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="h-1.5 w-10 bg-purple-500/60 rounded-full"></div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-1.5 w-16 bg-purple-500/40 rounded-full"></div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-3 text-center border-t border-white/10 pt-2">
                    <span className="text-[10px] text-zinc-300 font-mono uppercase tracking-tighter">Status: <span className="text-purple-400 font-bold">BYPASS</span></span>
                  </div>
                </div>

                {/* Card 3: Execution Output */}
                <div className="absolute bottom-[5%] left-[5%] w-44 glass-panel rounded-2xl p-4 border-emerald-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.5)] animate-float [animation-duration:7s] [animation-delay:2s] z-30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black text-white tracking-widest uppercase font-mono">Execution</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[24px] font-black text-white font-mono leading-none">100</span>
                    <span className="text-emerald-400 font-black text-[14px] font-mono">%</span>
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-1 font-mono uppercase tracking-widest font-bold">Success_Verified</div>
                </div>

                {/* Connecting Lines (SVG Decoration - More Defined) */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="url(#grad-blue)" strokeWidth="0.8" strokeDasharray="10,20" />
                  <path d="M200 50 L200 350 M50 200 L350 200" stroke="white" strokeWidth="0.4" opacity="0.3" />
                  {/* Glowing Points */}
                  <circle cx="200" cy="50" r="3" fill="#3b82f6" className="animate-pulse" />
                  <circle cx="350" cy="200" r="3" fill="#8b5cf6" className="animate-pulse" />
                  <circle cx="200" cy="350" r="3" fill="#10b981" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero-End Separator */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

      {/* 3D Parallax Glass Window */}
      {/* Split Layout: Terminal (Left) & Explanation (Right) */}
      <div className="relative mt-2 md:mt-8 lg:mt-12 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Left: Terminal Window */}
          <Reveal direction="left">
            <div className="relative perspective-[2000px] group">
              <div
                className="relative rounded-[16px] border border-white/[0.08] bg-[#0c0d0e] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden h-[180px] md:h-auto md:aspect-[4/3] transition-transform duration-100 ease-out"
                style={{
                  transform: `rotateX(${5 - mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
                }}
              >
                {/* Header */}
                <div className="h-10 border-b border-white/[0.06] flex items-center px-4 gap-2 bg-[#121314]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/10"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/10"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/10"></div>
                  </div>
                  <div className="flex-1 text-center text-[11px] font-mono text-white/20 tracking-widest uppercase truncate font-medium">
                    Axiom_Core_v4.2.exe — Shell
                  </div>
                </div>

                {/* Main Terminal Area */}
                <div className="p-4 md:p-8 font-mono text-[11px] md:text-[13px] relative overflow-hidden h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-[#0c0d0e] to-[#0c0d0e]">
                  <div className="space-y-2.5 md:space-y-3">
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className={`animate-in fade-in slide-in-from-left-2 duration-300 ${log.includes("completed") ? "text-emerald-400" : log.includes("Error") ? "text-red-400" : "text-blue-300/90"}`}
                      >
                        <span
                          className="opacity-20 mr-2 md:mr-4 text-white font-light"
                          suppressHydrationWarning
                        >
                          [14:22:0{i}]
                        </span>
                        <span className="font-medium">{log}</span>
                      </div>
                    ))}
                    <div className="h-4 w-1.5 md:h-5 md:w-2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse inline-block align-middle ml-1"></div>
                  </div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none z-20"></div>
              </div>
            </div>
          </Reveal>

          {/* Right: Explanation */}
          <Reveal direction="right" delay={200}>
            <div className="flex flex-col gap-6 md:gap-8 text-left lg:pl-4 mt-6 md:mt-0">
              <div className="self-start inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/90 text-[11px] md:text-[13px] font-mono font-medium">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                <span>Live Execution Environment</span>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1]">
                  Intelligent Execution.
                  <br />
                  <span className="text-white/30">Zero Detection.</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-normal">
                    Axiom menjalankan lingkungan <span className="text-white font-medium">browser headless yang terisolasi</span> yang meniru biometrik manusia untuk melewati sistem anti-bot dengan mudah.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-normal">
                    Didesain untuk <span className="text-blue-400/80 font-medium italic">kerahasiaan</span> dan <span className="text-purple-400/80 font-medium italic">kecepatan tinggi</span>.
                  </p>
                </div>
              </div>

              <div className="flex gap-10 border-t border-white/[0.08] pt-12">
                <div>
                  <div className="text-2xl font-bold text-white font-mono">
                    <span className="text-emerald-400">0.02</span>s
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mt-1">
                    Latency
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-mono">
                    100%
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mt-1">
                    Uptime
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
