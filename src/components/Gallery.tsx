import Image from "next/image";
import Section from "./Section";
import { gallery } from "@/lib/site";

export default function Gallery() {
  return (
    <Section
      id="gallery"
      eyebrow="The space"
      title="Take a look inside"
      subtitle="Real shots from our lounge — come see it for yourself."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gallery.map((g) => (
          <div
            key={g.label}
            className="group relative aspect-4/3 overflow-hidden rounded-xl border border-border bg-surface-2"
          >
            <Image
              src={g.src}
              alt={g.label}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity">
              <span className="p-4 text-sm font-semibold text-white drop-shadow">{g.label}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
