"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { leadSchema, type LeadInput } from "@/lib/schemas/lead";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";
import { trackLeadSubmit } from "@/lib/track";

const FIELD_LABEL_STYLE = "text-sm font-medium text-cream/80";
const FIELD_INPUT_STYLE =
  "h-11 border-cream/20 bg-midnight-soft/40 text-cream placeholder:text-cream/35 focus-visible:border-orange focus-visible:ring-orange/30";

export function LeadCaptureSection() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      teamSize: "",
      message: "",
      consent: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = form;

  const consent = watch("consent");

  const onSubmit = async (values: LeadInput) => {
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "landing-lead" }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error ?? "Réponse invalide");
      }

      trackLeadSubmit("landing-lead", values.role, values.teamSize);
      toast.success("Reçu. Un membre de Revelo vous écrit sous 24 h.");
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Envoi impossible. Réessayez ou écrivez à liedel.lam@rocket-school.eu.");
    }
  };

  return (
    <section
      id="lead"
      className="relative overflow-hidden bg-midnight text-cream py-16 sm:py-20 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,107,53,0.22), transparent 50%), radial-gradient(circle at 80% 90%, rgba(143,181,190,0.18), transparent 55%)",
        }}
      />
      <div className="section-shell relative">
        <div className="section-inner-wide grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <RevealOnScroll>
            <div className="space-y-6">
              <p className="eyebrow text-orange">
                Rejoindre la beta privée
              </p>
              <h2 className="display-serif text-3xl text-cream sm:text-4xl">
                50 places pour les premiers pilotes
              </h2>
              <p className="max-w-md text-base text-cream/80 leading-relaxed">
                Décrivez votre stack Revenue, votre douleur principale et le contexte
                de votre équipe Customer Success. Nous revenons vers vous sous 24 h
                avec un créneau de 25 minutes.
              </p>
              <ul className="space-y-3 text-sm text-cream/85">
                {[
                  "Démo 25 minutes : flux complet, du connecteur au brief IA",
                  "Audit gratuit de la donnée contrat / usage actuelle",
                  "Accès gratuit complet pour les 50 premiers pilotes beta",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-cream/15 bg-midnight-soft/50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-orange">
                  Ce que vous obtenez après la démo
                </p>
                <p className="mt-2 text-sm text-cream/80 leading-relaxed">
                  Un compte de démo Revelo accessible 14 jours, le benchmark Gainsight / Planhat / ChurnZero / Skalin
                  signé par Revelo, et le replay vidéo de votre session.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative rounded-3xl border border-cream/15 bg-card/5 p-8 backdrop-blur-sm"
              noValidate
            >
              {submitted && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-midnight/90 p-8 text-center">
                  <div>
                    <CheckCircle2 size={36} className="mx-auto text-orange" />
                    <p className="mt-4 display-serif text-2xl text-cream">
                      Merci, c'est noté.
                    </p>
                    <p className="mt-2 max-w-sm text-sm text-cream/75 leading-relaxed">
                      Un membre de Revelo vous écrit dans les 24 heures avec un créneau de démo et le
                      benchmark comparatif.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-6 border-cream/30 bg-transparent text-cream hover:bg-cream/10"
                      onClick={() => setSubmitted(false)}
                    >
                      Inscrire un ou une collègue
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="lead-name" className={FIELD_LABEL_STYLE}>
                    Nom et prénom
                  </Label>
                  <Input
                    id="lead-name"
                    placeholder="Marie Dupont"
                    className={FIELD_INPUT_STYLE}
                    autoComplete="name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-orange-soft">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lead-email" className={FIELD_LABEL_STYLE}>
                    Email professionnel
                  </Label>
                  <Input
                    id="lead-email"
                    type="email"
                    placeholder="marie@editeurSaaS.fr"
                    className={FIELD_INPUT_STYLE}
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-orange-soft">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lead-company" className={FIELD_LABEL_STYLE}>
                    Entreprise
                  </Label>
                  <Input
                    id="lead-company"
                    placeholder="Éditeur SaaS"
                    className={FIELD_INPUT_STYLE}
                    autoComplete="organization"
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="text-xs text-orange-soft">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lead-role" className={FIELD_LABEL_STYLE}>
                    Rôle <span className="font-normal text-cream/50">(optionnel)</span>
                  </Label>
                  <Input
                    id="lead-role"
                    placeholder="Head of CS, CSM, RevOps, KAM"
                    className={FIELD_INPUT_STYLE}
                    autoComplete="organization-title"
                    {...register("role")}
                  />
                  {errors.role && (
                    <p className="text-xs text-orange-soft">{errors.role.message}</p>
                  )}
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="lead-team" className={FIELD_LABEL_STYLE}>
                    Taille équipe Customer Success{" "}
                    <span className="font-normal text-cream/50">(optionnel)</span>
                  </Label>
                  <Input
                    id="lead-team"
                    placeholder="3 CSM + 1 RevOps + 2 KAM par exemple"
                    className={FIELD_INPUT_STYLE}
                    {...register("teamSize")}
                  />
                  {errors.teamSize && (
                    <p className="text-xs text-orange-soft">{errors.teamSize.message}</p>
                  )}
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="lead-message" className={FIELD_LABEL_STYLE}>
                    Contexte ou question (optionnel)
                  </Label>
                  <textarea
                    id="lead-message"
                    rows={3}
                    placeholder="Stack actuelle, nombre de contrats, douleur principale..."
                    className={cn(
                      "flex w-full rounded-md border bg-midnight-soft/40 px-3 py-2 text-sm text-cream placeholder:text-cream/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30",
                      "border-cream/20"
                    )}
                    {...register("message")}
                  />
                </div>

                <label className="md:col-span-2 flex items-start gap-3 rounded-xl border border-cream/15 bg-midnight-soft/30 p-3 text-xs text-cream/75">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 cursor-pointer accent-orange"
                    checked={consent}
                    onChange={(event) => setValue("consent", event.target.checked, { shouldValidate: true })}
                  />
                  <span>
                    J'accepte d'être recontacté par Revelo dans un cadre commercial.
                    Données stockées en Europe, conformité RGPD, désinscription en un clic.
                  </span>
                </label>
                {errors.consent && (
                  <p className="md:col-span-2 -mt-3 text-xs text-orange-soft">{errors.consent.message}</p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] text-cream/55">
                  Vos données sont stockées dans un Google Sheet privé pendant la phase hackathon.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-orange text-midnight hover:bg-orange-soft"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Envoi en cours
                    </>
                  ) : (
                    <>
                      Réserver ma démo
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
