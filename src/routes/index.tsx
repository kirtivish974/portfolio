import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Hero } from "@/components/portfolio/hero";
import { Journey } from "@/components/portfolio/journey";
import { Marquee } from "@/components/portfolio/marquee";
import { Projects } from "@/components/portfolio/projects";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Skills } from "@/components/portfolio/skills";

const title = "Kirti Vishwakarma — AI & Generative AI Engineer";
const description =
  "Portfolio of Kirti Vishwakarma, an AI & GenAI Engineer building RAG systems, LLM apps and machine-learning pipelines. Open to entry-level roles across India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
