import React, { useState } from "react";
import {
  Train,
  ShoppingCart,
  Zap,
  Server,
  Code2,
  Bot,
  Database,
  ArrowRight,
  X,
  CheckCircle2,
  Terminal,
  Landmark,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Ticket Snipers",
    description:
      "Bespeak software to secure high-demand assets instantly. Includes advanced proxy rotation, CAPTCHA solving, and session management.",
    icon: Train,
    className: "md:col-span-6",
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    border: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
    pattern: "circuit",
    features: [
      "Residential Proxy Network Integration",
      "TLS Fingerprint Spoofing (Ja3/H2)",
      "Automated CAPTCHA Solving (v2/v3/Enterprise)",
      "Multi-threaded Task Execution",
    ],
    tech: ["Go", "Redis", "gRPC", "Docker"],
  },
  {
    title: "Auction & Bidding Bots",
    description:
      "Dominate auctions with millisecond-precision execution. Our snipers wait for the perfect moment to strike.",
    icon: ShoppingCart,
    className: "md:col-span-6",
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    border: "group-hover:border-amber-500/50",
    iconColor: "text-amber-400",
    pattern: "dots",
    features: [
      "Millisecond Latency Optimization",
      "WebSocket Real-time Monitoring",
      "Smart Bidding Strategies",
      "Anti-Detection Measures",
    ],
    tech: ["Golang", "Node.js", "WebSockets"],
  },
  {
    title: "Queue Bypass Systems",
    description:
      "Skip the line on limited-availability drops. We reverse-engineer queues to get you through the front door.",
    icon: Zap,
    className: "md:col-span-4",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    border: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    pattern: "grid",
    features: [
      "Virtual Queue Skipping",
      "Token Generation & Injection",
      "Headless Browser Clustering",
      "Cloudflare Turnstile Bypass",
    ],
    tech: ["Node.js", "Golang", "Puppeteer"],
  },
  {
    title: "Enterprise Scraping",
    description:
      "Turn the entire web into your database. High-volume extraction with zero IP bans.",
    icon: Database,
    className: "md:col-span-4",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    border: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    pattern: "data",
    features: [
      "Distributed Extraction Pipeline",
      "Auto-Scaling Infrastructure",
      "Data Normalization & Cleaning",
      "Daily/Hourly Scheduling",
    ],
    tech: ["Playwright", "PostgreSQL", "Kafka"],
  },
  {
    title: "Crypto & DeFi Automation",
    description:
      "MEV bots, arbitrage engines, and on-chain analytics. We build financial weapons for the decentralized web.",
    icon: Landmark,
    className: "md:col-span-4",
    gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    border: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
    pattern: "circuit",
    features: [
      "Mempool Monitoring & Sniping",
      "Cross-DEX Arbitrage Execution",
      "Smart Contract Interaction",
      "Private Node Infrastructure",
    ],
    tech: ["Golang", "Rust", "Solidity", "Geth"],
  },
  {
    title: "Automation Consulting",
    description:
      "We audit your workflows and build custom tools to eliminate manual labor forever.",
    icon: Code2,
    className: "md:col-span-12",
    gradient: "from-pink-500/20 via-pink-500/5 to-transparent",
    border: "group-hover:border-pink-500/50",
    iconColor: "text-pink-400",
    pattern: "code",
    features: [
      "Workflow & Security Audit",
      "Legacy System Integration",
      "Custom API Development",
      "Performance Optimization",
    ],
    tech: ["TypeScript", "Kubernetes", "GraphQL"],
  },
];

import Reveal from "@/components/Reveal";

// ... imports remain the same

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <section
      id="services"
      className="py-32 px-6 relative border-t border-white/[0.08] bg-[#08090a]"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto space-y-20">
        {/* Section Header */}
        <Reveal>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono mb-4">
              <Bot className="w-3.5 h-3.5" />
              <span>Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Solutions We Build.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              From simple scripts to complex distributed systems, we engineer
              the automation tools your business needs to win.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8">
          {services.map((service, index) => (
            <Reveal
              key={index}
              delay={index * 100}
              className={cn(service.className)} // Pass grid span classes to wrapper
            >
              <div
                onClick={() => setSelectedService(service)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f1011] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer h-full", // Added h-full
                  service.border,
                )}
              >
                {/* Active Gradient Background */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                    service.gradient,
                  )}
                />

                {/* Background Patterns (SVG) */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
                  {service.pattern === "circuit" && (
                    <svg className="w-full h-full" width="100%" height="100%">
                      <pattern
                        id="circuit-pattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 20 L40 20 M20 0 L20 40"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                        />
                        <circle cx="20" cy="20" r="2" fill="currentColor" />
                      </pattern>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#circuit-pattern)"
                      />
                    </svg>
                  )}
                  {service.pattern === "dots" && (
                    <div className="abolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  )}
                  {service.pattern === "grid" && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  )}
                  {service.pattern === "data" && (
                    <div className="absolute inset-0 flex flex-col gap-2 p-4 font-mono text-[10px] leading-none select-none overflow-hidden opacity-50">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="whitespace-nowrap">
                          {Math.random().toString(36).substring(2)}
                        </div>
                      ))}
                    </div>
                  )}
                  {service.pattern === "code" && (
                    <div className="absolute right-0 bottom-0 p-8 opacity-20">
                      <Code2 className="w-32 h-32" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center transition-colors duration-500 group-hover:bg-white/[0.08]",
                        service.iconColor,
                      )}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mt-8 space-y-4">
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm group-hover:text-zinc-300 transition-colors">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-xs font-medium text-white/40 group-hover:text-white transition-colors uppercase tracking-wider">
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-[#0f1011] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            {/* Header Gradient */}
            <div
              className={cn(
                "absolute top-0 inset-x-0 h-1 bg-gradient-to-r",
                selectedService.gradient.replace(
                  "to-transparent",
                  "to-white/10",
                ),
              )}
            ></div>

            <div className="p-1">
              <div className="relative bg-[#18181b]/50 rounded-xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-10 space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center",
                        selectedService.iconColor,
                      )}
                    >
                      <selectedService.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/[0.08]"></div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features List */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Core Capabilities</span>
                      </div>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-zinc-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 px-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Terminal className="w-4 h-4 text-blue-500" />
                        <span>Technology Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.tech.map((tech, i) => (
                          <div
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-6">
                        <button
                          onClick={() => {
                            window.dispatchEvent(
                              new CustomEvent("open-contact-modal"),
                            );
                            setSelectedService(null);
                          }}
                          className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
                        >
                          <span>Start Project</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
