import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revelo-web.vercel.app"),
  title: {
    default: "Revelo, le copilote de rétention CS, Health Score hybride et actions IA",
    template: "%s · Revelo",
  },
  description:
    "Revelo fusionne le score machine (usage, contrat, facturation, support) et le ressenti CSM noté en équipe, puis propose des plans d'action IA personnalisés selon le profil interlocuteur. Intégré nativement à HubSpot et Salesforce. Conçu pour les éditeurs SaaS B2B mid-market FR et EU.",
  keywords: [
    "Customer Success",
    "Health Score hybride",
    "Notation collaborative CSM",
    "Plans d'action IA",
    "Rétention SaaS",
    "Renouvellement B2B",
    "Signal humain CSM",
    "HubSpot CRM",
    "Salesforce CRM",
    "NRR",
    "Revenue Operations",
    "Contract Intelligence",
    "KAM",
    "RevOps",
  ],
  authors: [{ name: "Revelo, Rocket School Hackathon" }],
  creator: "Revelo",
  publisher: "Revelo",
  openGraph: {
    title: "Revelo, le copilote de rétention CS",
    description:
      "Health Score hybride (score machine + ressenti CSM noté en équipe) et plans d'action IA personnalisés, intégrés dans HubSpot ou Salesforce. Pour les éditeurs SaaS B2B mid-market.",
    url: "/",
    siteName: "Revelo",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelo, le copilote de rétention CS",
    description:
      "Health Score hybride et plans d'action IA personnalisés, intégrés dans HubSpot et Salesforce.",
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <TooltipProvider delayDuration={120}>{children}</TooltipProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
