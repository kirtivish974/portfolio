import resume from "@/assets/Kirti_Vishwakarma_GenAI_Resume.pdf.asset.json";
import { PopLink } from "./pop-link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="theme-ink mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border border-border py-2 pl-5 pr-2 shadow-2xl">
        <a href="#top" className="font-display shrink-0 text-xl font-extrabold" aria-label="Kirti Vishwakarma, back to top">
          KV<span className="text-highlight">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <PopLink href={resume.url} download variant="accent" size="sm" className="shrink-0 border-accent shadow-none hover:shadow-none">
          Resume ↓
        </PopLink>
      </nav>
    </header>
  );
}
