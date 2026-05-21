export type AccountRisk = "Critique" | "Élevé" | "Modéré" | "Sain";

export type Signal = {
  label: string;
  detail: string;
  delta?: string;
  kind?: "machine" | "human";
};

export type ContractClause = {
  label: string;
  value: string;
  badge?: "ok" | "warn" | "alert";
};

export type AccountBrief = {
  summary: string;
  risk: string;
  context: string;
};

export type Scenario = {
  id: string;
  title: string;
  pitch: string;
  arrImpact: string;
  arguments: string[];
  tone: "save" | "expansion" | "soft";
  audience: string;
};

export type SlackMessage = {
  channel: string;
  time: string;
  body: string;
};

export type Account = {
  id: string;
  name: string;
  sector: string;
  csm: string;
  csmRating: number;
  csmFlag?: string;
  interlocutorProfile: "Direction" | "Ops" | "Mixte";
  arr: number;
  arrFormatted: string;
  nrrPotential: string;
  riskScore: number;
  machineScore: number;
  humanScore: number;
  risk: AccountRisk;
  renewalDate: string;
  daysToRenewal: number;
  recommendation: string;
  signals: Signal[];
  contract: ContractClause[];
  usageSeries: number[];
  usageDelta: string;
  brief: AccountBrief;
  scenarios: Scenario[];
  slack: SlackMessage;
};

