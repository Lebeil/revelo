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
    default: "Revelo, l'agent IA qui anticipe les renégociations B2B",
    template: "%s · Revelo",
  },
  description:
    "Revelo croise contrats clients et usage produit pour détecter les risques 60 à 90 jours avant l'échéance, rédiger le brief KAM et sécuriser votre NRR. Conçu pour les éditeurs SaaS B2B mid-market français et européens.",
  keywords: [
    "Customer Success",
    "NRR",
    "renégociation B2B",
    "SaaS",
    "Gainsight alternative",
    "Planhat alternative",
    "Revenue Operations",
    "Contract Intelligence",
    "KAM",
    "RevOps",
  ],
  authors: [{ name: "Revelo, Rocket School Hackathon" }],
  creator: "Revelo",
  publisher: "Revelo",
  openGraph: {
    title: "Revelo, l'agent IA qui anticipe les renégociations B2B",
    description:
      "Croisement contrats + usage produit, détection 60 à 90 jours avant l'échéance, brief KAM automatique. Pensé pour les éditeurs SaaS mid-market FR/EU.",
    url: "/",
    siteName: "Revelo",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelo, l'agent IA qui anticipe les renégociations B2B",
    description:
      "Croisement contrats + usage, détection 60 à 90 jours avant l'échéance, brief KAM automatique.",
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
