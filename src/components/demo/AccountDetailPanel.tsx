"use client";

import {
  CalendarDays,
  TrendingDown,
  UserRound,
  Activity,
  Users,
  MessageSquare,
  Sparkles,
  FileSearch,
  Bell,
  ListTree,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContractIntelligenceCard } from "./ContractIntelligenceCard";
import { UsageChart } from "./UsageChart";
import { AgentBriefCard } from "./AgentBriefCard";
import { ScenarioSimulator } from "./ScenarioSimulator";
import { SlackAlertPreview } from "./SlackAlertPreview";
import type { Account, Signal } from "@/lib/data/mock-accounts";
import { riskRingClass } from "@/lib/data/mock-accounts";
import { cn } from "@/lib/utils";

type AccountDetailPanelProps = {
  account: Account;
};

function signalChip(signal: Signal) {
  if (signal.kind === "human") return "border-orange/30 bg-orange/10 text-orange-deep";
  return "border-teal/20 bg-teal/5 text-teal";
}

function PanelHeading({
  Icon,
  title,
  hint,
}: Readonly<{
  Icon: typeof Activity;
  title: string;
  hint?: string;
}>) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal/10 text-teal">
        <Icon size={16} />
      </span>
      <div className="text-left">
        <p className="display-serif text-base text-midnight sm:text-lg">{title}</p>
        {hint && <p className="text-[11px] text-midnight/55">{hint}</p>}
      </div>
    </div>
  );
}

export function AccountDetailPanel({ account }: Readonly<AccountDetailPanelProps>) {
  const humanSignalsCount = account.signals.filter((s) => s.kind === "human").length;
  const machineSignalsCount = account.signals.filter((s) => s.kind === "machine").length;

  return (
    <section className="space-y-5">
      <article className="rounded-2xl border border-cream-deep bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
              Fiche compte
            </p>
            <h2 className="display-serif text-2xl text-midnight">{account.name}</h2>
            <p className="text-sm text-midnight/65">{account.sector}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-midnight/65">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-soft px-3 py-1.5">
              <UserRound size={12} />
              CSM {account.csm}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-soft px-3 py-1.5">
              <Users size={12} />
              Profil cible : {account.interlocutorProfile}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-soft px-3 py-1.5">
              <CalendarDays size={12} />
              Renouvellement {account.renewalDate}
            </span>
            <Badge
              className={cn(
                "rounded-full border px-3 py-1 text-[11px] font-semibold",
                riskRingClass[account.risk]
              )}
            >
              {account.risk} · score hybride {account.riskScore} / 100
            </Badge>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-teal/20 bg-teal/5 px-4 py-3 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-teal">
              Score machine
            </p>
            <p className="mt-1 display-serif text-2xl text-midnight">{account.machineScore} / 100</p>
            <p className="text-[11px] text-midnight/60 wrap-break-word">Usage + contrat + facturation + SAV</p>
          </div>
          <div className="rounded-xl border border-orange/30 bg-orange/10 px-4 py-3 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
              Score humain
            </p>
            <p className="mt-1 display-serif text-2xl text-midnight">{account.humanScore} / 100</p>
            <p className="text-[11px] text-midnight/60 wrap-break-word">Notation CSM hebdo + sentiment CR</p>
          </div>
          <div className="rounded-xl border border-cream-deep bg-cream-soft px-4 py-3 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55 wrap-break-word">
              Note CSM (vendredi dernier)
            </p>
            <p className="mt-1 display-serif text-2xl text-midnight">{account.csmRating} / 10</p>
            <p className="text-[11px] text-midnight/60 wrap-break-word">
              {account.csmFlag ?? "Aucun drapeau humain"}
            </p>
          </div>
        </div>
      </article>

      <Accordion
        type="multiple"
        defaultValue={[]}
        className="space-y-3"
      >
        <AccordionItem
          value="signals"
          className="overflow-hidden rounded-2xl border border-cream-deep bg-card px-5"
        >
          <AccordionTrigger className="py-4 hover:no-underline">
            <PanelHeading
              Icon={ListTree}
              title="Signaux détectés"
              hint={`${humanSignalsCount} humain · ${machineSignalsCount} machine`}
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {account.signals.map((signal) => (
                <div
                  key={signal.label}
                  className={cn(
                    "rounded-xl border px-4 py-3",
                    signalChip(signal)
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-widest">
                      {signal.kind === "human" ? "Signal humain" : "Signal machine"}
                    </p>
                    {signal.delta && (
                      <span className="text-[11px] font-semibold">{signal.delta}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-midnight">{signal.label}</p>
                  <p className="mt-1 text-xs text-midnight/70">{signal.detail}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="brief"
          className="overflow-hidden rounded-2xl border border-cream-deep bg-card px-5"
        >
          <AccordionTrigger className="py-4 hover:no-underline">
            <PanelHeading
              Icon={Sparkles}
              title="Brief IA hybride"
              hint="Synthèse machine + humain générée par Revelo"
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <AgentBriefCard
              brief={account.brief}
              machineScore={account.machineScore}
              humanScore={account.humanScore}
            />
          </AccordionContent>
        </AccordionItem>

        {account.scenarios.length > 0 && (
          <AccordionItem
            value="plans"
            className="overflow-hidden rounded-2xl border border-orange/30 bg-orange/5 px-5"
          >
            <AccordionTrigger className="py-4 hover:no-underline">
              <PanelHeading
                Icon={Sparkles}
                title="Actions proposées par Revelo, à valider"
                hint={`${account.scenarios.length} plans d'action IA`}
              />
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <ScenarioSimulator scenarios={account.scenarios} />
            </AccordionContent>
          </AccordionItem>
        )}

        <AccordionItem
          value="contract"
          className="overflow-hidden rounded-2xl border border-cream-deep bg-card px-5"
        >
          <AccordionTrigger className="py-4 hover:no-underline">
            <PanelHeading
              Icon={FileSearch}
              title="Contract Intelligence"
              hint="Clauses extraites par OCR + NER"
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <ContractIntelligenceCard clauses={account.contract} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="usage"
          className="overflow-hidden rounded-2xl border border-cream-deep bg-card px-5"
        >
          <AccordionTrigger className="py-4 hover:no-underline">
            <PanelHeading
              Icon={TrendingDown}
              title="Usage produit"
              hint={`Sessions hebdo · ${account.usageDelta}`}
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <div className="flex flex-col gap-3 rounded-2xl border border-cream-deep bg-cream-soft p-5">
              <UsageChart data={account.usageSeries} delta={account.usageDelta} />
              <p className="text-xs leading-relaxed text-midnight/60">
                La rupture de tendance, croisée avec le ressenti CSM et les clauses contractuelles,
                déclenche le plan d&apos;action IA adapté au compte.
              </p>
              <div className="mt-1 flex items-start gap-2 rounded-lg border border-cream-deep bg-card p-3">
                <Activity size={14} className="mt-0.5 shrink-0 text-teal" />
                <p className="text-xs text-midnight/75">
                  Le score hybride pondère 60 % la machine et 40 % le ressenti humain, paramétrable
                  par équipe.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="slack"
          className="overflow-hidden rounded-2xl border border-cream-deep bg-card px-5"
        >
          <AccordionTrigger className="py-4 hover:no-underline">
            <PanelHeading
              Icon={Bell}
              title="Alerte Slack envoyée"
              hint={`Canal ${account.slack.channel} · ${account.slack.time}`}
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <SlackAlertPreview message={account.slack} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
