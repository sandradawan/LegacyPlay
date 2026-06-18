import Section from "./Section";
import { events, site } from "@/lib/site";

export default function Tournaments() {
  return (
    <Section
      id="tournaments"
      eyebrow="Compete"
      title="Upcoming tournaments"
      subtitle="Sign up at the desk or message us to reserve your seat. Spots are limited."
    >
      <div className="space-y-4">
        {events.map((e) => (
          <div
            key={e.title}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold">{e.title}</h3>
                <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand">
                  {e.game}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{e.date}</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-right">
                <div className="font-semibold text-accent">{e.prize}</div>
                <div className="text-xs text-muted">{e.entry}</div>
              </div>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Join
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
