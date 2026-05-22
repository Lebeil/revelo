"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Loader2,
  Rocket,
  Scale,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  portfolioActionPlans,
  type PortfolioAction,
} from "@/lib/data/portfolio-actions";
import { cn } from "@/lib/utils";

const toneStyles: Record<PortfolioAction["tone"], { ring: string; pill: string; Icon: typeof Heart }> = {
  save: { ring: "border-teal/40", pill: "bg-teal text-cream", Icon: Heart },
  expansion: { ring: "border-orange/40", pill: "bg-orange text-midnight", Icon: Rocket },
  soft: { ring: "border-midnight/15", pill: "bg-midnight text-cream", Icon: Scale },
};

type Status = "pending" | "activated" | "rejected";

export function PortfolioActionsSection() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackTarget, setFeedbackTarget] = useState<PortfolioAction | null>(null);
  const [feedbackText, setFeedbackText] = useState("");

  const activate = (action: PortfolioAction) => {
    setStatuses((prev) => ({ ...prev, [action.id]: "activated" }));
    toast.success(`Plan « ${action.title} » activé, équipe notifiée.`);
  };

  const activateAll = (planId: string) => {
    const plan = portfolioActionPlans.find((p) => p.id === planId);
    if (!plan) return;
    const pending = plan.actions.filter((a) => (statuses[a.id] ?? "pending") === "pending");
    if (pending.length === 0) {
      toast.info("Toutes les actions de ce plan sont déjà traitées.");
      return;
    }
    setStatuses((prev) => {
      const next = { ...prev };
      pending.forEach((a) => {
        next[a.id] = "activated";
      });
      return next;
    });
    toast.success(
      `${pending.length} action${pending.length > 1 ? "s" : ""} activée${pending.length > 1 ? "s" : ""} sur le plan « ${plan.title.split(" (")[0]} ».`
    );
  };

  const askReject = (action: PortfolioAction) => {
    setFeedbackTarget(action);
    setFeedbackText("");
    setFeedbackOpen(true);
  };

  const confirmReject = () => {
    if (!feedbackTarget || !feedbackText.trim()) return;
    setStatuses((prev) => ({ ...prev, [feedbackTarget.id]: "rejected" }));
    setFeedbackOpen(false);
    toast.success("Feedback envoyé. L'IA va proposer une alternative au prochain cycle.");
  };

  const totalActions = portfolioActionPlans.reduce((acc, p) => acc + p.actions.length, 0);
  const treatedActions = Object.keys(statuses).length;

  return (
    <section id="portfolio-actions" className="rounded-2xl border border-cream-deep bg-card">
      <header className="flex flex-wrap items-start justify-between gap-3 border-b border-cream-deep px-5 py-4 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange text-midnight">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
              Actions à mener cette semaine
            </p>
            <h3 className="display-serif text-lg text-midnight sm:text-xl">
              Plans d&apos;action portefeuille proposés par Revelo
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-midnight/65 leading-relaxed">
              Pour chaque KPI à risque, l&apos;agent IA propose un plan agrégé.
              Activez en bloc ou cas par cas, refusez avec feedback pour recalibrer l&apos;IA.
            </p>
          </div>
        </div>
        <Badge className="rounded-full bg-cream-soft text-midnight border-cream-deep">
          {treatedActions} / {totalActions} action{totalActions > 1 ? "s" : ""} traitée{treatedActions > 1 ? "s" : ""}
        </Badge>
      </header>

      <Accordion type="multiple" defaultValue={[]} className="divide-y divide-cream-deep">
        {portfolioActionPlans.map((plan) => {
          const PlanIcon = plan.Icon;
          const planActions = plan.actions;
          const pendingCount = planActions.filter(
            (a) => (statuses[a.id] ?? "pending") === "pending"
          ).length;
          return (
            <AccordionItem key={plan.id} value={plan.id} className="border-0 px-5 sm:px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex flex-1 items-center gap-3 text-left">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange-deep">
                    <PlanIcon size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="display-serif text-base text-midnight sm:text-lg wrap-break-word">
                      {plan.title}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                      {plan.badge}
                    </p>
                  </div>
                  <Badge className="mr-3 hidden rounded-full bg-cream-soft text-midnight/75 border-cream-deep sm:inline-flex">
                    {pendingCount} en attente
                  </Badge>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-5">
                <p className="text-sm leading-relaxed text-midnight/75">{plan.summary}</p>

                <ul className="mt-5 space-y-3">
                  {planActions.map((action) => {
                    const status = statuses[action.id] ?? "pending";
                    const styles = toneStyles[action.tone];
                    const Icon = styles.Icon;
                    const isPending = status === "pending";
                    return (
                      <li
                        key={action.id}
                        className={cn(
                          "rounded-xl border bg-card p-4 transition",
                          styles.ring,
                          !isPending && "opacity-70"
                        )}
                      >
                        <div className="flex flex-wrap items-start gap-3">
                          <span
                            className={cn(
                              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                              styles.pill
                            )}
                          >
                            <Icon size={14} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className={cn("text-sm font-semibold text-midnight", status === "rejected" && "line-through")}>
                                {action.title}
                              </p>
                              {action.account && (
                                <Badge className="rounded-full bg-cream-soft text-[10px] uppercase tracking-widest text-midnight/75 border-cream-deep">
                                  {action.account}
                                </Badge>
                              )}
                              {status === "activated" && (
                                <Badge className="rounded-full bg-teal/10 text-teal border-teal/30">
                                  <CheckCircle2 size={10} className="mr-1" />
                                  Activé
                                </Badge>
                              )}
                              {status === "rejected" && (
                                <Badge className="rounded-full bg-destructive/10 text-destructive border-destructive/30">
                                  <X size={10} className="mr-1" />
                                  Refusé
                                </Badge>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-midnight/75 leading-relaxed">
                              {action.detail}
                            </p>
                            {action.arrImpact && (
                              <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
                                <ArrowRight size={11} />
                                {action.arrImpact}
                              </p>
                            )}
                          </div>
                        </div>

                        {isPending && (
                          <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-destructive hover:bg-destructive/10"
                              onClick={() => askReject(action)}
                            >
                              <X size={14} className="mr-1.5" />
                              Refuser
                            </Button>
                            <Button
                              size="sm"
                              className="bg-teal text-cream hover:bg-teal-deep"
                              onClick={() => activate(action)}
                            >
                              <CheckCircle2 size={14} className="mr-1.5" />
                              Activer
                            </Button>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {pendingCount > 0 && (
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                    <p className="text-[11px] text-midnight/55 sm:mr-2">
                      Human in the loop, vous validez avant tout envoi client.
                    </p>
                    <Button
                      size="sm"
                      className="bg-orange text-midnight hover:bg-orange-soft"
                      onClick={() => activateAll(plan.id)}
                    >
                      <Sparkles size={14} className="mr-1.5" />
                      Activer les {pendingCount} action{pendingCount > 1 ? "s" : ""}
                    </Button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="display-serif text-xl text-midnight">
              Pourquoi refuser cette action ?
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-midnight/70">
              Votre feedback est utilisé pour recalibrer les prochains plans portefeuille.
              {feedbackTarget && (
                <span className="mt-2 block rounded-lg bg-cream-soft px-3 py-2 text-xs text-midnight/65">
                  <Sparkles size={11} className="mr-1 inline text-orange" />
                  {feedbackTarget.title}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-2">
            <Label htmlFor="portfolio-reject" className="text-sm font-medium text-midnight">
              Raison du refus (obligatoire)
            </Label>
            <textarea
              id="portfolio-reject"
              rows={4}
              value={feedbackText}
              onChange={(event) => setFeedbackText(event.target.value)}
              placeholder="Ex : Le timing ne tombe pas bien, le sponsor est en congé. Action préférée différente, contexte spécifique du compte..."
              className="w-full rounded-md border border-cream-deep bg-card px-3 py-2 text-sm text-midnight placeholder:text-midnight/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setFeedbackOpen(false)}
              className="border-cream-deep"
            >
              Annuler
            </Button>
            <Button
              onClick={confirmReject}
              disabled={!feedbackText.trim()}
              className="bg-orange text-midnight hover:bg-orange-soft disabled:opacity-50"
            >
              <Loader2 size={14} className="mr-2 hidden" />
              Envoyer le feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
