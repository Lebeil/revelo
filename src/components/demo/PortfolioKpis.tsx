"use client";

import { Activity, AlertTriangle, Scale, Sparkles } from "lucide-react";
import { portfolioKpis, type PortfolioKpi } from "@/lib/data/mock-accounts";
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

const iconByKpi: Record<PortfolioKpi["id"], typeof Activity> = {
  "arr-risk": AlertTriangle,
  alerts: Activity,
  gaps: Scale,
  plans: Sparkles,
};

function StackedBar({
  segments,
}: Readonly<{
  segments: { label: string; value: number; color: string; fmt: string }[];
}>) {
  const total = segments.reduce((acc, seg) => acc + seg.value, 0);
  return (
    <div className="space-y-2">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-cream-deep">
        {segments.map((seg) => (
          <div
            key={seg.label}
            style={{
              width: `${(seg.value / total) * 100}%`,
              backgroundColor: seg.color,
            }}
            title={`${seg.label} : ${seg.fmt}`}
          />
        ))}
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-midnight/65">
        {segments.map((seg) => (
          <li key={seg.label} className="inline-flex items-center gap-1">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: seg.color }}
              aria-hidden
            />
            <span className="font-semibold text-midnight">{seg.label}</span>
            <span>{seg.fmt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AlertsBreakdown() {
  const items = [
    { label: "Critique", count: 2, color: "bg-destructive/10 text-destructive border-destructive/30" },
    { label: "Élevé", count: 4, color: "bg-orange/10 text-orange-deep border-orange/30" },
    { label: "Modéré", count: 3, color: "bg-teal/10 text-teal border-teal/30" },
  ];
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item.label}
          className={cn(
            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
            item.color
          )}
        >
          <span className="font-mono">{item.count}</span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

function GapAccountsTags() {
  const accounts = ["Acme SaaS", "NorthBeam", "Savoyance", "Vendora"];
  return (
    <ul className="flex flex-wrap gap-1.5">
      {accounts.map((name) => (
        <li
          key={name}
          className="inline-flex items-center gap-1 rounded-full border border-orange/30 bg-orange/5 px-2 py-0.5 text-[10px] font-semibold text-orange-deep"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
          {name}
        </li>
      ))}
    </ul>
  );
}

function PlansSplit() {
  const total = 37;
  const activated = 28;
  const pending = 9;
  const ratio = (activated / total) * 100;
  return (
    <div className="space-y-2">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-cream-deep">
        <div
          className="bg-teal"
          style={{ width: `${ratio}%` }}
          title={`Activés : ${activated}`}
        />
        <div
          className="bg-orange"
          style={{ width: `${100 - ratio}%` }}
          title={`En attente : ${pending}`}
        />
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-midnight/65">
        <li className="inline-flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-teal" aria-hidden />
          <span className="font-semibold text-midnight">{activated}</span> activés
        </li>
        <li className="inline-flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-orange" aria-hidden />
          <span className="font-semibold text-midnight">{pending}</span> en attente CSM
        </li>
      </ul>
    </div>
  );
}

function KpiDetail({ id }: Readonly<{ id: PortfolioKpi["id"] }>) {
  switch (id) {
    case "arr-risk":
      return (
        <StackedBar
          segments={[
            { label: "Critique", value: 1100, fmt: "1,1 M€", color: "#C0392B" },
            { label: "Élevé", value: 580, fmt: "580 k€", color: "#FF6B35" },
            { label: "Modéré", value: 165, fmt: "165 k€", color: "#0F4C5C" },
          ]}
        />
      );
    case "alerts":
      return <AlertsBreakdown />;
    case "gaps":
      return <GapAccountsTags />;
    case "plans":
      return <PlansSplit />;
  }
}

export function PortfolioKpis() {
  return (
    <section id="kpi" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {portfolioKpis.map((kpi) => {
        const Icon = iconByKpi[kpi.id];
        return (
          <article
            key={kpi.id}
            className={cn(
              "flex flex-col gap-3 rounded-2xl border p-5",
              toneClass[kpi.tone]
            )}
          >
            <header className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
                  {kpi.label}
                </p>
                <p className="mt-1 display-serif text-3xl text-midnight">{kpi.value}</p>
                <p className={cn("mt-1 text-xs font-medium", trendClass[kpi.tone])}>
                  {kpi.trend}
                </p>
              </div>
              <span
                className={cn(
                  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border",
                  kpi.tone === "warn"
                    ? "border-orange/40 bg-orange/10 text-orange-deep"
                    : "border-teal/30 bg-teal/10 text-teal"
                )}
              >
                <Icon size={16} />
              </span>
            </header>

            <p className="text-xs leading-relaxed text-midnight/70">{kpi.description}</p>

            <div className="mt-auto pt-1">
              <KpiDetail id={kpi.id} />
            </div>
          </article>
        );
      })}
    </section>
  );
}
