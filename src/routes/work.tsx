import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { RevealText, FadeUp } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Morpheus" },
      { name: "description", content: "Selected projects from the Morpheus studio: web platforms, MVPs, AI products and more." },
      { property: "og:title", content: "Work — Morpheus" },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", "Startup MVP", "Web Development", "AI Product", "Product Design", "Open Source", "Brand + Web", "Final Year Project"] as const;

function WorkPage() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-24 pb-12 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Archive · {projects.length} projects</div>
        <h1 className="h-display mt-6 text-[clamp(3rem,12vw,13rem)]">
          <span className="block"><RevealText>the work,</RevealText></span>
          <span className="block"><span className="h-display-italic text-primary"><RevealText delay={1}>unfiltered.</RevealText></span></span>
        </h1>
        <FadeUp delay={0.4} className="mt-12 max-w-xl text-lg text-foreground/70">
          Eight years of bug fixes, late-night deploys, and a few launches that
          made the news. Sorted by year, never by ego.
        </FadeUp>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 border-y bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-6 py-3 md:px-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                active === f ? "border-ink bg-ink text-background" : "border-border text-foreground/70 hover:border-foreground/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {filtered.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-32 text-center text-muted-foreground">Nothing here yet — try another filter.</div>
        )}
      </section>
    </>
  );
}

function WorkCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Link
      ref={ref}
      to="/work/$slug"
      params={{ slug: project.slug }}
      className={`group block ${index % 2 === 1 ? "md:mt-24" : ""}`}
    >
      <motion.div style={{ y }} className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})` }} />
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <div className="flex items-start justify-between text-xs uppercase tracking-[0.25em] text-white/80">
            <span>{project.tag}</span>
            <span>{project.year}</span>
          </div>
          <div>
            <div className="h-display text-3xl text-white md:text-4xl">{project.title}</div>
            <div className="mt-3 text-sm text-white/80">{project.client}</div>
          </div>
        </div>
        <motion.span className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white text-ink opacity-0 transition group-hover:opacity-100">↗</motion.span>
      </motion.div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm font-medium">{project.title}</div>
        <div className="font-mono text-xs text-muted-foreground">{project.stack.join(" · ")}</div>
      </div>
    </Link>
  );
}
