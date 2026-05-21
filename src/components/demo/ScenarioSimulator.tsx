"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Heart,
  Loader2,
  Rocket,
  Scale,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import type { Scenario } from "@/lib/data/mock-accounts";
import { cn } from "@/lib/utils";

const toneStyles: Record<Scenario["tone"], { ring: string; pill: string; icon: typeof Heart }> = {
  save: {
    ring: "border-teal/40 bg-card",
    pill: "bg-teal text-cream",
    icon: Heart,
  },
  expansion: {
    ring: "border-orange/40 bg-card",
    pill: "bg-orange text-midnight",
    icon: Rocket,
  },
  soft: {
    ring: "border-midnight/15 bg-card",
    pill: "bg-midnight text-cream",
    icon: Scale,
  },
};

type ScenarioStatus = "pending" | "accepted" | "rejected";

type ScenarioSimulatorProps = {
  scenarios: Scenario[];
};

function buildRegenerated(rejected: Scenario, index: number): Scenario {
  return {
    id: `regen-${rejected.id}-${index}`,
    title: `Plan alternatif : ${rejected.title.replace(/^Plan d'action IA, /, "")}`,
    pitch:
      "L'IA a retravaillé votre refus. Nouvelle proposition recalibrée sur le feedback reçu, ajustée au profil interlocuteur.",
    arrImpact: rejected.arrImpact,
    audience: rejected.audience,
    arguments: [
      "Argumentaire revu après votre feedback",
      "Calibration sur les actions qui ont marché sur des comptes similaires",
      "Timing ajusté pour respecter la fenêtre auto-renew",
    ],
    tone: rejected.tone,
  };
}

