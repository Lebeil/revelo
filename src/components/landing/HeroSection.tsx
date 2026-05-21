"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, TrendingUp, Users, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroDashboardPreview } from "./HeroDashboardPreview";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { trackCtaClick } from "@/lib/track";

const interviewees = [
  { initials: "S", name: "Sirine", company: "Choose My Company", color: "bg-teal text-cream" },
  { initials: "A", name: "Assia", company: "Waat", color: "bg-orange text-midnight" },
  { initials: "JL", name: "Jean-Louis", company: "Botdesign", color: "bg-midnight text-cream" },
  { initials: "T", name: "Thibault", company: "ex-Spendesk", color: "bg-teal-soft text-cream" },
];

const trustItems = [
  { Icon: Sparkles, label: "Score hybride machine + ressenti CSM noté" },
  { Icon: TrendingUp, label: "Objectif pilote : +3 pts NRR, 300 k€ d'ARR sauvé sur 10 M€" },
  { Icon: Clock, label: "Pilote opérationnel en 10 jours ouvrés" },
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

            <RevealOnScroll delay={0.07}>
              <Badge className="inline-flex items-center gap-1.5 border-cream-deep bg-cream-soft text-xs font-medium text-midnight/75 hover:bg-cream-deep">
                <Users size={12} className="text-teal" />
                Pour les équipes Customer Success d&apos;éditeurs SaaS B2B mid-market (5 à 50 M€ ARR)
              </Badge>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <p className="display-serif text-xl italic text-teal sm:text-2xl">
                Pas seulement un score. Un copilote d&apos;action.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-midnight/75">
                Le <span className="font-semibold text-teal">Health Score hybride</span> combine vos
                données objectives ET la{" "}
                <span className="font-semibold text-teal">notation collaborative</span> de vos CSM,
                puis déclenche les <span className="font-semibold text-teal">plans d&apos;action IA</span>{" "}
                personnalisés selon le profil interlocuteur. Intégré nativement dans HubSpot et
                Salesforce.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="space-y-2">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-teal text-cream hover:bg-teal-deep"
                  >
                    <Link
                      href="#lead"
                      onClick={() => trackCtaClick("hero", "rejoindre_beta")}
                    >
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
                    <Link
                      href="/demo"
                      onClick={() => trackCtaClick("hero", "voir_dashboard")}
                    >
                      <PlayCircle className="mr-2" size={16} />
                      Voir le dashboard live
                    </Link>
                  </Button>
                </div>
                <p className="text-[11px] text-midnight/55">
                  Aucune carte bancaire requise · 50 premières places pour les pilotes
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.18}>
              <Link
                href="#testimonials"
                onClick={() => trackCtaClick("hero", "valide_terrain")}
                className="group block rounded-2xl border border-cream-deep bg-cream-soft/70 p-4 transition hover:border-orange/40 hover:bg-cream-soft"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-2">
                    {interviewees.map((person) => (
                      <span
                        key={person.initials}
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-[11px] font-semibold ${person.color}`}
                        title={`${person.name}, ${person.company}`}
                      >
                        {person.initials}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1 min-w-[180px]">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                      Validé terrain
                    </p>
                    <p className="text-sm text-midnight/80 leading-snug">
                      5 interviews CSM senior, Head of CS, RevOps et co-fondateurs · mai 2026
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-midnight/40 transition group-hover:translate-x-1 group-hover:text-orange"
                  />
                </div>
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={0.22}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-midnight/70">
                {trustItems.map(({ Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-1.5">
                    <Icon size={13} className="text-orange" />
                    <span>{label}</span>
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
