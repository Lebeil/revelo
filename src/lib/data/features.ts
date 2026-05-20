import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Users,
  Network,
  TrendingUp,
  Sparkles,
  FileText,
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
    id: "hybrid-score",
    personaId: "marie",
    index: 1,
    title: "Health Score hybride, machine plus humain",
    inputs: [
      "Usage produit (Vitally, Mixpanel, API)",
      "Contrat, facturation (HubSpot, Stripe)",
      "Tickets SAV (Zendesk, Intercom)",
      "Sentiment extrait des CR de réunion",
    ],
    engine: "Score machine reproductible + pondération du ressenti humain noté en équipe",
    output: "Rouge, orange, vert priorisé chaque matin : voici tes 5 comptes à traiter aujourd'hui",
    value: "Voir venir ce que la machine seule rate : manager de transition, désengagement nouveau référent",
    icon: Activity,
    delta: "Score hybride en continu",
  },
  {
    id: "collaborative-rating",
    personaId: "marie",
    index: 2,
    title: "Notation collaborative hebdo, 5 minutes vendredi",
    inputs: [
      "Liste des comptes du portefeuille CSM",
      "Note rapide sur 10, libre commentaire",
      "Drapeaux types : manager de transition, contact en départ, ambiance QBR",
    ],
    engine: "Agrégation cross-équipe, détection des écarts entre note humaine et score machine",
    output: "Top des comptes où l'humain voit rouge mais la machine voit vert (et inversement)",
    value: "Capturer ce que la donnée ne sait pas dire, sans casser l'agenda CSM. Optionnel.",
    icon: Users,
    delta: "5 min par CSM par semaine",
  },
  {
    id: "unified-source",
    personaId: "sarah",
    index: 3,
    title: "Source de vérité multi-canal",
    inputs: ["HubSpot, Salesforce", "Stripe, Pennylane, Sellsy", "Zendesk, Intercom", "Contrats PDF"],
    engine: "Réconciliation ID compte unique, OCR + NER sur les clauses",
    output: "Fiche compte unifiée, accessible dans HubSpot ou en widget Salesforce",
    value: "Stop l'éparpillement Vitally + Salesforce + Zendesk + Excel",
    icon: Network,
    delta: "4 sources en 1 fiche",
  },
  {
    id: "forecast-90",
    personaId: "sarah",
    index: 4,
    title: "Forecast renouvellement 90 jours",
    inputs: ["Date de fin de contrat", "Score hybride machine + humain", "Historique négo et expansion"],
    engine: "Modèle prédictif priorité de renouvellement croisé usage + budget + SAV + ressenti CSM",
    output: "Tableau du revenu à risque pour le board, priorisé par échéance et impact ARR",
    value: "Rendre le revenu récurrent prévisible et défendable devant le CRO",
    icon: TrendingUp,
    delta: "Pipeline renouvellement priorisé",
  },
  {
    id: "ai-action-plans",
    personaId: "thomas",
    index: 5,
    title: "Plans d'action IA personnalisés",
    inputs: [
      "Profil interlocuteur (direction vs ops)",
      "Type de problématique (budget, technique, relation)",
      "Historique relation et clauses contractuelles",
    ],
    engine: "Agent IA qui propose reprise contact préventive, remise anticipée avec marge protégée, scénario renégo, escalade KAM",
    output: "Plan d'action prêt à activer, avec script de mail, points clés visio, ou alerte Slack",
    value: "Le CSM lit, ajuste, déclenche. Human in the loop, l'IA ne décide jamais à votre place",
    icon: Sparkles,
    delta: "Plan d'action personnalisé en 30 s",
  },
  {
    id: "business-review",
    personaId: "thomas",
    index: 6,
    title: "Business Review benchmarkée",
    inputs: ["Usage produit", "ROI mesuré", "Comparatif tarifaire marché interne"],
    engine: "LLM, narration de la valeur perçue + preuves chiffrées + benchmark concurrent",
    output: "PDF ou slide prête à envoyer au client, format CBR exportable",
    value: "Tenir le prix en renégo avec un livrable de niveau Tropic, côté fournisseur",
    icon: FileText,
    delta: "CBR rédigée en 90 s",
  },
];
