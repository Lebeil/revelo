import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  FileText,
  Network,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export type Feature = {
  id: string;
  personaId: "marie" | "sarah" | "thomas";
  index: number;
  title: string;
  inputs: string[];
  engine: string;
  output: string;
  value: string;
  icon: LucideIcon;
  delta: string;
};

export const features: Feature[] = [
  {
    id: "early-warning",
    personaId: "marie",
    index: 1,
    title: "Flux d'alertes précoces",
    inputs: ["Logs produit", "Connexions hebdo", "Statut licences"],
    engine: "Détection de rupture de tendance et sous-utilisation critique",
    output: "Alerte Slack ciblée : compte X bascule en zone rouge",
    value: "Éviter le churn tardif, prioriser le portefeuille en 30 secondes le lundi matin",
    icon: AlarmClock,
    delta: "60 à 90 j avant l'échéance",
  },
  {
    id: "weekly-report",
    personaId: "marie",
    index: 2,
    title: "Rapport hebdo auto",
    inputs: ["Historique tickets", "Health scores", "Notes CSM"],
    engine: "LLM agrégation, catégorisation, résumé exécutif",
    output: "Email pré-rédigé pour la direction CS, dashboard synthétique",
    value: "Zéro reporting manuel sur Notion ou Sheets, deux heures gagnées par CSM",
    icon: FileText,
    delta: "-2 h par CSM par semaine",
  },
  {
    id: "contract-intelligence",
    personaId: "sarah",
    index: 3,
    title: "Contract Intelligence",
    inputs: ["Contrats PDF (OCR)", "Données Stripe / Pennylane", "CRM Salesforce"],
    engine: "Extraction NER : dates clés, ARR, clauses de renouvellement, seuils",
    output: "Table unifiée des contrats, alertes fins de contrat proches",
    value: "Une seule source de vérité, plus de drive juridique perdu",
    icon: Network,
    delta: "100 % des contrats indexés",
  },
  {
    id: "forecast-90",
    personaId: "sarah",
    index: 4,
    title: "Forecast renouvellement 90 j",
    inputs: ["Date de fin de contrat", "Score d'usage", "Historique négo"],
    engine: "Modèle prédictif probabilité de renouvellement usage vs engagement",
    output: "Graphique macro du revenu à risque pour le board",
    value: "Rendre le revenu récurrent prévisible et défendable devant le CRO",
    icon: TrendingUp,
    delta: "Forecast fiable à 90 %",
  },
  {
    id: "scenario-simulator",
    personaId: "thomas",
    index: 5,
    title: "Simulateur de scénarios de négociation",
    inputs: ["Écart engagement vs usage réel", "ARR du compte", "Benchmarks marché"],
    engine: "Système expert + LLM, génération d'options de rétention chiffrées",
    output: "Trois scénarios commerciaux comparés avec arguments clés",
    value: "Sécuriser les grands comptes, transformer un risque en upsell",
    icon: Sparkles,
    delta: "3 scénarios prêts en 10 secondes",
  },
  {
    id: "business-review",
    personaId: "thomas",
    index: 6,
    title: "Générateur de Business Review",
    inputs: ["Usage produit", "ROI mesuré", "Features clés activées"],
    engine: "LLM génération de contenu, narration de la valeur perçue",
    output: "PDF ou slide synthétique prête à envoyer au client",
    value: "Défendre le prix et la valeur lors des renégociations",
    icon: TrendingDown,
    delta: "CBR rédigée en 90 s",
  },
];
