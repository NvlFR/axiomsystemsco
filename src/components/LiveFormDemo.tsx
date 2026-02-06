import React, { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import {
  Bot,
  CheckCircle2,
  Zap,
  Lock,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2,
} from "lucide-react";

const MOCK_PROFILES = [
  { name: "Alex Chen", email: "alex.c@example.com", cc: "4242 **** **** 9921" },
  { name: "Sarah Jones", email: "s.jones@test.org", cc: "5500 **** **** 3328" },
  { name: "Mike Ross", email: "m.ross@law.net", cc: "4111 **** **** 8821" },
];

export default function LiveFormDemo() {
  const [step, setStep] = useState<
    "navigating" | "captcha" | "filling" | "submitting" | "success"
  >("navigating");
  const [profileIndex, setProfileIndex] = useState(0);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [url, setUrl] = useState("about:blank");
  const [captchaProgress, setCaptchaProgress] = useState(0);
  const [processedCount, setProcessedCount] = useState(1420);

  // Typing helper
  const typeText = (
    text: string,
    setter: (val: string) => void,
    startDelay: number,
  ) => {
    let currentText = "";
    text.split("").forEach((char, i) => {
      setTimeout(
        () => {
          currentText += char;
          setter(currentText);
        },
        startDelay + i * 30,
      ); // 30ms per char typing speed
    });
  };

  useEffect(() => {
    let currentProfile = MOCK_PROFILES[profileIndex % MOCK_PROFILES.length];
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      // Reset
      setField1("");
      setField2("");
      setField3("");
      setStep("navigating");
      setUrl("about:blank");
      setCaptchaProgress(0);

      // Step 1: Navigation
      timeouts.push(
        setTimeout(() => {
          setUrl("https://checkout.ticketmaster.com/v2/secure");
        }, 500),
      );

      timeouts.push(
        setTimeout(() => {
          setStep("captcha");
        }, 1200),
      );

      // Step 2: Captcha Solving
      timeouts.push(setTimeout(() => setCaptchaProgress(30), 1500));
      timeouts.push(setTimeout(() => setCaptchaProgress(60), 1800));
      timeouts.push(setTimeout(() => setCaptchaProgress(100), 2100));

      timeouts.push(
        setTimeout(() => {
          setStep("filling");
        }, 2400),
      );

      // Step 3: Filling with Typing Animation
      // Field 1
      const nameTypeTime = currentProfile.name.length * 30;
      const emailTypeTime = currentProfile.email.length * 30;

      timeouts.push(
        setTimeout(() => {
          typeText(currentProfile.name, setField1, 0);
        }, 2600),
      );

      // Field 2 (start after name finishes)
      timeouts.push(
        setTimeout(
          () => {
            typeText(currentProfile.email, setField2, 0);
          },
          2600 + nameTypeTime + 200,
        ),
      ); // +200ms delay between fields

      // Field 3 (start after email finishes)
      timeouts.push(
        setTimeout(
          () => {
            typeText(currentProfile.cc, setField3, 0);
          },
          2600 + nameTypeTime + 200 + emailTypeTime + 200,
        ),
      );

      // Step 4: Submit
      const totalTypingTime =
        nameTypeTime +
        200 +
        emailTypeTime +
        200 +
        currentProfile.cc.length * 30;

      timeouts.push(
        setTimeout(
          () => {
            setStep("submitting");
          },
          2600 + totalTypingTime + 300,
        ),
      );

      timeouts.push(
        setTimeout(
          () => {
            setStep("success");
            setProcessedCount((c) => c + 1);
          },
          2600 + totalTypingTime + 300 + 600,
        ),
      );

      // Loop - Trigger next profile
      timeouts.push(
        setTimeout(
          () => {
            setProfileIndex((i) => i + 1);
          },
          2600 + totalTypingTime + 300 + 600 + 1500,
        ),
      );
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, [profileIndex]); // Depend on profileIndex to re-trigger for next profile

  return (
    <div className="py-16 md:py-24 bg-[#08090a] border-y border-white/[0.08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <Reveal direction="left">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
              <Zap className="w-3 h-3 fill-purple-500" />
              <span>Live Automation Engine</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[0.95] md:leading-tight">
                We bypass obstacles.
                <br />
                <span className="text-white/40">You get the result.</span>
              </h2>
              <p className="text-zinc-300 md:text-linear-text-secondary text-lg leading-relaxed max-w-md">
                Our bots don't just fill forms. They emulate human biometric
                data to bypass Cloudflare and ReCaptcha V3 invisibly.
              </p>
            </div>

            <div className="flex gap-12 border-t border-white/[0.08] pt-8">
              <div>
                <div className="text-3xl font-bold text-white font-mono tabular-nums">
                  {processedCount.toLocaleString()}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mt-1">
                  Successful Checkouts
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 font-mono">
                  99.8%
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mt-1">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Browser Simulator */}
        <Reveal delay={200} direction="right">
          <div className="relative group perspective-[1000px]">
            {/* The Mock Browser Window */}
            {/* The Mock Browser Window */}
            {/* The Mock Browser Window */}
            <div className="relative z-10 w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-[#0f1011] rounded-xl border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-700 md:hover:rotate-y-2 md:hover:rotate-x-2">
                {/* Browser Toolbar */}
                <div className="h-10 shrink-0 bg-[#121314] flex items-center px-3 gap-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex gap-2 text-white/20">
                    <ChevronLeft className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4" />
                    <RefreshCw
                      className={`w-4 h-4 ${step === "navigating" ? "animate-spin" : ""}`}
                    />
                  </div>
                  <div className="flex-1 h-7 bg-white/[0.03] rounded flex items-center px-3 text-[11px] text-white/60 font-mono truncate">
                    <Lock className="w-3 h-3 mr-2 text-emerald-500" />
                    {url}
                  </div>
                </div>

                {/* Browser Viewport */}
                <div className="flex-1 bg-white relative p-2 md:p-4 font-sans flex flex-col items-center justify-center overflow-hidden">
                  {/* Website Header Mock */}
                  <div className="w-full h-8 md:h-10 border-b border-gray-100 flex items-center justify-between mb-2 md:mb-4 shrink-0">
                    <div className="w-20 md:w-24 h-3 md:h-4 bg-gray-200 rounded"></div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>

                  {/* The Checkout Form */}
                  <div
                    className={`w-[90%] md:w-full md:max-w-sm space-y-2 md:space-y-3 transition-opacity duration-500 ${step === "navigating" ? "opacity-0" : "opacity-100"}`}
                  >
                    <div className="h-3 md:h-4 w-24 md:w-32 bg-gray-200 rounded mb-2 md:mb-4"></div>

                    <div className="space-y-0.5 md:space-y-1">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">
                        Full Name
                      </label>
                      <div
                        className={`h-8 md:h-10 w-full border rounded px-2 md:px-3 flex items-center text-xs md:text-sm font-medium text-gray-900 transition-colors whitespace-nowrap overflow-hidden ${field1 ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-gray-50"}`}
                      >
                        {field1}
                        <span
                          className={`w-0.5 h-3 md:h-4 bg-blue-600 animate-pulse ml-0.5 ${step === "filling" && !field2 && !field3 ? "inline-block" : "hidden"}`}
                        ></span>
                      </div>
                    </div>

                    <div className="space-y-0.5 md:space-y-1">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">
                        Email Address
                      </label>
                      <div
                        className={`h-8 md:h-10 w-full border rounded px-2 md:px-3 flex items-center text-xs md:text-sm font-medium text-gray-900 transition-colors whitespace-nowrap overflow-hidden ${field2 ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-gray-50"}`}
                      >
                        {field2}
                        <span
                          className={`w-0.5 h-3 md:h-4 bg-blue-600 animate-pulse ml-0.5 ${step === "filling" && field1 && !field3 ? "inline-block" : "hidden"}`}
                        ></span>
                      </div>
                    </div>

                    <div className="space-y-0.5 md:space-y-1">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">
                        Payment Method
                      </label>
                      <div
                        className={`h-8 md:h-10 w-full border rounded px-2 md:px-3 flex items-center text-xs md:text-sm font-medium text-gray-900 transition-colors whitespace-nowrap overflow-hidden ${field3 ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-gray-50"}`}
                      >
                        {field3}
                        <span
                          className={`w-0.5 h-3 md:h-4 bg-blue-600 animate-pulse ml-0.5 ${step === "filling" && field2 ? "inline-block" : "hidden"}`}
                        ></span>
                      </div>
                    </div>

                    <div
                      className={`mt-2 md:mt-4 h-9 md:h-12 w-full rounded font-bold text-white flex items-center justify-center transition-colors duration-200 text-xs md:text-sm shrink-0 ${step === "success" ? "bg-emerald-500" : "bg-black"}`}
                    >
                      {step === "submitting" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : step === "success" ? (
                        "Order Confirmed"
                      ) : (
                        "Place Order"
                      )}
                    </div>
                  </div>
                  {/* Captcha Overlay */}
                  {step === "captcha" && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-lg shadow-2xl border border-gray-100 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 flex items-center justify-center relative">
                          <div
                            className="absolute inset-0 border-4 border-blue-500 rounded-full"
                            style={{
                              clipPath: `inset(0 ${100 - captchaProgress}% 0 0)`,
                            }}
                          ></div>
                          <Bot className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">
                            Security Check
                          </div>
                          <div className="text-xs text-gray-500">
                            Bypassing ReCaptcha V3...
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bot Cursor */}
                  <div
                    className="absolute z-50 w-6 h-6 pointer-events-none transition-all duration-300 ease-out"
                    style={{
                      top:
                        step === "filling"
                          ? field1
                            ? field2
                              ? "55%"
                              : "48%"
                            : "40%"
                          : step === "submitting"
                            ? "85%"
                            : "10%",
                      left:
                        step === "filling"
                          ? "80%"
                          : step === "submitting"
                            ? "50%"
                            : "10%",
                      opacity: step === "navigating" ? 0 : 1,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                        fill="#7C3AED"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute top-4 left-4 bg-purple-600 text-[10px] text-white px-1.5 py-0.5 rounded font-mono whitespace-nowrap">
                      Axiom Bot
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Glow */}
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
