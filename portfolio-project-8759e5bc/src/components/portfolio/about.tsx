import { profile } from "@/content/profile";
import { SectionLabel } from "./pop-link";

export function About() {
  return (
    <section id="about" className="theme-ink scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01">About me</SectionLabel>
        <h2 className="font-display text-giant mt-8 max-w-5xl font-extrabold">
          I turn <span className="text-highlight">maths &amp; statistics</span> into AI that actually works.
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="rounded-3xl border-2 border-accent bg-card p-7">
            <p className="eyebrow text-highlight">Currently</p>
            <p className="font-display mt-4 text-3xl font-bold leading-tight">
              Seeking entry-level AI &amp; GenAI Engineer roles in India.
            </p>
            <p className="mt-4 text-muted-foreground">Open to relocation · Remote, hybrid or on-site.</p>
          </div>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-background p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl font-extrabold text-highlight sm:text-6xl">{s.value}</dd>
              <dd className="mt-3 text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
