"use client";

import { useMemo, useState } from "react";
import { Calendar, MessageCircleQuestion, UsersRound } from "lucide-react";
import { DashboardSidebar } from "@/components/demo/DashboardSidebar";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { PortfolioKpis } from "@/components/demo/PortfolioKpis";
import { RiskAccountsTable } from "@/components/demo/RiskAccountsTable";
import { AccountDetailPanel } from "@/components/demo/AccountDetailPanel";
import { OnboardingBanner } from "@/components/demo/OnboardingBanner";
import { EmailIntegrationCard } from "@/components/demo/EmailIntegrationCard";
import { UsageKpiCard } from "@/components/demo/UsageKpiCard";
import { FeedbackModal } from "@/components/demo/FeedbackModal";
import { FridayRatingPrompt } from "@/components/demo/FridayRatingPrompt";
import { PortfolioActionsSection } from "@/components/demo/PortfolioActionsSection";
import { accounts, type Account } from "@/lib/data/mock-accounts";

export default function DemoPage() {
  const defaultAccount = useMemo(() => accounts[0], []);
  const [selected, setSelected] = useState<Account>(defaultAccount);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <DemoTopBar />
          <main className="flex-1 space-y-5 px-4 py-5 sm:px-5 sm:py-7 lg:px-8 lg:py-8">
            <OnboardingBanner />

            <PortfolioKpis />

            <PortfolioActionsSection />

            <section
              id="notation"
              className="rounded-2xl border border-orange/30 bg-orange/5 p-5 sm:p-6"
            >
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange text-midnight">
                    <UsersRound size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                      Rituel hebdo · vendredi 17h
                    </p>
                    <h3 className="display-serif text-base text-midnight sm:text-lg">
                      Notation collaborative, 5 minutes pour caler ce que la machine ne sait pas
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-midnight/75 leading-relaxed">
                      Chaque vendredi, l&apos;équipe CSM note chaque compte sur 10 et coche les
                      drapeaux humains (manager de transition, contact en départ, ambiance QBR). Les
                      écarts machine vs humain remontent en haut du top du lundi.
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-3 rounded-xl border border-cream-deep bg-card px-4 py-3 text-xs lg:w-auto">
                  <Calendar size={14} className="text-orange-deep" />
                  <div>
                    <p className="font-semibold text-midnight">Prochaine session</p>
                    <p className="text-midnight/65">Vendredi 22 mai, 17h00</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-cream-deep bg-card px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
                    Comptes à noter ce vendredi
                  </p>
                  <p className="mt-1 display-serif text-xl text-midnight">125</p>
                  <p className="text-[11px] text-midnight/55">
                    Marie : portefeuille complet, durée estimée 5 min
                  </p>
                </div>
                <div className="rounded-xl border border-cream-deep bg-card px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
                    Écarts machine vs humain
                  </p>
                  <p className="mt-1 display-serif text-xl text-midnight">4 comptes</p>
                  <p className="text-[11px] text-midnight/55">Top de priorité lundi matin</p>
                </div>
                <div className="rounded-xl border border-cream-deep bg-card px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
                    Notation collaborative
                  </p>
                  <p className="mt-1 display-serif text-xl text-midnight">Optionnelle</p>
                  <p className="text-[11px] text-midnight/55">
                    Le score machine fonctionne sans, le ressenti l&apos;affine
                  </p>
                </div>
              </div>
            </section>

            <div className="grid gap-6 xl:grid-cols-[1.5fr_1.4fr] 2xl:grid-cols-[1.5fr_1.6fr]">
              <RiskAccountsTable
                selectedId={selected.id}
                onSelect={(account) => setSelected(account)}
              />
              <AccountDetailPanel account={selected} />
            </div>

            <section id="connexions" className="space-y-4">
              <header>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                  Connexions actives
                </p>
                <h3 className="display-serif text-lg text-midnight sm:text-xl">
                  Vos outils branchés à Revelo, en temps réel
                </h3>
              </header>
              <div className="grid gap-5 lg:grid-cols-2">
                <EmailIntegrationCard />
                <UsageKpiCard />
              </div>
            </section>

            <section className="rounded-2xl border border-cream-deep bg-card p-5 sm:p-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                    Test utilisateur en cours
                  </p>
                  <h3 className="display-serif text-base text-midnight sm:text-lg">
                    Vous testez le prototype Revelo, 5 questions à la fin du parcours
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-midnight/65 leading-relaxed">
                    Cliquez sur une ligne du tableau pour ouvrir la fiche compte. Toutes les données
                    sont simulées. Donnez votre feedback via le formulaire dédié, 2 minutes.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFeedbackOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-midnight hover:bg-orange-soft sm:w-auto"
                >
                  <MessageCircleQuestion size={14} />
                  Donner mon feedback
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>

      <FeedbackModal open={feedbackOpen} onOpenChange={setFeedbackOpen} />
      <FridayRatingPrompt />
    </div>
  );
}
