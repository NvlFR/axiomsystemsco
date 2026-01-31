import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  threshold?: number; // 0 to 1
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 700,
  threshold = 0.1,
  direction = "up",
}: RevealProps & { direction?: "up" | "down" | "left" | "right" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "-translate-x-8";
      case "right":
        return "translate-x-8";
      default:
        return "translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-[opacity,transform]",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${getTransform()}`,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
