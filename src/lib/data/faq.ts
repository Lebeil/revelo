export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Qu'est-ce qu'un Health Score hybride, et pourquoi c'est différent ?",
    answer:
      "La plupart des outils CS calculent un score 100 % machine basé sur l'usage produit. Le retour terrain de nos 5 interviews dit la même chose : ce score rate les signaux humains (manager de transition côté client, désengagement du nouveau référent, sentiment négatif en QBR). Le Health Score hybride Revelo combine le score machine reproductible (usage, contrat, facturation, tickets, sentiment CR) et une notation collaborative hebdo des CSM, qui capture ce que la donnée ne sait pas dire. Le résultat : un score 0 à 100 par compte, expliqué (par exemple « 45/100, usage -30 % en 60 j et sponsor changé »), et surtout des écarts détectés entre note humaine et score machine, qui sont les vrais signaux à traiter en priorité.",
  },
  {
    question: "Et si mes CSM ne veulent pas noter chaque semaine ?",
    answer:
      "La notation collaborative est optionnelle. Le score machine fonctionne seul, la notation l'affine quand elle est là. Format conçu pour rester sous 5 minutes par CSM le vendredi : une note sur 10 par compte, un commentaire libre, deux drapeaux types préselectionnés (manager de transition, contact en départ). Si l'équipe n'adopte pas, Revelo reste utile en mode 100 % machine. Si elle adopte, on capture le signal différenciant numéro 1 du marché.",
  },
  {
    question: "Comment fonctionne l'analyse de contrats et la détection de sous-usage ?",
    answer:
      "Revelo croise les licences engagées (HubSpot, Salesforce, Stripe) avec l'usage produit réel (Mixpanel, Amplitude, Snowflake) et flague automatiquement les écarts. Cas typique : un client paie 500 licences mais n'en utilise que 50, l'IA l'identifie 90 jours avant le renouvellement et déclenche un plan d'action AVANT que le client ne demande lui-même un downgrade. Anticiper plutôt que subir la baisse d'ARR.",
  },
  {
    question: "Comment l'agent IA propose-t-il des plans d'action et des emails ?",
    answer:
      "Pour chaque compte en zone rouge ou orange, l'agent tient compte du profil interlocuteur (un CFO ne reçoit pas le même message qu'un Product Manager), du type de problématique, de l'historique de relation et des actions qui ont fonctionné sur des comptes similaires (segmentation par 4 critères en standard, plus en pilote avancé). Exemple Bigcorp baisse : J+1 email à Sophie (PM) avec modèle pré-rédigé, J+7 session training feature sous-utilisée, J+30 repackaging si pas d'amélioration. Le KAM valide, les activités sont créées dans le CRM. L'IA ne pousse jamais une action engageante toute seule.",
  },
  {
    question: "Pourquoi Revelo si j'ai déjà Vitally, HubSpot ou Planhat ?",
    answer:
      "Vitally, HubSpot et Planhat consolident l'usage produit et automatisent le health score machine. C'est un excellent point de départ. Mais aucun ne capture le ressenti humain des CSM en équipe, et aucun ne génère des plans d'action IA personnalisés au profil interlocuteur avec emails pré-rédigés. Revelo s'installe en complément, lit votre stack existant et ajoute les briques manquantes. Pas un nouvel outil de plus : un widget HubSpot ou Salesforce, et des alertes Slack.",
  },
  {
    question: "Combien de temps pour démarrer ?",
    answer:
      "Intégration native HubSpot ou Salesforce en 3 jours sans formation (validé par Sarah RevOps). Pilote complet en 10 jours ouvrés : connecteur CRM branché, Stripe ou Pennylane synchronisé, Zendesk ou Intercom relié, contrats clés indexés, premier batch de plans d'action IA généré. Adoption observée : 95 % en 2 semaines parce que les CSM ne changent pas leurs habitudes, ils restent dans le CRM.",
  },
  {
    question: "Quels connecteurs natifs en standard ?",
    answer:
      "Côté CRM, HubSpot en priorité (cible n° 1 sur nos interviews terrain, 3 interviewés sur 5) et Salesforce. Côté usage produit, Mixpanel, Amplitude et Snowflake en connecteur natif. Côté facturation, Stripe, Pennylane, Sellsy, Qonto. Côté support, Zendesk et Intercom. Pour les CR de réunion (extraction sentiment), connecteurs Modjo, Notta, Tactiq sur la roadmap. Le palier API Advanced ouvre un webhook MCP pour orchestrer l'agent depuis n'importe quel outil compatible.",
  },
  {
    question: "Mes données contrat, usage et CSM sont confidentielles, où sont-elles hébergées ?",
    answer:
      "Hébergement intégral en Europe (OVH et Scaleway), conformité RGPD native, chiffrement AES-256 au repos et TLS 1.3 en transit. Les données restent dans votre tenant HubSpot ou Salesforce, Revelo n'extrait rien hors de l'UE par défaut. Aucun envoi à des fournisseurs LLM hors UE par défaut. La notation collaborative des CSM reste dans votre tenant Revelo, jamais partagée hors de votre organisation.",
  },
  {
    question: "Quel ROI typique sur les pilotes ?",
    answer:
      "Sur un éditeur 10 M€ d'ARR, l'objectif à valider en pilote est : +3 points de NRR (environ 300 k€ d'ARR sauvé), zéro saisie manuelle (40 % de temps CSM économisé) et capture des signaux humains qui passaient sous le radar (un compte sauvé par CSM par trimestre couvre déjà la mise). L'accès étant gratuit pendant la beta, le ROI est immédiat dès la première alerte sauvée.",
  },
  {
    question: "L'agent IA prend-il les décisions à la place du CSM ou du KAM ?",
    answer:
      "Non. Principe Revelo, validé par les 5 interviews terrain : l'IA suggère, l'humain décide. L'agent rédige le brief, score le risque, propose plusieurs plans d'action comparés avec arguments factuels et emails pré-rédigés. Le CSM ou le KAM lit, ajuste, déclenche. Aucun mail client n'est envoyé en autonome. Mode templates pré-définis en fallback pour le MVP, pour ne jamais laisser un CSM démuni.",
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
