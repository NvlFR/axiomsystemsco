import React, { useState, useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { Database, FileJson, Table, Code2, Scan, Check } from "lucide-react";

const MOCK_DATA_SOURCE = [
  { id: "MX-9921", product: "RTX 4090 OC", price: "$1,599", stock: "In Stock" },
  {
    id: "MX-9922",
    product: "Ryzen 9 7950X",
    price: "$699",
    stock: "Low Stock",
  },
  {
    id: "MX-9923",
    product: "Samsung 990 Pro",
    price: "$169",
    stock: "In Stock",
  },
  {
    id: "MX-9924",
    product: "G.Skill Trident",
    price: "$249",
    stock: "In Stock",
  },
  { id: "MX-9925", product: "Lian Li O11", price: "$199", stock: "Sold Out" },
  { id: "MX-9926", product: "Asus ROG Thor", price: "$329", stock: "In Stock" },
];

const RAW_HTML_SNIPPETS = [
  `<div class="p-card"><span data-id="MX-9921">RTX 4090 OC</span>...`,
  `<span class="price">$1,599</span><div class="stock">In Stock</div>`,
  `<!-- parsing node #8821 -->`,
  `<div class="p-card"><span data-id="MX-9922">Ryzen 9 7950X</span>...`,
  `<span class="price">$699</span><div class="stock">Low Stock</div>`,
  `fetching inventory_status... 200 OK`,
  `<div class="p-card"><span data-id="MX-9923">Samsung 990 Pro</span>...`,
];

export default function DataExtractionDemo() {
  const [extractedRows, setExtractedRows] = useState<typeof MOCK_DATA_SOURCE>(
    [],
  );
  const [logs, setLogs] = useState<string[]>([]);
  const [scannedCount, setScannedCount] = useState(0);

  // Simulation Loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let logIndex = 0;

    interval = setInterval(() => {
      // Add Log
      setLogs((prev) => [
        ...prev.slice(-8),
        RAW_HTML_SNIPPETS[logIndex % RAW_HTML_SNIPPETS.length],
      ]);
      logIndex++;

      // Every 3 ticks, add a extracted row
      if (logIndex % 3 === 0) {
        const dataIndex = Math.floor(logIndex / 3) % MOCK_DATA_SOURCE.length;
        // If we wrapped around, reset the table for visual continuity or just append
        // For infinite feel, we can keep appending but slice
        setExtractedRows((prev) => {
          const newItem = MOCK_DATA_SOURCE[dataIndex];
          const newRows = [newItem, ...prev].slice(0, 5); // Keep top 5
          return newRows;
        });
        setScannedCount((c) => c + 1);
      }
    }, 600); // Speed of simulation

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#08090a] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <div className="relative group perspective-[1000px]">
            {/* Main Container */}
            <div className="bg-[#0f1011] rounded-xl border border-white/[0.08] shadow-2xl overflow-hidden aspect-[4/3] flex flex-col relative z-10 transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-2">
              {/* Header */}
              <div className="h-10 border-b border-white/[0.06] flex items-center px-4 justify-between bg-[#121314]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-500" />
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                    Parser_Engine.ts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] text-emerald-500 font-medium">
                    Active
                  </span>
                </div>
              </div>

              <div className="flex-1 flex overflow-hidden">
                {/* Raw Stream Zone */}
                <div className="flex-1 p-4 font-mono text-[10px] text-gray-500 border-r border-white/[0.06] bg-[#0A0A0A] relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-[9px] text-white/20 uppercase">
                    Raw Stream
                  </div>
                  <div className="flex flex-col gap-1.5 mt-4">
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className="animate-in slide-in-from-bottom-2 fade-in duration-300 whitespace-nowrap opacity-60"
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                  {/* Scan Line Effect */}
                  <div className="absolute inset-x-0 h-8 bg-blue-500/10 border-b border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-[scan_2s_linear_infinite] pointer-events-none"></div>
                </div>

                {/* Extracted Zone */}
                <div className="w-1/2 bg-[#0f1011] flex flex-col">
                  <div className="p-3 border-b border-white/[0.06] flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-white/60">
                      Structured Output
                    </span>
                    <FileJson className="w-3.5 h-3.5 text-orange-400" />
                  </div>
                  <div className="flex-1 p-3 space-y-2 overflow-hidden">
                    {extractedRows.map((row, i) => (
                      <div
                        key={row.id + i}
                        className="bg-white/[0.03] rounded border border-white/[0.06] p-2 animate-in slide-in-from-right-4 fade-in duration-300"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[11px] text-white font-medium">
                            {row.product}
                          </span>
                          <span className="text-[10px] text-emerald-400">
                            {row.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] text-white/30 font-mono">
                            {row.id}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/50">
                            {row.stock}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </Reveal>

        {/* Right: Copy & Content */}
        <Reveal direction="right" delay={200}>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
              <Database className="w-3 h-3 text-orange-400" />
              <span>Smart Data Extraction</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                Turn the web into your
                <br />
                <span className="text-white/40">private database.</span>
              </h2>
              <p className="text-linear-text-secondary text-lg leading-relaxed max-w-md">
                Unstructured HTML, hidden APIs, or complex SPAs? No problem. Our
                bots parse chaos into clean, actionable JSON in milliseconds.
              </p>
            </div>

            <div className="flex gap-12 border-t border-white/[0.08] pt-8">
              <div>
                <div className="text-3xl font-bold text-white font-mono tabular-nums">
                  {(scannedCount * 14).toLocaleString()}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mt-1">
                  Data Points
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 font-mono">
                  JSON
                </div>
                <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mt-1">
                  Output Format
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
