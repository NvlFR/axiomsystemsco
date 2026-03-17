import React from "react";
import Reveal from "./Reveal";
import { X, Check, Zap, Clock, TrendingDown, Users, Search, MessageSquare } from "lucide-react";

const comparisons = [
  {
    title: "Data Entry & Processing",
    manual: {
      time: "6 Jam / Hari",
      status: "Risiko Human Error Tinggi",
      icon: Clock
    },
    axiom: {
      time: "8 Menit Tuntas",
      status: "100% Data Accuracy",
      icon: Zap
    }
  },
  {
    title: "Lead Management",
    manual: {
      time: "40% Leads Bocor",
      status: "Respon lambat (Jam Kerja)",
      icon: Users
    },
    axiom: {
      time: "Instant 24/7 Response",
      status: "Zero Leaked Leads",
      icon: MessageSquare
    }
  },
  {
    title: "Market Intelligence",
    manual: {
      time: "Tebak Harga",
      status: "Update Mingguan (Manual)",
      icon: Search
    },
    axiom: {
      time: "Real-time Dashboard",
      status: "Monitoring tiap 15 Menit",
      icon: TrendingDown
    }
  }
];

export default function ComparisonSection() {
  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        <Reveal>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
              Stop Working Like <span className="text-zinc-600">Manuals.</span><br />
              Start Scaling with <span className="text-emerald-400">Systems.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Perbandingan nyata efisiensi operasional klien Axiom sebelum dan sesudah implementasi otomasi.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {comparisons.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.01]">
                
                {/* Manual Era (LEFT) */}
                <div className="p-8 md:p-12 relative overflow-hidden bg-zinc-900/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
                      <item.manual.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">Manual Era</div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-500 line-through decoration-zinc-700 decoration-4">
                      {item.manual.time}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-600 text-sm">
                      <X className="w-4 h-4" />
                      {item.manual.status}
                    </div>
                  </div>
                </div>

                {/* Axiom Era (RIGHT) */}
                <div className="p-8 md:p-12 relative overflow-hidden bg-emerald-500/[0.03] border-t md:border-t-0 md:border-l border-white/[0.08]">
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <item.axiom.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Axiom Era</div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                      {item.axiom.time}
                      <span className="text-[10px] md:text-xs px-2 py-0.5 rounded bg-emerald-500 text-black font-bold uppercase tracking-tighter">Verified</span>
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                      <Check className="w-4 h-4" />
                      {item.axiom.status}
                    </div>
                  </div>

                  {/* ROI Indicator */}
                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] font-mono text-zinc-600 hidden md:block">
                    Efficiency Boosted by 95%+
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex justify-center pt-8">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
              className="px-8 py-4 rounded-2xl bg-white text-black font-black text-sm hover:bg-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              UBAH KERJA MANUAL KAMU SEKARANG
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
