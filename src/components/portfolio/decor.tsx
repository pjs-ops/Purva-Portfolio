import { motion } from "framer-motion";

export function Sparkle({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M12 0l1.8 8.4L22 10.2l-8.2 1.8L12 20l-1.8-8L2 10.2l8.2-1.8L12 0z" />
    </svg>
  );
}

export function Flower({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className}>
      <g fill="currentColor">
        <circle cx="20" cy="8" r="6" />
        <circle cx="20" cy="32" r="6" />
        <circle cx="8" cy="20" r="6" />
        <circle cx="32" cy="20" r="6" />
        <circle cx="20" cy="20" r="4" fill="oklch(0.99 0.02 80)" />
      </g>
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M2 10 Q 17 -2, 32 10 T 62 10 T 92 10 T 118 10" />
    </svg>
  );
}

export function Dot({ className = "" }: { className?: string }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${className}`} />;
}

/** Curved divider that blends two background colors */
export function WaveDivider({
  from,
  to,
  flip = false,
}: {
  from: string;
  to: string;
  flip?: boolean;
}) {
  return (
    <div className="relative -mt-px" style={{ background: from }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block h-[80px] w-full sm:h-[120px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,64 C240,140 480,0 720,48 C960,96 1200,140 1440,72 L1440,140 L0,140 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

export function FloatingBlob({
  className = "",
  color = "var(--rose)",
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute animate-blob ${className}`}
      style={{ background: color, filter: "blur(2px)" }}
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}
