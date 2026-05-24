import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#home" className="flex items-center gap-2 font-display text-base font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-primary text-primary-foreground">
            A
          </span>
          <span className="text-gradient">RAJESH.Dev</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:m.rajesh07d@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-primary"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RAJESH. Crafted with care & a lot of coffee.
      </p>
    </footer>
  );
}
