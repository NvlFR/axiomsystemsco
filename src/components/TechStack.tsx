import React from "react";
import { cn } from "@/lib/utils";

const techs = [
  { name: "Go", slug: "go" },
  { name: "Python", slug: "python" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Rust", slug: "rust" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Redis", slug: "redis" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Puppeteer", slug: "puppeteer" },
  { name: "Playwright", slug: "playwright" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Cloudflare", slug: "cloudflare" },
];

export default function TechStack() {
  return (
    <div className="py-24 border-t border-white/[0.08] bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-mono text-zinc-500 mb-12 uppercase tracking-widest">
          Powering Mission-Critical Infrastructure
        </p>

        <div className="relative overflow-hidden w-full mask-linear-fade">
          <div className="flex w-full">
            <div
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-24"
              style={
                { "--duration": "40s", "--gap": "0" } as React.CSSProperties
              }
            >
              {techs.map((tech, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                    alt={tech.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 sm:gap-24 ml-12 sm:ml-24"
              style={
                { "--duration": "40s", "--gap": "0" } as React.CSSProperties
              }
            >
              {techs.map((tech, i) => (
                <div
                  key={`dup-${i}`}
                  className="group flex flex-col items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                    alt={tech.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
