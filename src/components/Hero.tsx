import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const WORDS = ["Operations", "Sales", "Systems", "Growth"];

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
          setLogs((prev) => [...prev.slice(-4), text]);
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
      className="relative flex flex-col justify-start text-left overflow-hidden pt-32 md:pt-44 pb-24 md:pb-40"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 space-y-4">
        {/* Floating Badge */}
        <div className="animate-fade-in-up [animation-delay:0ms] flex justify-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-[13px] text-linear-text-secondary hover:border-white/20 hover:text-white transition-all cursor-pointer group">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse"></span>
              <span className="font-medium text-white">
                Accepting New Projects
              </span>
            </span>
            <span className="w-[1px] h-3 bg-white/10 mx-1"></span>
            <span>Q2 2026 Slot Available</span>
            <ChevronRight className="w-3 h-3 ml-1 text-white/50 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Provocative Headline (The new Hook) */}
        <h1 className="animate-fade-in-up [animation-delay:200ms] text-[48px] md:text-[80px] lg:text-[88px] font-semibold tracking-tighter leading-[0.95] md:leading-[0.9] text-white">
          The End of{" "}
          <span className="text-white/70 md:text-white/50 whitespace-nowrap">
            Manual Work
          </span>
          <div className="mt-4 md:mt-2 text-3xl md:text-5xl lg:text-6xl font-normal text-linear-text-secondary tracking-tight">
            <span>It's time to automate your </span>
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-semibold inline-block transition-all duration-500 ease-in-out ${fade
                ? "opacity-100 transform translate-y-0 filter blur-0"
                : "opacity-0 transform translate-y-4 filter blur-sm"
                }`}
            >
              {WORDS[textIndex]}.
            </span>
          </div>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up [animation-delay:400ms] text-[19px] md:text-[21px] text-zinc-300 md:text-linear-text-secondary max-w-2xl mr-auto leading-relaxed font-normal tracking-wide pt-2 [text-wrap:balance]">
          The era of manual work is over. AxiomSystemsCo builds the{" "}
          <span className="text-white">infrastructure</span> you need to scale{" "}
          <span className="text-white">without adding headcount.</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row gap-4 justify-start pt-6 items-center sm:items-start w-full sm:w-auto">
          <Button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-contact-modal"))
            }
            className="h-[52px] w-full sm:w-auto px-8 rounded-[12px] bg-white text-black hover:bg-gray-200 transition-all text-[16px] font-[600] border-0 scale-100 hover:scale-105 active:scale-95 duration-200"
          >
            Automate My Business
            <ArrowRight className="w-4 h-4 ml-2 opacity-60" />
          </Button>

          <a href="#services" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              className="h-[52px] w-full sm:w-auto px-8 rounded-[12px] text-zinc-300 md:text-linear-text-secondary hover:text-white hover:bg-white/[0.04] text-[16px] font-medium transition-all"
            >
              See Use Cases
            </Button>
          </a>
        </div>
      </div>

      {/* 3D Parallax Glass Window */}
      {/* Split Layout: Terminal (Left) & Explanation (Right) */}
      {/* 3D Parallax Glass Window */}
      {/* Split Layout: Terminal (Left) & Explanation (Right) */}
      <div className="relative mt-16 md:mt-24 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Terminal Window (Smaller, No Sidebar) */}
          <Reveal direction="left">
            <div
              className="relative perspective-[2000px] group"
            >
              <div
                className="relative rounded-[12px] border border-white/[0.08] bg-[#0f1011] shadow-2xl overflow-hidden aspect-[4/3] transition-transform duration-100 ease-out"
                style={{
                  transform: `rotateX(${5 - mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
                }}
              >
                {/* Header */}
                <div className="h-9 border-b border-white/[0.06] flex items-center px-4 gap-2 bg-[#121314]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="flex-1 text-center text-[10px] font-mono text-white/30 tracking-widest uppercase truncate">
                    Axiom_Core_v4.2.exe
                  </div>
                </div>

                {/* Main Terminal Area (No Sidebar) */}
                <div className="p-6 font-mono text-xs relative overflow-hidden h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-[#0f1011] to-[#0f1011]">
                  <div className="space-y-2.5">
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className={`animate-in fade-in slide-in-from-left-2 duration-300 ${log.includes("Error") ? "text-red-400" : "text-blue-200/80"}`}
                      >
                        <span
                          className="opacity-30 mr-3 text-white"
                          suppressHydrationWarning
                        >
                          [
                          {new Date().toISOString().split("T")[1].split(".")[0]}
                          ]
                        </span>
                        {log}
                      </div>
                    ))}
                    <div className="h-4 w-2 bg-blue-500 animate-pulse inline-block align-middle"></div>
                  </div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none z-20"></div>
              </div>
            </div>
          </Reveal>

          {/* Right: Explanation */}
          <Reveal direction="right" delay={200}>
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                <span>Live Execution Environment</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                  Intelligent Execution.
                  <br />
                  <span className="text-white/40">Zero Detection.</span>
                </h2>
                <p className="text-linear-text-secondary text-lg leading-relaxed max-w-md">
                  Axiom runs an isolated, headless browser environment that
                  mimics human biometrics to bypass anti-bot systems
                  effortlessly.
                </p>
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
