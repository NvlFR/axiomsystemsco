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
    freelancerIcon: BadgeCheck, // Neutral
    axiom: "3-7 Days (Rapid Prototyping)",
    axiomIcon: Check,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-32 px-6 relative border-t border-white/[0.08] bg-[#08090a]">
      {/* Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-16">
        <Reveal>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Why Leaders Choose Axiom.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Stop gambling with freelancers. Get enterprise-grade
              infrastructure built for war.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f1011]/80 backdrop-blur-sm">
            {/* Header Row */}
            <div className="grid grid-cols-12 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="col-span-4 p-6 text-sm font-semibold text-zinc-500 uppercase tracking-wider flex items-center">
                Comparison
              </div>
              <div className="col-span-4 p-6 text-center border-l border-white/[0.08]">
                <div className="text-zinc-400 font-semibold mb-1">
                  Generic Freelancer
                </div>
                <div className="text-xs text-zinc-600">High Risk, Low Cost</div>
              </div>
              <div className="col-span-4 p-6 text-center border-l border-white/[0.08] bg-emerald-500/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                <div className="text-white font-bold mb-1 flex items-center justify-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-500" />
                  Axiom Systems
                </div>
                <div className="text-xs text-emerald-400/80">
                  Enterprise Standard
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
                          ? "text-emerald-500"
                          : "text-red-500/50",
                      )}
                    />
                    <span className="text-sm text-zinc-500">
                      {feature.freelancer}
                    </span>
                  </div>

                  {/* Axiom Column */}
                  <div className="col-span-4 p-6 border-l border-white/[0.08] bg-emerald-500/[0.02] flex flex-col items-center justify-center text-center gap-2 relative">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <feature.axiomIcon className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                    <span className="text-sm font-medium text-white">
                      {feature.axiom}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subnote */}
          <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm">
              Ready to upgrade?{" "}
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-contact-modal"))
                }
                className="text-white underline underline-offset-4 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Schedule a technical audit
              </button>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
