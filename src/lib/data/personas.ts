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
    fullRole: "Customer Success Manager",
    company: "Éditeur SaaS B2B, 125 clients pilotés",
    arr: "Portefeuille 700 k€ à 1 M€ d'ARR, équipe de 3 à 5 CSM",
    pain: "Health score rempli à la main, le ressenti d'équipe jamais noté, et le churn arrive sans signal humain.",
    metric: "Score hybride en continu, notation collaborative en 5 min par semaine",
    ambition: "Voir venir le compte qui bascule à cause du nouveau manager côté client, pas seulement la baisse d'usage.",
    surface: "Alerte Slack signaux humains, fiche compte unifiée embarquée dans HubSpot, top 5 du jour priorisé.",
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
    metric: "Une fiche compte unique réconciliée en temps réel + forecast renouvellement 90 jours",
    ambition: "Remplacer le combo Vitally + Salesforce + Zendesk + Excel par une couche unique, sans renomination outil par les équipes.",
    surface: "Widget Revelo embed dans HubSpot, table unifiée des contrats, SAV, sentiment et notation CSM.",
    color: "midnight",
  },
  {
    id: "thomas",
    firstName: "Thomas",
    role: "KAM",
    fullRole: "Strategic Account Manager",
    company: "Éditeur SaaS ETI 450 personnes",
    arr: "12 grands comptes, 8,6 M€ ARR, renouvellements à enjeu budgétaire",
    pain: "Le compte est rouge depuis 3 semaines, je n'ai aucun plan d'action prêt. Je découvre le risque la veille de l'échéance.",
    metric: "Plan d'action IA personnalisé proposé sous 30 s, prêt à ajuster",
    ambition: "Avoir un agent qui propose le bon scénario (relance préventive, expansion, save) selon le profil interlocuteur, pas un dashboard de plus.",
    surface: "Plans d'action IA dans HubSpot, scénarios comparés, Business Review benchmarkée exportable.",
    color: "orange",
  },
];
