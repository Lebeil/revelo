"use client";

import { useState } from "react";
import { ArrowRight, Heart, Rocket, Scale, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Scenario } from "@/lib/data/mock-accounts";
import { cn } from "@/lib/utils";

const toneStyles: Record<Scenario["tone"], { ring: string; pill: string; icon: typeof Heart }> = {
  save: {
    ring: "border-teal/40 bg-card",
    pill: "bg-teal text-cream",
    icon: Heart,
  },
  expansion: {
    ring: "border-orange/40 bg-card",
    pill: "bg-orange text-midnight",
    icon: Rocket,
  },
  soft: {
    ring: "border-midnight/15 bg-card",
    pill: "bg-midnight text-cream",
    icon: Scale,
  },
};

type ScenarioSimulatorProps = {
  scenarios: Scenario[];
};

export function ScenarioSimulator({ scenarios }: Readonly<ScenarioSimulatorProps>) {
  const [active, setActive] = useState<string>(scenarios[0]?.id ?? "save");

  if (scenarios.length === 0) {
    return null;
  }

  const activeScenario = scenarios.find((s) => s.id === active) ?? scenarios[0];

  return (
    <article className="rounded-2xl border border-cream-deep bg-card p-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
            Plans d'action IA personnalisés
          </p>
          <h3 className="display-serif text-lg text-midnight">
            Trois plans générés selon le profil interlocuteur
          </h3>
        </div>
        <Badge className="rounded-full bg-teal/10 text-teal">Choisir le plan à activer</Badge>
      </header>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {scenarios.map((scenario) => {
          const styles = toneStyles[scenario.tone];
          const Icon = styles.icon;
          const isActive = scenario.id === active;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActive(scenario.id)}
              className={cn(
                "group rounded-xl border p-4 text-left transition-all",
                styles.ring,
                isActive
                  ? "shadow-[0_18px_40px_-22px_rgba(10,46,54,0.45)] ring-2 ring-orange/40"
                  : "hover:-translate-y-0.5 hover:border-orange/30"
              )}
              aria-pressed={isActive}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-lg",
                    styles.pill
                  )}
                >
                  <Icon size={14} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-midnight/55">
                  {scenario.arrImpact}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-midnight">{scenario.title}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-teal">
                <UserRound size={10} />
                {scenario.audience}
              </p>
              <p className="mt-2 text-xs text-midnight/65 leading-relaxed">
                {scenario.pitch}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-cream-deep bg-cream-soft p-5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-teal">
            Détail · {activeScenario.title}
          </p>
          <p className="text-[11px] font-semibold text-orange-deep">{activeScenario.arrImpact}</p>
        </div>
        <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-midnight/65">
          <UserRound size={11} />
          Cible : {activeScenario.audience}
        </p>
        <p className="mt-3 text-sm text-midnight leading-relaxed">{activeScenario.pitch}</p>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
          Arguments clés générés par l'agent
        </p>
        <ul className="mt-2 space-y-2 text-sm text-midnight/85">
          {activeScenario.arguments.map((arg) => (
            <li key={arg} className="flex items-start gap-2">
              <ArrowRight size={14} className="mt-1 shrink-0 text-orange" />
              <span>{arg}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button size="sm" className="bg-teal text-cream hover:bg-teal-deep">
            Activer le plan
          </Button>
          <Button size="sm" variant="outline" className="border-cream-deep bg-card text-midnight hover:bg-cream-deep">
            Pousser dans HubSpot
          </Button>
          <p className="text-[11px] text-midnight/55">
            Human in the loop, vous validez avant tout envoi client.
          </p>
        </div>
      </div>
    </article>
  );
}
