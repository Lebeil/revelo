"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "revelo-nps-submitted";

export function NpsQuickSlider() {
  const [value, setValue] = useState(8);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/nps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nps: value, source: "inline-demo" }),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error ?? "Réponse invalide");
      }
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      setSubmitted(true);
      toast.success("Merci, note enregistrée.");
    } catch (error) {
      console.error(error);
      toast.error("Envoi impossible. Réessayez ou écrivez à liedel.lam@rocket-school.eu.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="nps-quick" className="rounded-2xl border border-orange/25 bg-orange-soft/10 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
            Notez Revelo
          </p>
          <h3 className="display-serif text-base text-midnight sm:text-lg wrap-break-word">
            Sur 10, vous recommanderiez Revelo à un pair Customer Success ?
          </h3>
          <p className="mt-1 text-xs text-midnight/65 leading-relaxed">
            0 = jamais, 10 = en boucle. Réponse une seule fois, le formulaire complet 5 questions reste accessible plus bas.
          </p>
        </div>
        {!submitted && (
          <span className="display-serif text-4xl text-orange-deep font-semibold tabular-nums sm:text-5xl">
            {value}
            <span className="text-base text-midnight/55"> / 10</span>
          </span>
        )}
      </div>

      {submitted ? (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-teal/30 bg-teal/5 px-4 py-3">
          <CheckCircle2 size={16} className="shrink-0 text-teal" />
          <p className="text-sm text-midnight">Merci, votre note a été enregistrée.</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="range"
            min={0}
            max={10}
            step={1}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            disabled={submitting}
            className="h-2 w-full cursor-pointer accent-orange disabled:opacity-50"
            aria-label="Score NPS, de 0 à 10"
          />
          <Button
            className="bg-orange text-midnight hover:bg-orange-soft shrink-0"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 size={14} className="mr-1.5 animate-spin" />
                Envoi
              </>
            ) : (
              <>
                <Sparkles size={14} className="mr-1.5" />
                Envoyer ma note
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  );
}
