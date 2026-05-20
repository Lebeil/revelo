import { portfolioKpis } from "@/lib/data/mock-accounts";
import { cn } from "@/lib/utils";

const toneClass = {
  warn: "border-orange/30 bg-orange/5",
  ok: "border-teal/30 bg-teal/5",
  neutral: "border-cream-deep bg-card",
} as const;

const trendClass = {
  warn: "text-orange-deep",
  ok: "text-teal",
  neutral: "text-midnight/55",
} as const;

export function PortfolioKpis() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {portfolioKpis.map((kpi) => (
        <article
          key={kpi.label}
          className={cn("rounded-2xl border p-5", toneClass[kpi.tone])}
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
            {kpi.label}
          </p>
          <p className="mt-2 display-serif text-3xl text-midnight">{kpi.value}</p>
          <p className={cn("mt-2 text-xs font-medium", trendClass[kpi.tone])}>{kpi.trend}</p>
        </article>
      ))}
    </section>
  );
}
