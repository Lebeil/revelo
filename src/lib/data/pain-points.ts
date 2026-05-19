import type { LucideIcon } from "lucide-react";
import { ClipboardX, LineChart, ShieldAlert } from "lucide-react";

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
    id: "manual",
    title: "Excel toute la journée",
    description:
      "Les renégos sont préparées à la main, dans des spreadsheets qui ne parlent pas au CRM ni à la facturation.",
    verbatim: "On bricole en Excel toute la journée.",
    stat: "65 % des KAM gèrent leurs renégos hors outil",
    icon: ClipboardX,
  },
  {
    id: "blind",
    title: "Health score sans contrat",
    description:
      "Les plateformes CS classiques mesurent l'engagement produit mais ignorent les clauses, les seuils et les fenêtres d'échéance.",
    verbatim: "Health score sans visibilité contrat, j'avance à l'aveugle.",
    stat: "32 % du SaaS payé reste sous-utilisé",
    icon: ShieldAlert,
  },
  {
    id: "silo",
    title: "Silo Finance / CS",
    description:
      "Finance pilote le revenu, Customer Success pilote la santé client. Aucun outil ne parle aux deux populations.",
    verbatim: "Finance et CS regardent le même client, mais pas la même donnée.",
    stat: "87 % d'objectifs revenus ratés en 2025",
    icon: LineChart,
  },
];
