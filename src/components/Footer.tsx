import { site } from "@/lib/site";
import Logo from "./Logo";

const socialEntries = Object.entries(site.socials).filter(([, url]) => url);

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted">{site.tagline}</p>
        </div>

        {socialEntries.length > 0 && (
          <div className="flex flex-wrap gap-4 text-sm">
            {socialEntries.map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize text-muted transition-colors hover:text-foreground"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
