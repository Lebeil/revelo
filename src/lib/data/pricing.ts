export type PricingTier = {
  id: "saas" | "api" | "advisory";
  name: string;
  badge?: string;
  tagline: string;
  priceFrom: string;
  pricePeriod: string;
  audience: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "saas",
    name: "SaaS Base",
    badge: "Beta privée",
    tagline: "Plateforme Revelo : Health Score hybride, plans d'action IA, alertes Slack.",
    priceFrom: "Gratuit",
    pricePeriod: "pendant toute la beta",
    audience: "Équipes CS de 3 à 12 personnes, portefeuille jusqu'à 200 contrats.",
    highlights: [
      "Health Score hybride : score machine + notation collaborative CSM",
      "Plans d'action IA personnalisés selon le profil interlocuteur",
      "Top 5 priorisé chaque matin, alerte Slack signaux humains",
      "Support français, hébergement Europe, RGPD natif",
    ],
    cta: "Rejoindre la beta",
  },
  {
    id: "api",
    name: "API Advanced",
    badge: "Gratuit pour les pilotes",
    tagline: "Intégrations natives HubSpot, Salesforce, Stripe, Zendesk, webhook MCP.",
    priceFrom: "Gratuit",
    pricePeriod: "inclus dans la beta",
    audience: "RevOps qui veulent injecter Revelo dans la stack déjà utilisée, sans nouvel outil à ouvrir.",
    highlights: [
      "Widget Revelo embarqué dans la fiche compte HubSpot",
      "Webhook MCP pour orchestrer l'agent depuis Salesforce ou Slack",
      "Connecteurs Stripe, Pennylane, Sellsy, Qonto natifs",
      "Synchronisation Zendesk et Intercom pour le sentiment SAV",
    ],
    cta: "Demander la doc API",
    featured: true,
  },
  {
    id: "advisory",
    name: "Conseil et accompagnement",
    tagline: "Playbooks Customer Success structurés, rituels de notation CSM industrialisés.",
    priceFrom: "Sur mesure",
    pricePeriod: "audit gratuit pour les pilotes beta",
    audience: "Équipes qui veulent industrialiser le rituel de notation et les plans d'action IA.",
    highlights: [
      "Audit de la donnée contrat, usage et CR de réunion (2 semaines)",
      "Mise en place des playbooks save, expansion, renégo",
      "Animation des rituels de notation CSM hebdo",
      "Engagement résultats sur la NRR à 6 mois (objectif co-construit)",
    ],
    cta: "Parler à un consultant",
  },
];
