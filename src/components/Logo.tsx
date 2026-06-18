import { site } from "@/lib/site";

type Props = {
  withTagline?: boolean;
  className?: string;
};

export default function Logo({ withTagline = true, className }: Props) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 flex-none"
        role="img"
        aria-label={`${site.name} logo`}
      >
        <defs>
          <linearGradient id="lpLogoBg" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2b8bff" />
            <stop offset="1" stopColor="#1657c2" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#lpLogoBg)" />
        <text
          x="32"
          y="29"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-geist-sans), Arial, sans-serif"
          fontWeight="800"
          fontSize="27"
          letterSpacing="-1.5"
          fill="#ffffff"
        >
          GL
        </text>
        <path d="M27 43 L40 49.5 L27 56 Z" fill="#2dd4bf" />
      </svg>

      <span className="leading-none">
        <span className="block text-lg font-bold tracking-tight">{site.name}</span>
        {withTagline && (
          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
            by Godey Nomsu Daniel
          </span>
        )}
      </span>
    </span>
  );
}
