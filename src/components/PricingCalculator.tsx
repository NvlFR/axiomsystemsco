import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const botTypes = [
  { id: "sniper", name: "Ticket Sniper", basePrice: 2000 },
  { id: "scraper", name: "Web Scraper", basePrice: 1500 },
  { id: "automation", name: "Task Automation", basePrice: 2500 },
];

const complexities = [
  {
    id: "standard",
    name: "Standard",
    multiplier: 1,
    desc: "Standard protections, single site.",
  },
  {
    id: "advanced",
    name: "Advanced",
    multiplier: 1.5,
    desc: "Multi-threaded, proxy rotation, simple captcha.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    multiplier: 2.5,
    desc: "AI behavior, complex captcha (puzzles), 99.9% uptime SLA.",
  },
];

export default function PricingCalculator() {
  const [selectedBot, setSelectedBot] = useState(botTypes[0]);
  const [selectedComplexity, setSelectedComplexity] = useState(complexities[1]);

  const minPrice = selectedBot.basePrice * selectedComplexity.multiplier;
  const maxPrice = minPrice * 1.3; // 30% buffer
  const marketPrice = Math.round(minPrice * 2.5); // Anchor Price (2.5x higher)

  return (
    <section className="py-24 px-6 relative border-t border-white/[0.08] bg-[#08090a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center space-y-6 max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Investment Estimator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Transparent Pricing.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Get a ballpark figure instantly. No hidden fees, just clear value.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-white/[0.08] bg-[#0f1011] rounded-3xl overflow-hidden shadow-2xl">
            {/* Input Panel */}
            <div className="lg:col-span-8 p-8 md:p-12 space-y-10">
              {/* Bot Type Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-white uppercase tracking-wider">
                  Target System Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {botTypes.map((bot) => (
                    <button
                      key={bot.id}
                      onClick={() => setSelectedBot(bot)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group",
                        selectedBot.id === bot.id
                          ? "bg-white/[0.05] border-indigo-500/50 text-white"
                          : "bg-white/[0.02] border-white/[0.05] text-zinc-400 hover:border-white/20",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-indigo-500/5 opacity-0 transition-opacity",
                          selectedBot.id === bot.id && "opacity-100",
                        )}
                      ></div>
                      <span className="relative z-10 font-semibold">
                        {bot.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-white uppercase tracking-wider">
                  System Complexity
                </label>
                <div className="space-y-3">
                  {complexities.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedComplexity(item)}
                      className={cn(
                        "w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300",
                        selectedComplexity.id === item.id
                          ? "bg-white/[0.05] border-indigo-500/50"
                          : "bg-white/[0.02] border-white/[0.05] hover:border-white/20",
                      )}
                    >
                      <div className="space-y-1">
                        <div
                          className={cn(
                            "font-semibold",
                            selectedComplexity.id === item.id
                              ? "text-white"
                              : "text-zinc-400",
                          )}
                        >
                          {item.name}
                        </div>
                        <div className="text-xs text-zinc-500">{item.desc}</div>
                      </div>
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center",
                          selectedComplexity.id === item.id
                            ? "border-indigo-500 bg-indigo-500"
                            : "border-zinc-700",
                        )}
                      >
                        {selectedComplexity.id === item.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Output Panel */}
            <div className="lg:col-span-4 bg-gradient-to-br from-indigo-900/20 to-[#08090a] border-t lg:border-t-0 lg:border-l border-white/[0.08] p-8 md:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-mono text-indigo-300 flex items-center gap-2">
                    ESTIMATED INVESTMENT
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                      SAVE 60%
                    </span>
                  </p>
                  <div className="space-y-2">
                    {/* Anchor Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-zinc-500 line-through decoration-red-500/50 decoration-2">
                        ${marketPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
                        (Standard Agency Rate)
                      </span>
                    </div>
                    {/* Axiom Price */}
                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tight flex items-baseline gap-2">
                      <span>${minPrice.toLocaleString()}</span>
                      <span className="text-2xl text-zinc-600 font-normal">
                        -
                      </span>
                      <span className="text-3xl text-zinc-400">
                        ${Math.round(maxPrice).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 max-w-[300px]">
                    *We use proprietary automation cores to cut development
                    hours by 60%, passing the savings to you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-2 backdrop-blur-md">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Base Tech:</span>
                      <span className="text-white font-medium">
                        {selectedBot.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Scale:</span>
                      <span className="text-white font-medium">
                        {selectedComplexity.name}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("open-contact-modal"),
                      )
                    }
                    className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                  >
                    <span>Lock This Price</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest">
                    Includes 14-Day Post-Launch Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
