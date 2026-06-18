import Image from "next/image";
import Section from "./Section";
import { ceo } from "@/lib/site";

export default function Ceo() {
  return (
    <Section
      id="ceo"
      eyebrow="Leadership"
      title="Meet the Founder"
      subtitle="The vision and the person behind LegacyPlay."
      className="border-t border-border bg-surface/30"
    >
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr]">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-brand/25 blur-2xl" />
          <div className="relative aspect-3/4 overflow-hidden rounded-3xl border border-border bg-surface-2">
            <Image
              src={ceo.photo}
              alt={`${ceo.name}, ${ceo.role} of LegacyPlay`}
              fill
              sizes="(max-width: 768px) 80vw, 360px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{ceo.name}</h3>
          <p className="mt-1 font-semibold text-brand">{ceo.role}</p>

          <blockquote className="mt-6 border-l-2 border-brand pl-4 text-lg italic text-foreground/90">
            “{ceo.quote}”
          </blockquote>

          <div className="mt-6 space-y-4 text-muted">
            {ceo.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
