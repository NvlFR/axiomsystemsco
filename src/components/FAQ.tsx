import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  Shield,
  Clock,
  Code2,
  RefreshCw,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Fingerprint,
  Globe,
  Zap,
  Lock,
  Network,
  Puzzle,
  Database,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: "bans",
    question: "Apakah Anda menjamin saya tidak akan terkena ban?",
    answer:
      "Kami menggunakan fingerprinting browser tingkat lanjut dan rotasi proxy residensial untuk meniru perilaku manusia secara sempurna. Meskipun tidak ada otomasi yang 100% bebas risiko, metode kami secara statistik jauh lebih aman daripada spamming manual.",
    icon: Shield,
  },
  {
    id: "speed",
    question: "Seberapa cepat Anda bisa membangun bot kustom?",
    answer:
      "Target umum (Ticketmaster, Shopify) dapat dideploy dalam 48 jam. Situs kustom yang kompleks biasanya membutuhkan 5-10 hari kerja untuk riset dan pengujian.",
    icon: Clock,
  },
  {
    id: "source",
    question: "Apakah Anda menawarkan source code?",
    answer:
      "Ya, untuk paket Enterprise kami menyediakan source code lengkap dan dokumentasi. Deployment standar dilisensikan sebagai managed executables.",
    icon: Code2,
  },
  {
    id: "updates",
    question: "Apa yang terjadi jika website target update?",
    answer:
      "Kami menawarkan layanan maintenance. Jika situs target mengubah proteksi anti-bot mereka, kami akan melakukan patch pada software Anda dalam waktu 24-48 jam.",
    icon: RefreshCw,
  },
  {
    id: "scaling",
    question: "Bisakah saya menjalankan 10.000+ task secara bersamaan?",
    answer:
      "Tentu saja. Arsitektur kami dibangun di atas Kubernetes dan microservices Go yang stateless. Kami dapat melakukan scale secara horizontal untuk menangani beban tanpa batas selama Anda memiliki proxy yang mendukung.",
    icon: Network,
  },
  {
    id: "integration",
    question: "Bisakah Anda berintegrasi dengan API saya yang sudah ada?",
    answer:
      "Ya. Kami mendukung webhooks, REST API, GraphQL, dan koneksi database langsung (Postgres/Redis). Kami dapat menyalurkan data langsung ke CRM atau dashboard Anda.",
    icon: Puzzle,
  },
  {
    id: "pricing",
    question: "Bagaimana Anda menangani harga?",
    answer:
      "Kami beroperasi dengan struktur biaya berbasis proyek, mulai dari Rp 3.000.000 untuk otomasi standar. Maintenance ditagih bulanan atau tahunan.",
    icon: CreditCard,
  },
  {
    id: "legal",
    question: "Apakah sistem otomasi atau bot ini legal?",
    answer: "Kami bekerja di area fungsionalitas browser otomatis dan API integration. Kami selalu memprioritaskan metode yang aman (Slow-scraping, Proxy rotation, Human-mimicry) untuk memastikan akun kamu tetap aman dan tidak melanggar ToS platform secara agresif.",
    icon: Shield,
  },
  {
    id: "maintenance_indo",
    question: "Gimana kalau websitenya update dan bot-nya mati?",
    answer: "Tenang, sistem kami didesain dengan monitoring otomatis. Kalau ada perubahan selector atau struktur di web target, tim engineer kami bakal langsung dapet notif dan melakukan update secepatnya agar downtime minimal.",
    icon: RefreshCw,
  },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="faq"
      className="py-32 px-6 relative border-t border-white/[0.08] bg-[#08090a]"
    >
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Questions List */}
        <Reveal direction="left">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>Knowledge Base</span>
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-white leading-tight">
                Common questions.
                <br />
                <span className="text-white/40">Technical answers.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <div
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "group p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4",
                      activeTab === index
                        ? "bg-[#18181b] border-white/10 shadow-2xl scale-[1.02]"
                        : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/[0.05]",
                    )}
                  >
                    <div
                      className={cn(
                        "mt-1 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                        activeTab === index
                          ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                          : "bg-white/[0.05] text-zinc-500 group-hover:bg-white/[0.08] group-hover:text-zinc-300",
                      )}
                    >
                      <faq.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3
                        className={cn(
                          "text-lg font-bold transition-colors duration-300",
                          activeTab === index
                            ? "text-white"
                            : "text-zinc-400 group-hover:text-zinc-200",
                        )}
                      >
                        {faq.question}
                      </h3>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                          activeTab === index
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <p className="overflow-hidden text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-3 mt-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < faqs.length - 1 && (
                    <div className="mx-8 h-px bg-white/[0.03]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: Dynamic Visual Context */}
        <Reveal delay={200} direction="right">
          <div className="relative h-full min-h-[500px] hidden lg:block">
            <div className="sticky top-32">
              <div className="relative w-full aspect-square bg-[#0f1011] rounded-2xl border border-white/[0.08] overflow-hidden p-8 flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                {/* VISUAL: Bans (Proxy Rotation) */}
                {activeTab === 0 && (
                  <div className="relative w-full max-w-sm animate-in fade-in zoom-in-95 duration-500">
                    {/* Target Site */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 bg-white/10 text-white px-4 py-2 rounded-lg border border-white/10 text-xs font-mono flex items-center gap-2">
                      <Lock className="w-3 h-3" /> Target Server
                    </div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-[300px] -top-8 pointer-events-none visible overflow-visible" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <path
                        d="M 150 10 L 40 120"
                        stroke="#333"
                        strokeDasharray="4 4"
                        className="animate-pulse"
                        fill="none"
                      />
                      <path
                        d="M 150 10 L 150 120"
                        stroke="#333"
                        strokeDasharray="4 4"
                        className="animate-pulse"
                        fill="none"
                      />
                      <path
                        d="M 150 10 L 260 120"
                        stroke="#333"
                        strokeDasharray="4 4"
                        className="animate-pulse"
                        fill="none"
                      />
                    </svg>

                    {/* Proxies */}
                    <div className="flex justify-between mt-12 mb-12">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-2"
                        >
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full bg-[#18181b] border border-white/10 flex items-center justify-center relative",
                              i === 2
                                ? "border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                : "",
                            )}
                          >
                            <Globe
                              className={cn(
                                "w-4 h-4",
                                i === 2 ? "text-emerald-500" : "text-zinc-600",
                              )}
                            />
                            {i === 2 && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                            )}
                          </div>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            Proxy {i}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* User */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Fingerprint className="w-8 h-8 text-zinc-400" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                        Identity Masked
                      </div>
                    </div>
                  </div>
                )}

                {/* VISUAL: Speed (Timeline) */}
                {activeTab === 1 && (
                  <div className="w-full max-w-sm space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-500 font-mono uppercase">
                        <span>Start</span>
                        <span>48 Hours</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[80%] rounded-full animate-[width_1s_ease-out]"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-2xl font-bold text-white mb-1">
                          200ms
                        </div>
                        <div className="text-xs text-zinc-500">
                          Avg. Response
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-2xl font-bold text-white mb-1">
                          99.9%
                        </div>
                        <div className="text-xs text-zinc-500">
                          Success Rate
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VISUAL: Source Code */}
                {activeTab === 2 && (
                  <div className="w-full max-w-sm rounded-xl bg-[#0d0e0f] border border-white/10 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="h-8 bg-[#18181b] border-b border-white/5 flex items-center px-3 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                      <span className="ml-2 text-[10px] text-zinc-500 font-mono">
                        bot_engine.go
                      </span>
                    </div>
                    <div className="p-4 font-mono text-[10px] text-zinc-400 space-y-1.5">
                      <div className="flex">
                        <span className="text-purple-400 w-6">func</span>{" "}
                        <span className="text-blue-400">ExecuteSnipe</span>(){" "}
                        {"{"}
                      </div>
                      <div className="pl-4 text-zinc-500">
                        // Initialize client
                      </div>
                      <div className="pl-4 flex">
                        <span className="text-red-400">go</span>{" "}
                        <span className="text-white">client.Connect()</span>
                      </div>
                      <div className="pl-4 text-zinc-500">
                        // Bypass protection
                      </div>
                      <div className="pl-4 flex">
                        <span className="text-white">fingerprint</span> :={" "}
                        <span className="text-yellow-400">GenerateJA3()</span>
                      </div>
                      <div className="pl-4 text-zinc-500 flex">
                        <span className="text-green-400">return</span>{" "}
                        <span className="text-white">success</span>
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                )}

                {/* VISUAL: Updates (Status) */}
                {activeTab === 3 && (
                  <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse"></div>
                      <div className="relative w-24 h-24 rounded-full bg-[#18181b] border border-emerald-500/30 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        System Patched
                      </h4>
                      <p className="text-sm text-zinc-500 mt-2">
                        Update terakhir:{" "}
                        <span className="text-emerald-400">2 mins ago</span>
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>Auto-Deploying Fix...</span>
                    </div>
                  </div>
                )}

                {/* VISUAL: Scaling (New) */}
                {activeTab === 4 && (
                  <div className="w-full max-w-sm animate-in fade-in duration-500 relative">
                    {/* Server Cluster */}
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="p-3 bg-[#18181b] border border-white/10 rounded-lg flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="space-y-1">
                            <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
                            <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                      <div className="text-2xl font-bold text-blue-400 font-mono">
                        10,000+
                      </div>
                      <div className="text-xs text-blue-300/60 uppercase tracking-widest mt-1">
                        Active Threads
                      </div>
                    </div>
                  </div>
                )}

                {/* VISUAL: Integration (New) */}
                {activeTab === 5 && (
                  <div className="w-full max-w-sm animate-in fade-in slide-in-from-left-4 duration-500 flex items-center justify-center gap-4">
                    {/* Our Bot */}
                    <div className="w-20 h-20 bg-[#18181b] border border-white/10 rounded-xl flex items-center justify-center flex-col gap-2">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      <span className="text-[10px] text-zinc-500">System</span>
                    </div>

                    {/* Connection */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-yellow-400 to-purple-400 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0f1011] border border-white/20 rounded-full flex items-center justify-center">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Your App */}
                    <div className="w-20 h-20 bg-[#18181b] border border-white/10 rounded-xl flex items-center justify-center flex-col gap-2">
                      <Database className="w-6 h-6 text-purple-400" />
                      <span className="text-[10px] text-zinc-500">Your DB</span>
                    </div>
                  </div>
                )}

                {/* VISUAL: Pricing */}
                {activeTab === 6 && (
                  <div className="w-full max-w-xs space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-4 rounded-xl bg-[#18181b] border border-white/10 flex justify-between items-center opacity-50 scale-95">
                      <div className="text-sm font-medium text-zinc-400">
                        Starter
                      </div>
                      <div className="text-sm font-mono text-zinc-600">
                        $1.5k
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#18181b] to-[#0f1011] border border-white/20 shadow-xl flex justify-between items-center scale-105 relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-500 text-[10px] font-bold text-white rounded-full">
                        POPULAR
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          Standard
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          For most businesses
                        </div>
                      </div>
                      <div className="text-lg font-mono text-white">
                        $3.5k<span className="text-sm text-zinc-500">/mo</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#18181b] border border-white/10 flex justify-between items-center opacity-50 scale-95">
                      <div className="text-sm font-medium text-zinc-400">
                        Elite
                      </div>
                      <div className="text-sm font-mono text-zinc-600">
                        Custom
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
