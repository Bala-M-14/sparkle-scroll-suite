import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { RevealText, FadeUp } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { projects, services } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morpheus — Where ideas become shipped product." },
      { name: "description", content: "A small studio of engineers and designers building web platforms, MVPs, and AI products with editorial craft." },
      { property: "og:title", content: "Morpheus — Where ideas become shipped product." },
      { property: "og:description", content: "A small studio of engineers and designers." },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-[105vh] overflow-hidden">
      {/* Backdrop blobs */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute -top-40 -right-20 h-[60vh] w-[60vh] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        style={{ x: useTransform(sx, (v) => -v), y: useTransform(sy, (v) => -v) }}
        className="pointer-events-none absolute -bottom-40 -left-10 h-[55vh] w-[55vh] rounded-full bg-accent/40 blur-[120px]"
      />

      {/* Top meta */}
      <motion.div style={{ opacity }} className="mx-auto flex max-w-[1600px] items-start justify-between px-6 pt-12 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          / Edition 26 · Chennai → Earth
        </div>
        <div className="hidden md:block text-right text-xs uppercase tracking-[0.3em] text-muted-foreground">
          A studio for<br />shipped product
        </div>
      </motion.div>

      {/* Headline */}
      <div className="relative mx-auto max-w-[1600px] px-6 pt-[10vh] md:px-12">
        <h1 className="h-display text-[clamp(3.5rem,15vw,16rem)]">
          <span className="block"><RevealText>where ideas</RevealText></span>
          <span className="block"><RevealText delay={1}>become </RevealText><span className="h-display-italic text-primary"><RevealText delay={2}>shipped</RevealText></span></span>
          <span className="block flex items-end gap-6"><RevealText delay={3}>product.</RevealText>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="hidden md:inline-block h-4 w-4 -translate-y-6 rounded-full bg-primary"
            />
          </span>
        </h1>
      </div>

      {/* Sub */}
      <div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-1 gap-10 px-6 md:grid-cols-12 md:px-12">
        <FadeUp delay={0.5} className="md:col-span-5 md:col-start-7">
          <p className="text-lg leading-relaxed text-foreground/80">
            Morpheus is a three-person studio of engineers and designers, building
            <span className="h-display-italic"> websites, startup MVPs</span>, and
            <span className="h-display-italic"> final-year projects</span> that ship on time and look like nothing else on the timeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/work" className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background">
              See the work
              <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-ink transition group-hover:rotate-45">→</span>
            </Link>
            <Link to="/contact" className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground">
              Start a project
            </Link>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>scroll</span>
        <span className="block h-12 w-px overflow-hidden">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-full w-full bg-foreground/40"
          />
        </span>
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  return (
    <section className="border-y bg-ink py-6 text-background overflow-hidden">
      <Marquee>
        {["Web platforms", "Startup MVPs", "AI products", "Final-year projects", "Brand × Motion", "Design systems", "Editorial polish"].map((s) => (
          <span key={s} className="flex items-center gap-12 text-2xl md:text-4xl h-display">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            {s}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative mx-auto max-w-[1600px] px-6 py-32 md:px-12">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Featured 01 → 04</div>
          <h2 className="h-display mt-4 text-[clamp(2.5rem,7vw,6rem)]">
            Selected <span className="h-display-italic text-primary">shots</span>
          </h2>
        </div>
        <Link to="/work" className="story-link text-sm font-semibold">All projects ↗</Link>
      </div>

      <div className="mt-16 space-y-28">
        {projects.slice(0, 4).map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 ? -3 : 3, index % 2 ? 3 : -3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const alt = index % 2 === 1;

  return (
    <div ref={ref} className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${alt ? "md:[direction:rtl]" : ""}`}>
      <motion.div style={{ y, rotate, scale }} className="md:col-span-7 [direction:ltr]">
        <Link to="/work/$slug" params={{ slug: project.slug }} className="block">
          <div
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl"
            style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="w-full">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/70">
                  <span>{project.tag}</span>
                  <span>{project.year}</span>
                </div>
                <div className="mt-6 h-display text-3xl text-white md:text-5xl">{project.title}</div>
              </div>
            </div>
            <motion.div
              className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-full bg-white text-ink"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ↗
            </motion.div>
          </div>
        </Link>
      </motion.div>

      <div className="md:col-span-5 [direction:ltr]">
        <FadeUp>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">No. 0{index + 1}</div>
          <h3 className="h-display mt-3 text-3xl md:text-4xl">{project.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">{project.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border px-3 py-1 text-xs font-mono">{s}</span>
            ))}
          </div>
          <div className="mt-6 text-sm text-muted-foreground">Client · {project.client}</div>
        </FadeUp>
      </div>
    </div>
  );
}

function Pillars() {
  return (
    <section className="relative bg-ink text-background overflow-hidden py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-background/50">/ The studio</div>
        <h2 className="h-display mt-6 text-[clamp(2.5rem,8vw,7rem)] leading-[0.95]">
          Three people.<br />
          <span className="h-display-italic text-primary">One obsession.</span>
        </h2>

        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-3">
          {services.map((s, i) => (
            <FadeUp key={s.code} delay={i * 0.08}>
              <div className="flex items-baseline justify-between border-b border-background/15 pb-3">
                <span className="font-mono text-xs text-background/50">/{s.code}</span>
                <span className="text-xs text-background/50">from {s.from}</span>
              </div>
              <h3 className="h-display mt-6 text-3xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-background/70">{s.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-background/60">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-px w-4 bg-primary" /> {d}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>

        <div className="mt-16">
          <Link to="/services" className="story-link text-sm font-medium text-background/80">All services →</Link>
        </div>
      </div>
    </section>
  );
}

function HorizontalProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  const steps = [
    { n: "01", t: "Listen", d: "We dig into the actual problem before sketching pixels." },
    { n: "02", t: "Sketch", d: "Three directions, one whiteboard, no marketing fluff." },
    { n: "03", t: "Build", d: "Weekly demos. You see progress, not Gantt charts." },
    { n: "04", t: "Polish", d: "Motion, microcopy, and the 1% that makes the 99% sing." },
    { n: "05", t: "Ship", d: "Launch playbook, monitoring, and a celebration dinner." },
  ];

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute left-0 top-0 px-6 pt-32 md:px-12 z-10">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Process</div>
          <h2 className="h-display mt-4 text-5xl md:text-7xl">
            How we <span className="h-display-italic text-primary">work.</span>
          </h2>
        </div>
        <motion.div style={{ x }} className="absolute top-1/2 left-[18vw] flex -translate-y-1/2 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="w-[70vw] max-w-[520px] shrink-0 rounded-3xl border bg-card p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)]">
              <div className="font-mono text-xs text-primary">{s.n} / 05</div>
              <h3 className="h-display mt-6 text-5xl">{s.t}.</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">{s.d}</p>
              <div className="mt-10 h-px w-full bg-foreground/10" />
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Week {s.n}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "They shipped in six weeks what our last agency promised in six months.", a: "Priya · CTO, Atlas Labs" },
    { q: "Felt less like vendors and more like a third co-founder.", a: "Daniel · Founder, Fold" },
    { q: "My panel asked who designed the demo. I said: my friends, basically.", a: "Aravind · Final-year, NIT" },
  ];
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Receipts</div>
      <h2 className="h-display mt-6 text-[clamp(2.5rem,7vw,6rem)]">
        Kind words from <span className="h-display-italic text-primary">good people.</span>
      </h2>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <figure className="flex h-full flex-col rounded-3xl border bg-card p-8">
              <span className="h-display text-6xl leading-none text-primary">"</span>
              <blockquote className="mt-4 text-lg leading-relaxed">{q.q}</blockquote>
              <figcaption className="mt-auto pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">— {q.a}</figcaption>
            </figure>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedWork />
      <Pillars />
      <HorizontalProcess />
      <Testimonials />
    </>
  );
}
