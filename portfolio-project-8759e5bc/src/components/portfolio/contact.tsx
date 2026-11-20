import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

import resume from "@/assets/Kirti_Vishwakarma_GenAI_Resume.pdf.asset.json";
import { profile } from "@/content/profile";
import { PopLink, SectionLabel } from "./pop-link";

export function Contact() {
  return (
    <>
      <section id="contact" className="theme-flare scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel index="05">Contact</SectionLabel>
          <h2 className="font-display text-mega mt-8 font-extrabold">
            Let's build something <span className="text-highlight">intelligent.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-xl font-medium">
            Hiring for an AI or Generative AI Engineer? I'd love to hear about the role.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <PopLink href={`mailto:${profile.email}`} variant="solid" size="lg">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="sm:hidden">Email me</span>
              <span className="hidden sm:inline">{profile.email}</span>
            </PopLink>
            <PopLink href={`tel:+91${profile.phone}`} variant="accent" size="lg">
              <Phone className="h-5 w-5" /> +91 {profile.phone}
            </PopLink>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <PopLink href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </PopLink>
            <PopLink href={profile.github} target="_blank" rel="noreferrer" variant="outline">
              <Github className="h-4 w-4" /> GitHub
            </PopLink>
            <PopLink href={resume.url} download variant="outline">
              <Download className="h-4 w-4" /> Resume (PDF)
            </PopLink>
          </div>
        </div>
      </section>
      <footer className="theme-ink px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs uppercase tracking-widest">AI Engineer · GenAI Engineer · India</p>
        </div>
      </footer>
    </>
  );
}
