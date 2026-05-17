import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RevealText, FadeUp } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Morpheus" },
      { name: "description", content: "Start a project with Morpheus. We reply within 24 hours." },
      { property: "og:title", content: "Contact — Morpheus" },
    ],
  }),
  component: ContactPage,
});

const intents = ["Web platform", "Startup MVP", "Final-year project", "Brand × Motion", "Something else"] as const;
const budgets = ["< ₹50k", "₹50k–2L", "₹2–5L", "₹5L+"] as const;

function ContactPage() {
  const [intent, setIntent] = useState<typeof intents[number]>(intents[0]);
  const [budget, setBudget] = useState<typeof budgets[number]>(budgets[1]);
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pt-24 pb-12 md:px-12">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">/ Contact · 24h reply</div>
        <h1 className="h-display mt-6 text-[clamp(3rem,12vw,13rem)]">
          <span className="block"><RevealText>start a</RevealText></span>
          <span className="block h-display-italic text-primary"><RevealText delay={1}>project.</RevealText></span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 pb-32 md:grid-cols-12 md:px-12">
        <FadeUp className="md:col-span-5">
          <h2 className="h-display text-3xl">Or just say hi.</h2>
          <p className="mt-4 text-foreground/70">We read every message. Be specific — links, screenshots, even voice notes work.</p>
          <div className="mt-10 space-y-6">
            <Detail label="Email" value="hello@morpheus.studio" href="mailto:hello@morpheus.studio" />
            <Detail label="Telegram" value="@morpheusstudio" href="#" />
            <Detail label="Calendar" value="cal.com/morpheus" href="#" />
            <Detail label="Office" value="Chennai · IST" />
          </div>

          <div className="mt-12 rounded-2xl border bg-card p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Now booking</div>
            <div className="mt-2 h-display text-2xl">Sprints starting <span className="h-display-italic text-primary">August</span>.</div>
            <div className="mt-2 text-sm text-foreground/60">Two slots left this quarter.</div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="md:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border bg-card p-8 md:p-12"
          >
            <Field label="Your name">
              <input required className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground/50" placeholder="e.g. Priya Raman" />
            </Field>
            <Field label="Email">
              <input required type="email" className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground/50" placeholder="you@company.com" />
            </Field>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What are you building?</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {intents.map((i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setIntent(i)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${intent === i ? "border-ink bg-ink text-background" : "hover:border-foreground/50"}`}
                  >{i}</button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Budget</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${budget === b ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground/50"}`}
                  >{b}</button>
                ))}
              </div>
            </div>

            <Field label="Tell us more">
              <textarea
                required
                rows={5}
                className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-muted-foreground/50"
                placeholder="Links, sketches, the deadline that's stressing you out…"
              />
            </Field>

            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-background transition hover:bg-primary"
            >
              {sent ? "Sent — we'll reply soon ✨" : "Send the brief →"}
            </button>
          </form>
        </FadeUp>
      </section>
    </>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  const Cmp: any = href ? "a" : "div";
  return (
    <Cmp href={href} className="block group">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-1 h-display text-3xl group-hover:text-primary transition">{value}</div>
    </Cmp>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mt-8 block border-b pb-3 focus-within:border-primary transition">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</div>
      {children}
    </label>
  );
}
