export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Pourquoi Revelo plutôt que Gainsight ou Planhat ?",
    answer:
      "Gainsight et Planhat sont des plateformes de Customer Success conçues pour le scoring de santé client. Revelo va plus loin : nous croisons les clauses contractuelles (dates, seuils, prix) avec l'usage produit en temps réel et nous générons l'argumentaire de renégociation. Time to value 18 fois plus rapide, et un agent qui agit au lieu de seulement résumer.",
  },
  {
    question: "Combien de temps pour démarrer ?",
    answer:
      "Le pilote SaaS Base est opérationnel en 10 jours ouvrés : connecteurs CRM et produit branchés, contrats clés indexés, premier rapport hebdo livré. Le palier API Advanced ajoute 1 à 2 semaines selon la complexité de l'environnement Salesforce ou Slack.",
  },
  {
    question: "Comment Revelo se connecte à mon Salesforce, Stripe et CRM ?",
    answer:
      "Nous proposons des connecteurs natifs pour Salesforce, HubSpot, Stripe, Pennylane, Sellsy et Qonto. L'agent Revelo réconcilie l'ID Salesforce, l'ID Produit et les facturations dans une table compte unique. Le palier API Advanced ouvre un webhook MCP qui permet d'orchestrer l'agent depuis n'importe quel outil compatible.",
  },
  {
    question: "Mes données contrat sont confidentielles, où sont-elles hébergées ?",
    answer:
      "Hébergement intégral en Europe (OVH et Scaleway), conformité RGPD native, chiffrement AES-256 au repos et TLS 1.3 en transit. Les contrats PDF sont vectorisés sur nos serveurs européens et jamais envoyés à des fournisseurs LLM hors UE par défaut. Option d'inférence on-premise sur le palier Conseil.",
  },
  {
    question: "Quel ROI typique sur les pilotes en cours ?",
    answer:
      "Sur un éditeur 10 M€ d'ARR, nous visons +3 points de NRR (soit environ 300 k€ d'ARR sauvé) et 40 % de temps CSM économisé sur les tâches manuelles. Pendant la beta privée, l'accès est gratuit, donc le ROI est immédiat dès la première alerte sauvée.",
  },
  {
    question: "Quel persona dans mon équipe utilise Revelo au quotidien ?",
    answer:
      "Trois utilisateurs principaux : la CSM (Marie) reçoit les alertes Slack et pilote son portefeuille, le ou la RevOps (Sarah) consomme la table de contrats unifiée et le forecast 90 jours, le ou la KAM (Thomas) utilise le simulateur de scénarios et la Business Review pour négocier. Le CFO et le CRO consomment les rapports hebdo.",
  },
  {
    question: "Comment est calculé le score de risque ?",
    answer:
      "Le score croise quatre signaux : rupture de tendance d'usage produit, fenêtre contractuelle à échéance (60 à 90 j), historique des tickets de support, et alignement engagement vs consommation réelle. Les pondérations sont auditables, et chaque alerte est accompagnée des trois signaux qui ont déclenché la bascule.",
  },
  {
    question: "Quel coût après la beta ?",
    answer:
      "L'accès pendant la beta est entièrement gratuit. À la sortie de beta, le pricing sera co-construit avec les pilotes (modèle par contrats gérés ou par siège, à arbitrer). Les pilotes beta auront une grille préférentielle et la possibilité de continuer gratuitement plusieurs mois.",
  },
  {
    question: "Que se passe-t-il si je veux résilier ?",
    answer:
      "Pas d'engagement, désactivation immédiate, export complet de la donnée contrat et usage en CSV, JSON et Parquet. Suppression complète sous 30 jours, conformité RGPD article 17. Nous gardons les pilotes courts pour vous laisser tester sans pression.",
  },
];
