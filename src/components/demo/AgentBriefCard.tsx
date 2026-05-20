import { Sparkles, Download, Activity, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AccountBrief } from "@/lib/data/mock-accounts";

type AgentBriefCardProps = {
  brief: AccountBrief;
  machineScore?: number;
  humanScore?: number;
  generatedAt?: string;
};

export function AgentBriefCard({
  brief,
  machineScore,
  humanScore,
  generatedAt = "Aujourd'hui · 09:12 par agent Revelo",
}: Readonly<AgentBriefCardProps>) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-teal/15 bg-midnight p-6 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(255,107,53,0.25), transparent 45%), radial-gradient(circle at 0% 100%, rgba(143,181,190,0.18), transparent 50%)",
        }}
      />
      <header className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-midnight">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-orange">
              Brief IA hybride
            </p>
            <h3 className="display-serif text-lg">Synthèse machine + humain</h3>
          </div>
        </div>
        <span className="rounded-full bg-cream/10 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/70">
          {generatedAt}
        </span>
      </header>

      {(machineScore !== undefined && humanScore !== undefined) && (
        <div className="relative mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5">
            <Activity size={12} className="text-orange" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cream/80">
              Machine
            </span>
            <span className="font-mono text-sm font-semibold text-cream">{machineScore} / 100</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-orange/15 px-3 py-1.5">
            <UserRound size={12} className="text-orange" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-orange">
              Humain
            </span>
            <span className="font-mono text-sm font-semibold text-cream">{humanScore} / 100</span>
          </div>
        </div>
      )}

      <div className="relative mt-6 space-y-4 text-sm leading-relaxed text-cream/90">
        <p>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-orange">
            Synthèse
          </span>
          {brief.summary}
        </p>
        <p>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-orange">
            Niveau de risque
          </span>
          {brief.risk}
        </p>
        <p>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-orange">
            Contexte et profil interlocuteur
          </span>
          {brief.context}
        </p>
      </div>

      <footer className="relative mt-6 flex flex-wrap items-center gap-3">
        <Button size="sm" className="bg-orange text-midnight hover:bg-orange-soft">
          <Download size={14} className="mr-1.5" />
          Générer la Business Review PDF
        </Button>
        <Button size="sm" variant="outline" className="border-cream/30 bg-transparent text-cream hover:bg-cream/10">
          Partager au KAM
        </Button>
        <p className="text-[11px] text-cream/55">
          Rédigé en 92 secondes par l&apos;agent Revelo, sources auditables, human in the loop.
        </p>
      </footer>
    </article>
  );
}
