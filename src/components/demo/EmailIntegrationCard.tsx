"use client";

import { Inbox, Sparkles, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function EmailIntegrationCard() {
  return (
    <article className="rounded-2xl border border-cream-deep bg-card p-6">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-cream">
            <Inbox size={18} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
              Connexion Outlook active
            </p>
            <h3 className="display-serif text-lg text-midnight">
              L&apos;IA lit les emails clients et propose des actions
            </h3>
          </div>
        </div>
        <Badge className="rounded-full bg-teal/10 text-teal border-teal/30">Live</Badge>
      </header>

      <div className="mt-5 rounded-xl border border-cream-deep bg-cream-soft">
        <div className="flex items-center justify-between border-b border-cream-deep px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs text-midnight/65">
            <span className="font-semibold text-midnight">Sophie Mercier</span>
            <span className="text-midnight/45">·</span>
            <span>Product Manager, Bigcorp</span>
          </div>
          <span className="text-[11px] text-midnight/55">Aujourd&apos;hui · 08:42</span>
        </div>
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-midnight">Plan downgrade Q3</p>
          <p className="mt-1 text-xs text-midnight/65 leading-relaxed">
            « Suite à la revue budgétaire, nous devons réduire notre stack SaaS de 30 %. Pouvons-nous
            envisager un palier inférieur ? Les modules 3 et 4 sont peu utilisés. »
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-orange/30 bg-orange/5 p-4">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-orange" />
          <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
            Récap IA en 2 lignes
          </p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-midnight">
          Sophie évoque un budget contraint et 5 features sous-utilisées. Risque de demande de
          downgrade officielle à 60 jours, conversation préventive recommandée.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          size="sm"
          className="bg-teal text-cream hover:bg-teal-deep"
          onClick={() => toast.success("QBR de cadrage proposé à Sophie pour la semaine prochaine.")}
        >
          <ArrowRight size={14} className="mr-1.5" />
          Reprogrammer un QBR
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-cream-deep bg-card text-midnight hover:bg-cream-deep"
          onClick={() => toast.success("Benchmark concurrent envoyé en pièce jointe.")}
        >
          Envoyer benchmark
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="ml-auto text-orange-deep hover:bg-orange/10"
          onClick={() => toast.success("Activité poussée dans la fiche Bigcorp côté HubSpot.")}
        >
          <Send size={14} className="mr-1.5" />
          Pousser dans HubSpot
        </Button>
      </div>
    </article>
  );
}
