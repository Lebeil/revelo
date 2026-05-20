import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo prototype, vue CSM",
  description:
    "Dashboard cliquable Revelo : comptes à risque, contract intelligence, brief IA, scénarios de négociation et alerte Slack. Données simulées pour le hackathon.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Revelo, démo prototype dashboard",
    description:
      "Comptes à risque, contract intelligence, brief IA, scénarios de négo, alerte Slack. Tout est cliquable.",
    url: "/demo",
  },
};

export default function DemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