export const accounts: Account[] = [
  {
    id: "acme-saas",
    name: "Acme SaaS",
    sector: "Plateforme HR Tech",
    csm: "Marie Dupont",
    csmRating: 3,
    csmFlag: "Manager de transition côté client",
    interlocutorProfile: "Direction",
    arr: 280000,
    arrFormatted: "280 k€",
    nrrPotential: "112 %",
    riskScore: 89,
    machineScore: 78,
    humanScore: 96,
    risk: "Critique",
    renewalDate: "12 sept. 2026",
    daysToRenewal: 78,
    recommendation: "Plan d'action IA save sous 7 jours",
    signals: [
      {
        label: "Sponsor produit a quitté",
        detail: "Head of People Ops parti en avril, aucun nouveau référent identifié",
        delta: "Humain",
        kind: "human",
      },
      {
        label: "Sentiment négatif au dernier QBR",
        detail: "Extraction CR Modjo : 3 mentions de coût, 0 mention de roadmap",
        delta: "Humain",
        kind: "human",
      },
      {
        label: "Usage produit en chute",
        detail: "Sessions hebdo -42 % sur 30 jours",
        delta: "-42 %",
        kind: "machine",
      },
      {
        label: "Tickets support en hausse",
        detail: "9 tickets P1 sur 4 semaines, contre 2 en moyenne",
        delta: "+350 %",
        kind: "machine",
      },
    ],
    contract: [
      { label: "Date de renouvellement", value: "12 septembre 2026" },
      { label: "Palier licences", value: "50 utilisateurs (atteint)", badge: "warn" },
      { label: "Clause auto-renew", value: "60 jours avant échéance", badge: "alert" },
      { label: "Indexation prix", value: "Cap 8 % annuel" },
      { label: "Engagement minimum", value: "24 mois (initial)" },
      { label: "Pénalité résiliation", value: "3 mois de facturation" },
    ],
    usageSeries: [88, 91, 86, 82, 76, 64, 58, 51],
    usageDelta: "-42 % en 30 jours",
    brief: {
      summary:
        "Acme SaaS bascule en zone rouge. Le score hybride pointe 89/100 : la machine voit -42 % d'usage et 9 tickets P1, le CSM voit un sponsor parti et un sentiment négatif en QBR. La fenêtre auto-renew (60 jours) ouvre dans 18 jours.",
      risk:
        "Probabilité de non-renouvellement estimée à 64 %. Risque de perte annuelle : 280 k€ d'ARR. Risque additionnel : effet de bord sur le compte Acme Group (1,2 M€ d'ARR consolidés).",
      context:
        "Le sponsor produit (Head of People Ops) a quitté Acme en avril. Pas de nouveau référent identifié. Stack Acme en consolidation, Workday signé en mars sur le même périmètre RH. Profil interlocuteur cible : Direction (CFO et nouvelle DRH).",
    },
    scenarios: [
      {
        id: "save",
        title: "Plan d'action IA, reprise contact préventive",
        pitch:
          "Mail rédigé pour la nouvelle DRH dans les 48 h, demande visio de cadrage sous 5 jours, audit usage offert et plan de réactivation 90 jours pré-construit.",
        arrImpact: "Maintien 280 k€",
        audience: "Direction (nouvelle DRH)",
        arguments: [
          "Atelier dédié pour identifier le nouveau sponsor produit",
          "Audit usage offert (valeur 8 k€)",
          "Garantie SLA renforcée pour 6 mois",
        ],
        tone: "save",
      },
      {
        id: "expansion",
        title: "Plan d'action IA, expansion par add-on",
        pitch:
          "Surconsommation déjà observée (50/50). Proposer le palier 75 licences + module recrutement avec geste commercial -15 %.",
        arrImpact: "+72 k€ d'ARR",
        audience: "Ops (équipe People)",
        arguments: [
          "Le palier 50 est saturé depuis 14 jours",
          "Module recrutement déjà demandé en juin 2025",
          "Geste commercial conditionné à un engagement 24 mois",
        ],
        tone: "expansion",
      },
      {
        id: "soft",
        title: "Plan d'action IA, remise anticipée avec marge protégée",
        pitch:
          "Proposer une baisse de 8 % sur le palier actuel en échange d'un renouvellement anticipé de 18 mois. Stoppe le risque, préserve la marge.",
        arrImpact: "Maintien 257 k€",
        audience: "Direction (CFO)",
        arguments: [
          "Évite un churn complet à 280 k€",
          "Engagement long sécurise 2 fenêtres de renouvellement",
          "Aligne sur le benchmark marché Workday / BambooHR",
        ],
        tone: "soft",
      },
    ],
    slack: {
      channel: "#cs-revelo",
      time: "Aujourd'hui · 09:12",
      body: "@marie Acme SaaS bascule en zone rouge. Score hybride 89 / 100 (machine 78, humain 96). Sponsor parti en avril, sentiment QBR négatif, usage -42 %. Échéance 12 sept. 3 plans d'action IA prêts.",
    },
  },
  {
    id: "northbeam",
    name: "NorthBeam Analytics",
    sector: "BI / Data viz",
    csm: "Marie Dupont",
    csmRating: 4,
    csmFlag: "Contact principal changé",
    interlocutorProfile: "Mixte",
    arr: 164000,
    arrFormatted: "164 k€",
    nrrPotential: "107 %",
    riskScore: 71,
    machineScore: 62,
    humanScore: 78,
    risk: "Élevé",
    renewalDate: "04 août 2026",
    daysToRenewal: 39,
    recommendation: "Plan d'action IA reprise contact sous 14 jours",
    signals: [
      { label: "Stakeholder changé", detail: "Nouveau Head of Data depuis avril", kind: "human" },
      { label: "Concurrent évoqué", detail: "Looker mentionné dans 3 tickets", kind: "human" },
      { label: "User clé décroche", detail: "Power user n°1 -68 % de sessions sur 30 j, global stable", delta: "-68 %", kind: "machine" },
      { label: "Adoption stagnante", detail: "Engagement global plat sur 90 jours", delta: "Stagne", kind: "machine" },
    ],
    contract: [
      { label: "Renouvellement", value: "04 août 2026" },
      { label: "Palier", value: "12 sièges power user" },
      { label: "Auto-renew", value: "45 jours avant échéance", badge: "warn" },
      { label: "Indexation", value: "5 % annuel" },
    ],
    usageSeries: [62, 65, 60, 61, 58, 59, 57, 55],
    usageDelta: "Stagne depuis 90 jours",
    brief: {
      summary: "NorthBeam plateau depuis le départ du sponsor produit. Looker évoqué.",
      risk: "Probabilité de non-renouvellement 42 %, risque 164 k€.",
      context: "Nouveau Head of Data, à briefer urgemment. Profil cible : Mixte (Data + IT).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Hier · 17:48",
      body: "@marie NorthBeam : nouveau Head of Data depuis avril. Score hybride 71, ressenti CSM 4/10. Plan d'action IA prêt.",
    },
  },
  {
    id: "lumi-health",
    name: "Lumi Health",
    sector: "Medtech B2B",
    csm: "Marie Dupont",
    csmRating: 7,
    interlocutorProfile: "Ops",
    arr: 92000,
    arrFormatted: "92 k€",
    nrrPotential: "104 %",
    riskScore: 58,
    machineScore: 52,
    humanScore: 64,
    risk: "Modéré",
    renewalDate: "28 juill. 2026",
    daysToRenewal: 32,
    recommendation: "QBR de cadrage",
    signals: [
      { label: "Échéance proche", detail: "32 jours avant auto-renew", delta: "J-32", kind: "machine" },
      { label: "Usage stable", detail: "Pas de baisse mais pas de croissance", kind: "machine" },
      { label: "Sentiment neutre CR", detail: "Pas de signal humain négatif détecté", kind: "human" },
    ],
    contract: [
      { label: "Renouvellement", value: "28 juillet 2026" },
      { label: "Palier", value: "5 hôpitaux pilotes" },
      { label: "Auto-renew", value: "30 jours" },
    ],
    usageSeries: [70, 71, 70, 72, 71, 70, 69, 71],
    usageDelta: "Stable, pas de croissance",
    brief: {
      summary: "Lumi : engagement stable, fenêtre auto-renew proche.",
      risk: "Probabilité 22 %, risque 92 k€.",
      context: "QBR à programmer sous 10 jours. Profil cible : Ops (équipe terrain hôpital).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Lun · 11:02",
      body: "@marie Lumi Health : QBR à programmer, échéance dans 32 jours.",
    },
  },
  {
    id: "fairsail",
    name: "FairSail Legal",
    sector: "Legal tech",
    csm: "Marie Dupont",
    csmRating: 9,
    interlocutorProfile: "Direction",
    arr: 148000,
    arrFormatted: "148 k€",
    nrrPotential: "116 %",
    riskScore: 24,
    machineScore: 28,
    humanScore: 18,
    risk: "Sain",
    renewalDate: "18 nov. 2026",
    daysToRenewal: 182,
    recommendation: "Plan d'action IA expansion module compliance",
    signals: [
      { label: "Engagement en hausse", detail: "+18 % sessions hebdo", kind: "machine" },
      { label: "Promoteur identifié", detail: "Sponsor a fait un témoignage public", kind: "human" },
    ],
    contract: [
      { label: "Renouvellement", value: "18 novembre 2026" },
      { label: "Palier", value: "25 utilisateurs" },
      { label: "Indexation", value: "3 % annuel" },
    ],
    usageSeries: [55, 60, 64, 68, 72, 75, 78, 82],
    usageDelta: "+18 %",
    brief: {
      summary: "FairSail : engagement excellent, opportunité expansion compliance.",
      risk: "Probabilité non-renouvellement 6 %, opportunité +40 k€ ARR.",
      context: "Sponsor témoigne, candidat naturel pour case study. Profil cible : Direction (Legal Ops).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Lun · 09:42",
      body: "@marie FairSail prêt pour expansion module compliance, sponsor témoigne.",
    },
  },
  {
    id: "vendora",
    name: "Vendora Procurement",
    sector: "Procurement SaaS",
    csm: "Lila Bonnet",
    csmRating: 4,
    csmFlag: "Pression budget CFO",
    interlocutorProfile: "Direction",
    arr: 320000,
    arrFormatted: "320 k€",
    nrrPotential: "109 %",
    riskScore: 67,
    machineScore: 58,
    humanScore: 75,
    risk: "Élevé",
    renewalDate: "21 oct. 2026",
    daysToRenewal: 118,
    recommendation: "Plan d'action IA save + benchmark concurrent",
    signals: [
      { label: "Demande baisse de prix", detail: "Mail CFO du 14 mai", kind: "human" },
      { label: "Tickets en hausse", detail: "+220 % sur 30 jours", kind: "machine" },
      { label: "Sentiment dégradé QBR", detail: "Extraction CR : 5 mentions ROI à prouver", kind: "human" },
    ],
    contract: [
      { label: "Renouvellement", value: "21 octobre 2026" },
      { label: "Palier", value: "Module Vendor Management Premium" },
      { label: "Indexation", value: "7 % annuel" },
    ],
    usageSeries: [80, 82, 78, 75, 74, 70, 68, 65],
    usageDelta: "-18 %",
    brief: {
      summary: "Vendora demande une baisse de prix. Préparer benchmark.",
      risk: "Probabilité 38 %, risque 320 k€.",
      context: "CFO en pression, RFP probable à l'horizon Q3. Profil cible : Direction (CFO + DSI).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Hier · 15:30",
      body: "@lila Vendora : demande baisse prix CFO, plan d'action IA save généré.",
    },
  },
  {
    id: "kuro-ai",
    name: "Kuro AI Studio",
    sector: "AI / ML platform",
    csm: "Lila Bonnet",
    csmRating: 10,
    interlocutorProfile: "Ops",
    arr: 76000,
    arrFormatted: "76 k€",
    nrrPotential: "110 %",
    riskScore: 18,
    machineScore: 22,
    humanScore: 12,
    risk: "Sain",
    renewalDate: "02 fév. 2027",
    daysToRenewal: 258,
    recommendation: "Plan d'action IA co-construction roadmap",
    signals: [
      { label: "Adoption explosive", detail: "+340 % sessions IA hebdo", kind: "machine" },
      { label: "Champion identifié", detail: "VP Data ambassadeur", kind: "human" },
    ],
    contract: [
      { label: "Renouvellement", value: "02 février 2027" },
      { label: "Palier", value: "Tokens / mois" },
      { label: "Indexation", value: "10 % annuel" },
    ],
    usageSeries: [40, 48, 56, 64, 72, 80, 88, 94],
    usageDelta: "+340 %",
    brief: {
      summary: "Kuro AI : engagement spectaculaire, expansion par tokens.",
      risk: "Aucun risque, opportunité +120 k€.",
      context: "Champion VP Data, témoignage exploitable. Profil cible : Ops (équipe Data).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Lun · 08:15",
      body: "@lila Kuro AI : palier tokens saturé, expansion à proposer.",
    },
  },
  {
    id: "savoyance",
    name: "Savoyance Insurance",
    sector: "InsurTech B2B",
    csm: "Marie Dupont",
    csmRating: 4,
    csmFlag: "Désengagement nouveau référent",
    interlocutorProfile: "Mixte",
    arr: 215000,
    arrFormatted: "215 k€",
    nrrPotential: "103 %",
    riskScore: 76,
    machineScore: 68,
    humanScore: 84,
    risk: "Élevé",
    renewalDate: "30 août 2026",
    daysToRenewal: 65,
    recommendation: "Plan d'action IA save + audit pricing",
    signals: [
      { label: "Nouveau référent absent", detail: "Aucune ouverture mail depuis 4 semaines", kind: "human" },
      { label: "Concurrent benchmark", detail: "Mention Shift Technology", kind: "human" },
      { label: "Usage 2 sur 3 features", detail: "Module fraud non activé", kind: "machine" },
    ],
    contract: [
      { label: "Renouvellement", value: "30 août 2026" },
      { label: "Palier", value: "Plateforme + 3 modules" },
      { label: "Indexation", value: "6 % annuel" },
    ],
    usageSeries: [70, 68, 65, 64, 62, 60, 58, 56],
    usageDelta: "-20 %",
    brief: {
      summary: "Savoyance : sous-utilisation, benchmark concurrent à neutraliser, nouveau référent absent.",
      risk: "Probabilité 48 %, risque 215 k€.",
      context: "Module fraud jamais activé. Profil cible : Mixte (DSI + Risk).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Hier · 18:21",
      body: "@marie Savoyance : nouveau référent absent depuis 4 semaines, plan d'action IA reprise contact prêt.",
    },
  },
  {
    id: "polaria",
    name: "Polaria Logistics",
    sector: "Supply chain",
    csm: "Lila Bonnet",
    csmRating: 8,
    interlocutorProfile: "Direction",
    arr: 198000,
    arrFormatted: "198 k€",
    nrrPotential: "111 %",
    riskScore: 33,
    machineScore: 36,
    humanScore: 28,
    risk: "Modéré",
    renewalDate: "12 déc. 2026",
    daysToRenewal: 206,
    recommendation: "Programme champion + plan d'action expansion",
    signals: [
      { label: "Stakeholder map à jour", detail: "Sponsor produit confirmé", kind: "human" },
      { label: "Roadmap demandée", detail: "Demande de visibilité 12 mois", kind: "human" },
    ],
    contract: [
      { label: "Renouvellement", value: "12 décembre 2026" },
      { label: "Palier", value: "8 sites logistiques" },
      { label: "Indexation", value: "4 % annuel" },
    ],
    usageSeries: [60, 62, 64, 65, 66, 68, 70, 72],
    usageDelta: "+12 %",
    brief: {
      summary: "Polaria : engagement progressif, programme champion à activer.",
      risk: "Probabilité 14 %, opportunité +35 k€.",
      context: "Roadmap exec à partager. Profil cible : Direction (COO + DSI).",
    },
    scenarios: [],
    slack: {
      channel: "#cs-revelo",
      time: "Lun · 10:55",
      body: "@lila Polaria : engagement progressif, candidat champion.",
    },
  },
];

export const portfolioKpis = [
  { label: "ARR à risque", value: "1,84 M€", trend: "+12 % sur 30 j", tone: "warn" as const },
  { label: "Comptes en alerte", value: "9", trend: "+3 cette semaine", tone: "warn" as const },
  { label: "Écarts machine vs humain", value: "4", trend: "À traiter ce vendredi", tone: "warn" as const },
  { label: "Plans d'action IA livrés", value: "37", trend: "Cette semaine", tone: "ok" as const },
];

export const riskRingClass: Record<AccountRisk, string> = {
  Critique: "bg-destructive/10 text-destructive border-destructive/30",
  Élevé: "bg-orange/10 text-orange-deep border-orange/30",
  Modéré: "bg-teal/10 text-teal border-teal/30",
  Sain: "bg-cream-deep/40 text-midnight/65 border-cream-deep",
};
