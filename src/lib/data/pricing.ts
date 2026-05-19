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
    tagline: "Plateforme Revelo : croisement contrats + usage, alertes, dashboard.",
    priceFrom: "Gratuit",
    pricePeriod: "pendant toute la beta",
    audience: "Équipes CS de 3 à 12 personnes, portefeuille jusqu'à 200 contrats.",
    highlights: [
      "Vue unifiée contrat + usage en temps réel",
      "Flux d'alertes précoces (signaux à 60 à 90 j)",
      "Rapport hebdo automatique pour la direction",
      "Support français, hébergement Europe",
    ],
    cta: "Rejoindre la beta",
  },
  {
    id: "api",
    name: "API Advanced",
    badge: "Gratuit pour les pilotes",
    tagline: "Intégrations natives Slack, Salesforce, Stripe, Pennylane.",
    priceFrom: "Gratuit",
    pricePeriod: "inclus dans la beta",
    audience: "RevOps qui veulent injecter Revelo dans les outils déjà utilisés.",
    highlights: [
      "Webhook MCP pour orchestrer l'agent depuis Salesforce ou Slack",
      "Widget Revelo embarqué dans la fiche compte",
      "Connecteurs Stripe, Pennylane, Sellsy, Qonto natifs",
      "Push d'alertes Teams, Slack, email, CRM",
    ],
    cta: "Demander la doc API",
    featured: true,
  },
  {
    id: "advisory",
    name: "Conseil et accompagnement",
    tagline: "Playbooks Customer Success structurés, données nettoyées.",
    priceFrom: "Sur mesure",
    pricePeriod: "audit gratuit pour les pilotes beta",
    audience: "Équipes qui veulent industrialiser CS, RevOps, KAM en même temps.",
    highlights: [
      "Audit de la donnée contrat et usage (2 semaines)",
      "Mise en place des playbooks save, expansion, renégo",
      "Animation des rituels Finance / CS / Sales",
      "Engagement résultats sur la NRR à 6 mois",
    ],
    cta: "Parler à un consultant",
  },
];
