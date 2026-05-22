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
      "Plans d'action IA prêts à envoyer (mail, escalade, remise)",
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
      "Connecteurs Amplitude, Mixpanel, Stripe, Chargebee natifs",
      "Synchronisation Zendesk pour le CSAT et les tickets",
    ],
    cta: "Demander la doc API",
    featured: true,
  },
  {
    id: "advisory",
    name: "Conseil et accompagnement",
    tagline: "Playbooks Customer Success construits avec vous, notation CSM mise en place et tenue en main.",
    priceFrom: "Sur mesure",
    pricePeriod: "audit gratuit pour les pilotes beta",
    audience: "Équipes qui veulent structurer la notation CSM hebdo et tirer le maximum des plans d'action.",
    highlights: [
      "Audit de la donnée contrat, usage et CR de réunion (2 semaines)",
      "Mise en place des playbooks save, expansion, renouvellement anticipé",
      "Animation des rituels de notation CSM hebdo",
      "Engagement résultats sur la NRR à 6 mois (objectif co-construit)",
    ],
    cta: "Parler à un consultant",
  },
];
