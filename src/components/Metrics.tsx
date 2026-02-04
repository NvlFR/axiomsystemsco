import React from "react";
import Reveal from "@/components/Reveal";

const metrics = [
  {
    label: "Requests Processed",
    value: "10M+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    label: "Success Rate",
    value: "99.9%",
    color: "from-emerald-400 to-green-400",
  },
  {
    label: "Execution Time",
    value: "<50ms",
    color: "from-amber-400 to-orange-400",
  },
  {
    label: "Active Nodes",
    value: "500+",
    color: "from-purple-400 to-pink-400",
  },
];

export default function Metrics() {
  return (
    <section className="py-20 border-b border-white/[0.08] bg-[#08090a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center space-y-2">
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${metric.color}`}
                >
                  {metric.value}
                </div>
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
