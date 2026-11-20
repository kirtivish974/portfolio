import { skills } from "@/content/profile";
import { SectionLabel } from "./pop-link";

export function Skills() {
  return (
    <section id="skills" className="theme-ink scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03">Toolkit</SectionLabel>
        <h2 className="font-display text-giant mt-8 font-extrabold">
          What I work <span className="text-outline">with</span><span className="text-highlight">.</span>
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {skills.map((g, i) => (
            <div key={g.group} className="bg-card p-8 sm:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-highlight">0{i + 1}</span>
                <h3 className="font-display text-3xl font-bold">{g.group}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="cursor-default rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
