import { Check, Minus } from "lucide-react";
import { competitors, comparisonAxes } from "@/lib/data/comparison";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

function ScoreDots({ score }: Readonly<{ score: number }>) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${score} sur 5`}>
      {[1, 2, 3, 4, 5].map((idx) => (
        <span
          key={idx}
          className={cn(
            "h-2 w-2 rounded-full",
            idx <= score ? "bg-teal" : "bg-cream-deep"
          )}
        />
      ))}
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="relative py-16 sm:py-20 lg:py-32">
      <div className="section-shell">
        <div className="section-inner-wide">
          <RevealOnScroll>
            <p className="eyebrow">Positionnement marché</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Pas seulement un score. Un copilote d'action.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Gainsight et Vitally consolident l'usage. Skalin couvre le SMB. ChurnZero structure
              les playbooks. Aucun ne combine <span className="font-semibold text-teal">ce que la donnée voit</span>,{" "}
              <span className="font-semibold text-teal">ce que le CSM ressent</span> et{" "}
              <span className="font-semibold text-teal">ce que l'équipe doit faire</span>.
              Comparaison sur 5 critères qui pèsent vraiment dans la décision board.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-2xl border border-cream-deep bg-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-cream-soft text-midnight/70">
                      <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest">
                        Critère
                      </th>
                      {competitors.map((comp) => (
                        <th
                          key={comp.id}
                          className={cn(
                            "px-4 py-4 text-[11px] font-semibold uppercase tracking-widest",
                            comp.id === "revelo" && "bg-teal text-cream"
                          )}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className={cn(comp.id === "revelo" ? "text-orange" : "text-midnight/55")}>
                              {comp.id === "revelo" ? "Notre proposition" : "Concurrent"}
                            </span>
                            <span className={cn("text-sm font-semibold", comp.id === "revelo" ? "text-cream" : "text-midnight")}>
                              {comp.name}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonAxes.map((axis) => (
                      <tr key={axis.key} className="border-t border-cream-deep">
                        <td className="px-6 py-4 align-middle font-semibold text-midnight">
                          {axis.label}
                        </td>
                        {competitors.map((comp) => (
                          <td
                            key={comp.id + axis.key}
                            className={cn(
                              "px-4 py-4 align-middle",
                              comp.id === "revelo" && "bg-teal/5"
                            )}
                          >
                            <ScoreDots score={comp[axis.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-t border-cream-deep bg-cream-soft/50">
                      <td className="px-6 py-4 align-middle font-semibold text-midnight">
                        Time to value
                      </td>
                      {competitors.map((comp) => (
                        <td
                          key={comp.id + "ttv"}
                          className={cn(
                            "px-4 py-4 align-middle text-sm",
                            comp.id === "revelo" ? "bg-teal/5 font-semibold text-teal" : "text-midnight/70"
                          )}
                        >
                          {comp.timeToValue}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-cream-deep">
                      <td className="px-6 py-4 align-middle font-semibold text-midnight">
                        TCO indicatif
                      </td>
                      {competitors.map((comp) => (
                        <td
                          key={comp.id + "tco"}
                          className={cn(
                            "px-4 py-4 align-middle text-sm",
                            comp.id === "revelo" ? "bg-teal/5 font-semibold text-teal" : "text-midnight/70"
                          )}
                        >
                          {comp.tco}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Check,
                title: "Ce que personne ne fait",
                body: "Fusionner score machine, notation collaborative CSM et plans d'action IA personnalisés selon le profil interlocuteur.",
              },
              {
                icon: Check,
                title: "Notre cible",
                body: "Éditeurs SaaS B2B mid-market, 5 à 50 M€ ARR, équipés HubSpot ou Salesforce, France et Europe.",
              },
              {
                icon: Minus,
                title: "Hors scope assumé",
                body: "Pas une CDP marketing, pas un outil de signature, pas un CSM-only pour SMB <100 contrats.",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <RevealOnScroll key={card.title} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-cream-deep bg-cream-soft p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal text-cream">
                      <Icon size={16} />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-midnight">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-midnight/70">{card.body}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
