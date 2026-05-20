"use client";

import { useState } from "react";
import { ArrowUpRight, Cpu, Inbox, Workflow } from "lucide-react";
import { features } from "@/lib/data/features";
import { personas, type Persona } from "@/lib/data/personas";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const personaStripe: Record<Persona["color"], { ring: string; chip: string; badge: string }> = {
  teal: {
    ring: "before:bg-teal",
    chip: "bg-teal/10 text-teal",
    badge: "bg-teal text-cream",
  },
  orange: {
    ring: "before:bg-orange",
    chip: "bg-orange/10 text-orange-deep",
    badge: "bg-orange text-midnight",
  },
  midnight: {
    ring: "before:bg-midnight",
    chip: "bg-midnight/8 text-midnight",
    badge: "bg-midnight text-cream",
  },
};

export function FeaturesMatrixSection() {
  const [active, setActive] = useState<Persona["id"]>("marie");

  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-32">
      <div className="section-shell">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="eyebrow">Matrice fonctionnelle MVP</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Six fonctionnalités. Trois personas. Une seule donnée.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Revelo embarque six modules taillés pour les rôles qui vivent la rétention contractuelle au quotidien.
              CSM, RevOps, KAM : chacun reçoit la bonne information au bon endroit, au bon moment.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Tabs
              value={active}
              onValueChange={(value) => setActive(value as Persona["id"])}
              className="mt-12"
            >
              <TabsList className="h-auto w-full flex-wrap gap-2 rounded-2xl border border-cream-deep bg-cream-soft p-2 md:w-fit">
                {personas.map((persona) => (
                  <TabsTrigger
                    key={persona.id}
                    value={persona.id}
                    className="group flex-1 rounded-xl border border-transparent px-4 py-2.5 text-left data-[state=active]:border-teal/15 data-[state=active]:bg-card data-[state=active]:shadow-sm md:flex-none"
                  >
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-midnight/55">
                      {persona.role}
                    </span>
                    <span className="block text-sm font-semibold text-midnight">
                      {persona.firstName}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {personas.map((persona) => {
                const personaFeatures = features.filter((f) => f.personaId === persona.id);
                const stripe = personaStripe[persona.color];
                return (
                  <TabsContent key={persona.id} value={persona.id} className="mt-8">
                    <div className="grid gap-6 lg:grid-cols-[0.9fr_2.1fr]">
                      <div className="rounded-2xl border border-cream-deep bg-cream-soft p-6">
                        <Badge className={cn("rounded-full px-3 py-1 text-[11px] uppercase tracking-widest", stripe.badge)}>
                          Persona · {persona.role}
                        </Badge>
                        <h3 className="mt-4 display-serif text-2xl text-midnight">
                          {persona.firstName}, {persona.fullRole}
                        </h3>
                        <p className="mt-2 text-sm text-midnight/65">{persona.company}</p>
                        <p className="mt-1 text-sm text-midnight/65">{persona.arr}</p>
                        <div className="mt-6 space-y-4 text-sm">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                              Douleur clé
                            </p>
                            <p className="mt-1 text-midnight/80">{persona.pain}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                              Ambition
                            </p>
                            <p className="mt-1 text-midnight/80">{persona.ambition}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                              Surface Revelo
                            </p>
                            <p className="mt-1 text-midnight/80">{persona.surface}</p>
                          </div>
                          <div className="rounded-xl border border-teal/15 bg-card p-3">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-teal">
                              Objectif chiffré
                            </p>
                            <p className="mt-1 text-base font-semibold text-midnight">
                              {persona.metric}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        {personaFeatures.map((feature) => {
                          const Icon = feature.icon;
                          return (
                            <article
                              key={feature.id}
                              className={cn(
                                "relative h-full overflow-hidden rounded-2xl border border-cream-deep bg-card p-6",
                                "before:absolute before:left-0 before:top-6 before:bottom-6 before:w-1 before:rounded-r",
                                stripe.ring
                              )}
                            >
                              <div className="flex items-start justify-between">
                                <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl", stripe.chip)}>
                                  <Icon size={20} />
                                </span>
                                <span className="text-[11px] font-mono text-midnight/45">
                                  F0{feature.index}
                                </span>
                              </div>
                              <h4 className="mt-5 display-serif text-lg text-midnight">{feature.title}</h4>

                              <div className="mt-5 space-y-3 text-xs">
                                <div className="flex items-start gap-2">
                                  <Inbox size={14} className="mt-0.5 shrink-0 text-midnight/40" />
                                  <div>
                                    <p className="font-semibold uppercase tracking-wider text-midnight/55 text-[10px]">
                                      Entrées
                                    </p>
                                    <p className="mt-0.5 text-midnight/80">
                                      {feature.inputs.join(", ")}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Cpu size={14} className="mt-0.5 shrink-0 text-midnight/40" />
                                  <div>
                                    <p className="font-semibold uppercase tracking-wider text-midnight/55 text-[10px]">
                                      Moteur IA
                                    </p>
                                    <p className="mt-0.5 text-midnight/80">{feature.engine}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-midnight/40" />
                                  <div>
                                    <p className="font-semibold uppercase tracking-wider text-midnight/55 text-[10px]">
                                      Output utilisateur
                                    </p>
                                    <p className="mt-0.5 text-midnight/80">{feature.output}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Workflow size={14} className="mt-0.5 shrink-0 text-orange" />
                                  <div>
                                    <p className="font-semibold uppercase tracking-wider text-orange-deep text-[10px]">
                                      Valeur métier
                                    </p>
                                    <p className="mt-0.5 text-midnight/85">{feature.value}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream-soft px-3 py-1 text-[11px] font-semibold text-teal">
                                <span className="ticker-dot" aria-hidden />
                                {feature.delta}
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
