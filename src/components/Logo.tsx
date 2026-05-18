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
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring */}
      <motion.circle
        cx="200" cy="200" r="190"
        fill="none" stroke="currentColor" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
      />
      {/* Inner concentric rings */}
      <motion.circle
        cx="200" cy="200" r="150"
        fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
      />
      <motion.circle
        cx="200" cy="200" r="110"
        fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
      />

      {/* The "M" mark */}
      <motion.path
        d="M90 290 L90 110 L200 240 L310 110 L310 290"
        fill="none" stroke="currentColor" strokeWidth="12"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Center dot */}
      <motion.circle
        cx="200" cy="200" r="10" fill="oklch(0.66 0.24 5)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.0, type: "spring", stiffness: 220, damping: 14 }}
        style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
      />

      {/* Slow rotating dial */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
      >
        <circle cx="200" cy="20" r="4" fill="oklch(0.66 0.24 5)" />
        <circle cx="200" cy="380" r="3" fill="currentColor" opacity="0.3" />
      </motion.g>

      {/* Orbiting accent ring */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px", transformBox: "fill-box" }}
      >
        <circle cx="200" cy="50" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="350" cy="200" r="2" fill="currentColor" opacity="0.4" />
      </motion.g>
    </svg>
  );
}
