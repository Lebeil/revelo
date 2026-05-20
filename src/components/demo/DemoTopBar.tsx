"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Sparkles, Calendar, Menu } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarNav, SidebarUserCard } from "./DashboardSidebar";

export function DemoTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-cream-deep bg-cream/95 px-4 backdrop-blur sm:px-5 lg:pl-8 lg:pr-6">
      <div className="flex items-center gap-2 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-midnight hover:bg-cream-deep"
              aria-label="Ouvrir le menu de navigation"
            >
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 bg-card text-midnight">
            <SheetHeader className="flex h-16 flex-row items-center border-b border-cream-deep px-6">
              <SheetTitle className="text-base font-semibold text-midnight">
                <Link href="/" aria-label="Retour à la landing Revelo">
                  <Logo />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex h-[calc(100%-4rem)] flex-col">
              <SidebarNav onItemClick={() => setOpen(false)} />
              <SheetClose className="sr-only">Fermer</SheetClose>
              <SidebarUserCard />
            </div>
          </SheetContent>
        </Sheet>
        <Logo />
      </div>

      <div className="hidden flex-col leading-tight lg:flex">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-deep">
          Démo prototype Revelo
        </p>
        <h1 className="display-serif text-xl text-midnight">Top du jour, score hybride · vue Marie · CSM</h1>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="hidden text-midnight hover:bg-cream-deep sm:inline-flex"
        >
          <Link href="/">
            <ArrowLeft size={14} className="mr-1.5" />
            Retour landing
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-midnight hover:bg-cream-deep sm:hidden" aria-label="Retour landing">
          <Link href="/">
            <ArrowLeft size={16} />
          </Link>
        </Button>
        <Button asChild size="sm" className="bg-teal text-cream hover:bg-teal-deep">
          <Link href="/#lead">
            <Calendar size={14} className="mr-1.5" />
            <span className="hidden sm:inline">Demander la vraie démo</span>
            <span className="sm:hidden">Démo</span>
          </Link>
        </Button>
        <span className="hidden items-center gap-1 rounded-full border border-orange/30 bg-orange/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange-deep md:inline-flex">
          <Sparkles size={10} />
          Données simulées
        </span>
      </div>
    </header>
  );
}
