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
    company: "Éditeur SaaS 120 personnes",
    arr: "Portefeuille 35 comptes, 4,2 M€ ARR",
    pain: "Bricolage Excel toute la journée, alertes qui arrivent trop tard.",
    metric: "Taux de churn -25 % en 6 mois",
    ambition: "Prioriser les comptes à risque sans se noyer dans la donnée.",
    surface: "Alertes Slack dans #cs-revelo, brief auto par compte.",
    color: "teal",
  },
  {
    id: "sarah",
    firstName: "Sarah",
    role: "RevOps",
    fullRole: "Head of Revenue Operations",
    company: "Scale-up SaaS B2B 280 personnes",
    arr: "180 contrats actifs, 24 M€ ARR",
    pain: "Données contrat dispersées entre Salesforce, Stripe et drive juridique.",
    metric: "Forecast renouvellement à 90 jours fiable à 90 %",
    ambition: "Une source unique de vérité contrat + usage + ARR.",
    surface: "Widget Revelo embed dans Salesforce, table unifiée des contrats.",
    color: "midnight",
  },
  {
    id: "thomas",
    firstName: "Thomas",
    role: "KAM",
    fullRole: "Strategic Account Manager",
    company: "Éditeur SaaS ETI 450 personnes",
    arr: "12 grands comptes, 8,6 M€ ARR",
    pain: "Renégociations gérées en réactif, argumentaire reconstitué à la main.",
    metric: "+8 % de marge sauvée sur les renégos",
    ambition: "Entrer en nego avec un brief chiffré, pas un Powerpoint refait la veille.",
    surface: "Business Review générée en un clic, scénarios commerciaux comparés.",
    color: "orange",
  },
];
