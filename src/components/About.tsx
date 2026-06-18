import Section from "./Section";

const points = [
  {
    title: "Plug in & play",
    body: "Latest PlayStation 5 consoles, a deep game library, and zero setup. Just show up and pick your game.",
  },
  {
    title: "Built for the squad",
    body: "Private booths and big screens made for co-op nights, FIFA rivalries, and couch tournaments with friends.",
  },
  {
    title: "Competition every week",
    body: "From FC 25 to Tekken, our tournaments turn casual play into bragging rights — and real prize pools.",
  },
  {
    title: "Snacks, drinks & vibes",
    body: "Refuel between matches. Good food, cold drinks, and a community that actually loves games.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Who we are"
      title="More than a gaming lounge"
      subtitle="A space built by gamers, for gamers — where every session feels like the main event."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand"
          >
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
