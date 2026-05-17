import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { team } from "@/data/projects";
import { RevealText, FadeUp } from "@/components/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Morpheus" },
      { name: "description", content: "Three people, one obsession — meet the Morpheus studio." },
      { property: "og:title", content: "Team — Morpheus" },
    ],
  }),
  component: TeamPage,
});

const toneClass = (tone: string) => {
  if (tone === "primary") return "bg-primary text-primary-foreground";
  if (tone === "accent") return "bg-accent text-accent-foreground";
  return "bg-ink text-background";
};

function TeamPage() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-24 pb-20 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Team · 03</div>
        <h1 className="h-display mt-6 text-[clamp(3rem,12vw,13rem)]">
          <span className="block"><RevealText>built by</RevealText></span>
          <span className="block h-display-italic text-primary"><RevealText delay={1}>three friends.</RevealText></span>
        </h1>
        <FadeUp delay={0.4} className="mt-12 max-w-xl text-lg text-foreground/70">
          We met in college, shipped a final-year project that wasn't supposed to work,
          and never stopped. Today we share one Notion, one bank account, and a very
          loud Slack channel.
        </FadeUp>
      </section>

      <section>
        {team.map((m, i) => (
          <TeamRow key={m.name} member={m} index={i} />
        ))}
      </section>

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
                <div key={t} className="border-l border-primary pl-6">
                  <div className="h-display text-2xl">{t}</div>
                  <div className="mt-2 text-foreground/70">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

function TeamRow({ member, index }: { member: typeof team[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div ref={ref} className="border-t">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-center gap-6 px-6 py-16 md:px-12 md:py-28">
        <div className="col-span-12 md:col-span-5">
          <motion.div style={{ y }} className={`aspect-square w-full max-w-md rounded-3xl ${toneClass(member.tone)} flex items-center justify-center relative overflow-hidden`}>
            <span className="h-display text-[18rem] leading-none opacity-90">{member.init}</span>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-xs text-muted-foreground">/0{index + 1} — {member.years}+ years</div>
          <h2 className="h-display mt-3 text-6xl md:text-8xl">{member.name}</h2>
          <div className="mt-3 h-display-italic text-2xl text-primary">{member.role}</div>
          <p className="mt-6 max-w-lg text-lg text-foreground/70">
            Focused on <span className="h-display-italic">{member.craft.toLowerCase()}</span>. Available for paired sessions on Tuesdays and Thursdays.
          </p>
        </div>
      </div>
    </div>
  );
}
