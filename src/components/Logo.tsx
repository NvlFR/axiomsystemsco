import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.ComponentProps<"div"> {
  className?: string; // Class for the outer container
  iconClassName?: string; // Class for the SVG icon
  textClassName?: string; // Class for the text
  withText?: boolean;
}

export default function Logo({
  className,
  iconClassName,
  textClassName,
  withText = false,
  ...props
}: LogoProps) {
  return (
    <div
      className={cn("flex items-center gap-2 select-none", className)}
      {...props}
    >
      {/* The Logo Mark */}
      <div className="relative flex items-center justify-center">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full opacity-50"></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cn("w-6 h-6 text-white relative z-10", iconClassName)}
        >
          {/* The 'A' Frame - Modern Geometric */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2L2 22H7L12 12L17 22H22L12 2ZM12 6.5L14.5 11.5H9.5L12 6.5Z"
            className="opacity-90"
          />
          {/* The Singularity Core (The 'Axiom') */}
          <path
            d="M11 15H13V17H11V15Z"
            className="text-emerald-500 animate-pulse"
            fill="currentColor"
          />
        </svg>
      </div>

      {withText && (
        <span
          className={cn(
            "text-[16px] font-bold text-white tracking-tight leading-none",
            textClassName,
          )}
        >
          Axiom<span className="text-white/40 font-medium">Systems</span>
        </span>
      )}
    </div>
  );
}
