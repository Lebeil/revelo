import type { LucideIcon } from "lucide-react";
import { AlertTriangle, Scale, ShieldAlert } from "lucide-react";

export type PortfolioAction = {
  id: string;
  account?: string;
  title: string;
  detail: string;
  arrImpact?: string;
  tone: "save" | "expansion" | "soft";
};

export type PortfolioActionPlan = {
  id: "arr-risk" | "alerts" | "gaps";
  title: string;
  summary: string;
  badge: string;
  Icon: LucideIcon;
  actions: PortfolioAction[];
};

export const portfolioActionPlans: PortfolioActionPlan[] = [
  {
    id: "arr-risk",
    title: "Réduire l'ARR à risque (1,84 M€)",
    summary:
      "L'ARR Critique pèse 1,1 M€ sur 3 comptes. Voici les 4 leviers prioritaires pour sécuriser 700 k€ d'ici fin de trimestre.",
    badge: "4 actions · impact estimé 700 k€",
    Icon: AlertTriangle,
    actions: [
      {
        id: "arr-kam-brief",
        title: "Briefer les 3 KAM sur les comptes Critique",
        detail:
          "Acme (280 k€), Vendora (320 k€), Savoyance (215 k€) basculent en zone rouge. Préparer brief de 30 min cette semaine avec contexte hybride.",
        arrImpact: "815 k€ sécurisés si actions menées",
        tone: "save",
      },
      {
        id: "arr-sponsor-qbr",
        title: "2 QBR de cadrage avec sponsors changés",
        detail:
          "NorthBeam (nouveau Head of Data) et Savoyance (nouveau référent absent 4 sem). QBR avant que le silence ne s'installe.",
        arrImpact: "+1 QBR par sponsor changé = -22 % de risque",
        tone: "save",
      },
      {
        id: "arr-anticipe-renew",
        title: "3 propositions de renouvellement anticipé",
        detail:
          "Acme auto-renew dans 18 j, Vendora dans 90 j. Anticiper avec remise marge protégée -8 % en échange engagement 18 mois.",
        arrImpact: "Maintien 537 k€",
        tone: "soft",
      },
      {
        id: "arr-audit-licences",
        title: "Audit licences sous-utilisées Acme",
        detail:
          "500 licences engagées vs 50 utilisées (-90 %). Préparer une proposition de repackaging avant la demande de downgrade client.",
        arrImpact: "Évite -180 k€ downgrade",
        tone: "expansion",
      },
    ],
  },
  {
    id: "alerts",
    title: "Traiter les 9 comptes en alerte",
    summary:
      "2 Critique, 4 Élevé, 3 Modéré. L'IA propose 5 actions agrégées pour reprendre la main sur ces comptes dans les 14 prochains jours.",
    badge: "5 actions · 9 comptes",
    Icon: ShieldAlert,
    actions: [
      {
        id: "alert-recontact",
        title: "Reprise contact préventive sur 4 comptes",
        detail:
          "Acme, NorthBeam, Savoyance, Vendora. Mails personnalisés au profil interlocuteur déjà rédigés, prêts à envoyer.",
        arrImpact: "Cible : recontact sous 48 h",
        tone: "save",
      },
      {
        id: "alert-training",
        title: "3 sessions training sur features sous-utilisées",
        detail:
          "Acme module RH avancé, NorthBeam visualisations Looker-equivalent, Lumi Health dashboard exécutif.",
        arrImpact: "+15 % d'adoption attendue",
        tone: "expansion",
      },
      {
        id: "alert-escalade",
        title: "2 escalades vers Strategic Account Manager",
        detail:
          "Acme (sponsor parti) et Vendora (CFO en pression) demandent un account manager senior. Brief IA prêt pour Thomas.",
        arrImpact: "Activation KAM = +28 % chance de save",
        tone: "save",
      },
      {
        id: "alert-repackaging",
        title: "1 proposition de repackaging Acme",
        detail:
          "Adapter le palier 50 licences au usage réel, ajouter module recrutement déjà demandé en juin 2025.",
        arrImpact: "+72 k€ ARR si validé",
        tone: "expansion",
      },
      {
        id: "alert-winback",
        title: "1 win-back accompagné en cours",
        detail:
          "Savoyance, module fraud jamais activé. Co-construire un plan d'activation 90 j avec l'équipe Risk client.",
        arrImpact: "Maintien 215 k€",
        tone: "save",
      },
    ],
  },
  {
    id: "gaps",
    title: "Résoudre les 4 écarts machine vs humain",
    summary:
      "Ces 4 comptes sont la signature Revelo : la machine seule (Gainsight, Skalin) ne les aurait pas captés. Le ressenti CSM les flague avant qu'il ne soit trop tard.",
    badge: "4 actions · 1 par compte",
    Icon: Scale,
    actions: [
      {
        id: "gap-acme",
        account: "Acme SaaS",
        title: "Acme · machine 78, humain 96 · écart +18",
        detail:
          "Marie a noté « sponsor distant » alors que la machine voit usage acceptable. Recontact préventif de la nouvelle DRH, mail pré-rédigé prêt.",
        arrImpact: "280 k€ ARR à risque",
        tone: "save",
      },
      {
        id: "gap-northbeam",
        account: "NorthBeam Analytics",
        title: "NorthBeam · machine 62, humain 78 · écart +16",
        detail:
          "Stakeholder changé en avril, Looker mentionné dans 3 tickets. QBR avec le nouveau Head of Data sous 14 jours.",
        arrImpact: "164 k€ ARR à risque",
        tone: "save",
      },
      {
        id: "gap-savoyance",
        account: "Savoyance Insurance",
        title: "Savoyance · machine 68, humain 84 · écart +16",
        detail:
          "Nouveau référent absent depuis 4 semaines. Reprise contact directe + audit module fraud jamais activé.",
        arrImpact: "215 k€ ARR à risque",
        tone: "save",
      },
      {
        id: "gap-vendora",
        account: "Vendora Procurement",
        title: "Vendora · machine 58, humain 75 · écart +17",
        detail:
          "Mail CFO du 14 mai, pression budget. Save motion combinée avec benchmark concurrent (Coupa) et proposition marge protégée.",
        arrImpact: "320 k€ ARR à risque",
        tone: "soft",
      },
    ],
  },
];
