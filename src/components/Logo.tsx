import { motion } from "framer-motion";

export function Logo({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Morpheus logo"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 46 L14 18 L32 38 L50 18 L50 46"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="32" cy="32" r="3" fill="oklch(0.66 0.24 5)" />
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <path
          d="M90 290 L90 110 L200 240 L310 110 L310 290"
          fill="none"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="200" cy="200" r="10" fill="oklch(0.66 0.24 5)" />

        {/* Tick marks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 200 + Math.cos(angle) * 184;
          const y1 = 200 + Math.sin(angle) * 184;
          const x2 = 200 + Math.cos(angle) * 196;
          const y2 = 200 + Math.sin(angle) * 196;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />;
        })}
      </svg>

      {/* Rotating accent dial overlay */}
      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="200" cy="10" r="5" fill="oklch(0.66 0.24 5)" />
        <circle cx="200" cy="390" r="3" fill="currentColor" opacity="0.3" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="200" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="350" cy="200" r="2" fill="currentColor" opacity="0.5" />
      </motion.svg>
    </div>
  );
}
