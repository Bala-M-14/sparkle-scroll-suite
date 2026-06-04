import { Link } from "@tanstack/react-router";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <footer ref={ref} className="relative mt-32 bg-ink text-background">
      <motion.div style={{ y, scale }} className="px-6 md:px-12 pt-24 pb-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-xs uppercase tracking-[0.3em] text-background/50">/ Got an idea?</div>
          <h2 className="h-display mt-6 text-[clamp(3rem,11vw,11rem)] leading-[0.85]">
            Let's build <span className="h-display-italic text-primary">something</span><br />
            worth <span className="h-display-italic">shipping.</span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <a
              href="mailto:buildwithmorpheus@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full border border-background/20 px-7 py-4 text-base font-medium transition hover:bg-primary hover:border-primary"
            >
              buildwithmorpheus@gmail.com
              <span className="grid h-8 w-8 place-items-center rounded-full bg-background text-ink transition group-hover:rotate-45">→</span>
            </a>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="https://wa.me/916374516051" className="story-link">WhatsApp</a>
              <a href="https://instagram.com" className="story-link">Instagram</a>
              <a href="https://morpheus.in" className="story-link">morpheus.in</a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-10 border-t border-background/10 pt-10 md:grid-cols-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-background/40">Studio</div>
              <div className="mt-4 space-y-2 text-sm">
                <Link to="/work" className="block story-link">Work</Link>
                <Link to="/services" className="block story-link">Services</Link>
                <Link to="/team" className="block story-link">Process</Link>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-background/40">Contact</div>
              <div className="mt-4 text-sm leading-relaxed text-background/70">
                +91 63745 16051<br />
                buildwithmorpheus@gmail.com<br />
                morpheus.in
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-background/40">Hours</div>
              <div className="mt-4 text-sm text-background/70">
                Mon–Sat · 10–8 IST<br />
                Replies in ~24h
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-background/40">Newsletter</div>
              <form className="mt-4 flex items-center gap-2 border-b border-background/20 pb-2">
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-background/30"
                />
                <button className="text-sm text-primary">→</button>
              </form>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-6 text-xs text-background/40">
            <span>© {new Date().getFullYear()} Morpheus Studio — Built by humans, polished by obsession.</span>
            <span>v3.0 · Edition 26</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
