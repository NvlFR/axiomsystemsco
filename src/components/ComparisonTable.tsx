import React from "react";
import { Check, X, ShieldAlert, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Anti-Detection System",
    freelancer: "Basic UA Rotation",
    freelancerIcon: X,
    axiom: "TLS Fingerprinting + AI Humanization",
    axiomIcon: Check,
  },
  {
    name: "Code Ownership",
    freelancer: "Encrypted / Licensed",
    freelancerIcon: ShieldAlert,
    axiom: "100% Source Code Transfer",
    axiomIcon: Check,
  },
  {
    name: "Maintenance & Uptime",
    freelancer: "Hourly Rate Fixes",
    freelancerIcon: X,
    axiom: "24/7 Monitoring & Health Checks",
    axiomIcon: Check,
  },
  {
    name: "Scalability",
    freelancer: "Single Machine Script",
    freelancerIcon: X,
    axiom: "Distributed Cloud Architecture",
    axiomIcon: Check,
  },
  {
    name: "Development Speed",
    freelancer: "2-4 Weeks",
    freelancerIcon: Check, // Using Check for neutral but standard
    axiom: "3-7 Days (Rapid Prototyping)",
    axiomIcon: Check,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-32 px-6 relative border-t border-white/[0.08] bg-[#08090a]">
      {/* Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-emerald-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-16">
        <Reveal>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Why Leaders Choose Axiom.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Jangan bertaruh dengan freelancer. Dapatkan infrastruktur kelas enterprise yang dibangun untuk menang.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f1011]/80 backdrop-blur-sm">
            {/* Desktop View */}
            <div className="hidden md:block overflow-x-auto">
              <div className="min-w-[640px]">
                {/* Header Row */}
                <div className="grid grid-cols-12 border-b border-white/[0.1] bg-white/[0.02]">
                  <div className="col-span-4 p-6 text-sm font-semibold text-zinc-500 uppercase tracking-wider flex items-center">
                    Comparison
                  </div>
                  <div className="col-span-4 p-6 text-center border-l border-white/[0.08]">
                    <div className="text-zinc-400 font-semibold mb-1">
                      Generic Freelancer
                    </div>
                    <div className="text-xs text-zinc-600">
                      High Risk, Low Cost
                    </div>
                  </div>
                  <div className="col-span-4 p-8 text-center border-x border-white/[0.15] bg-emerald-500/10 relative overflow-hidden ring-2 ring-emerald-500/40 translate-y-[-2px] z-10 shadow-[0_10px_40px_rgba(16,185,129,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                    <div className="text-white text-lg font-black mb-1 flex items-center justify-center gap-2 tracking-tight">
                      <BadgeCheck className="w-5 h-5 text-emerald-400" />
                      Axiom Systems
                    </div>
                    <div className="text-[10px] font-black text-emerald-400/90 uppercase tracking-widest">
                       World Class Standard
                    </div>
                  </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/[0.04]">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-12 group hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="col-span-4 p-6 text-sm font-medium text-zinc-300 flex items-center">
                        {feature.name}
                      </div>

                      {/* Freelancer Column */}
                      <div className="col-span-4 p-6 border-l border-white/[0.08] flex flex-col items-center justify-center text-center gap-2">
                        <feature.freelancerIcon
                          className={cn(
                            "w-5 h-5",
                            feature.freelancerIcon === Check
                              ? "text-emerald-500/50"
                              : "text-red-500/50",
                          )}
                        />
                        <span className="text-sm text-zinc-500">
                          {feature.freelancer}
                        </span>
                      </div>

                      {/* Axiom Column */}
                      <div className="col-span-4 p-6 border-l border-white/[0.08] bg-emerald-500/[0.02] flex flex-col items-center justify-center text-center gap-2 relative">
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <feature.axiomIcon className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                        <span className="text-sm font-bold text-white">
                          {feature.axiom}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile View (Card Based) */}
            <div className="md:hidden flex flex-col gap-4 p-4">
              {features.map((feature, i) => (
                <div key={i} className="rounded-xl border border-white/[0.08] bg-[#141517] overflow-hidden relative shadow-lg">
                  <div className="p-3 bg-white/[0.03] border-b border-white/[0.05]">
                    <h3 className="text-sm font-bold text-white text-center">{feature.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-white/[0.05]">
                    {/* Freelancer */}
                    <div className="p-4 flex flex-col items-center text-center gap-2 bg-black/20">
                       <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Freelancer</div>
                       <feature.freelancerIcon className={cn("w-5 h-5 mb-0.5", feature.freelancerIcon === Check ? "text-emerald-500/40" : "text-red-500/40")} />
                       <span className="text-[11px] text-zinc-400 leading-tight font-medium">{feature.freelancer}</span>
                    </div>
                    {/* Axiom */}
                    <div className="p-4 flex flex-col items-center text-center gap-2 bg-emerald-500/[0.05] relative shadow-[inset_0_0_20px_rgba(16,185,129,0.02)]">
                       <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                       <div className="text-[9px] text-emerald-400 uppercase tracking-widest font-black flex items-center gap-1">
                         Axiom
                       </div>
                       <feature.axiomIcon className="w-5 h-5 mb-0.5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                       <span className="text-[11px] text-white font-bold leading-tight">{feature.axiom}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subnote */}
          <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm">
              Jadwalkan <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-contact-modal"))
                }
                className="text-white underline underline-offset-4 hover:text-emerald-400 transition-colors cursor-pointer font-bold"
              >
                audit teknis sekarang
              </button>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
