"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { feedbackSchema, type FeedbackInput } from "@/lib/schemas/feedback";
import { cn } from "@/lib/utils";

const intentOptions = [
  { value: "oui", label: "Oui", tone: "border-teal/40 bg-teal/10 text-teal" },
  { value: "peut-etre", label: "Peut-être", tone: "border-orange/40 bg-orange/10 text-orange-deep" },
  { value: "non", label: "Non", tone: "border-destructive/30 bg-destructive/10 text-destructive" },
] as const;

type FeedbackFormProps = {
  source?: string;
  variant?: "modal" | "page";
  onSubmitted?: () => void;
};

export function FeedbackForm({
  source = "demo-feedback",
  variant = "modal",
  onSubmitted,
}: Readonly<FeedbackFormProps>) {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      clarity: 0 as unknown as number,
      highlight: "",
      gap: "",
      pilotIntent: undefined,
      pilotComment: "",
      nps: 8,
      source,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (values: FeedbackInput) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error ?? "Réponse invalide");
      }
      toast.success("Merci, votre feedback est enregistré.");
      setSubmitted(true);
      reset();
      onSubmitted?.();
    } catch (error) {
      console.error(error);
      toast.error("Envoi impossible. Réessayez ou écrivez à hello@revelo.io.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 text-center">
        <CheckCircle2 size={28} className="mx-auto text-teal" />
        <p className="mt-3 display-serif text-xl text-midnight">Merci, c&apos;est reçu</p>
        <p className="mt-2 text-sm text-midnight/70">
          Votre feedback est en route vers l&apos;équipe Revelo. Si vous souhaitez devenir pilote
          beta, écrivez-nous à hello@revelo.io.
        </p>
        <Button
          variant="outline"
          className="mt-4 border-cream-deep"
          onClick={() => setSubmitted(false)}
        >
          Envoyer un autre feedback
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "space-y-5",
        variant === "page" && "rounded-2xl border border-cream-deep bg-card p-6"
      )}
    >
      <div className="space-y-2">
        <Label className="text-sm font-medium text-midnight">
          1. Clarté de la valeur Revelo
        </Label>
        <Controller
          control={control}
          name="clarity"
          render={({ field }) => (
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => field.onChange(rate)}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-lg border transition",
                    rate <= (field.value || 0)
                      ? "border-orange/40 bg-orange/10 text-orange"
                      : "border-cream-deep bg-card text-midnight/35 hover:border-orange/30"
                  )}
                  aria-label={`Note ${rate} sur 5`}
                >
                  <Star
                    size={18}
                    fill={rate <= (field.value || 0) ? "currentColor" : "none"}
                  />
                </button>
              ))}
              {field.value > 0 && (
                <span className="ml-2 text-xs font-semibold text-midnight/65">
                  {field.value} / 5
                </span>
              )}
            </div>
          )}
        />
        {errors.clarity && (
          <p className="text-xs text-destructive">{errors.clarity.message as string}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="fb-highlight" className="text-sm font-medium text-midnight">
          2. Quel élément vous a le plus marqué ?
        </Label>
        <textarea
          id="fb-highlight"
          rows={3}
          placeholder="Ex : le Health Score hybride, la notation collaborative, les plans d'action IA..."
          className="w-full rounded-md border border-cream-deep bg-card px-3 py-2 text-sm text-midnight placeholder:text-midnight/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
          {...register("highlight")}
        />
        {errors.highlight && (
          <p className="text-xs text-destructive">{errors.highlight.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="fb-gap" className="text-sm font-medium text-midnight">
          3. Manque-t-il quelque chose pour vous convaincre ? (optionnel)
        </Label>
        <textarea
          id="fb-gap"
          rows={3}
          placeholder="Une feature, une intégration, une preuve, un cas d'usage..."
          className="w-full rounded-md border border-cream-deep bg-card px-3 py-2 text-sm text-midnight placeholder:text-midnight/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
          {...register("gap")}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-midnight">
          4. Vous lanceriez un pilote avec votre équipe CS ?
        </Label>
        <Controller
          control={control}
          name="pilotIntent"
          render={({ field }) => (
            <div className="flex flex-wrap gap-2">
              {intentOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => field.onChange(opt.value)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    field.value === opt.value
                      ? opt.tone
                      : "border-cream-deep bg-card text-midnight/65 hover:border-orange/30"
                  )}
                  aria-pressed={field.value === opt.value}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        />
        {errors.pilotIntent && (
          <p className="text-xs text-destructive">{errors.pilotIntent.message as string}</p>
        )}
        <textarea
          rows={2}
          placeholder="Une condition ou un blocage à partager ? (optionnel)"
          className="mt-2 w-full rounded-md border border-cream-deep bg-card px-3 py-2 text-sm text-midnight placeholder:text-midnight/40 focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
          {...register("pilotComment")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fb-nps" className="text-sm font-medium text-midnight">
          5. NPS : recommanderiez-vous Revelo à un Head of CS ami ?
        </Label>
        <Controller
          control={control}
          name="nps"
          render={({ field }) => (
            <div className="space-y-2">
              <input
                id="fb-nps"
                type="range"
                min={0}
                max={10}
                value={field.value}
                onChange={(event) => field.onChange(Number(event.target.value))}
                className="w-full accent-orange"
              />
              <div className="flex items-center justify-between text-[11px] text-midnight/55">
                <span>0 — Jamais</span>
                <span className="display-serif text-lg text-midnight">{field.value} / 10</span>
                <span>10 — Très probablement</span>
              </div>
            </div>
          )}
        />
        {errors.nps && (
          <p className="text-xs text-destructive">{errors.nps.message as string}</p>
        )}
      </div>

      <input type="hidden" {...register("source")} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-midnight/55">
          Vos réponses sont stockées en Europe, conformes RGPD. Aucune donnée nominative requise.
        </p>
        <Button
          type="submit"
          className="bg-orange text-midnight hover:bg-orange-soft"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="mr-2 animate-spin" />
              Envoi
            </>
          ) : (
            <>
              <Send size={14} className="mr-2" />
              Envoyer le feedback
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
