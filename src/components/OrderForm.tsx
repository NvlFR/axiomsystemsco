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
  ShieldCheck,
  Terminal,
  Fingerprint,
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
    const targetNumber = "6281234567890"; // Example number
    window.open(`https://wa.me/${targetNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-32 px-4 relative border-t border-white/[0.08] bg-[#08090a]"
    >
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Persuasion Copy */}
        <Reveal direction="left">
          <div className="space-y-8">
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
              We don't just build bots; we build unfair advantages. Partner with
              us to secure the infrastructure your business needs to scale.
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
                    No middlemen. Speak directly to the architects.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    NDA & Confidentiality
                  </h4>
                  <p className="text-sm text-zinc-500">
                    Your strategies remain your trade secrets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Terminal Form */}
        <Reveal delay={200} direction="right">
          <Card className="border border-white/[0.08] bg-[#0f1011] shadow-2xl rounded-2xl overflow-hidden relative group">
            {/* Top Bar (Terminal Style) */}
            <div className="h-10 bg-[#18181b] border-b border-white/[0.08] flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                SECURE_CHANNEL_ESTABLISHED
              </div>
            </div>

            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  Initialize Partnership
                </h3>
                <p className="text-sm text-zinc-400">
                  Fill out the manifesto below to request access.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-zinc-400 text-xs font-mono uppercase tracking-wider"
                  >
                    Client Identity / Full Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="Enter your name..."
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#08090a] border-white/10 focus:border-white/30 focus:ring-0 h-10 rounded-lg text-white font-mono placeholder:text-zinc-700 pl-10"
                    />
                    <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-zinc-400 text-xs font-mono uppercase tracking-wider"
                  >
                    Secure Contact Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="i.e. +1 (555) 000-0000"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#08090a] border-white/10 focus:border-white/30 focus:ring-0 h-10 rounded-lg text-white font-mono placeholder:text-zinc-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-zinc-400 text-xs font-mono uppercase tracking-wider">
                      Service Category
                    </Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-[#08090a] border-white/10 h-10 text-white font-mono">
                        <SelectValue placeholder="Select..." />
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
                      <SelectTrigger className="bg-[#08090a] border-white/10 h-10 text-white font-mono">
                        <SelectValue placeholder="Range..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0f1011] border-white/10 text-white">
                        <SelectItem value="< $1k">Under $1k</SelectItem>
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
                    Mission Objective
                  </Label>
                  <Textarea
                    id="req"
                    placeholder="Describe the target, desired features, and timeline..."
                    required
                    className="min-h-[100px] bg-[#08090a] border-white/10 focus:border-white/30 focus:ring-0 rounded-lg text-white font-mono placeholder:text-zinc-700 resize-none p-3"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-lg text-sm font-bold bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <span>Request Engineer Access</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-[10px] text-center text-zinc-600">
                  By clicking above, you agree to initiate a secure WhatsApp
                  encryption tunnel.
                </p>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
