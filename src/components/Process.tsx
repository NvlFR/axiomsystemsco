import React, { useState } from "react";
import { Search, Code2, Terminal, Rocket, FileJson, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "discovery",
    title: "Discovery",
    subtitle: "Reconnaissance",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    details: {
      items: ["Traffic Analysis", "WAF Fingerprinting", "API Endpoint Mapping"],
      file: "recon_report.json",
    },
  },
  {
    id: "blueprint",
    title: "Architecture",
    subtitle: "System Design",
    icon: FileJson,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    details: {
      items: ["Proxy Topology", "Concurrency Planning", "Anti-Bot Strategy"],
      file: "architecture.yaml",
    },
  },
  {
    id: "dev",
    title: "Development",
    subtitle: "Implementation",
    icon: Terminal,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    details: {
      items: ["Golang Core Logic", "Browser Instrumentation", "Unit Testing"],
      file: "main.go",
    },
  },
  {
    id: "deploy",
    title: "Deployment",
    subtitle: "CI/CD & Scale",
    icon: Rocket,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    details: {
      items: [
        "Docker Containerization",
        "Kubernetes Scaling",
        "Live Monitoring",
      ],
      file: "deploy.sh",
    },
  },
];

import Reveal from "@/components/Reveal";

// ... imports

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="py-32 px-6 relative border-t border-white/[0.08] bg-[#08090a] overflow-visible"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto space-y-24 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Workflow Pipeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Engineered for Velocity.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Kami memperlakukan otomasi layaknya software engineering. Terstruktur,
              scalable, dan aman secara default.
            </p>
          </div>
        </Reveal>

        {/* Pipeline Visualization */}
        <Reveal delay={200}>
          <div className="relative">
            {/* Connector Pipes (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-white/[0.05] z-0">
              {/* Animated Data Packets */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_3s_infinite_linear]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-20 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_3s_infinite_linear_1s]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-20 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_3s_infinite_linear_2s]"></div>
            </div>

            {/* Connector Pipes (Mobile Vertical) */}
            <div className="lg:hidden absolute top-0 bottom-0 left-[39px] w-px bg-white/[0.05] z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 px-4 lg:px-0 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={cn(
                    "group relative flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-5 lg:gap-0 lg:space-y-6 transition-all duration-300 py-1 lg:py-0",
                    // Dynamic Z-Index: Active item gets z-50 to pop over everything
                    activeStep === index ? "z-50 scale-[1.01] lg:scale-[1.02]" : "z-10",
                  )}
                >
                  {/* Node */}
                  <div
                    className={cn(
                      "w-12 h-12 lg:w-[120px] lg:h-[120px] rounded-full border bg-[#08090a] flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] relative",
                      step.border,
                      activeStep === index ? "bg-[#0f1011]" : "",
                    )}
                  >
                    {/* Inner Pulse */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                        step.bg,
                      )}
                    ></div>

                    {/* Icon */}
                    <step.icon
                      className={cn(
                        "w-5 h-5 lg:w-10 lg:h-10 transition-colors duration-300",
                        step.color,
                      )}
                    />

                    {/* Status Dot */}
                    <div className="absolute lg:bottom-2 bottom-0 lg:right-8 right-0 w-2.5 h-2.5 lg:w-4 lg:h-4 bg-[#08090a] rounded-full flex items-center justify-center border border-white/10">
                      <div
                        className={cn(
                          "w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full",
                          activeStep === index
                            ? "bg-green-500 animate-pulse"
                            : "bg-zinc-600",
                        )}
                      ></div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="space-y-0.5 lg:space-y-2 py-1 lg:py-2">
                    <h3 className="text-base lg:text-lg font-bold text-white tracking-wide">
                      {step.title}
                    </h3>
                    <div className="text-[10px] lg:text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Detail Card (Hover) */}
                  <div
                    className={cn(
                      "absolute top-[100%] lg:top-[200px] left-16 lg:left-0 lg:w-full bg-[#18181b] border border-white/10 rounded-xl p-4 text-left transition-all duration-300 pointer-events-none opacity-0 translate-y-4 shadow-xl min-w-[220px] z-[60]",
                      activeStep === index ? "opacity-100 translate-y-0" : "",
                    )}
                  >
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2">
                      <FileJson className="w-3 h-3 text-zinc-500" />
                      <span className="text-[10px] font-mono text-zinc-400">
                        {step.details.file}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {step.details.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-[11px] lg:text-xs text-zinc-300"
                        >
                          <div
                            className={cn(
                              "w-1 h-1 rounded-full",
                              step.color.replace("text-", "bg-"),
                            )}
                          ></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
