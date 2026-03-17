import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  User,
  Mail,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

const dates = Array.from({ length: 3 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + 1 + i);
  return {
    day: d.toLocaleDateString("en-US", { weekday: "short" }),
    date: d.getDate(),
    month: d.toLocaleDateString("en-US", { month: "short" }),
    full: d.toISOString(),
  };
});

const times = ["10:00 AM", "02:00 PM", "04:00 PM"];

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"date" | "details" | "success">("date");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const message = `Hi Axiom, I would like to book a Strategy Call.
    
Requested Time: ${selectedDate}, ${selectedTime}
Name: ${name}
Work Email: ${email}

Please confirm availability. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6285199256640?text=${encodedMessage}`;

    // Simulate delay for effect
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setLoading(false);
      setStep("success");
    }, 1000);
  };

  // Reset semua state saat modal ditutup
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setStep("date");
        setSelectedDate(null);
        setSelectedTime(null);
        setLoading(false);
      }, 300); // Tunggu animasi close selesai
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#0f1011] border-white/[0.08] text-white p-0 gap-0 overflow-hidden">
        {step !== "success" && (
          <div className="p-6 border-b border-white/[0.08] bg-white/[0.02]">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold flex items-center gap-2">
                <Video className="w-5 h-5 text-indigo-500" />
                Strategy Session
              </DialogTitle>
              <DialogDescription className="text-zinc-400">
                30-min discovery call for enterprise projects.
              </DialogDescription>
            </DialogHeader>
          </div>
        )}

        <div className="p-6">
          {step === "date" && (
            <div className="space-y-6">
              {/* Date Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Select Date
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(`${d.date} ${d.month}`)}
                      className={cn(
                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200",
                        selectedDate === `${d.date} ${d.month}`
                          ? "bg-indigo-500/10 border-indigo-500 text-white"
                          : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05]",
                      )}
                    >
                      <span className="text-xs font-medium opacity-50">
                        {d.day}
                      </span>
                      <span className="text-lg font-bold">{d.date}</span>
                      <span className="text-xs font-medium">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Select Time (GMT+7)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {times.map((t, i) => (
                    <button
                      key={i}
                      disabled={!selectedDate}
                      onClick={() => setSelectedTime(t)}
                      className={cn(
                        "py-2 rounded-lg border text-sm font-medium transition-all duration-200",
                        !selectedDate
                          ? "opacity-30 cursor-not-allowed border-transparent bg-white/[0.02]"
                          : selectedTime === t
                            ? "bg-indigo-500/10 border-indigo-500 text-white"
                            : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:border-white/20",
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep("details")}
                className="w-full py-3 rounded-xl bg-white text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === "details" && (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      name="name"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-lg flex items-start gap-3">
                <Calendar className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-white">
                    {selectedDate}, {selectedTime}
                  </div>
                  <div className="text-xs text-zinc-400">
                    Google Meet (Link will be emailed)
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : (
                  "Confirm Booking"
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep("date")}
                className="w-full text-xs text-zinc-500 hover:text-white transition-colors"
              >
                Back to Calendar
              </button>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white"> Redirecting to WhatsApp...</h3>
                <p className="text-zinc-400 text-sm max-w-[250px] mx-auto">
                  Opening WhatsApp to finalize your booking with our team.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
