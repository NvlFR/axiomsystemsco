import React, { useState } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, Clock, Zap, Target, X, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Intelligence Price Engine",
    client: "Retail Analytics Indonesia",
    problem: "Input manual data harga kompetitor (20 jam/minggu) di 3 marketplace besar.",
    solution: "Custom Scraper Engine yang update data tiap 1 jam ke Cloud Database & Dashboard.",
    result: "Full Automation",
    stats: "ROI: 80 Hours Saved / Month",
    image: "/casestudies/price_engine.webp",
    icon: <Clock className="w-5 h-5" />,
    color: "from-blue-600/40 to-blue-900/40",
    accent: "text-blue-400"
  },
  {
    title: "AI Booking Assistant",
    client: "PT Properti Jaya Makmur",
    problem: "Lead yang masuk via WA sering tidak terbalas saat jam kantor tutup.",
    solution: "Gemini AI Agent yang menghandle tanya jawab & booking jadwal survey 24/7.",
    result: "+240% Conv. Rate",
    stats: "ROI: Breakeven < 1 Month",
    image: "/casestudies/booking_ai.webp",
    icon: <Target className="w-5 h-5" />,
    color: "from-purple-600/40 to-purple-900/40",
    accent: "text-purple-400"
  },
  {
    title: "High-Speed Ticket System",
    client: "National Event Promoter",
    problem: "Sistem antrian web sering crash & stok habis dalam hitungan detik.",
    solution: "Node.js High-Concurrency script dengan optimasi API bypass & multi-session.",
    result: "Zero Downtime",
    stats: "ROI: 100% Slot Sold Out",
    image: "/casestudies/ticket_system.webp",
    icon: <Zap className="w-5 h-5" />,
    color: "from-emerald-600/40 to-emerald-900/40",
    accent: "text-emerald-400"
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <>
      <section id="casestudies" className="py-24 px-6 bg-[#08090a] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                  Proven <span className="text-white/40">Results.</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-xl">
                  Lihat bagaimana kami mentransformasi proses bisnis manual menjadi mesin otomasi yang efisien dan menguntungkan.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm font-medium">
                34+ Projects Completed in 2025
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div 
                  onClick={() => setSelectedCase(item)}
                  className="group relative rounded-3xl border border-white/[0.08] bg-[#0c0d0e] overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer"
                >
                  <div className="h-44 md:h-52 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/20 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 mix-blend-overlay`}></div>
                    
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center ${item.accent} border border-white/10 shadow-2xl z-10`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">{item.client}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                      <p><strong className="text-zinc-300">Masalah:</strong> {item.problem}</p>
                      <p><strong className="text-zinc-300">Solusi:</strong> {item.solution}</p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <div className={`text-lg font-black tracking-tight ${item.accent}`}>{item.result}</div>
                        <div className="text-[10px] font-mono uppercase text-zinc-600">{item.stats}</div>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:rotate-45 group-hover:text-white group-hover:bg-white/5 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedCase(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-[#0f1011] border border-white/[0.08] rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header / Image Area */}
            <div className="relative h-48 md:h-64 flex-shrink-0">
               <img 
                src={selectedCase.image} 
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1011] via-[#0f1011]/40 to-transparent"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedCase.color} opacity-40 mix-blend-overlay`}></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center ${selectedCase.accent} border border-white/10 shadow-2xl z-10`}>
                {selectedCase.icon}
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 md:p-10 space-y-8 overflow-y-auto">
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">{selectedCase.client}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{selectedCase.title}</h3>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-bold ${selectedCase.accent}`}>
                   <CheckCircle2 className="w-4 h-4" />
                   {selectedCase.result}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">The Problem</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">{selectedCase.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Our Solution</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">{selectedCase.solution}</p>
                  </div>
                </div>

                <div className="space-y-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Impact & ROI</h4>
                    <div className="text-2xl font-black text-white">{selectedCase.stats}</div>
                  </div>
                  <button 
                    onClick={() => {
                        window.dispatchEvent(new CustomEvent("open-booking-modal"));
                        setSelectedCase(null);
                    }}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
                  >
                    Build This For Me
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
