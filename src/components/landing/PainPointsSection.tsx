import { painPoints } from "@/lib/data/pain-points";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export function PainPointsSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="section-shell">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="eyebrow">Pourquoi maintenant</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Les équipes Revenue voient le risque arriver trop tard
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Renégociations gérées dans l'urgence, données client éparpillées, alignement Finance et Customer Success
              qui tourne au goulot d'étranglement : trois douleurs structurelles qui coûtent la NRR.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {painPoints.map((pain, idx) => {
              const Icon = pain.icon;
              return (
                <RevealOnScroll key={pain.id} delay={idx * 0.08}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-cream-deep bg-card p-7 transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_20px_45px_-25px_rgba(10,46,54,0.5)]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                        <Icon size={20} />
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                        {pain.stat}
                      </span>
                    </div>
                    <h3 className="mt-6 display-serif text-xl text-midnight">
                      {pain.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-midnight/70">
                      {pain.description}
                    </p>
                    <blockquote className="mt-6 border-l-2 border-orange pl-4 text-sm italic text-midnight/85">
                      &laquo;&nbsp;{pain.verbatim}&nbsp;&raquo;
                    </blockquote>
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
