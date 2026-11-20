import { Award, Briefcase, GraduationCap, Languages } from "lucide-react";

import { certifications, education, experience, languages } from "@/content/profile";
import { SectionLabel } from "./pop-link";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04">Journey</SectionLabel>
        <h2 className="font-display text-giant mt-8 font-extrabold">
          Experience &amp; <span className="text-primary">learning.</span>
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {experience.map((e) => (
            <article key={e.role} className="rounded-3xl border-2 border-foreground bg-card p-8 shadow-pop sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
                  <Briefcase className="h-3.5 w-3.5" /> Experience
                </span>
                <span className="font-mono text-sm text-muted-foreground">{e.period} · {e.mode}</span>
              </div>
              <h3 className="font-display mt-6 text-3xl font-extrabold leading-none sm:text-4xl">{e.role}</h3>
              <p className="mt-2 text-xl font-semibold text-primary">{e.company}</p>
              <ul className="mt-6 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-foreground" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="grid gap-8">
            <div className="rounded-3xl border-2 border-foreground bg-accent p-8 text-accent-foreground">
              <GraduationCap className="h-7 w-7" />
              <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight">{education.degree}</h3>
              <p className="mt-2">{education.school}</p>
              <p className="mt-1 font-mono text-sm">Graduated {education.year}</p>
            </div>
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <Award className="h-7 w-7 text-primary" />
              <h3 className="eyebrow mt-4 text-muted-foreground">Certifications</h3>
              <ul className="mt-3 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="font-semibold leading-snug">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 border-t border-border pt-5">
                <Languages className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">{languages.join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
