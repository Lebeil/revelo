import { Radar, ListOrdered, Sparkles, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const steps = [
  {
    id: "detect",
    title: "Détecter",
    icon: Radar,
    description:
      "Revelo tire les données d'Amplitude, Zendesk, Stripe et Gong.io, puis ajoute ce que le CSM a noté le vendredi. Aucune saisie manuelle.",
    bullets: [
      "Usage (Amplitude, Mixpanel), CSAT (Zendesk), ARR (Stripe, Chargebee)",
      "Sentiment extrait des CR de réunion (Gong.io, Modjo)",
      "Notation collaborative CSM via formulaire interne, 5 min le vendredi",
    ],
  },
  {
    id: "prioritize",
    title: "Prioriser",
    icon: ListOrdered,
    description:
      "Le Health Score hybride fusionne machine et ressenti humain pour faire ressortir les comptes sains, fragiles ou urgents à traiter. Vous savez où agir en premier.",
    bullets: [
      "Score rouge, orange, vert priorisé chaque matin",
      "Détection des écarts machine vs humain",
      "Signaux humains : manager de transition, désengagement nouveau référent, baisse d'usage sur un user clé même si global stable",
    ],
  },
  {
    id: "act",
    title: "Agir",
    icon: Sparkles,
    description:
      "Pour chaque compte rouge, Revelo génère le mail à envoyer, l'escalade à proposer ou la remise à anticiper. Vous relisez, modifiez si besoin, envoyez.",
    bullets: [
      "Reprise contact préventive scriptée",
      "Remise anticipée avec marge protégée",
      "Escalade KAM ou Direction CS si engagement contractuel",
    ],
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="relative bg-midnight text-cream py-16 sm:py-20 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(255,107,53,0.25), transparent 45%), radial-gradient(circle at 90% 100%, rgba(143,181,190,0.18), transparent 50%)",
        }}
      />
      <div className="section-shell relative">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="eyebrow text-orange">
              <span className="bg-orange" />La méthode Revelo
            </p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-cream sm:text-4xl">
              Trois étapes. Pas six semaines d'onboarding.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-cream/75 leading-relaxed">
              La donnée Amplitude, le ticket Zendesk ouvert depuis 3 semaines, ce que Marie a noté
              vendredi : Revelo en fait un score et un plan d'action. Le résultat remonte dans
              HubSpot ou Slack, là où vous travaillez déjà.
            </p>
          </RevealOnScroll>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute top-12 left-12 right-12 hidden h-px bg-gradient-to-r from-orange/0 via-orange/70 to-orange/0 md:block"
            />
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <RevealOnScroll key={step.id} delay={idx * 0.1}>
                  <article className="relative h-full rounded-2xl border border-cream/15 bg-midnight-soft/40 p-7 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-midnight">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-mono text-cream/40">
                        0{idx + 1} / 03
                      </span>
                    </div>
                    <h3 className="mt-6 display-serif text-2xl text-cream">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/75">
                      {step.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 text-sm text-cream/85">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowRight size={14} className="mt-1 shrink-0 text-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
