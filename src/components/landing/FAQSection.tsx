import { faqItems } from "@/lib/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-cream-soft py-16 sm:py-20 lg:py-32">
      <div className="section-shell">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="mt-4 max-w-3xl display-serif text-3xl text-midnight sm:text-4xl">
              Ce que les Head of CS, CFO et RevOps nous demandent en premier
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-midnight/70">
              Les questions qui reviennent en démo. Si la vôtre n'est pas listée,
              écrivez-nous : hello@revelo.io.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${idx}`}
                  className="overflow-hidden rounded-2xl border border-cream-deep bg-card px-6"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-midnight hover:no-underline data-[state=open]:text-teal">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-midnight/75">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
