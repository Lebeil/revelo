"use client";

import { ChevronRight, Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { accounts, riskRingClass, type Account } from "@/lib/data/mock-accounts";
import { cn } from "@/lib/utils";

type RiskAccountsTableProps = {
  selectedId: string;
  onSelect: (account: Account) => void;
};

function ratingColor(rating: number) {
  if (rating <= 4) return "bg-destructive/10 text-destructive border-destructive/30";
  if (rating <= 6) return "bg-orange/10 text-orange-deep border-orange/30";
  if (rating <= 8) return "bg-teal/10 text-teal border-teal/30";
  return "bg-teal/15 text-teal border-teal/40";
}

export function RiskAccountsTable({ selectedId, onSelect }: Readonly<RiskAccountsTableProps>) {
  return (
    <article id="risque" className="rounded-2xl border border-cream-deep bg-card">
      <header className="flex items-center justify-between gap-3 border-b border-cream-deep px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
            Top du jour · score hybride
          </p>
          <h2 className="display-serif text-xl text-midnight">
            Voici tes 5 comptes à traiter aujourd'hui
          </h2>
        </div>
        <div className="hidden items-center gap-2 text-xs text-midnight/55 md:flex">
          <span className="inline-flex items-center gap-1 rounded-full border border-cream-deep px-3 py-1.5">
            <Filter size={12} />
            Tous portefeuilles
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-cream-deep px-3 py-1.5">
            <Search size={12} />
            Rechercher
          </span>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] border-collapse text-sm">
          <thead>
            <tr className="bg-cream-soft text-midnight/60">
              <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                Compte
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                ARR
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                Score machine
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                Note CSM
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                Signal humain clé
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                Échéance
              </th>
              <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-widest">
                Plan d'action IA
              </th>
              <th className="px-3 py-3" aria-hidden />
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => {
              const isSelected = account.id === selectedId;
              const humanSignal =
                account.signals.find((s) => s.kind === "human") ?? account.signals[0];
              return (
                <tr
                  key={account.id}
                  className={cn(
                    "cursor-pointer border-t border-cream-deep transition-colors",
                    isSelected ? "bg-teal/5" : "hover:bg-cream-soft/60"
                  )}
                  onClick={() => onSelect(account)}
                >
                  <td className="px-5 py-4 align-middle">
                    <p className="font-semibold text-midnight">{account.name}</p>
                    <p className="text-xs text-midnight/55">{account.sector}</p>
                  </td>
                  <td className="px-3 py-4 align-middle">
                    <p className="font-semibold text-midnight">{account.arrFormatted}</p>
                    <p className="text-[11px] text-midnight/55">NRR potentiel {account.nrrPotential}</p>
                  </td>
                  <td className="px-3 py-4 align-middle">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-midnight">
                        {account.machineScore}
                      </span>
                      <Badge
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold",
                          riskRingClass[account.risk]
                        )}
                      >
                        {account.risk}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-3 py-4 align-middle">
                    <div className="flex items-center gap-2">
                      <Badge
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold",
                          ratingColor(account.csmRating)
                        )}
                      >
                        {account.csmRating} / 10
                      </Badge>
                      {account.csmFlag && (
                        <span className="text-[11px] text-midnight/65">{account.csmFlag}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-4 align-middle text-midnight/80">
                    <p className="font-medium">{humanSignal.label}</p>
                    {humanSignal.delta && (
                      <p className="text-[11px] text-midnight/55">{humanSignal.delta}</p>
                    )}
                  </td>
                  <td className="px-3 py-4 align-middle text-midnight/80">
                    <p className="font-medium">{account.renewalDate}</p>
                    <p className="text-[11px] text-midnight/55">J-{account.daysToRenewal}</p>
                  </td>
                  <td className="px-3 py-4 align-middle text-midnight/80">
                    {account.recommendation}
                  </td>
                  <td className="px-3 py-4 align-middle text-midnight/45">
                    <ChevronRight size={16} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </article>
  );
}
