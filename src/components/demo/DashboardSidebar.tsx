"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  ChartLine,
  FileText,
  LifeBuoy,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

type NavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Pilotage",
    items: [
      { icon: AlarmClock, label: "Top du jour, score hybride", href: "#risque", active: true },
      { icon: TrendingUp, label: "Forecast renouvellement", href: "#forecast" },
      { icon: Sparkles, label: "Plans d'action IA", href: "#plans" },
      { icon: FileText, label: "Contrats indexés", href: "#contrats" },
      { icon: ChartLine, label: "Rapport hebdo", href: "#hebdo" },
    ],
  },
  {
    label: "Équipe",
    items: [
      { icon: UsersRound, label: "Notation collaborative", href: "#notation" },
      { icon: Users, label: "Portefeuilles CSM", href: "#csm" },
      { icon: LifeBuoy, label: "Support Revelo", href: "#support" },
      { icon: Settings, label: "Paramètres", href: "#params" },
    ],
  },
];

type SidebarNavProps = {
  onItemClick?: () => void;
};

export function SidebarNav({ onItemClick }: Readonly<SidebarNavProps>) {
  return (
    <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-7" aria-label="Navigation dashboard">
      {navGroups.map((group) => (
        <div key={group.label}>
          <p className="px-2 text-[10px] font-semibold uppercase tracking-widest text-midnight/45">
            {group.label}
          </p>
          <ul className="mt-3 space-y-1">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className={cn(
                      "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      item.active
                        ? "bg-teal text-cream"
                        : "text-midnight/75 hover:bg-cream-soft hover:text-midnight"
                    )}
                  >
                    <Icon size={16} className={item.active ? "text-orange" : ""} />
                    <span>{item.label}</span>
                    {item.active && (
                      <span className="ml-auto rounded-full bg-orange px-2 py-0.5 text-[10px] font-semibold text-midnight">
                        9
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function SidebarUserCard() {
  return (
    <div className="border-t border-cream-deep p-5">
      <div className="rounded-xl bg-cream-soft p-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-cream text-sm font-semibold">
            MD
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-midnight">Marie Dupont</p>
            <p className="truncate text-xs text-midnight/55">CSM · 125 clients pilotés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardSidebar() {
  return (
    <aside className="hidden h-full w-64 shrink-0 flex-col border-r border-cream-deep bg-card lg:flex">
      <div className="flex h-16 items-center border-b border-cream-deep px-6">
        <Link href="/" aria-label="Retour à la landing Revelo">
          <Logo />
        </Link>
      </div>
      <SidebarNav />
      <SidebarUserCard />
    </aside>
  );
}
