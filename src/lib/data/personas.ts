export type Persona = {
  id: "marie" | "sarah" | "thomas";
  firstName: string;
  role: string;
  fullRole: string;
  company: string;
  arr: string;
  pain: string;
  metric: string;
  ambition: string;
  surface: string;
  color: "teal" | "orange" | "midnight";
};

export const personas: Persona[] = [
  {
    id: "marie",
    firstName: "Marie",
    role: "CSM",
    fullRole: "Customer Success Manager senior",
    company: "Éditeur SaaS B2B, 125 clients pilotés",
    arr: "Portefeuille 700 k€ à 1 M€ d'ARR, équipe de 3 à 5 CSM pilotée par Léa (Head of CS)",
    pain: "Health score rempli à la main mais lâché passé 100 comptes, ressenti d'équipe jamais noté, churn qui arrive sans signal humain. (Validé interview Sirine, mai 2026.)",
    metric: "Score hybride en continu, notation collaborative en 5 min le vendredi",
    ambition: "Voir venir le compte qui bascule à cause du nouveau manager côté client, et partager ce signal avec Léa et le reste de l'équipe.",
    surface: "Score hybride dans HubSpot, formulaire de notation hebdo 2 min, alertes Slack signaux humains.",
    color: "teal",
  },
  {
    id: "sarah",
    firstName: "Sarah",
    role: "RevOps",
    fullRole: "Head of Revenue Operations",
    company: "Scale-up SaaS B2B 280 personnes",
    arr: "180 contrats actifs, 24 M€ ARR, stack HubSpot + Vitally + Zendesk",
    pain: "Données éparpillées entre 3 outils, aucune source de vérité pour le board, aucun pipeline renouvellement priorisé.",
    metric: "Déploiement en 3 jours sans formation, 95 % d'adoption en 2 semaines, forecast 90 j exportable au board",
    ambition: "Brancher Revelo dans HubSpot et Salesforce sans demander à l'équipe d'ouvrir un 5e onglet, puis projeter le Revenue à risque au QBR.",
    surface: "Widget Revelo embed dans la fiche compte HubSpot, dashboard forecast renouvellement 90 j exportable au board.",
    color: "midnight",
  },
  {
    id: "thomas",
    firstName: "Thomas",
    role: "KAM",
    fullRole: "Strategic Account Manager",
    company: "Éditeur SaaS ETI 450 personnes",
    arr: "12 grands comptes, 8,6 M€ ARR, renouvellements à enjeu budgétaire",
    pain: "Un compte stratégique paie 500 licences mais n'en utilise que 50, je découvre l'écart à 30 jours du renouvellement, trop tard pour réagir.",
    metric: "Sous-usage capté 90 j avant l'échéance, plan d'action IA personnalisé par profil interlocuteur",
    ambition: "Recevoir un plan d'action IA contextualisé pour Bigcorp avec l'email pré-rédigé pour Sophie (PM) et les étapes J+1, J+7, J+30 prêtes à valider.",
    surface: "Carte d'action dans HubSpot, emails pré-rédigés ajustables, écart licence vs usage flagué automatiquement.",
    color: "orange",
  },
];
