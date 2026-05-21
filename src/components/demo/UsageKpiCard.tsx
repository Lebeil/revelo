import { Activity, Clock, Calendar, Users } from "lucide-react";

type Kpi = {
  label: string;
  value: string;
  benchmark: string;
  icon: typeof Clock;
  tone: "warn" | "ok" | "alert";
};

const kpis: Kpi[] = [
  {
    label: "Temps d'utilisation moyen",
    value: "6h47 / sem",
    benchmark: "Benchmark cohorte : 12h",
    icon: Clock,
    tone: "warn",
  },
  {
    label: "Fréquence de connexion",
    value: "4 j / 7",
    benchmark: "Objectif : 5 j / 7",
    icon: Calendar,
    tone: "warn",
  },
  {
    label: "Licences engagées vs utilisées",
    value: "500 / 50",
    benchmark: "-90 % d'écart",
    icon: Users,
    tone: "alert",
  },
];

const toneClass: Record<Kpi["tone"], string> = {
  ok: "border-teal/30 bg-teal/5",
  warn: "border-orange/30 bg-orange/5",
  alert: "border-destructive/30 bg-destructive/5",
};

const toneText: Record<Kpi["tone"], string> = {
  ok: "text-teal",
  warn: "text-orange-deep",
  alert: "text-destructive",
};

const sparklineData = [78, 72, 68, 61, 55, 48, 44, 41];

function Sparkline({ data }: Readonly<{ data: number[] }>) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 180;
  const height = 36;
  const step = width / (data.length - 1);

  const points = data
    .map((value, index) => {
      const x = index * step;
      const y = height - ((value - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-9 w-full max-w-[180px]"
      aria-hidden
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

export function UsageKpiCard() {
  return (
    <article className="rounded-2xl border border-cream-deep bg-card p-6">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-midnight">
            <Activity size={18} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
              KPI usage temps réel
            </p>
            <h3 className="display-serif text-lg text-midnight">
              Acme SaaS, sous-utilisation critique détectée
            </h3>
          </div>
        </div>
      </header>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className={`rounded-xl border px-4 py-3 ${toneClass[kpi.tone]}`}>
              <div className="flex items-center justify-between">
                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${toneText[kpi.tone]}`}>
                  <Icon size={13} />
                </span>
                <p className={`text-[10px] font-semibold uppercase tracking-widest ${toneText[kpi.tone]}`}>
                  {kpi.tone === "alert" ? "Critique" : kpi.tone === "warn" ? "Attention" : "OK"}
                </p>
              </div>
              <p className="mt-2 display-serif text-xl text-midnight">{kpi.value}</p>
              <p className="text-[11px] text-midnight/55">{kpi.label}</p>
              <p className={`mt-1 text-[11px] font-semibold ${toneText[kpi.tone]}`}>
                {kpi.benchmark}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-cream-deep bg-cream-soft p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
            Évolution 8 dernières semaines
          </p>
          <p className="text-[11px] font-semibold text-destructive">-47 %</p>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-destructive">
            <Sparkline data={sparklineData} />
          </div>
          <p className="text-xs text-midnight/65 leading-relaxed">
            Décrochage continu détecté par Mixpanel. Croisé avec contrat 500 licences / 50 utilisées,
            l&apos;IA déclenche un plan d&apos;action 90 j avant l&apos;échéance.
          </p>
        </div>
      </div>
    </article>
  );
}
