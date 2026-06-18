"use client";

import { useState } from "react";
import { site, navLinks } from "@/lib/site";
import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="flex flex-col px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
