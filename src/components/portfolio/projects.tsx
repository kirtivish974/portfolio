import { ArrowUpRight, Github } from "lucide-react";

import { profile, projects, type Project } from "@/content/profile";
import { PopLink, SectionLabel } from "./pop-link";

function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li key={s} className="rounded-full border border-foreground/30 px-3 py-1 font-mono text-xs">
          {s}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project, n }: { project: Project; n: number }) {
  return (
    <article className="group relative flex flex-col rounded-3xl border-2 border-foreground bg-card p-7 shadow-pop transition-transform duration-300 hover:-translate-y-1 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-7xl font-extrabold text-primary sm:text-8xl">0{n}</span>
        <span className="eyebrow rounded-full bg-accent px-3 py-1.5 text-accent-foreground">{project.category}</span>
      </div>
      <h3 className="font-display mt-6 text-3xl font-extrabold leading-none sm:text-5xl">{project.title}</h3>
      <p className="mt-5 text-lg text-muted-foreground">{project.summary}</p>
      <ul className="mt-6 space-y-3">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <StackChips stack={project.stack} />
      </div>
      <div className="mt-8 flex flex-wrap gap-3 pt-2">
        {project.live && (
          <PopLink href={project.live} target="_blank" rel="noreferrer" variant="primary" size="sm">
            Try the live app <ArrowUpRight className="h-4 w-4" />
          </PopLink>
        )}
        <PopLink href={project.github} target="_blank" rel="noreferrer" variant="outline" size="sm">
          <Github className="h-4 w-4" /> View code
        </PopLink>
      </div>
    </article>
  );
}

function MiniCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-3xl border-2 border-foreground bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-accent hover:shadow-pop-sm"
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow text-muted-foreground">{project.category}</span>
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
      </div>
      <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight">{project.title}</h3>
      <p className="mt-3 flex-1 text-muted-foreground">{project.summary}</p>
      <div className="mt-5">
        <StackChips stack={project.stack} />
      </div>
    </a>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  return (
    <section id="work" className="grain scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02">Selected work</SectionLabel>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-giant font-extrabold">
            Things I've <span className="text-primary">built.</span>
          </h2>
          <PopLink href={profile.github} target="_blank" rel="noreferrer" variant="solid">
            <Github className="h-4 w-4" /> All 30+ repos
          </PopLink>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedCard key={p.title} project={p} n={i + 1} />
          ))}
        </div>

        <h3 className="eyebrow mt-20 text-muted-foreground">More projects</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((p) => (
            <MiniCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
