import type { LucideIcon } from "lucide-react";
import { UserRoundX, ListChecks, KeyboardOff } from "lucide-react";

export type PainPoint = {
  id: string;
  title: string;
  description: string;
  verbatim: string;
  stat: string;
  icon: LucideIcon;
};

export const painPoints: PainPoint[] = [
  {
    id: "human-signals-blind",
    title: "Les signaux humains arrivent toujours trop tard",
    description:
      "Manager de transition côté client, changement d'interlocuteur principal en cours de contrat, désengagement du nouveau référent, sentiment négatif extrait des comptes rendus de réunion. Tous ces signaux faibles passent sous le radar du health score classique.",
    verbatim:
      "L'IA qui me donne des propositions, et ensuite moi en tant qu'humain qui connaît la relation, je juge ce qui est mieux. Le health score on ne l'utilise pas trop.",
    stat: "La machine voit l'usage. Elle ne voit pas que le nouveau contact n'a jamais répondu à un mail.",
    icon: UserRoundX,
  },
  {
    id: "actions-missing",
    title: "Compte rouge identifié, plan d'action absent",
    description:
      "Les outils CSM actuels priorisent les comptes à risque, mais laissent le CSM seul face à la question : par quoi commencer, quoi écrire, à qui escalader ? Aucun plan d'action prêt à envoyer.",
    verbatim:
      "Sans rappel, tu n'y penses pas. Le client utilisait bien la plateforme, il était content. C'est juste un problème de coût et de crise financière.",
    stat: "100 % des churns 2025-2026 vécus en interviews étaient évitables avec un plan d'action proactif",
    icon: ListChecks,
  },
  {
    id: "manual-input",
    title: "Saisie manuelle impossible à tenir",
    description:
      "Le health score est rempli à la main, les tickets SAV ne sont jamais croisés avec l'usage, la fréquence de connexion ne rentre pas dans le score. Passé 100 clients, le pilotage manuel décroche. Et changer d'outil veut dire ouvrir encore une plateforme de plus.",
    verbatim:
      "On a 125 clients, on n'a pas la fréquence de connexion, et le health score on ne l'utilise pas. Aujourd'hui c'est éparpillé dans deux outils.",
    stat: "Assia en gère 70. Elle dit déjà que c'est éparpillé dans deux outils. À 125, Marie ne remplit plus le health score.",
    icon: KeyboardOff,
  },
];
