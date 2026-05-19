import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "inverse";
  className?: string;
};

export function Logo({ variant = "default", className }: LogoProps) {
  const isInverse = variant === "inverse";
  const mark = isInverse ? "#F8F4E3" : "#0F4C5C";
  const accent = "#FF6B35";
  const text = isInverse ? "text-cream" : "text-teal";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="9" fill={mark} />
        <path
          d="M9 22V10h6.5a4 4 0 0 1 0 8h-1.6L18 22"
          stroke="#F8F4E3"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="23.5" cy="9.5" r="2.4" fill={accent} />
      </svg>
      <span className={cn("font-semibold tracking-tight text-lg", text)}>
        Revelo
      </span>
    </span>
  );
}
