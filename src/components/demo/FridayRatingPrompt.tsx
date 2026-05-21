"use client";

import { useEffect, useState } from "react";
import { CalendarClock, Flag, UserMinus, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const STORAGE_KEY = "revelo-friday-dismissed";

type AccountToRate = {
  id: string;
  name: string;
  arr: string;
  hint: string;
};

const accountsToRate: AccountToRate[] = [
  { id: "acme", name: "Acme SaaS", arr: "280 k€", hint: "Sponsor parti, sentiment QBR négatif" },
  { id: "northbeam", name: "NorthBeam Analytics", arr: "164 k€", hint: "Head of Data changé en avril" },
  { id: "vendora", name: "Vendora Procurement", arr: "320 k€", hint: "Mail CFO 14 mai, pression budget" },
];

type FlagKey = "manager-transition" | "contact-leaving" | "ambiance-qbr";

const flagLabels: Record<FlagKey, { label: string; Icon: typeof Flag }> = {
  "manager-transition": { label: "Manager de transition", Icon: UserMinus },
  "contact-leaving": { label: "Contact en départ", Icon: Flag },
  "ambiance-qbr": { label: "Ambiance QBR fragile", Icon: UserRoundCheck },
};

export function FridayRatingPrompt() {
  const [open, setOpen] = useState(false);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [flags, setFlags] = useState<Record<string, FlagKey[]>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (dismissed === "1") return;
    const timer = window.setTimeout(() => setOpen(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = (persist = true) => {
    if (persist && typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setOpen(false);
  };

  const setRating = (id: string, value: number) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const toggleFlag = (id: string, flag: FlagKey) => {
    setFlags((prev) => {
      const current = prev[id] ?? [];
      const next = current.includes(flag)
        ? current.filter((value) => value !== flag)
        : [...current, flag];
      return { ...prev, [id]: next };
    });
  };

  const submit = () => {
    dismiss();
    toast.success("Notation hebdo enregistrée. Les écarts machine/humain sont à jour pour lundi.");
  };

  return (
    <Dialog open={open} onOpenChange={(value) => (value ? setOpen(true) : dismiss(false))}>
      <DialogContent className="bg-card sm:max-w-2xl">
        <DialogHeader>
          <Badge className="w-fit rounded-full bg-orange/10 text-orange-deep border-orange/30">
            <CalendarClock size={11} className="mr-1.5" />
            Rituel vendredi 17h
          </Badge>
          <DialogTitle className="display-serif text-2xl text-midnight">
            Notez vos 3 comptes prioritaires en 2 minutes
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-midnight/70">
            Une note rapide sur 10 et 1 à 2 drapeaux types. La machine seule ne voit pas le manager
            de transition ou le contact en départ. C&apos;est vous qui captez ce signal.
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-2 space-y-3">
          {accountsToRate.map((account) => {
            const rating = ratings[account.id] ?? 0;
            const selectedFlags = flags[account.id] ?? [];
            return (
              <li
                key={account.id}
                className="rounded-xl border border-cream-deep bg-cream-soft p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-midnight">{account.name}</p>
                    <p className="text-[11px] text-midnight/65">
                      {account.arr} · {account.hint}
                    </p>
                  </div>
                  {rating > 0 && (
                    <span className="display-serif text-lg text-midnight">{rating} / 10</span>
                  )}
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={rating}
                  onChange={(event) => setRating(account.id, Number(event.target.value))}
                  className="mt-3 w-full accent-orange"
                  aria-label={`Note ${account.name} sur 10`}
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {(Object.keys(flagLabels) as FlagKey[]).map((key) => {
                    const { label, Icon } = flagLabels[key];
                    const active = selectedFlags.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleFlag(account.id, key)}
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition ${
                          active
                            ? "border-orange/40 bg-orange/10 text-orange-deep"
                            : "border-cream-deep bg-card text-midnight/65 hover:border-orange/30"
                        }`}
                      >
                        <Icon size={11} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>

        <DialogFooter>
          <Button
            variant="outline"
            className="border-cream-deep"
            onClick={() => dismiss()}
          >
            Plus tard
          </Button>
          <Button
            className="bg-orange text-midnight hover:bg-orange-soft"
            onClick={submit}
          >
            Enregistrer les notes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