export function ScenarioSimulator({ scenarios }: Readonly<ScenarioSimulatorProps>) {
  const [statuses, setStatuses] = useState<Record<string, ScenarioStatus>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const first = scenarios[0]?.id;
    return first ? { [first]: true } : {};
  });
  const [extras, setExtras] = useState<Scenario[]>([]);
  const [regenerating, setRegenerating] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackTarget, setFeedbackTarget] = useState<Scenario | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [regenCount, setRegenCount] = useState(0);

  const orderedScenarios = useMemo(() => [...extras, ...scenarios], [extras, scenarios]);
  const activeScenarios = orderedScenarios.filter((s) => (statuses[s.id] ?? "pending") === "pending");
  const archivedScenarios = orderedScenarios.filter((s) => statuses[s.id] && statuses[s.id] !== "pending");

  useEffect(() => {
    if (!regenerating || !feedbackTarget) return;
    const timer = window.setTimeout(() => {
      setExtras((prev) => [buildRegenerated(feedbackTarget, regenCount), ...prev]);
      setRegenCount((prev) => prev + 1);
      setRegenerating(false);
      setFeedbackTarget(null);
      toast.success("L'IA a généré une nouvelle proposition.");
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [regenerating, feedbackTarget, regenCount]);

  if (scenarios.length === 0) {
    return null;
  }

  const toggleExpanded = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const acceptScenario = (scenario: Scenario) => {
    setStatuses((prev) => ({ ...prev, [scenario.id]: "accepted" }));
    toast.success(`Plan « ${scenario.title} » activé, poussé dans HubSpot.`);
  };

  const askReject = (scenario: Scenario) => {
    setFeedbackTarget(scenario);
    setFeedbackText("");
    setFeedbackOpen(true);
  };

  const confirmReject = () => {
    if (!feedbackTarget || !feedbackText.trim()) return;
    setStatuses((prev) => ({ ...prev, [feedbackTarget.id]: "rejected" }));
    setFeedbackOpen(false);
    setRegenerating(true);
  };

  return (
    <article className="rounded-2xl border border-orange/30 bg-card p-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
            Plans d&apos;action IA personnalisés
          </p>
          <h3 className="display-serif text-lg text-midnight">
            Actions proposées par Revelo, à valider
          </h3>
        </div>
        <Badge className="rounded-full bg-orange/10 text-orange-deep border-orange/30">
          {activeScenarios.length} en attente · {archivedScenarios.length} traité{archivedScenarios.length > 1 ? "s" : ""}
        </Badge>
      </header>

      {regenerating && (
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-orange/30 bg-orange/5 p-4 text-sm text-midnight">
          <Loader2 size={16} className="animate-spin text-orange" />
          <span>L&apos;IA retravaille votre refus, nouvelle proposition dans 2 secondes…</span>
        </div>
      )}

      <ul className="mt-5 space-y-3">
        {activeScenarios.map((scenario) => {
          const styles = toneStyles[scenario.tone];
          const Icon = styles.icon;
          const isOpen = expanded[scenario.id] ?? false;
          return (
            <li
              key={scenario.id}
              className={cn(
                "rounded-xl border bg-card transition",
                styles.ring,
                "shadow-[0_8px_24px_-18px_rgba(10,46,54,0.35)]"
              )}
            >
              <button
                type="button"
                onClick={() => toggleExpanded(scenario.id)}
                className="flex w-full items-center gap-3 p-4 text-left"
                aria-expanded={isOpen}
              >
                <span
                  className={cn(
                    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                    styles.pill
                  )}
                >
                  <Icon size={16} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-midnight">{scenario.title}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-teal">
                    <UserRound size={10} />
                    {scenario.audience}
                  </p>
                </div>
                <div className="hidden flex-col items-end gap-0.5 sm:flex">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-midnight/55">
                    Impact ARR
                  </span>
                  <span className="text-sm font-semibold text-orange-deep">{scenario.arrImpact}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={cn("shrink-0 text-midnight/50 transition-transform", isOpen && "rotate-180")}
                />
              </button>

              {isOpen && (
                <div className="border-t border-cream-deep px-4 pb-4 pt-4">
                  <p className="text-sm leading-relaxed text-midnight">{scenario.pitch}</p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
                    Arguments générés par l&apos;agent
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-midnight/85">
                    {scenario.arguments.map((arg) => (
                      <li key={arg} className="flex items-start gap-2">
                        <ArrowRight size={14} className="mt-1 shrink-0 text-orange" />
                        <span>{arg}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <Button
                      size="sm"
                      className="bg-teal text-cream hover:bg-teal-deep"
                      onClick={() => acceptScenario(scenario)}
                    >
                      <CheckCircle2 size={14} className="mr-1.5" />
                      Activer le plan
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cream-deep bg-card text-midnight hover:bg-cream-deep"
                      onClick={() => acceptScenario(scenario)}
                    >
                      Pousser dans HubSpot
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-auto text-destructive hover:bg-destructive/10"
                      onClick={() => askReject(scenario)}
                    >
                      <X size={14} className="mr-1.5" />
                      Refuser
                    </Button>
                  </div>
                  <p className="mt-3 text-[11px] text-midnight/55">
                    Human in the loop. Vous validez avant tout envoi client.
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {archivedScenarios.length > 0 && (
        <details className="mt-6 rounded-xl border border-cream-deep bg-cream-soft/60">
          <summary className="cursor-pointer list-none px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-midnight/65">
            Plans traités ({archivedScenarios.length})
            <span className="ml-2 text-midnight/45">▾</span>
          </summary>
          <ul className="space-y-2 px-4 pb-4">
            {archivedScenarios.map((scenario) => {
              const status = statuses[scenario.id];
              return (
                <li
                  key={scenario.id}
                  className="flex items-center justify-between rounded-lg bg-card px-3 py-2 text-xs text-midnight/65"
                >
                  <span className="flex items-center gap-2">
                    {status === "accepted" ? (
                      <CheckCircle2 size={12} className="text-teal" />
                    ) : (
                      <X size={12} className="text-destructive" />
                    )}
                    <span className={cn(status === "rejected" && "line-through")}>{scenario.title}</span>
                  </span>
                  <Badge
                    className={cn(
                      "rounded-full text-[10px]",
                      status === "accepted"
                        ? "bg-teal/10 text-teal border-teal/30"
                        : "bg-destructive/10 text-destructive border-destructive/30"
                    )}
                  >
                    {status === "accepted" ? "Activé" : "Refusé"}
                  </Badge>
                </li>
              );
            })}
          </ul>
        </details>
      )}

      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="display-serif text-xl text-midnight">
              Pourquoi refuser cette proposition ?
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-midnight/70">
              Votre feedback est utilisé pour recalibrer l&apos;agent IA. Il regénère une nouvelle
              proposition sur cette base.
              {feedbackTarget && (
                <span className="mt-2 block rounded-lg bg-cream-soft px-3 py-2 text-xs text-midnight/65">
                  <Sparkles size={11} className="mr-1 inline text-orange" />
                  {feedbackTarget.title}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-2">
            <Label htmlFor="feedback-reason" className="text-sm font-medium text-midnight">
              Raison du refus (obligatoire)
            </Label>
            <textarea
              id="feedback-reason"
              rows={4}
              value={feedbackText}
              onChange={(event) => setFeedbackText(event.target.value)}
              placeholder="Ex : Le timing ne tombe pas bien, le sponsor est en congé. Préférez une approche écrite plutôt qu'une visio."
              className="w-full rounded-md border border-cream-deep bg-card px-3 py-2 text-sm text-midnight placeholder:text-midnight/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFeedbackOpen(false)} className="border-cream-deep">
              Annuler
            </Button>
            <Button
              onClick={confirmReject}
              disabled={!feedbackText.trim()}
              className="bg-orange text-midnight hover:bg-orange-soft disabled:opacity-50"
            >
              Envoyer le feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </article>
  );
}
