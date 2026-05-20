import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ArrowRight, Database, MessageSquare, LayoutGrid, ServerCog } from "lucide-react";

const sources = [
  { label: "HubSpot, Salesforce", note: "ARR, opportunités, contacts, notes CSM" },
  { label: "Stripe, Pennylane, Sellsy", note: "Facturation, paliers, retards de paiement" },
  { label: "Zendesk, Intercom", note: "Tickets SAV, escalades, sentiment client" },
  { label: "Modjo, Notta + Notation CSM", note: "Sentiment CR réunion + ressenti humain hebdo" },
];

const surfaces = [
  {
    title: "Widget HubSpot embarqué",
    persona: "Marie · CSM et Sarah · RevOps",
    description:
      "Le panneau Revelo s'affiche dans la fiche compte HubSpot : Health Score hybride, signaux humains, clauses contrat, plans d'action IA prêts à activer. Aucune saisie manuelle.",
    icon: LayoutGrid,
  },
  {
    title: "Alertes Slack natives",
    persona: "Marie · CSM",
    description:
      "Les CSM reçoivent les alertes dans #cs-revelo : score hybride bascule, écart machine vs humain détecté, plan d'action IA prêt avec lien vers le brief.",
    icon: MessageSquare,
  },
  {
    title: "Webhook MCP",
    persona: "Tech leads et RevOps",
    description:
      "Branchez Revelo dans Slack, Salesforce, Teams ou un agent maison via MCP. Récupérez les plans d'action IA, déclenchez les rituels, orchestrez vos playbooks.",
    icon: ServerCog,
  },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="relative bg-cream-soft py-16 sm:py-20 lg:py-32">
      <div className="section-shell">
        <div className="section-inner-wide">
          <RevealOnScroll>
            <p className="eyebrow">Architecture API / MCP first</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Pas un nouvel outil de plus.
              <br />
              Une couche d'intelligence là où vos équipes travaillent déjà.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Revelo s'infiltre dans votre stack existante. Une table compte unique réconcilie
              HubSpot, Salesforce, Stripe, Zendesk, vos CR de réunion et la notation collaborative
              CSM. L'agent pousse le plan d'action IA là où vous êtes : Slack, widget HubSpot,
              e-mail ou webhook MCP.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <RevealOnScroll>
              <div className="relative h-full overflow-hidden rounded-3xl border border-cream-deep bg-card p-8 shadow-[0_18px_60px_-32px_rgba(10,46,54,0.5)]">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                  Le cœur Revelo
                </p>
                <h3 className="mt-3 display-serif text-2xl text-midnight">
                  Une table compte unique, réconciliée en temps réel
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/70">
                  L'ID HubSpot, l'ID Produit, l'ID Stripe, la note collaborative CSM, le sentiment
                  extrait des CR : un seul objet métier côté Revelo, prêt à consommer.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                  <ul className="space-y-3">
                    {sources.map((source) => (
                      <li
                        key={source.label}
                        className="rounded-xl border border-cream-deep bg-cream-soft px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-midnight">{source.label}</p>
                        <p className="text-xs text-midnight/65">{source.note}</p>
                      </li>
                    ))}
                  </ul>

                  <div
                    aria-hidden
                    className="hidden flex-col items-center justify-center gap-2 text-orange md:flex"
                  >
                    <ArrowRight size={22} />
                    <span className="rotate-90 text-[10px] uppercase tracking-widest text-orange-deep">
                      Réconciliation
                    </span>
                  </div>

                  <div className="flex h-full flex-col rounded-2xl bg-midnight p-5 text-cream">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-orange/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange">
                      <Database size={12} />
                      table.compte
                    </div>
                    <div className="mt-5 space-y-2.5 font-mono text-[12px] text-cream/85">
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">id_sf</span>
                        <span>001ACME</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">id_product</span>
                        <span>cust_42811</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">arr</span>
                        <span className="text-orange">280 000 €</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">renewal</span>
                        <span>2026-09-12</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">score_machine</span>
                        <span>78 / 100</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">score_human</span>
                        <span className="text-destructive">96 / 100</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-cream/55">flag_csm</span>
                        <span>manager_transition</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <div className="grid gap-5">
              {surfaces.map((surface, idx) => {
                const Icon = surface.icon;
                return (
                  <RevealOnScroll key={surface.title} delay={idx * 0.08}>
                    <article className="group flex h-full items-start gap-4 rounded-2xl border border-cream-deep bg-card p-6 transition hover:-translate-y-1 hover:border-orange/40">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal text-cream group-hover:bg-orange group-hover:text-midnight">
                        <Icon size={20} />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="display-serif text-lg text-midnight">{surface.title}</h3>
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                          {surface.persona}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-midnight/75">
                          {surface.description}
                        </p>
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
