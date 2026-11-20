import { ArrowDownRight, Github, Linkedin, MapPin } from "lucide-react";

import portrait from "@/assets/kirti-portrait.webp.asset.json";
import resume from "@/assets/Kirti_Vishwakarma_GenAI_Resume.pdf.asset.json";
import { profile } from "@/content/profile";
import { PopLink } from "./pop-link";

function OrbitBadge() {
  return (
    <svg viewBox="0 0 200 200" className="animate-spin-slow h-full w-full" aria-hidden="true">
      <defs>
        <path id="orbit" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
      </defs>
      <text className="fill-current font-mono text-[13px] font-medium uppercase">
        <textPath href="#orbit" textLength="536" lengthAdjust="spacing">Open to work ✺ AI Engineer ✺ GenAI Engineer ✺ </textPath>
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2 text-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Available for hire
          </p>
          <p className="eyebrow flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <h1 className="font-display animate-rise min-w-0 text-[clamp(3.25rem,10vw,9.5rem)] font-extrabold">
            Kirti
            <br />
            <span className="text-outline">Vishwa</span>karma
            <span className="text-primary">.</span>
          </h1>

          <div className="relative mx-auto aspect-square w-64 shrink-0 sm:w-80 lg:w-[22rem]">
            <div className="absolute -inset-10 text-foreground sm:-inset-12">
              <OrbitBadge />
            </div>
            <div className="absolute inset-0 rotate-3 rounded-full bg-accent" />
            <div className="relative h-full w-full -rotate-2 overflow-hidden rounded-full border-4 border-foreground shadow-pop">
              <img
                src={portrait.url}
                alt="Portrait of Kirti Vishwakarma at her desk with books on Python, Machine Learning, GenAI and RAG"
                width={800}
                height={800}
                fetchPriority="high"
                className="h-full w-full scale-110 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t-2 border-foreground pt-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <p className="font-display text-3xl font-bold leading-[1.05] sm:text-4xl md:text-5xl">
            <span className="rounded-lg bg-accent px-2">AI Engineer</span> &amp;{" "}
            <span className="text-primary">Generative&nbsp;AI</span> Engineer in the making.
          </p>
          <div className="flex flex-col justify-between gap-6">
            <p className="text-lg leading-relaxed text-muted-foreground">{profile.tagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              <PopLink href="#work" variant="primary">
                See my work <ArrowDownRight className="h-4 w-4" />
              </PopLink>
              <PopLink href={resume.url} download variant="outline">
                Download resume
              </PopLink>
              <PopLink href={profile.github} target="_blank" rel="noreferrer" variant="outline" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </PopLink>
              <PopLink href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </PopLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
