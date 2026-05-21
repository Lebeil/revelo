import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { FeedbackForm } from "@/components/demo/FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback prototype",
  description:
    "Donnez votre feedback sur le prototype Revelo. 5 questions pour calibrer le copilote de rétention CS avant la sortie de beta.",
};

type FeedbackPageProps = {
  searchParams: Promise<{ source?: string }>;
};

export default async function FeedbackPage({
  searchParams,
}: Readonly<FeedbackPageProps>) {
  const { source } = await searchParams;
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-cream-deep bg-card">
        <div className="section-shell">
          <div className="section-inner-wide flex h-16 items-center justify-between">
            <Link href="/" aria-label="Retour à l'accueil Revelo">
              <Logo />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-midnight/80 hover:text-teal"
            >
              <ArrowLeft size={14} />
              Retour au dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="section-shell py-12 sm:py-16">
        <div className="section-inner max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
            Feedback prototype Revelo
          </p>
          <h1 className="mt-3 display-serif text-3xl text-midnight sm:text-4xl">
            Aidez-nous à calibrer Revelo avant la sortie de beta
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-midnight/70">
            5 questions, 2 minutes. Vos réponses sont anonymes, stockées en Europe et utilisées
            uniquement pour ajuster le produit et les priorités MVP avant la sortie de beta.
          </p>

          <div className="mt-10">
            <FeedbackForm source={source ?? "feedback-page"} variant="page" />
          </div>
        </div>
      </main>
    </div>
  );
}
