import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { FadeUp } from "@/components/Reveal";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Morpheus` : "Project — Morpheus" },
        { name: "description", content: p?.blurb ?? "A Morpheus project." },
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="h-display text-5xl">Project not found.</h1>
      <Link to="/work" className="mt-8 inline-block story-link">← Back to work</Link>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.div
          style={{ y, scale, background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-12">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
            <Link to="/work" className="story-link">← Work</Link>
            <span>·</span><span>{project.tag}</span>
            <span>·</span><span>{project.year}</span>
          </div>
          <h1 className="h-display mt-6 text-[clamp(3rem,10vw,10rem)] text-white">{project.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">{project.blurb}</p>
        </div>
      </section>

      {/* Meta */}
      <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <FadeUp>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Client</div>
            <div className="mt-2 text-xl">{project.client}</div>
            <div className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s: string) => <span key={s} className="rounded-full border px-3 py-1 text-xs font-mono">{s}</span>)}
            </div>
          </FadeUp>
        </div>
        <div className="md:col-span-8">
          <FadeUp delay={0.1}>
            <h2 className="h-display text-4xl md:text-5xl">
              We took <span className="h-display-italic text-primary">{project.client}</span> from sketch to ship in record time.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/70">
              {project.blurb} The team partnered weekly on demos, with motion direction and microcopy refined together until everything felt inevitable.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[["6w", "Build time"], ["+42%", "Conv. uplift"], ["98", "Lighthouse"]].map(([n, l]) => (
                <div key={l} className="rounded-2xl border bg-card p-6">
                  <div className="h-display text-4xl">{n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Visual stack with parallax */}
      <section className="mx-auto max-w-[1600px] space-y-10 px-6 pb-32 md:px-12">
        {[1, 2, 3].map((i) => (
          <ParallaxFrame key={i} palette={project.palette} index={i} />
        ))}
      </section>

      {/* Next */}
      <section className="border-t">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group block px-6 py-24 md:px-12">
          <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next project</div>
              <div className="h-display mt-4 text-5xl md:text-7xl">{next.title}</div>
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-full bg-ink text-background transition group-hover:rotate-45">→</div>
          </div>
        </Link>
      </section>
    </>
  );
}

function ParallaxFrame({ palette, index }: { palette: [string, string]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative aspect-[16/9] overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0" style={{ background: `linear-gradient(${index * 60}deg, ${palette[0]}, ${palette[1]})` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
      <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/60">Frame · 0{index}</div>
    </motion.div>
  );
}
