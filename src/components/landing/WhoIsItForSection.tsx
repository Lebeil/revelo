import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, LineChart } from "lucide-react";
import { personas, type Persona } from "@/lib/data/personas";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

const personaAccent: Record<Persona["color"], { ring: string; iconBg: string; chip: string }> = {
  teal: {
    ring: "ring-teal/30 hover:ring-teal/60",
    iconBg: "bg-teal text-cream",
    chip: "text-teal",
  },
  orange: {
    ring: "ring-orange/30 hover:ring-orange/60",
    iconBg: "bg-orange text-midnight",
    chip: "text-orange-deep",
  },
  midnight: {
    ring: "ring-midnight/20 hover:ring-midnight/45",
    iconBg: "bg-midnight text-cream",
    chip: "text-midnight",
  },
};

const personaIcon: Record<Persona["id"], typeof BadgeCheck> = {
  marie: BadgeCheck,
  sarah: LineChart,
  thomas: Briefcase,
};

export function WhoIsItForSection() {
  return (
    <section id="who" className="relative py-16 sm:py-20 lg:py-28">
      <div className="section-shell">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="eyebrow">Pour qui Revelo est conçu</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Marie pilote 125 comptes. Sarah ferme le board chaque mois. Thomas découvre le sous-usage à J-30.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Marie reste dans HubSpot. Sarah garde Salesforce. Thomas reçoit une alerte Slack.
              Revelo s&apos;adapte à chacun, pas l&apos;inverse.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {personas.map((persona, idx) => {
              const Icon = personaIcon[persona.id];
              const accent = personaAccent[persona.color];
              return (
                <RevealOnScroll key={persona.id} delay={idx * 0.08}>
                  <Link
                    href="#features"
                    className={cn(
                      "group flex h-full flex-col rounded-2xl border border-cream-deep bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-25px_rgba(10,46,54,0.45)] ring-1",
                      accent.ring
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                          accent.iconBg
                        )}
                      >
                        <Icon size={18} />
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-semibold uppercase tracking-widest",
                          accent.chip
                        )}
                      >
                        Persona · {persona.role}
                      </span>
                    </div>

                    <h3 className="mt-5 display-serif text-2xl text-midnight">
                      {persona.firstName}
                    </h3>
                    <p className="mt-1 text-sm text-midnight/65">{persona.fullRole}</p>
                    <p className="mt-1 text-xs text-midnight/55">{persona.company}</p>

                    <div className="mt-5 space-y-3 text-sm">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                          Douleur clé
                        </p>
                        <p className="mt-1 leading-relaxed text-midnight/80">{persona.pain}</p>
                      </div>
                    </div>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-teal transition group-hover:gap-2 group-hover:text-teal-deep">
                      Voir les modules dédiés
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
