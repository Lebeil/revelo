import Link from "next/link";
import { Check } from "lucide-react";
import { pricingTiers } from "@/lib/data/pricing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-32">
      <div className="section-shell">
        <div className="section-inner-wide">
          <RevealOnScroll>
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Beta privée gratuite</p>
                <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
                  Trois paliers, tout gratuit pendant la beta
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
                  Commencez avec la plateforme. Branchez l'API quand vous voulez faire remonter les
                  alertes dans Slack ou Salesforce. Appelez-nous si vous voulez qu'on structure la
                  notation CSM avec votre équipe. Pas d'engagement, exportez vos données quand vous
                  voulez.
                </p>
              </div>
              <div className="rounded-2xl border border-orange/40 bg-orange/10 p-4 text-xs text-midnight">
                <p className="font-semibold uppercase tracking-widest text-orange-deep">
                  Beta privée
                </p>
                <p className="mt-1 max-w-xs leading-relaxed">
                  Accès gratuit complet pour les 50 premiers pilotes signés avant le 30 juin 2026.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, idx) => (
              <RevealOnScroll key={tier.id} delay={idx * 0.08}>
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-3xl border p-8",
                    tier.featured
                      ? "border-orange/30 bg-midnight text-cream shadow-[0_25px_60px_-30px_rgba(10,46,54,0.55)]"
                      : "border-cream-deep bg-card text-midnight"
                  )}
                >
                  {tier.badge && (
                    <Badge className="absolute right-6 top-6 rounded-full bg-orange text-midnight">
                      {tier.badge}
                    </Badge>
                  )}
                  <p
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-widest",
                      tier.featured ? "text-orange" : "text-orange-deep"
                    )}
                  >
                    {tier.name}
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="display-serif text-4xl">{tier.priceFrom}</span>
                    <span className={cn("text-sm", tier.featured ? "text-cream/65" : "text-midnight/55")}>
                      {tier.pricePeriod}
                    </span>
                  </div>

                  <p className={cn("mt-4 text-xs italic", tier.featured ? "text-cream/65" : "text-midnight/55")}>
                    {tier.audience}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {tier.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <Check
                          size={16}
                          className={cn(
                            "mt-0.5 shrink-0",
                            tier.featured ? "text-orange" : "text-teal"
                          )}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-current/15">
                    <Button
                      asChild
                      className={cn(
                        "w-full",
                        tier.featured
                          ? "bg-orange text-midnight hover:bg-orange-soft"
                          : "bg-teal text-cream hover:bg-teal-deep"
                      )}
                    >
                      <Link href="#lead">{tier.cta}</Link>
                    </Button>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="mt-10 text-center text-sm text-midnight/55">
              Pas d'engagement, désactivation en un clic, vos données exportables à tout moment.
              Une fois la beta terminée, la tarification sera co-construite avec les pilotes.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
