import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
        </Reveal>
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
}
