import Section from "./Section";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <Section
      id="visit"
      eyebrow="Find us"
      title="Visit the lounge"
      subtitle="Come through — we're easy to find and open late."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-7">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">Address</h3>
            <p className="mt-2 text-lg">{site.address}</p>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">Hours</h3>
            <ul className="mt-3 divide-y divide-border rounded-xl border border-border bg-surface">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between px-4 py-3 text-sm">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            src={site.mapEmbedUrl}
            title={`Map to ${site.name}`}
            className="h-full min-h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
