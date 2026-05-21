import { painPoints } from "@/lib/data/pain-points";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

export function PainPointsSection() {
  return (
    <section id="problem" className="relative py-16 sm:py-20 lg:py-32">
      <div className="section-shell">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="eyebrow">Pourquoi maintenant</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Les CSM voient le risque arriver, mais trop tard et sans plan
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Signaux humains non captés (manager de transition, désengagement nouveau référent),
              plans d'action absents quand le compte passe en rouge, saisie manuelle impossible à
              tenir au-delà de 100 comptes : trois douleurs structurelles qui coûtent la NRR.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {painPoints.map((pain, idx) => {
              const Icon = pain.icon;
              const isPrimary = idx === 0;
              return (
                <RevealOnScroll key={pain.id} delay={idx * 0.08}>
                  <article
                    className={cn(
                      "group relative h-full overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(10,46,54,0.5)]",
                      isPrimary
                        ? "border-orange/40 bg-gradient-to-br from-cream-soft to-orange/5 hover:border-orange/60"
                        : "border-cream-deep bg-card hover:border-orange/40"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -right-2 -top-2 display-serif text-[88px] leading-none opacity-10 select-none",
                        isPrimary ? "text-orange" : "text-midnight"
                      )}
                    >
                      0{idx + 1}
                    </span>

                    <div className="relative flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                          isPrimary
                            ? "bg-orange text-midnight"
                            : "bg-teal/10 text-teal"
                        )}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="text-[11px] font-mono text-midnight/45">
                        0{idx + 1} / 03
                      </span>
                    </div>

                    {isPrimary && (
                      <span className="relative mt-4 inline-flex items-center rounded-full bg-orange/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange-deep">
                        Douleur n°1 marché
                      </span>
                    )}

                    <h3
                      className={cn(
                        "relative display-serif text-xl text-midnight",
                        isPrimary ? "mt-4" : "mt-6"
                      )}
                    >
                      {pain.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-midnight/70">
                      {pain.description}
                    </p>
                    <blockquote className="relative mt-6 border-l-2 border-orange pl-4 text-sm italic text-midnight/85">
                      &laquo;&nbsp;{pain.verbatim}&nbsp;&raquo;
                    </blockquote>
                    <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                      {pain.stat}
                    </p>
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
