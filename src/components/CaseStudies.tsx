import React from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, Clock, Zap, Target } from "lucide-react";

const caseStudies = [
  {
    title: "Intelligence Price Engine",
    client: "Retail Analytics Indonesia",
    problem: "Input manual data harga kompetitor (20 jam/minggu) di 3 marketplace besar.",
    solution: "Custom Scraper Engine yang update data tiap 1 jam ke Cloud Database & Dashboard.",
    result: "Full Automation",
    stats: "ROI: Hemat 80 Jam / Bulan",
    icon: <Clock className="w-5 h-5" />,
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400"
  },
  {
    title: "AI Booking Assistant",
    client: "PT Properti Jaya Makmur",
    problem: "Lead yang masuk via WA sering tidak terbalas saat jam kantor tutup.",
    solution: "Gemini AI Agent yang menghandle tanya jawab & booking jadwal survey 24/7.",
    result: "+240% Conv. Rate",
    stats: "ROI: Balik Modal < 1 Bulan",
    icon: <Target className="w-5 h-5" />,
    color: "from-purple-500/20 to-purple-600/5",
    accent: "text-purple-400"
  },
  {
    title: "High-Speed Ticket System",
    client: "National Event Promoter",
    problem: "Sistem antrian web sering crash & stok habis dalam hitungan detik.",
    solution: "Node.js High-Concurrency script dengan optimasi API bypass & multi-session.",
    result: "Zero Downtime",
    stats: "ROI: 100% Slot Sold Out",
    icon: <Zap className="w-5 h-5" />,
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-400"
  }
];

export default function CaseStudies() {
  return (
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
              <div className="group relative rounded-3xl border border-white/[0.08] bg-[#0c0d0e] overflow-hidden hover:border-white/20 transition-all duration-500">
                <div className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 blur-3xl bg-white"></div>
                  <div className={`w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center ${item.accent} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">{item.client}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                    <p><strong className="text-zinc-300">Problem:</strong> {item.problem}</p>
                    <p><strong className="text-zinc-300">Solution:</strong> {item.solution}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className={`text-lg font-black tracking-tight ${item.accent}`}>{item.result}</div>
                      <div className="text-[10px] font-mono uppercase text-zinc-600">{item.stats}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:rotate-45 group-hover:text-white group-hover:bg-white/5 transition-all transition-duration-500">
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
  );
}
