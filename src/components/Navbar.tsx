import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#casestudies" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-[100] border-b border-white/[0.08] transition-all duration-300",
          scrolled || isOpen
            ? "bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/40"
            : "bg-transparent backdrop-blur-none border-transparent",
        )}
      >
        <div className="max-w-[1240px] mx-auto px-6 h-[64px] flex items-center justify-between relative">
          {/* Logo */}
          <a href="/" className="decoration-0 relative z-[60]">
            <Logo withText />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 relative z-[60]">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking-modal"))
              }
              className="hidden sm:inline-flex h-[32px] px-3.5 bg-white text-black hover:bg-zinc-200 border-0 font-medium transition-all rounded-[6px] text-[13px] shadow-sm cursor-pointer items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              Book Strategy Call
            </button>

            {/* Mobile Hamburger (Library) */}
            <div className="md:hidden text-white">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={24}
                rounded
                label="Show menu"
                hideOutline={false}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[98] bg-[#050505] pt-[80px] px-6 md:hidden flex flex-col items-center gap-8"
          >
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>

            <div className="flex flex-col items-center gap-6 w-full relative z-10">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white tracking-tight hover:text-white/70 transition-colors py-2"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
                className="h-px w-24 bg-white/10 my-2"
              ></motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-booking-modal"));
                  setIsOpen(false);
                }}
                className="w-full max-w-xs h-[52px] bg-white text-black font-bold rounded-xl text-lg hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Book Strategy Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
