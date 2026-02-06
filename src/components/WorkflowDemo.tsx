import React, { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import {
  GitBranch,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  Zap,
  Cpu,
  Activity,
} from "lucide-react";

type NodeStatus = "idle" | "active" | "success" | "skipped";

interface WorkflowNode {
  id: string;
  label: string;
  type: "start" | "action" | "decision" | "end";
  x: number;
  y: number;
}

const NODES: WorkflowNode[] = [
  { id: "start", label: "Trigger", type: "start", x: 15, y: 50 },
  { id: "check_stock", label: "Inventory Check", type: "action", x: 40, y: 50 },
  { id: "decision", label: "Stock Available?", type: "decision", x: 65, y: 50 },
  // Branch UP
  { id: "supplier", label: "Auto-Reorder", type: "action", x: 65, y: 20 },
  // Convergence / Next Step
  { id: "process", label: "Process Order", type: "action", x: 90, y: 50 },
  { id: "notify", label: "Notify Client", type: "end", x: 90, y: 80 },
];

export default function WorkflowDemo() {
  const [activeNodeId, setActiveNodeId] = useState<string>("start");
  const [statuses, setStatuses] = useState<Record<string, NodeStatus>>({});
  const [path, setPath] = useState<number>(0);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      // Start Reset Phase
      setIsResetting(true);

      // Wait for fade out, then reset state
      timeouts.push(
        setTimeout(() => {
          setStatuses({});
          setActiveNodeId("start");
          const currentPath = Math.random() > 0.5 ? 0 : 1;
          setPath(currentPath);

          // Fade back in
          setIsResetting(false);

          const sequence =
            currentPath === 0
              ? ["start", "check_stock", "decision", "process", "notify"] // Happy Path
              : [
                  "start",
                  "check_stock",
                  "decision",
                  "supplier",
                  "process",
                  "notify",
                ]; // Complex Path

          let delay = 500; // Initial delay after fade in

          sequence.forEach((nodeId, index) => {
            // Activate Node
            timeouts.push(
              setTimeout(() => {
                setActiveNodeId(nodeId);
                setStatuses((prev) => ({ ...prev, [nodeId]: "active" }));
              }, delay),
            );

            // Complete Node
            timeouts.push(
              setTimeout(() => {
                setStatuses((prev) => ({ ...prev, [nodeId]: "success" }));
              }, delay + 800),
            );

            delay += 1000;
          });

          // Restart Loop
          timeouts.push(setTimeout(runSequence, delay + 2000));
        }, 500), // Wait 500ms for fade out
      );
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-24 bg-[#08090a] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <Reveal direction="left">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono">
              <GitBranch className="w-3 h-3 text-pink-400" />
              <span>Intelligent Orchestration</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[0.95] md:leading-tight">
                Complex logic?
                <br />
                <span className="text-white/40">Handled gracefully.</span>
              </h2>
              <p className="text-zinc-300 md:text-linear-text-secondary text-lg leading-relaxed max-w-md">
                From simple sequences to multi-step branching logic with error
                recovery. Our bots adapt to dynamic conditions in real-time.
              </p>
            </div>

            <div className="flex gap-12 border-t border-white/[0.08] pt-8">
              <div>
                <div className="text-3xl font-bold text-white font-mono">
                  Infinite
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mt-1">
                  Scalability
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 font-mono">
                  0%
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 font-semibold mt-1">
                  Downtime
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Visualization (The Engine) */}
        <Reveal direction="right" delay={200}>
          <div className="relative group order-1 lg:order-2 perspective-[1000px]">
            {/* Main Container - Aspect Ratio 4/3 to match other demos */}
            <div className="bg-[#0f1011] rounded-xl border border-white/[0.08] shadow-2xl skew-y-1 overflow-hidden aspect-[4/3] flex flex-col relative z-10 transition-transform duration-500 md:group-hover:rotate-x-2 md:group-hover:rotate-y-2 group-hover:skew-y-0">
              {/* Header */}
              <div className="h-10 border-b border-white/[0.06] flex items-center px-4 justify-between bg-[#121314]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-pink-500" />
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                    Orchestrator_v3
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pink-500"></span>
                  </span>
                  <span className="text-[9px] text-zinc-400 font-medium uppercase tracking-wide">
                    Live
                  </span>
                </div>
              </div>

              {/* Canvas */}
              <div
                className={`flex-1 relative bg-[#0B0C0D] p-6 overflow-hidden transition-all duration-500 ${isResetting ? "opacity-0" : "opacity-100 group-hover:bg-[#0c0d0e]"}`}
              >
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                {/* SVG Connections & Particles */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  <defs>
                    <linearGradient
                      id="active-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter
                      id="glow-intense"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Base Lines (Darker, Thicker) */}
                  <g stroke="#27272a" strokeWidth="2" strokeLinecap="round">
                    {/* Start -> Check */}
                    <path d="M 15% 50% L 40% 50%" />
                    {/* Check -> Decision */}
                    <path d="M 40% 50% L 65% 50%" />

                    {/* Decision -> Process (Happy) */}
                    <path d="M 65% 50% L 90% 50%" />

                    {/* Decision -> Supplier (Branch UP) */}
                    <path
                      d="M 65% 50% L 65% 20% L 80% 20%"
                      fill="none"
                      className="transition-all duration-300"
                    />

                    {/* Supplier -> Process (Convergence) */}
                    <path d="M 65% 20% L 90% 20% L 90% 50%" fill="none" />

                    {/* Process -> Notify */}
                    <path d="M 90% 50% L 90% 80%" />
                  </g>

                  {/* Active Particles */}
                  {statuses["check_stock"] === "active" && (
                    <circle
                      r="3"
                      fill="url(#active-gradient)"
                      filter="url(#glow-intense)"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="indefinite"
                        path="M 15% 50% L 40% 50%"
                      />
                    </circle>
                  )}
                  {statuses["decision"] === "active" && (
                    <circle
                      r="3"
                      fill="url(#active-gradient)"
                      filter="url(#glow-intense)"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="indefinite"
                        path="M 40% 50% L 65% 50%"
                      />
                    </circle>
                  )}

                  {/* Happy Path */}
                  {statuses["process"] === "active" && path === 0 && (
                    <circle
                      r="3"
                      fill="url(#active-gradient)"
                      filter="url(#glow-intense)"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="indefinite"
                        path="M 65% 50% L 90% 50%"
                      />
                    </circle>
                  )}

                  {/* Branch Path UP */}
                  {statuses["supplier"] === "active" && path === 1 && (
                    <circle
                      r="3"
                      fill="url(#active-gradient)"
                      filter="url(#glow-intense)"
                    >
                      {/* Manual path match */}
                      <animateMotion
                        dur="1s"
                        repeatCount="indefinite"
                        path="M 65% 50% L 65% 20% L 88% 20%"
                      />
                    </circle>
                  )}

                  {/* Branch Return */}
                  {statuses["process"] === "active" && path === 1 && (
                    <circle
                      r="3"
                      fill="url(#active-gradient)"
                      filter="url(#glow-intense)"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="indefinite"
                        path="M 88% 20% L 90% 50%"
                      />
                    </circle>
                  )}

                  {statuses["notify"] === "active" && (
                    <circle
                      r="3"
                      fill="url(#active-gradient)"
                      filter="url(#glow-intense)"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="indefinite"
                        path="M 90% 50% L 90% 80%"
                      />
                    </circle>
                  )}
                </svg>

                {/* Nodes */}
                {NODES.map((node) => {
                  const status = statuses[node.id] || "idle";
                  const isActive = status === "active";
                  const isSuccess = status === "success";

                  return (
                    <div
                      key={node.id}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-20
                         ${isActive ? "scale-105" : "scale-100"}
                       `}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    >
                      {/* Glow Underlay */}
                      {isActive && (
                        <div className="absolute inset-0 bg-pink-500/40 blur-xl rounded-full"></div>
                      )}

                      <div
                        className={`
                         relative px-3 py-2 rounded-lg border flex items-center justify-center gap-2 shadow-xl backdrop-blur-xl transition-all duration-300 min-w-[100px]
                         ${
                           isActive
                             ? "bg-[#18181b] border-pink-500 ring-1 ring-pink-500/50"
                             : isSuccess
                               ? "bg-[#09090b] border-emerald-500/30 opacity-60"
                               : "bg-[#09090b]/80 border-white/5 opacity-40 grayscale"
                         }
                       `}
                      >
                        {/* Icon */}
                        {node.type === "start" && (
                          <Zap
                            className={`w-3 h-3 ${isActive ? "text-pink-400" : isSuccess ? "text-emerald-400" : "text-zinc-600"}`}
                          />
                        )}
                        {node.type === "decision" && (
                          <GitBranch
                            className={`w-3 h-3 ${isActive ? "text-pink-400" : isSuccess ? "text-emerald-400" : "text-zinc-600"}`}
                          />
                        )}
                        {node.type === "action" && (
                          <Activity
                            className={`w-3 h-3 ${isActive ? "text-pink-400" : isSuccess ? "text-emerald-400" : "text-zinc-600"}`}
                          />
                        )}
                        {node.type === "end" && (
                          <CheckCircle2
                            className={`w-3 h-3 ${isActive ? "text-pink-400" : isSuccess ? "text-emerald-400" : "text-zinc-600"}`}
                          />
                        )}

                        <span
                          className={`text-[10px] font-semibold tracking-wide ${isActive ? "text-white" : "text-zinc-500"}`}
                        >
                          {node.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-pink-500/20 blur-3xl -z-10 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
