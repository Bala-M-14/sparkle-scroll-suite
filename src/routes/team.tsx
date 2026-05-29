import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RevealText, FadeUp } from "@/components/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "How we work — Morpheus" },
      { name: "description", content: "Inside the Morpheus workflow — how research, design, engineering and delivery move together from kickoff to launch." },
      { property: "og:title", content: "How we work — Morpheus" },
    ],
  }),
  component: TeamPage,
});

const tracks = [
  {
    code: "01",
    title: "Discovery",
    lead: "Research × Strategy",
    duration: "Week 1",
    desc: "Stakeholder interviews, competitive teardown, and a written problem statement that everyone signs off on before a single pixel is drawn.",
    outputs: ["Problem brief", "Success metrics", "Constraints map"],
  },
  {
    code: "02",
    title: "Direction",
    lead: "Design × Product",
    duration: "Week 2",
    desc: "Three visual directions on one whiteboard. We argue, prune, and converge on the one that earns the brief — no committee voting.",
    outputs: ["Moodboards", "Wireframes", "Design tokens"],
  },
  {
    code: "03",
    title: "Build",
    lead: "Engineering × Design",
    duration: "Week 3–5",
    desc: "Pair sessions every Tuesday and Thursday. Design hands off in Figma, engineering ships in branches, and we demo working software every Friday.",
    outputs: ["Component library", "Working app", "Friday demos"],
  },
  {
    code: "04",
    title: "Polish",
    lead: "Motion × QA",
    duration: "Week 6",
    desc: "Microcopy, motion choreography, accessibility passes, and the 1% details that separate shipped from shipped-and-loved.",
    outputs: ["Motion pass", "A11y audit", "Perf budget"],
  },
  {
    code: "05",
    title: "Launch",
    lead: "Engineering × Ops",
    duration: "Week 7",
    desc: "Monitoring, analytics, launch playbook, and a thirty-day warranty window where bugs are on us — not on a change order.",
    outputs: ["Launch runbook", "Analytics", "30-day support"],
  },
];

function TeamPage() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-24 pb-20 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ How we work</div>
        <h1 className="h-display mt-6 text-[clamp(3rem,12vw,13rem)] leading-[0.88]">
          <span className="block"><RevealText>one studio,</RevealText></span>
          <span className="block h-display-italic text-primary"><RevealText delay={1}>one workflow.</RevealText></span>
        </h1>
        <FadeUp delay={0.4} className="mt-12 max-w-xl text-lg text-foreground/70">
          We're a tight design-and-engineering practice that operates as a
          single loop — research, direction, build, polish, ship — with the
          same hands on a project from kickoff to launch.
        </FadeUp>
      </section>

      {/* Workflow timeline */}
      <section className="relative border-t">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ The loop</div>
          <h2 className="h-display mt-4 text-5xl md:text-7xl">
            Five tracks, <span className="h-display-italic text-primary">one motion.</span>
          </h2>

          <div className="relative mt-20">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-foreground/15 md:left-1/2" />
            <div className="space-y-16">
              {tracks.map((t, i) => (
                <FadeUp key={t.code} delay={i * 0.05}>
                  <div className={`relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                      <div className="font-mono text-xs text-primary">/{t.code} — {t.duration}</div>
                      <h3 className="h-display mt-3 text-4xl md:text-6xl">{t.title}.</h3>
                      <div className="mt-3 h-display-italic text-lg text-foreground/60">{t.lead}</div>
                    </div>
                    <div className="pl-12 md:pl-12">
                      <span className="absolute left-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-mono text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                        {i + 1}
                      </span>
                      <p className="text-base leading-relaxed text-foreground/75">{t.desc}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {t.outputs.map((o) => (
                          <li key={o} className="rounded-full border px-3 py-1 text-xs font-mono">{o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration model */}
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12">
          <div className="text-xs uppercase tracking-[0.3em] text-background/50">/ Collaboration model</div>
          <h2 className="h-display mt-6 text-5xl md:text-7xl">
            How the work <span className="h-display-italic text-primary">moves.</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              ["Shared Notion", "One source of truth — brief, decisions, demo links, invoices. You see what we see."],
              ["Tuesday & Thursday pairing", "Live working sessions over screenshare. Async on every other day, but never silent."],
              ["Friday demos", "End-of-week working build, recorded. Progress over PowerPoint, always."],
              ["Direct line", "You message the people writing the code — no account managers, no relay race."],
              ["Receipts only", "Repo access, analytics, hosting bills — all shared. No black box, no lock-in."],
              ["Thirty-day warranty", "Post-launch bugs are on us for a month. Then we hand over a clean key."],
            ].map(([t, d]) => (
              <FadeUp key={t}>
                <div className="border-l border-primary pl-6">
                  <div className="h-display text-2xl">{t}</div>
                  <div className="mt-3 text-background/70 leading-relaxed">{d}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12">
        <FadeUp>
          <div className="rounded-3xl border bg-card p-10 md:p-16">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Operating principles</div>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {[
                ["No middlemen.", "You talk to the people writing the code."],
                ["Weekly demos.", "Progress over PowerPoint."],
                ["Ship beats perfect.", "But polish beats lazy."],
                ["Receipts only.", "We share the repo, the analytics, the bills."],
              ].map(([t, d]) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-l border-primary pl-6"
                >
                  <div className="h-display text-2xl">{t}</div>
                  <div className="mt-2 text-foreground/70">{d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
