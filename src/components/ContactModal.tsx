import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import { ArrowRight, Lock, Fingerprint } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [requirement, setRequirement] = useState("");

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpenModal);
    return () =>
      window.removeEventListener("open-contact-modal", handleOpenModal);
  }, []);

  // Reset semua field form ke kondisi awal
  const resetForm = () => {
    setName("");
    setPhone("");
    setService("");
    setBudget("");
    setRequirement("");
  };

  // Handler saat modal close — baik via tombol X maupun klik overlay
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(resetForm, 300); // Tunggu animasi close selesai
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `INITIATING PARTNERSHIP REQUEST\n\n- Client Identity: ${name}\n- Contact: ${phone}\n- Service Category: ${service || "Not Specified"}\n- Estimated Budget: ${budget || "Not Specified"}\n- Mission Objective: ${requirement}\n\n[System] Awaiting Engineer Approval...`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = "6285199256640";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    setIsOpen(false);
    setTimeout(resetForm, 300); // Reset setelah modal close
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] border border-white/[0.08] bg-[#0f1011] p-0 overflow-visible shadow-2xl">
        {/* Top Bar (Terminal Style) */}
        <div className="h-10 bg-[#18181b] border-b border-white/[0.08] flex items-center px-4 justify-between relative pl-4 pr-10 rounded-t-lg">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1 mr-4">
            <Lock className="w-3 h-3" />
            SECURE_CHANNEL_ESTABLISHED
          </div>
        </div>

        <div
          className="max-h-[80vh] overflow-y-auto p-8 space-y-6"
          data-lenis-prevent
        >
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
                htmlFor="modal-name"
                className="text-zinc-400 text-xs font-mono uppercase tracking-wider"
              >
                Client Identity / Full Name
              </Label>
              <div className="relative">
                <Input
                  id="modal-name"
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
                htmlFor="modal-phone"
                className="text-zinc-400 text-xs font-mono uppercase tracking-wider"
              >
                Secure Contact Number
              </Label>
              <Input
                id="modal-phone"
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
                  <SelectContent className="bg-[#0f1011] border-white/10 text-white z-[100]">
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
                  <SelectContent className="bg-[#0f1011] border-white/10 text-white z-[100]">
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
                htmlFor="modal-req"
                className="text-zinc-400 text-xs font-mono uppercase tracking-wider"
              >
                Mission Objective
              </Label>
              <Textarea
                id="modal-req"
                placeholder="Describe the target, desired features, and timeline..."
                required
                className="min-h-[100px] bg-[#08090a] border-white/10 focus:border-white/30 focus:ring-0 rounded-lg text-white font-mono placeholder:text-zinc-700 resize-none p-3"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-lg text-sm font-bold bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
            >
              <span>Request Engineer Access</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
