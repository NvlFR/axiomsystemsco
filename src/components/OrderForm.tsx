import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Lock,
  BadgeCheck,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `INITIATING PARTNERSHIP REQUEST\n\n- Client Identity: ${name}\n- Contact: ${phone}\n- Service Category: ${service || "Not Specified"}\n- Estimated Budget: ${budget || "Not Specified"}\n- Mission Objective: ${requirement}\n\n[System] Awaiting Engineer Approval...`;

    const encodedText = encodeURIComponent(text);
    const targetNumber = "6285199256640"; // Example number
    window.open(`https://wa.me/${targetNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 relative border-t border-white/[0.08] bg-[#08090a]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Persuasion Copy */}
        <Reveal direction="left">
          <div className="space-y-10 sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Slots Available for Q1</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Ready to dominate <br /> your market?
            </h2>

            <p className="text-xl text-zinc-400 leading-relaxed">
              Kami tidak hanya membangun bot; kami membangun keunggulan kompetitif. Bermitralah dengan
              kami untuk mengamankan infrastruktur yang dibutuhkan bisnis Anda untuk scale-up.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    Direct Engineer Access
                  </h4>
                  <p className="text-sm text-zinc-500">
                    Tanpa perantara. Berbicara langsung dengan para engineer kami.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-6 bg-emerald-500/10 border-l-[3px] border-emerald-500/50 rounded-r-xl">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    Ironclad Confidentiality
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Rahasia dagang Anda aman. Kami memprioritaskan privasi standar NDA untuk setiap deployment.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </Reveal>

        {/* Right: Terminal Form */}
        <Reveal delay={200} direction="right">
          <Card className="border border-white/[0.08] bg-[#0f1011] shadow-2xl rounded-xl overflow-hidden">
            {/* Top Bar (Clean Terminal Style) */}
            <div className="h-12 bg-white/[0.02] border-b border-white/[0.08] flex items-center px-6 justify-between">
              <div className="flex gap-2 opacity-50">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-2">
                <Lock className="w-3 h-3" />
                <span>ENCRYPTED_CONNECTION</span>
              </div>
            </div>

            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  Initialize Partnership
                </h3>
                <p className="text-sm text-zinc-400">
                  Isi formulir di bawah ini untuk memulai kerjasama.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest"
                    >
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/[0.03] border-white/[0.1] focus:border-white/30 h-12 rounded-xl text-white placeholder:text-zinc-600 pl-4 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest"
                    >
                      Nomor WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+62..."
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white/[0.03] border-white/[0.1] focus:border-white/30 h-12 rounded-xl text-white font-mono transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                      Service Category
                    </Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-white/[0.02] border-white/[0.08] focus:border-white/20 focus:bg-white/[0.04] focus:ring-0 h-11 text-white font-mono transition-colors">
                        <SelectValue placeholder="Pilih..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0f1011] border-white/10 text-white">
                        <SelectItem value="Sniper Bot">Sniper Bot</SelectItem>
                        <SelectItem value="Web Scraper">Web Scraper</SelectItem>
                        <SelectItem value="Full Automation">
                          Full Automation
                        </SelectItem>
                        <SelectItem value="Consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                      Estimated Budget
                    </Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger className="bg-white/[0.02] border-white/[0.08] focus:border-white/20 focus:bg-white/[0.04] focus:ring-0 h-11 text-white font-mono transition-colors">
                        <SelectValue placeholder="Estimasi..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0f1011] border-white/10 text-white">
                        <SelectItem value="< $1k">Dibawah $1k</SelectItem>
                        <SelectItem value="$1k - $5k">$1k - $5k</SelectItem>
                        <SelectItem value="$5k - $10k">$5k - $10k</SelectItem>
                        <SelectItem value="$10k+">$10k+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="req"
                    className="text-zinc-400 text-xs font-mono uppercase tracking-wider"
                  >
                    Ceritain project atau masalah yang mau kamu otomasi
                  </Label>
                  <Textarea
                    id="req"
                    placeholder="Contoh: Saya butuh bot buat monitoring harga kompetitor di marketplace tiap jam dan masukin datanya ke Google Sheet..."
                    required
                    className="bg-white/[0.02] border-white/[0.08] focus:border-white/20 focus:bg-white/[0.04] focus:ring-0 min-h-[120px] rounded-lg text-white font-mono placeholder:text-zinc-600 resize-none p-3 transition-colors"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all transform hover:scale-[1.02]"
                >
                  <span>Request Engineer Access</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-[10px] text-center text-zinc-600">
                  Dengan mengklik tombol di atas, Anda menyetujui untuk memulai terowongan enkripsi WhatsApp yang aman.
                </p>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
