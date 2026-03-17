import React from "react";
import Reveal from "./Reveal";

const logos = [
  { name: "Global Finance", icon: "🌐" },
  { name: "NextRetail", icon: "🛍️" },
  { name: "SecureLogistics", icon: "📦" },
  { name: "QuickTickets", icon: "🎫" },
  { name: "AlphaDeFi", icon: "💎" },
  { name: "TechNova", icon: "🚀" },
];

export default function LogoCloud() {
  return (
    <section className="py-12 bg-[#050505] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col items-center space-y-8">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">
              Engineering the future for world-class teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               {logos.map((logo) => (
                 <div key={logo.name} className="flex items-center gap-3 group cursor-crosshair">
                   <span className="text-2xl md:text-3xl filter saturate-0 group-hover:saturate-100 transition-all">{logo.icon}</span>
                   <span className="text-lg md:text-xl font-bold font-mono tracking-tighter text-white/50 group-hover:text-white/90 transition-colors">
                     {logo.name}
                   </span>
                 </div>
               ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
