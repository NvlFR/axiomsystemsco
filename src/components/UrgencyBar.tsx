import React from "react";
import { AlertTriangle } from "lucide-react";

export default function UrgencyBar() {
  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-b border-amber-500/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center gap-2 text-[13px] font-medium text-amber-200/90">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
        <span>
          <span className="opacity-75">Update:</span> Q1 Development Slots are{" "}
          <span className="text-amber-100 font-semibold">85% Full</span>. Secure
          your project timeline now.
        </span>
      </div>
    </div>
  );
}
