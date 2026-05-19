import { Quote } from "lucide-react";
import { verbatims } from "@/lib/data/verbatims";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-cream py-24 lg:py-32">
      <div className="section-shell">
        <div className="section-inner-wide">
          <RevealOnScroll>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Voix du terrain</p>
                <h2 className="mt-4 max-w-2xl display-serif text-3xl text-midnight sm:text-4xl">
                  Ils nous l'ont dit en interview, sans détour
                </h2>
              </div>
              <div className="rounded-2xl border border-teal/15 bg-card p-5 text-sm">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                  Pré-validation
                </p>
                <p className="mt-1 max-w-xs text-midnight/80 leading-relaxed">
                  8 interviews qualitatives menées en mai 2026 auprès de Head of CS, KAM, RevOps et CFO.
                  <span className="font-semibold text-teal"> 100 % reconnaissent la douleur, 6 sur 8 souhaitent tester.</span>
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verbatims.map((verbatim, idx) => (
              <RevealOnScroll key={verbatim.quote.slice(0, 30)} delay={idx * 0.06}>
                <figure className="flex h-full flex-col rounded-2xl border border-cream-deep bg-card p-7">
                  <Quote size={28} className="text-orange" aria-hidden />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-midnight/85">
                    &laquo;&nbsp;{verbatim.quote}&nbsp;&raquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-cream-deep pt-4 text-sm">
                    <p className="font-semibold text-midnight">{verbatim.author}</p>
                    <p className="text-midnight/65">{verbatim.role}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-teal">
                      {verbatim.source}
                    </p>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
