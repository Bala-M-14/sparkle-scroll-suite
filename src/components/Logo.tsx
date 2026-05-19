import { motion } from "framer-motion";
import { BrandMark } from "@/components/BrandMark";

export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <span
      className={`inline-block overflow-hidden rounded-md ${className}`}
      style={{ width: size, height: size }}
    >
      <BrandMark className="h-full w-full" />
    </span>
  );
}

/* A small 3D rotating Rubik's cube built from divs — used as a decorative
   element around the brand mark to echo the cube on the logo's head. */
function RubiksCube({ size = 64, duration = 18 }: { size?: number; duration?: number }) {
  const half = size / 2;
  const faces: { transform: string; bg: string }[] = [
    { transform: `translateZ(${half}px)`, bg: "oklch(0.66 0.24 5)" },
    { transform: `rotateY(180deg) translateZ(${half}px)`, bg: "oklch(0.72 0.18 60)" },
    { transform: `rotateY(90deg) translateZ(${half}px)`, bg: "oklch(0.96 0.015 80)" },
    { transform: `rotateY(-90deg) translateZ(${half}px)`, bg: "oklch(0.16 0.02 60)" },
    { transform: `rotateX(90deg) translateZ(${half}px)`, bg: "oklch(0.85 0.05 85)" },
    { transform: `rotateX(-90deg) translateZ(${half}px)`, bg: "oklch(0.4 0.05 60)" },
  ];

  return (
    <div style={{ width: size, height: size, perspective: 600 }}>
      <motion.div
        style={{ width: size, height: size, transformStyle: "preserve-3d", position: "relative" }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {faces.map((f, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              transform: f.transform,
              background: f.bg,
              border: "1px solid rgba(0,0,0,0.25)",
              boxShadow: "inset 0 0 0 4px rgba(255,255,255,0.06)",
              borderRadius: 6,
            }}
          >
            {/* 3x3 grid lines */}
            <div
              style={{
                position: "absolute",
                inset: 4,
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.35) 1px, transparent 1px)",
                backgroundSize: `${(size - 8) / 3}px ${(size - 8) / 3}px`,
                borderRadius: 4,
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Halo */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric rings */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-foreground/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="1" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 188}
              y1={200 + Math.sin(a) * 188}
              x2={200 + Math.cos(a) * 196}
              y2={200 + Math.sin(a) * 196}
              stroke="currentColor"
              strokeWidth="1"
            />
          );
        })}
      </motion.svg>
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-foreground/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
      </motion.svg>

      {/* Logo image with subtle float */}
      <motion.div
        className="relative grid h-full w-full place-items-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-[78%] w-[78%] overflow-hidden rounded-full ring-1 ring-foreground/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
          <img src={logoImg} alt="Morpheus" className="h-full w-full object-cover" />
        </div>
      </motion.div>

      {/* Orbiting rubik's cubes — echo the cube on the figure's head */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <RubiksCube size={68} duration={14} />
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
          <RubiksCube size={44} duration={20} />
        </div>
        <div className="absolute left-0 bottom-8 -translate-x-1/3">
          <RubiksCube size={36} duration={22} />
        </div>
      </motion.div>
    </div>
  );
}
