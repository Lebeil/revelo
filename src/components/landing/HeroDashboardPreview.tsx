import { ArrowUpRight, Sparkles, AlarmClock } from "lucide-react";

export function HeroDashboardPreview() {
  return (
    <div className="relative w-full">
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 35%, rgba(255,107,53,0.18), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(15,76,92,0.18), transparent 70%)",
        }}
      />
      <div className="relative overflow-hidden rounded-3xl border border-cream-deep bg-card shadow-[0_28px_60px_-30px_rgba(10,46,54,0.45)]">
        <div className="flex items-center justify-between border-b border-cream-deep/80 bg-cream-soft px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream-deep" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream-deep" />
          </div>
          <p className="text-xs font-medium text-midnight/60">revelo.app · comptes à risque</p>
          <div className="rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal">
            J+7 forecast
          </div>
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "ARR à risque", value: "1,84 M€", delta: "+12 %" },
                { label: "Comptes alerte", value: "9", delta: "+3 cette semaine" },
                { label: "NRR projeté", value: "108 %", delta: "Objectif 112 %" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-cream-deep bg-cream-soft px-3 py-3"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-midnight/55">
                    {kpi.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-midnight display-serif">{kpi.value}</p>
                  <p className="mt-1 text-[10px] text-teal">{kpi.delta}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-cream-deep bg-cream-soft">
              <div className="flex items-center justify-between border-b border-cream-deep/70 px-4 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/60">
                  Comptes à risque
                </p>
                <span className="text-[10px] text-midnight/50">Tri auto par criticité</span>
              </div>
              <ul className="divide-y divide-cream-deep/60 text-xs">
                {[
                  { name: "Acme SaaS", arr: "280 k€", risk: "Critique", signal: "Usage -42 %", color: "bg-destructive/10 text-destructive" },
                  { name: "NorthBeam", arr: "164 k€", risk: "Élevé", signal: "Adoption stagne", color: "bg-orange/10 text-orange-deep" },
                  { name: "Lumi Health", arr: "92 k€", risk: "Modéré", signal: "Échéance 60 j", color: "bg-teal/10 text-teal" },
                ].map((row) => (
                  <li key={row.name} className="grid grid-cols-[1.4fr_0.8fr_1fr_1fr] items-center gap-3 px-4 py-2.5">
                    <span className="font-semibold text-midnight">{row.name}</span>
                    <span className="text-midnight/70">{row.arr}</span>
                    <span className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.color}`}>
                      {row.risk}
                    </span>
                    <span className="text-midnight/60">{row.signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-teal/15 bg-teal text-cream p-4">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-orange">
                <Sparkles size={12} />
                Brief agent IA
              </div>
              <p className="mt-2 text-sm leading-snug text-cream/95">
                Acme SaaS bascule en zone rouge. Usage -42 % depuis 30 jours, échéance 12 septembre.
                Recommandation : déclencher save motion sous 7 jours.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-semibold uppercase tracking-wider">
                <div className="rounded-lg bg-cream/10 px-2 py-1.5 text-cream">Save</div>
                <div className="rounded-lg bg-orange/30 px-2 py-1.5 text-cream">Expansion</div>
                <div className="rounded-lg bg-cream/10 px-2 py-1.5 text-cream">Renégo soft</div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-orange">
                Ouvrir le brief complet
                <ArrowUpRight size={12} />
              </div>
            </div>

            <div className="rounded-xl border border-cream-deep bg-card p-4">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-teal">
                <AlarmClock size={12} />
                Alerte Slack envoyée
              </div>
              <div className="mt-3 rounded-lg bg-cream-soft p-3 text-xs">
                <p className="font-semibold text-midnight">#cs-revelo · 09:12</p>
                <p className="mt-1 text-midnight/75 leading-snug">
                  @marie Acme SaaS → criticité 89/100. -42 % d'usage, palier 50 licences atteint.
                  Brief prêt, scénarios générés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
