"use client";

import { useCallback, useEffect, useState } from "react";
import { site, heroSlides } from "@/lib/site";

const INTERVAL = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  const go = useCallback(
    (i: number) => setActive((i + heroSlides.length) % heroSlides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== active}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            } ${i === active ? "kenburns" : ""}`}
            style={{ backgroundImage: `url('${slide.src}')` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/30" />
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-28 text-center sm:py-36">
        <span className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Now open · Walk-ins welcome
        </span>

        <h1
          className="animate-fade-up max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          <span className="text-gradient">{site.tagline}</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-lg text-foreground/80"
          style={{ animationDelay: "240ms" }}
        >
          {site.description}
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-7 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105 hover:bg-brand-600"
          >
            Reserve a station
          </a>
          <a
            href="#visit"
            className="rounded-full border border-border bg-surface/70 px-7 py-3 font-semibold backdrop-blur transition-colors hover:border-brand"
          >
            Find us
          </a>
        </div>

        <div
          className="animate-fade-up mt-14 grid w-full max-w-2xl grid-cols-3 gap-4"
          style={{ animationDelay: "480ms" }}
        >
          {[
            { stat: "20+", label: "PS5 stations" },
            { stat: "4K", label: "120Hz screens" },
            { stat: "Weekly", label: "tournaments" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-surface/60 px-3 py-5 backdrop-blur"
            >
              <div className="text-2xl font-black text-foreground sm:text-3xl">{s.stat}</div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Slide dots */}
        <div className="mt-12 flex items-center gap-2.5">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-brand" : "w-2 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
