export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Qu'est-ce qu'un Health Score hybride, et pourquoi c'est différent ?",
    answer:
      "La plupart des outils CS calculent un score 100 % machine basé sur l'usage produit. Le retour terrain de nos 5 interviews dit la même chose : ce score rate les signaux humains (manager de transition côté client, désengagement du nouveau référent, sentiment négatif en QBR). Le Health Score hybride Revelo combine le score machine reproductible (usage, contrat, facturation, tickets, sentiment CR) et une notation collaborative hebdo des CSM, qui capture ce que la donnée ne sait pas dire. Le résultat : un score plus complet, et surtout des écarts détectés entre note humaine et score machine, qui sont les vrais signaux à traiter en priorité.",
  },
  {
    question: "Et si mes CSM ne veulent pas noter chaque semaine ?",
    answer:
      "La notation collaborative est optionnelle. Le score machine fonctionne seul, la notation l'affine quand elle est là. Format conçu pour rester sous 5 minutes par CSM le vendredi : une note sur 10 par compte, un commentaire libre, deux drapeaux types préselectionnés (manager de transition, contact en départ). Si l'équipe n'adopte pas, Revelo reste utile en mode 100 % machine. Si elle adopte, on capture le signal différenciant numéro 1 du marché.",
  },
  {
    question: "Comment l'agent IA propose-t-il des plans d'action ?",
    answer:
      "Pour chaque compte en zone rouge ou orange, l'agent tient compte du profil interlocuteur (direction vs ops), du type de problématique (budget, technique, relation), de l'historique de relation et des clauses contractuelles. Il propose alors un plan d'action concret : reprise de contact préventive avec un script de mail prêt, remise anticipée avec marge protégée, conversation de renouvellement anticipée, ou escalade vers un account manager senior. Le CSM lit, ajuste, déclenche. L'IA ne pousse jamais une action engageante toute seule.",
  },
  {
    question: "Pourquoi Revelo si j'ai déjà Vitally, HubSpot ou Planhat ?",
    answer:
      "Vitally, HubSpot et Planhat consolident l'usage produit et automatisent le health score machine. C'est un excellent point de départ. Mais aucun ne capture le ressenti humain des CSM en équipe, et aucun ne génère des plans d'action IA personnalisés au profil interlocuteur. Revelo s'installe en complément, lit votre stack existant et ajoute les deux briques manquantes. Pas un nouvel outil de plus : un widget HubSpot ou Salesforce, et des alertes Slack.",
  },
  {
    question: "Combien de temps pour démarrer ?",
    answer:
      "Pilote opérationnel en 10 jours ouvrés : connecteur HubSpot ou Salesforce branché, Stripe ou Pennylane synchronisé, Zendesk ou Intercom relié, contrats clés indexés, premier batch de plans d'action IA généré. Aucune saisie manuelle requise pendant ou après l'onboarding, c'est ça qui change vs Vitally ou Planhat.",
  },
  {
    question: "Quels connecteurs natifs en standard ?",
    answer:
      "HubSpot en priorité (cible n° 1 sur nos interviews terrain, 3 interviewés sur 5), Salesforce, Stripe, Pennylane, Sellsy, Qonto, Zendesk et Intercom pour les tickets SAV. Pour les CR de réunion (extraction sentiment), connecteurs Modjo, Notta, Tactiq sur la roadmap. Le palier API Advanced ouvre un webhook MCP pour orchestrer l'agent depuis n'importe quel outil compatible.",
  },
  {
    question: "Mes données contrat et CSM sont confidentielles, où sont-elles hébergées ?",
    answer:
      "Hébergement intégral en Europe (OVH et Scaleway), conformité RGPD native, chiffrement AES-256 au repos et TLS 1.3 en transit. Les contrats PDF sont vectorisés sur nos serveurs européens. Aucun envoi à des fournisseurs LLM hors UE par défaut. La notation collaborative des CSM reste dans votre tenant Revelo, jamais partagée hors de votre organisation.",
  },
  {
    question: "Quel ROI typique sur les pilotes ?",
    answer:
      "Sur un éditeur 10 M€ d'ARR, l'objectif à valider en pilote est : +3 points de NRR (environ 300 k€ d'ARR sauvé), zéro saisie manuelle (40 % de temps CSM économisé) et capture des signaux humains qui passaient sous le radar (un compte sauvé par CSM par trimestre couvre déjà la mise). L'accès étant gratuit pendant la beta, le ROI est immédiat dès la première alerte sauvée.",
  },
  {
    question: "L'agent IA prend-il les décisions à la place du CSM ou du KAM ?",
    answer:
      "Non. Principe Revelo, validé par les 5 interviews terrain : l'IA suggère, l'humain décide. L'agent rédige le brief, score le risque, propose plusieurs plans d'action comparés avec arguments factuels. Le CSM ou le KAM lit, ajuste, déclenche. Aucun mail client n'est envoyé en autonome. Mode templates pré-définis en fallback pour le MVP, pour ne jamais laisser un CSM démuni.",
  },
  {
    question: "Et Tropic dans tout ça ? Vous vous battez contre eux ?",
    answer:
      "Non, Tropic arme les directions IT et achats côté acheteur pour négocier les renouvellements SaaS (15,5 % de savings en H1 2025 sur leur base). Le fait que Tropic ait construit un marché à plusieurs centaines de millions de dollars côté acheteur prouve que le marché symétrique côté fournisseur est ouvert, et que les directions financières des clients négocient désormais sur les contrats SaaS. Revelo répond à cette pression en outillant le CSM et le KAM, là où ils travaillent déjà.",
  },
  {
    question: "Quel coût après la beta ?",
    answer:
      "L'accès pendant la beta est entièrement gratuit. À la sortie de beta, le pricing sera co-construit avec les pilotes. Les pilotes beta auront une grille préférentielle et la possibilité de continuer gratuitement plusieurs mois.",
  },
];
