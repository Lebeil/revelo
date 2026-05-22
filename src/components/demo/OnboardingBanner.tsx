"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Loader2,
  Plug,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  AmplitudeIcon,
  ChargebeeIcon,
  FormIcon,
  GongIcon,
  HubspotIcon,
  MixpanelIcon,
  ModjoIcon,
  SalesforceIcon,
  StripeIcon,
  ZendeskIcon,
} from "./BrandIcons";
import { cn } from "@/lib/utils";

type Connector = {
  id: string;
  name: string;
  category: string;
  description: string;
  Icon: typeof HubspotIcon;
  color: string;
};

const connectors: Connector[] = [
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM cible",
    description: "Source de vérité comptes et opportunités",
    Icon: HubspotIcon,
    color: "#FF7A59",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM cible",
    description: "Alternative CRM grands comptes",
    Icon: SalesforceIcon,
    color: "#00A1E0",
  },
  {
    id: "amplitude",
    name: "Amplitude",
    category: "Usage produit",
    description: "Logs, connexions, features activées",
    Icon: AmplitudeIcon,
    color: "#1E61F0",
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    category: "Usage produit",
    description: "Événements produit, cohortes",
    Icon: MixpanelIcon,
    color: "#7856FF",
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "ARR et facturation",
    description: "Paliers, licences engagées",
    Icon: StripeIcon,
    color: "#635BFF",
  },
  {
    id: "chargebee",
    name: "Chargebee",
    category: "ARR et facturation",
    description: "Subscriptions et upgrade flows",
    Icon: ChargebeeIcon,
    color: "#FF7846",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "CSAT et tickets",
    description: "Tickets P1, escalades, sentiment client",
    Icon: ZendeskIcon,
    color: "#17494D",
  },
  {
    id: "gong",
    name: "Gong.io",
    category: "Sentiment CR",
    description: "Extraction automatique des CR de réunion",
    Icon: GongIcon,
    color: "#8038D8",
  },
  {
    id: "modjo",
    name: "Modjo",
    category: "Sentiment CR",
    description: "Alternative CR de réunion FR",
    Icon: ModjoIcon,
    color: "#FF5C5C",
  },
  {
    id: "form",
    name: "Formulaire interne",
    category: "Notation CSM hebdo",
    description: "Notation collaborative 5 min le vendredi",
    Icon: FormIcon,
    color: "#FF6B35",
  },
];

function formatSyncRelative(syncedAt: number) {
  const diffSec = Math.max(1, Math.floor((Date.now() - syncedAt) / 1000));
  if (diffSec < 60) return `il y a ${diffSec} sec`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `il y a ${diffMin} min`;
  return "il y a quelques minutes";
}

