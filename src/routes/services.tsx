import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/projects";
import { RevealText, FadeUp } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Morpheus" },
      { name: "description", content: "Web platforms, startup MVPs, final-year projects and brand × motion." },
      { property: "og:title", content: "Services — Morpheus" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-24 pb-20 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Services</div>
        <h1 className="h-display mt-6 text-[clamp(3rem,12vw,13rem)]">
          <span className="block"><RevealText>four ways</RevealText></span>
          <span className="block"><RevealText delay={1}>to </RevealText><span className="h-display-italic text-primary"><RevealText delay={2}>work</RevealText></span> <RevealText delay={3}>together.</RevealText></span>
        </h1>
      </section>

      <section className="border-t">
        {services.map((s, i) => (
          <ServiceRow key={s.code} service={s} index={i} />
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12">
        <FadeUp>
          <div className="grid gap-6 rounded-3xl bg-ink p-10 text-background md:grid-cols-2 md:p-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-background/50">/ Engagement</div>
              <h2 className="h-display mt-4 text-4xl md:text-6xl">
                Pick a sprint. <span className="h-display-italic text-primary">We start Monday.</span>
              </h2>
            </div>
            <div className="text-base text-background/70">
              <p>We work in 2-week sprints. Each sprint has a demo, a check-in, and a decision. You can pause, redirect, or end the engagement at any boundary.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-background hover:opacity-90">
                Book an intro call →
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

function ServiceRow({ service, index }: { service: typeof services[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={ref} className="group relative border-b transition hover:bg-surface">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-start gap-6 px-6 py-16 md:px-12 md:py-24">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-sm text-muted-foreground">/{service.code}</div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <motion.h2 style={{ x }} className="h-display text-5xl md:text-7xl">
            {service.title}
            <span className="ml-3 inline-block text-primary opacity-0 transition group-hover:opacity-100">↗</span>
          </motion.h2>
          <p className="mt-6 max-w-lg text-lg text-foreground/70">{service.description}</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Deliverables</div>
          <ul className="mt-4 space-y-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-3 text-sm">
                <span className="h-px w-6 bg-primary" /> {d}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-baseline gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">From</span>
            <span className="h-display text-3xl">{service.from}</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
      <span className="sr-only">{index}</span>
    </div>
  );
}
