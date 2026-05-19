export type Competitor = {
  id: string;
  name: string;
  positioning: string;
  contractDepth: number;
  usageCrossing: number;
  financeBridge: number;
  agenticAi: number;
  euAnchor: number;
  timeToValue: string;
  tco: string;
};

export const competitors: Competitor[] = [
  {
    id: "revelo",
    name: "Revelo",
    positioning: "Agent IA renégociation B2B, contrats + usage, FR/EU",
    contractDepth: 5,
    usageCrossing: 5,
    financeBridge: 5,
    agenticAi: 5,
    euAnchor: 5,
    timeToValue: "10 jours",
    tco: "Gratuit pendant la beta",
  },
  {
    id: "gainsight",
    name: "Gainsight",
    positioning: "Leader Enterprise health score, US-first",
    contractDepth: 2,
    usageCrossing: 2,
    financeBridge: 1,
    agenticAi: 3,
    euAnchor: 1,
    timeToValue: "6 mois",
    tco: "Enterprise license",
  },
  {
    id: "planhat",
    name: "Planhat",
    positioning: "Plateforme CS mid-market, UI moderne",
    contractDepth: 2,
    usageCrossing: 2,
    financeBridge: 1,
    agenticAi: 3,
    euAnchor: 3,
    timeToValue: "8 semaines",
    tco: "Sur devis",
  },
  {
    id: "churnzero",
    name: "ChurnZero",
    positioning: "Playbooks automatisés, scoring",
    contractDepth: 1,
    usageCrossing: 2,
    financeBridge: 1,
    agenticAi: 4,
    euAnchor: 1,
    timeToValue: "4 à 6 semaines",
    tco: "Sur devis",
  },
  {
    id: "skalin",
    name: "Skalin",
    positioning: "Acteur français SMB, onboarding rapide",
    contractDepth: 1,
    usageCrossing: 2,
    financeBridge: 1,
    agenticAi: 2,
    euAnchor: 5,
    timeToValue: "1 à 2 semaines",
    tco: "Sur devis",
  },
];

export const comparisonAxes = [
  { key: "contractDepth", label: "Profondeur contrat" },
  { key: "usageCrossing", label: "Croisement usage" },
  { key: "financeBridge", label: "Pont Finance / CS" },
  { key: "agenticAi", label: "Agent IA autonome" },
  { key: "euAnchor", label: "Ancrage EU" },
] as const;
