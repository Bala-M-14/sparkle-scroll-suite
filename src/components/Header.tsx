import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(248,244,235,0)", "rgba(248,244,235,0.85)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.08)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur as unknown as string, borderBottom: "1px solid", borderBottomColor: border }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
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

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex group items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary transition group-hover:bg-background" />
            Start a project
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background/60"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-[2px] w-5 bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-[2px] w-5 bg-foreground transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur"
          >
            <nav className="mx-auto flex max-w-[1600px] flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5"
                  activeProps={{ className: "rounded-xl px-3 py-3 text-base font-semibold text-foreground bg-foreground/5" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Start a project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
