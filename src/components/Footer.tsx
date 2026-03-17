import React from "react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import { Twitter, Github, Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/[0.08] bg-[#08090a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <Reveal>
              <a href="/" className="inline-block decoration-0 group">
                <Logo withText />
              </a>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm text-linear-text-secondary leading-relaxed max-w-xs">
                Building the digital infrastructure for the next generation of
                autonomous businesses.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-2 md:col-start-7 space-y-6">
            <Reveal delay={100}>
              <h4 className="text-[14px] font-medium text-white">Solutions</h4>
              <ul className="space-y-3 text-[14px] text-linear-text-secondary">
                <li>
                  <a href="#services" className="hover:text-white transition-colors block">
                    Custom Bots
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors block">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors block">
                    Data Extraction
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors block">
                    Case Studies
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Reveal delay={200}>
              <h4 className="text-[14px] font-medium text-white">Company</h4>
              <ul className="space-y-3 text-[14px] text-linear-text-secondary">
                <li><a href="#contact" className="hover:text-white transition-colors block">About</a></li>
                <li><a href="#process" className="hover:text-white transition-colors block">Process </a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors block">Contact</a></li>
              </ul>
            </Reveal>
          </div>

          {/* Links Column 3 */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Reveal delay={300}>
              <h4 className="text-[14px] font-medium text-white">Legal</h4>
              <ul className="space-y-3 text-[14px] text-linear-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors block">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Security</a></li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={400}>
          <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-linear-text-secondary">
              &copy; {currentYear} AxiomSystemsCo. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-medium text-emerald-500 uppercase tracking-wide">
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
