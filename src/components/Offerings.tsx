import Section from "./Section";
import { offerings, site } from "@/lib/site";

export default function Offerings() {
  return (
    <Section
      id="offerings"
      eyebrow="Play"
      title="Pick your station"
      subtitle="Hourly rates, no membership needed. Book ahead on busy nights to lock your spot."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {offerings.map((o) => (
          <div
            key={o.title}
            className={`relative flex flex-col rounded-2xl border bg-surface p-7 transition-transform hover:-translate-y-1 ${
              o.featured ? "border-brand ring-1 ring-brand/40" : "border-border"
            }`}
          >
            {o.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-bold">{o.title}</h3>
            <div className="mt-2 text-3xl font-black text-gradient">{o.price}</div>
            <p className="mt-3 text-sm text-muted">{o.blurb}</p>

            <ul className="mt-6 space-y-2.5 text-sm">
              {o.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-brand/15 text-brand">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-7 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-colors ${
                o.featured
                  ? "bg-brand text-white hover:bg-brand-600"
                  : "border border-border hover:border-brand"
              }`}
            >
              Reserve this
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
