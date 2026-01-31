import React from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const handleClick = () => {
    const text = `Hello, I'm interested in a custom bot project.`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = "6281234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 animate-pulse"></div>
      <div className="relative h-14 w-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-colors border border-white/10">
        <MessageSquare className="w-6 h-6 text-white fill-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-[6px] text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block pointer-events-none">
        Chat with an Engineer
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </button>
  );
}
