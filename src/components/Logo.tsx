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
      <circle cx="32" cy="32" r="3" fill="var(--primary)" />
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="show"
    >
      {/* Outer ring */}
      <motion.circle
        cx="200"
        cy="200"
        r="190"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          show: { pathLength: 1, opacity: 1, transition: { duration: 1.6, ease: [0.76, 0, 0.24, 1] } },
        }}
      />
      {/* Inner concentric rings */}
      <motion.circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
        variants={{
          hidden: { pathLength: 0 },
          show: { pathLength: 1, transition: { duration: 1.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] } },
        }}
      />
      <motion.circle
        cx="200"
        cy="200"
        r="110"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1"
        variants={{
          hidden: { pathLength: 0 },
          show: { pathLength: 1, transition: { duration: 1.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] } },
        }}
      />

      {/* The "M" mark — stylized peaks */}
      <motion.path
        d="M90 290 L90 110 L200 240 L310 110 L310 290"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          show: { pathLength: 1, opacity: 1, transition: { duration: 1.6, delay: 0.45, ease: [0.76, 0, 0.24, 1] } },
        }}
      />

      {/* Center dot */}
      <motion.circle
        cx="200"
        cy="200"
        r="10"
        fill="var(--primary)"
        variants={{
          hidden: { scale: 0 },
          show: { scale: 1, transition: { delay: 1.6, type: "spring", stiffness: 220, damping: 14 } },
        }}
        style={{ transformOrigin: "200px 200px" }}
      />

      {/* Slow rotating dial */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle cx="200" cy="20" r="4" fill="var(--primary)" />
        <circle cx="200" cy="380" r="3" fill="currentColor" opacity="0.3" />
      </motion.g>

      {/* Orbiting accent ring */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        <circle cx="200" cy="50" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="350" cy="200" r="2" fill="currentColor" opacity="0.4" />
      </motion.g>
    </motion.svg>
  );
}
