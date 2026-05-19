import { motion } from "framer-motion";

/**
 * On-theme recreation of the Morpheus mark:
 * a line-art figure with a Rubik's cube for a head,
 * drawn in cream + ink with a hot-pink accent.
 *
 * Pass `animated` to enable subtle cube + particle motion.
 */
export function BrandMark({
  className = "",
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Morpheus mark"
    >
      <defs>
        <linearGradient id="bm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.16 0.02 60)" />
          <stop offset="100%" stopColor="oklch(0.22 0.03 60)" />
        </linearGradient>
        <linearGradient id="bm-cube" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.985 0.005 85)" />
          <stop offset="100%" stopColor="oklch(0.9 0.01 85)" />
        </linearGradient>
        <radialGradient id="bm-glow" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="oklch(0.66 0.24 5 / 0.35)" />
          <stop offset="100%" stopColor="oklch(0.66 0.24 5 / 0)" />
        </radialGradient>
      </defs>

      {/* Plate */}
      <rect x="2" y="2" width="196" height="196" rx="20" fill="url(#bm-bg)" />
      <rect
        x="2.5"
        y="2.5"
        width="195"
        height="195"
        rx="19.5"
        fill="none"
        stroke="oklch(0.985 0.005 85 / 0.12)"
      />

      {/* Pink halo behind head */}
      <circle cx="100" cy="78" r="70" fill="url(#bm-glow)" />

      {/* Shoulders / bust silhouette — line art */}
      <g
        fill="none"
        stroke="oklch(0.985 0.005 85)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* neck */}
        <path d="M88 118 L88 130 Q100 138 112 130 L112 118" />
        {/* shoulders + bust */}
        <path d="M52 178 C 58 152, 78 138, 100 138 C 122 138, 142 152, 148 178" />
        {/* collar line */}
        <path d="M70 166 Q 100 158 130 166" strokeOpacity="0.5" />
        {/* subtle inner contour */}
        <path d="M62 178 C 70 162, 84 152, 100 152 C 116 152, 130 162, 138 178" strokeOpacity="0.35" />
      </g>

      {/* Rubik's cube head — isometric, faces stacked */}
      <g transform="translate(100 78)">
        {/* Optional float */}
        <motion.g
          animate={animated ? { y: [0, -2.5, 0] } : undefined}
          transition={animated ? { duration: 4.5, repeat: Infinity, ease: "easeInOut" } : undefined}
        >
          {/* Cube shadow */}
          <ellipse cx="0" cy="44" rx="34" ry="5" fill="oklch(0 0 0 / 0.35)" />

          {/* TOP face */}
          <g>
            <polygon
              points="0,-44 38,-22 0,0 -38,-22"
              fill="url(#bm-cube)"
              stroke="oklch(0.16 0.02 60)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Top grid lines */}
            <g stroke="oklch(0.16 0.02 60)" strokeWidth="1" strokeLinejoin="round" fill="none">
              <line x1="-12.7" y1="-36.7" x2="25.3" y2="-14.7" />
              <line x1="-25.3" y1="-29.3" x2="12.7" y2="-7.3" />
              <line x1="12.7" y1="-36.7" x2="-25.3" y2="-14.7" />
              <line x1="25.3" y1="-29.3" x2="-12.7" y2="-7.3" />
            </g>
            {/* One bright cell on top */}
            <polygon
              points="0,-29.3 12.7,-22 0,-14.7 -12.7,-22"
              fill="oklch(0.66 0.24 5)"
              opacity="0.92"
            />
          </g>

          {/* LEFT face */}
          <g>
            <polygon
              points="-38,-22 0,0 0,44 -38,22"
              fill="oklch(0.92 0.02 80)"
              stroke="oklch(0.16 0.02 60)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <g stroke="oklch(0.16 0.02 60)" strokeWidth="1" fill="none">
              <line x1="-25.3" y1="-14.7" x2="-25.3" y2="29.3" />
              <line x1="-12.7" y1="-7.3" x2="-12.7" y2="36.7" />
              <line x1="-38" y1="-7.3" x2="0" y2="14.7" />
              <line x1="-38" y1="7.3" x2="0" y2="29.3" />
            </g>
            {/* Eye glow on left face */}
            <polygon
              points="-25.3,-14.7 -12.7,-7.3 -12.7,7.3 -25.3,0"
              fill="oklch(0.72 0.18 60)"
              opacity="0.9"
            />
          </g>

          {/* RIGHT face */}
          <g>
            <polygon
              points="0,0 38,-22 38,22 0,44"
              fill="oklch(0.985 0.005 85)"
              stroke="oklch(0.16 0.02 60)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <g stroke="oklch(0.16 0.02 60)" strokeWidth="1" fill="none">
              <line x1="12.7" y1="-7.3" x2="12.7" y2="36.7" />
              <line x1="25.3" y1="-14.7" x2="25.3" y2="29.3" />
              <line x1="0" y1="14.7" x2="38" y2="-7.3" />
              <line x1="0" y1="29.3" x2="38" y2="7.3" />
            </g>
            {/* Subtle accent cell */}
            <polygon
              points="12.7,7.3 25.3,0 25.3,14.7 12.7,22"
              fill="oklch(0.16 0.02 60)"
              opacity="0.18"
            />
          </g>
        </motion.g>

        {/* Detached floating cubelets — "thinking" particles */}
        {animated ? (
          <>
            <motion.rect
              x="36"
              y="-50"
              width="8"
              height="8"
              fill="oklch(0.66 0.24 5)"
              animate={{ y: [-50, -58, -50], rotate: [0, 35, 0], opacity: [0.9, 0.6, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
              x="-52"
              y="-44"
              width="6"
              height="6"
              fill="oklch(0.985 0.005 85)"
              animate={{ y: [-44, -52, -44], rotate: [0, -45, 0], opacity: [0.8, 0.5, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.rect
              x="52"
              y="-12"
              width="5"
              height="5"
              fill="oklch(0.72 0.18 60)"
              animate={{ x: [52, 60, 52], opacity: [0.85, 0.55, 0.85] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
          </>
        ) : (
          <>
            <rect x="36" y="-50" width="8" height="8" fill="oklch(0.66 0.24 5)" />
            <rect x="-52" y="-44" width="6" height="6" fill="oklch(0.985 0.005 85)" />
            <rect x="52" y="-12" width="5" height="5" fill="oklch(0.72 0.18 60)" />
          </>
        )}
      </g>

      {/* Wordmark on plate */}
      <g>
        <text
          x="100"
          y="184"
          textAnchor="middle"
          fontFamily="ui-serif, Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fontSize="9"
          letterSpacing="3"
          fill="oklch(0.985 0.005 85 / 0.55)"
        >
          MORPHEUS
        </text>
      </g>
    </svg>
  );
}