export function OnboardingBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [validating, setValidating] = useState(false);
  const [validatedAt, setValidatedAt] = useState<number | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!validatedAt) return;
    const interval = window.setInterval(() => setTick((value) => value + 1), 15000);
    return () => window.clearInterval(interval);
  }, [validatedAt]);

  if (dismissed) return null;

  const validated = validatedAt !== null;

  const toggleConnector = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const validateConnections = () => {
    if (selected.size === 0) {
      toast.error("Sélectionnez au moins un connecteur avant de valider.");
      return;
    }
    setValidating(true);
    window.setTimeout(() => {
      setValidatedAt(Date.now());
      setValidating(false);
      const labels = connectors
        .filter((c) => selected.has(c.id))
        .map((c) => c.name)
        .join(", ");
      toast.success(
        `Stack connectée : ${selected.size} outil${selected.size > 1 ? "s" : ""} (${labels}).`
      );
    }, 2000);
  };

  const reopen = () => {
    setValidatedAt(null);
    setCollapsed(false);
  };

  if (validated) {
    const connectedConnectors = connectors.filter((c) => selected.has(c.id));
    return (
      <section className="flex flex-col items-start gap-3 rounded-2xl border border-teal/30 bg-teal/5 px-4 py-3 sm:flex-row sm:items-center sm:px-5">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal text-cream">
          <CheckCircle2 size={16} />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-teal">
            Stack connectée
          </p>
          <p className="text-sm font-semibold text-midnight">
            {connectedConnectors.length} outil{connectedConnectors.length > 1 ? "s" : ""}{" "}
            actif{connectedConnectors.length > 1 ? "s" : ""} ·{" "}
            <span className="font-normal text-midnight/65">
              dernière synchro {formatSyncRelative(validatedAt + tick * 0)}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {connectedConnectors.slice(0, 5).map(({ id, Icon, color, name }) => (
              <span
                key={id}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-card"
                style={{ borderColor: color, color }}
                title={name}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
            ))}
            {connectedConnectors.length > 5 && (
              <span className="ml-1 text-[11px] font-semibold text-midnight/65">
                +{connectedConnectors.length - 5}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-midnight/75 hover:bg-cream-deep"
            onClick={reopen}
          >
            <Settings size={13} className="mr-1.5" />
            Gérer
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-midnight/55 hover:bg-cream-deep"
            onClick={() => setDismissed(true)}
            aria-label="Fermer"
          >
            <X size={14} />
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-teal/25 bg-gradient-to-br from-teal/5 via-cream-soft to-orange/5">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-teal text-cream">
            <Plug size={14} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
              Première visite ?
            </p>
            <p className="display-serif text-base text-midnight sm:text-lg">
              Connectez Revelo à votre stack en 10 à 15 minutes
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-midnight/60 hover:bg-cream-deep"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Déplier" : "Réduire"}
          >
            {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-midnight/60 hover:bg-cream-deep"
            onClick={() => setDismissed(true)}
            aria-label="Fermer l'encart d'onboarding"
          >
            <X size={16} />
          </Button>
        </div>
      </div>

      {!collapsed && (
        <div className="space-y-3 border-t border-teal/15 px-4 pb-4 pt-3">
          <p className="max-w-2xl text-xs leading-relaxed text-midnight/75">
            Cliquez sur chaque outil que vous voulez activer. Seuls les outils validés seront
            branchés à vos comptes. Comptez 1 à 2 minutes par outil (OAuth ou API key) selon la
            stack.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {connectors.map((connector) => {
              const isSelected = selected.has(connector.id);
              const { Icon, color, name, category, description } = connector;
              return (
                <li key={connector.id}>
                  <button
                    type="button"
                    onClick={() => toggleConnector(connector.id)}
                    aria-pressed={isSelected}
                    disabled={validating}
                    className={cn(
                      "group relative flex h-full w-full flex-col items-start gap-2 rounded-xl border bg-card p-3 text-left transition-all",
                      isSelected
                        ? "shadow-[0_12px_30px_-22px_rgba(15,76,92,0.55)]"
                        : "border-cream-deep hover:bg-cream-soft",
                      validating && "opacity-60"
                    )}
                    style={{
                      borderColor: isSelected ? color : undefined,
                    }}
                  >
                    {isSelected && (
                      <span
                        className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-cream"
                        style={{ backgroundColor: color }}
                        aria-hidden
                      >
                        <Check size={12} />
                      </span>
                    )}

                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-card transition-colors"
                      style={{
                        borderColor: isSelected ? color : "var(--cream-deep)",
                        color,
                      }}
                      title={name}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-midnight">{name}</p>
                      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-orange-deep">
                        {category}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-midnight/65">
                        {description}
                      </p>
                    </div>

                    <span
                      className={cn(
                        "mt-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                        isSelected
                          ? "bg-teal text-cream"
                          : "bg-cream-deep/60 text-midnight/55"
                      )}
                    >
                      {isSelected ? (
                        <>
                          <Check size={10} />
                          Connecté
                        </>
                      ) : (
                        "À valider"
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              className="bg-teal text-cream hover:bg-teal-deep disabled:opacity-50"
              onClick={validateConnections}
              disabled={selected.size === 0 || validating}
            >
              {validating ? (
                <>
                  <Loader2 size={14} className="mr-1.5 animate-spin" />
                  Connexion à vos outils en cours…
                </>
              ) : (
                <>
                  <Plug size={14} className="mr-1.5" />
                  {selected.size === 0
                    ? "Sélectionnez vos connecteurs"
                    : `Valider ${selected.size} connecteur${selected.size > 1 ? "s" : ""}`}
                </>
              )}
            </Button>
            <div className="flex items-start gap-2 text-xs text-midnight/65">
              <ShieldCheck size={13} className="mt-0.5 shrink-0 text-teal" />
              <p className="leading-relaxed">
                Coût d&apos;intégration API inclus dans le devis pilote, à partir de la sortie de
                beta.{" "}
                <Link href="/#architecture" className="font-semibold text-teal hover:text-teal-deep">
                  En savoir plus sur l&apos;architecture API/MCP →
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
