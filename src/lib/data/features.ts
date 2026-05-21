import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Users,
  Plug,
  TrendingUp,
  FileSearch,
  Mail,
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
    title: "Score de santé hybride (Machine + Humain)",
    inputs: [
      "Usage produit (Mixpanel, Amplitude, logs)",
      "Données contractuelles (HubSpot, Salesforce)",
      "Tickets SAV (Zendesk, Intercom)",
      "Notation hebdo CSM (côté humain)",
    ],
    engine: "Pondération dynamique 70 % machine + 30 % humain, apprentissage continu, alerte rouge si usage -30 % et renouvellement < 90 j",
    output: "Score 0 à 100 par compte, mis à jour en continu, expliqué : 45/100, usage -30 % en 60 j et sponsor changé. Lundi matin, Léa ouvre HubSpot, Acme passe de 78 à 42, l'IA génère la note de synthèse.",
    value: "Personne ne combine les deux signaux : Gainsight = score machine seul, Skalin = usage seul. Revelo lit ce que la donnée voit ET ce que le CSM ressent.",
    icon: Activity,
    delta: "Score hybride en continu",
  },
  {
    id: "collaborative-rating",
    personaId: "marie",
    index: 2,
    title: "Notation CSM collaborative",
    inputs: [
      "Formulaire hebdo 2 min, ressenti et engagement sponsor",
      "Signaux faibles : changement orga client, nouvelle stratégie",
      "Drapeaux types : manager de transition, contact en départ",
    ],
    engine: "Agrégation notation équipe, détection des écarts machine vs humain, suggestion de calibration entre CSM",
    output: "Dashboard d'équipe Head of CS avec les écarts. Chaque vendredi, Marie note ses 10 comptes chauds. Léa voit que 3 comptes verts côté data sont en réalité fragiles selon les CSM.",
    value: "Transforme le ressenti CSM (perdu dans Slack) en signal exploitable et partagé. Notation optionnelle, le score machine fonctionne sans.",
    icon: Users,
    delta: "5 min par CSM par vendredi",
  },
  {
    id: "native-integration",
    personaId: "sarah",
    index: 3,
    title: "Intégration native HubSpot / Salesforce",
    inputs: [
      "Connexion API native (pas de Zapier bricolé)",
      "Synchronisation bidirectionnelle CRM",
      "Notifications Slack et Teams synchronisées",
    ],
    engine: "Score, alertes et plans d'action vivent DANS HubSpot ou Salesforce, pas de double saisie, pas de fenêtre supplémentaire à ouvrir",
    output: "Widget intégré dans la fiche compte, vues custom Head of CS dans le CRM existant. Sarah déploie l'outil en 3 jours sans formation, le widget apparaît dans chaque fiche HubSpot.",
    value: "95 % d'adoption en 2 semaines, les CSM ne changent pas leurs habitudes. Lève le frein principal au déploiement signalé en interviews.",
    icon: Plug,
    delta: "Widget natif, pas un 5e onglet",
  },
  {
    id: "forecast-90",
    personaId: "sarah",
    index: 4,
    title: "Forecast renouvellement 90 jours",
    inputs: [
      "Score hybride consolidé par compte",
      "Dates de fin de contrat",
      "Historique comportements à 90 j d'échéance",
    ],
    engine: "Modèle prédictif probabilité de renouvellement par compte + agrégation niveau portefeuille",
    output: "Dashboard pipeline renouvellement, drill-down macro vers compte. Au QBR, Sarah projette : 'Sur 4,2 M€ de renouvellements Q2, 380 k€ sont à risque, voici les 8 comptes prioritaires.'",
    value: "Le board ne challenge plus ses chiffres. Donne au Head of CS l'arme pour défendre ses effectifs et son budget face au CFO.",
    icon: TrendingUp,
    delta: "Revenu à risque exportable",
  },
  {
    id: "contract-analysis",
    personaId: "thomas",
    index: 5,
    title: "Analyse de contrats et détection sous-usage",
    inputs: [
      "Données licences engagées (HubSpot, Salesforce, Stripe)",
      "Données usage réel (Snowflake, Mixpanel)",
      "Clauses contractuelles indexées",
    ],
    engine: "Détection des écarts licence vs usage, alerte 90 j avant renouvellement si sous-usage critique, déclenchement plan d'action avant toute demande de changement",
    output: "Fiche compte avec écart licence/usage flagué. Cas détecté : un client paie 500 licences, n'en utilise que 50, l'IA l'identifie 90 j avant le renouvellement et déclenche un plan d'action.",
    value: "Anticipe les demandes de downgrade côté client, protège l'ARR existant avant que la conversation ne tourne à la baisse de prix.",
    icon: FileSearch,
    delta: "Sous-usage capté 90 j avant",
  },
  {
    id: "ai-action-plans",
    personaId: "thomas",
    index: 6,
    title: "Plans d'action IA et emails personnalisés",
    inputs: [
      "Score hybride et raisons de la baisse",
      "Profil du sponsor côté client (rôle, ancienneté)",
      "Historique des actions qui ont fonctionné sur des comptes similaires",
      "Segmentation 4 critères gratuits (plus en payant)",
    ],
    engine: "LLM générateur de plans contextualisés au profil interlocuteur, un CFO ne reçoit pas le même message qu'un Product Manager, modèles d'email pré-rédigés ajustables",
    output: "Carte d'action dans HubSpot : J+1 email à Sophie (PM), modèle prêt. J+7 session training feature sous-utilisée. J+30 repackaging si pas d'amélioration. Thomas valide, les activités sont créées dans le CRM.",
    value: "Ce que Gainsight ne fait pas : passer du diagnostic à l'action concrète et personnalisée. Human in the loop, l'IA n'envoie jamais en autonome.",
    icon: Mail,
    delta: "Email + plan prêts en 30 s",
  },
];
