export type Competitor = {
  id: string;
  name: string;
  positioning: string;
  hybridScore: number;
  aiActionPlans: number;
  contractDepth: number;
  unifiedSource: number;
  hubspotNative: number;
  side: "fournisseur" | "acheteur";
  timeToValue: string;
  tco: string;
};

export const competitors: Competitor[] = [
  {
    id: "revelo",
    name: "Revelo",
    positioning: "Copilote de rétention CS, Health Score hybride + plans d'action IA",
    hybridScore: 5,
    aiActionPlans: 5,
    contractDepth: 5,
    unifiedSource: 5,
    hubspotNative: 5,
    side: "fournisseur",
    timeToValue: "10 jours",
    tco: "Gratuit pendant la beta",
  },
  {
    id: "vitally",
    name: "Vitally",
    positioning: "Health score + segmentation usage, leader mid-market CS",
    hybridScore: 1,
    aiActionPlans: 1,
    contractDepth: 2,
    unifiedSource: 3,
    hubspotNative: 3,
    side: "fournisseur",
    timeToValue: "4 à 6 semaines",
    tco: "Sur devis",
  },
  {
    id: "gainsight",
    name: "Gainsight",
    positioning: "Leader Enterprise health score, US first, lourd",
    hybridScore: 1,
    aiActionPlans: 2,
    contractDepth: 2,
    unifiedSource: 3,
    hubspotNative: 2,
    side: "fournisseur",
    timeToValue: "6 mois",
    tco: "Enterprise license",
  },
  {
    id: "planhat",
    name: "Planhat",
    positioning: "Plateforme CS mid-market UI moderne",
    hybridScore: 1,
    aiActionPlans: 1,
    contractDepth: 2,
    unifiedSource: 3,
    hubspotNative: 3,
    side: "fournisseur",
    timeToValue: "8 semaines",
    tco: "Sur devis",
  },
  {
    id: "skalin",
    name: "Skalin",
    positioning: "Acteur français SMB, health score usage uniquement",
    hybridScore: 0,
    aiActionPlans: 0,
    contractDepth: 1,
    unifiedSource: 2,
    hubspotNative: 4,
    side: "fournisseur",
    timeToValue: "1 à 2 semaines",
    tco: "Sur devis",
  },
  {
    id: "churnzero",
    name: "ChurnZero",
    positioning: "Playbooks de save, mid-market US, peu d'EU",
    hybridScore: 0,
    aiActionPlans: 2,
    contractDepth: 1,
    unifiedSource: 2,
    hubspotNative: 2,
    side: "fournisseur",
    timeToValue: "8 à 12 semaines",
    tco: "Enterprise license",
  },
  {
    id: "tropic",
    name: "Tropic (côté acheteur)",
    positioning: "Symétrique acheteur, arme l'acheteur pour négocier la baisse. Montre qu'il existe une demande côté fournisseur.",
    hybridScore: 0,
    aiActionPlans: 0,
    contractDepth: 4,
    unifiedSource: 4,
    hubspotNative: 2,
    side: "acheteur",
    timeToValue: "4 à 8 semaines",
    tco: "Enterprise license",
  },
];

export const comparisonAxes = [
  { key: "hybridScore", label: "Health Score hybride (machine + humain noté)" },
  { key: "aiActionPlans", label: "Plans d'action IA personnalisés" },
  { key: "contractDepth", label: "Profondeur contrat" },
  { key: "unifiedSource", label: "Source de vérité unifiée" },
  { key: "hubspotNative", label: "HubSpot natif" },
] as const;
