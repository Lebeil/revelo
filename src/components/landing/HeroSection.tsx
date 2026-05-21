import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroDashboardPreview } from "./HeroDashboardPreview";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const trustItems = [
  "5 interviews CS, KAM, RevOps menées",
  "Score hybride machine plus ressenti CSM noté",
  "Pilote en 10 jours ouvrés",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32" id="hero">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] grain opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-orange/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-teal/15 blur-3xl"
      />

      <div className="section-shell">
        <div className="section-inner-wide grid items-center gap-10 pb-14 sm:gap-14 sm:pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
          <div className="space-y-8">
            <RevealOnScroll>
              <Badge className="border-teal/15 bg-teal/8 text-teal hover:bg-teal/12">
                <span className="ticker-dot mr-2" aria-hidden />
                Beta privée · saison 1 ouvre en juin 2026
              </Badge>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h1 className="display-serif text-balance text-4xl text-midnight sm:text-5xl lg:text-6xl">
                Le copilote qui
                {" "}
                <span className="relative inline-block">
                  <span className="text-teal">sécurise</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-2 left-0 h-2.5 w-full rounded-full bg-orange/40"
                  />
                </span>
                {" "}
                vos renouvellements B2B.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-midnight/75">
                <span className="font-semibold text-teal">Détectez</span> les comptes qui décrochent,{" "}
                <span className="font-semibold text-teal">priorisez</span> ceux à risque avec le
                Health Score hybride, <span className="font-semibold text-teal">déclenchez</span>{" "}
                les bons plans d'action IA pour sécuriser le renouvellement. Intégré nativement
                dans HubSpot et Salesforce.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal text-cream hover:bg-teal-deep"
                >
                  <Link href="#lead">
                    Rejoindre la beta
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-midnight/15 bg-cream-soft text-midnight hover:bg-cream-deep"
                >
                  <Link href="/demo">
                    <PlayCircle className="mr-2" size={16} />
                    Voir le dashboard live
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-midnight/65">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <HeroDashboardPreview />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
