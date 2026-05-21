"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackCtaClick } from "@/lib/track";

const navLinks = [
  { href: "/#solution", label: "Solution" },
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#comparison", label: "Concurrence" },
  { href: "/#pricing", label: "Tarifs" },
  { href: "/demo", label: "Démo live" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-cream-deep/60 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="section-shell">
        <div className="section-inner-wide flex h-16 items-center justify-between">
          <Link href="/" aria-label="Accueil Revelo">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-midnight/80 transition-colors hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" className="text-midnight hover:bg-cream-deep">
              <Link
                href="/#lead"
                onClick={() => trackCtaClick("header", "parler_equipe")}
              >
                Parler à l'équipe
              </Link>
            </Button>
            <Button
              asChild
              className="bg-teal text-cream hover:bg-teal-deep"
            >
              <Link
                href="/#lead"
                onClick={() => trackCtaClick("header", "demander_demo")}
              >
                Demander une démo
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-cream-deep text-midnight lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="section-inner-wide pb-6 lg:hidden">
            <nav className="flex flex-col gap-2 border-t border-cream-deep/60 pt-4" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-midnight transition-colors hover:bg-cream-deep"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-teal text-cream hover:bg-teal-deep"
              >
                <Link
                  href="/#lead"
                  onClick={() => {
                    trackCtaClick("header-mobile", "demander_demo");
                    setMobileOpen(false);
                  }}
                >
                  Demander une démo
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
