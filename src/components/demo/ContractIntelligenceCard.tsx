import { FileSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ContractClause } from "@/lib/data/mock-accounts";
import { cn } from "@/lib/utils";

const badgeClass = {
  ok: "bg-teal/10 text-teal border-teal/20",
  warn: "bg-orange/10 text-orange-deep border-orange/30",
  alert: "bg-destructive/10 text-destructive border-destructive/30",
} as const;

type ContractIntelligenceCardProps = {
  clauses: ContractClause[];
  fileName?: string;
};

export function ContractIntelligenceCard({
  clauses,
  fileName = "contrat-acme-saas-v3.pdf",
}: Readonly<ContractIntelligenceCardProps>) {
  return (
    <article className="rounded-2xl border border-cream-deep bg-card p-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
            <FileSearch size={18} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-midnight/55">
              Contract Intelligence
            </p>
            <h3 className="display-serif text-lg text-midnight">Clauses extraites du contrat</h3>
          </div>
        </div>
        <Badge className="rounded-full bg-teal text-cream">OCR + NER auto</Badge>
      </header>

      <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cream-soft px-3 py-1.5 text-[11px] font-mono text-midnight/70">
        <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
        {fileName}
      </p>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {clauses.map((clause) => (
          <div
            key={clause.label}
            className={cn(
              "rounded-xl border p-3.5",
              clause.badge ? badgeClass[clause.badge] : "border-cream-deep bg-cream-soft"
            )}
          >
            <dt className="text-[10px] font-semibold uppercase tracking-widest text-midnight/55">
              {clause.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-midnight">{clause.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
