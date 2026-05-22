"use client";

import { useMemo, useState } from "react";
import { MessageCircleQuestion } from "lucide-react";
import { DashboardSidebar } from "@/components/demo/DashboardSidebar";
import { DemoTopBar } from "@/components/demo/DemoTopBar";
import { PortfolioKpis } from "@/components/demo/PortfolioKpis";
import { RiskAccountsTable } from "@/components/demo/RiskAccountsTable";
import { AccountDetailPanel } from "@/components/demo/AccountDetailPanel";
import { OnboardingBanner } from "@/components/demo/OnboardingBanner";
import { EmailIntegrationCard } from "@/components/demo/EmailIntegrationCard";
import { UsageKpiCard } from "@/components/demo/UsageKpiCard";
import { FeedbackModal } from "@/components/demo/FeedbackModal";
import { PortfolioActionsSection } from "@/components/demo/PortfolioActionsSection";
import { NpsQuickSlider } from "@/components/demo/NpsQuickSlider";
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

            <NpsQuickSlider />

            <div className="grid grid-cols-1 gap-5 lg:gap-6 xl:grid-cols-[1.5fr_1.4fr] 2xl:grid-cols-[1.5fr_1.6fr]">
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
    </div>
  );
}
