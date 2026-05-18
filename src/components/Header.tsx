import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "@/components/Logo";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(248,244,235,0)", "rgba(248,244,235,0.85)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.08)"]);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur as unknown as string, borderBottom: "1px solid", borderBottomColor: border }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <Logo size={28} className="text-foreground transition group-hover:rotate-90 duration-500" />
          <span className="h-display text-2xl tracking-tight leading-none">Morpheus</span>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em] text-muted-foreground translate-y-[1px]">
            ®
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="story-link text-sm font-medium text-foreground/70 hover:text-foreground"
              activeProps={{ className: "story-link text-sm font-medium text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary transition group-hover:bg-background" />
          Start a project
        </Link>
      </div>
    </motion.header>
  );
}
