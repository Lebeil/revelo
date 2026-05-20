import { Radar, Shuffle, Sparkles, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const steps = [
  {
    id: "capture",
    title: "Capter",
    icon: Radar,
    description:
      "Revelo aspire en continu les signaux machine et les signaux humains de votre stack existante. Pas de saisie manuelle, pas de nouvel outil à ouvrir.",
    bullets: [
      "HubSpot, Salesforce, Stripe, Pennylane, Zendesk",
      "Sentiment extrait des CR de réunion (Modjo, Notta)",
      "Notation collaborative CSM, 5 min le vendredi",
    ],
  },
  {
    id: "cross",
    title: "Croiser",
    icon: Shuffle,
    description:
      "Score machine reproductible + ressenti humain noté en équipe = Health Score hybride. Les écarts entre les deux deviennent les vrais signaux à traiter.",
    bullets: [
      "Score rouge, orange, vert priorisé chaque matin",
      "Détection des écarts machine vs humain",
      "Signaux humains : manager de transition, désengagement nouveau référent",
    ],
  },
  {
    id: "act",
    title: "Agir",
    icon: Sparkles,
    description:
      "Pour chaque compte en zone rouge, l'agent IA propose un plan d'action personnalisé selon le profil interlocuteur. Vous lisez, ajustez, déclenchez.",
    bullets: [
      "Reprise contact préventive scriptée",
      "Remise anticipée avec marge protégée",
      "Scénario renégo ou escalade KAM, prêts à activer",
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
              Capter, croiser, agir. Trois étapes, un seul copilote.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-cream/75 leading-relaxed">
              Revelo n'est pas un dashboard de plus. C'est la couche d'intelligence
              qui transforme votre donnée éparse et le ressenti de vos CSM en plans
              d'action IA personnalisés, livrés là où vos équipes travaillent déjà.
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
