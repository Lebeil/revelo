import Link from "next/link";
import { Logo } from "./Logo";
import { MapPin, Mail } from "lucide-react";

function LinkedInIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width="14"
      height="14"
      className={className}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zM8.5 8h4.36v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v9.45h-4.56v-8.38c0-2-.04-4.57-2.78-4.57-2.78 0-3.2 2.17-3.2 4.42V22H8.5z" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Produit",
    links: [
      { href: "/#solution", label: "Solution" },
      { href: "/#features", label: "Fonctionnalités" },
      { href: "/#architecture", label: "Architecture API / MCP" },
      { href: "/demo", label: "Démo live" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/#comparison", label: "vs Gainsight / Planhat" },
      { href: "/#testimonials", label: "Verbatims clients" },
      { href: "/#pricing", label: "Tarifs" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "https://www.linkedin.com/", label: "LinkedIn équipe" },
      { href: "mailto:liedel.lam@rocket-school.eu", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-midnight text-cream">
      <div className="section-shell">
        <div className="section-inner-wide py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div className="space-y-5">
              <Logo variant="inverse" />
              <p className="max-w-sm text-sm text-cream/75 leading-relaxed">
                Le copilote de rétention CS. Health Score hybride
                (score machine + ressenti CSM noté) et plans d'action
                IA personnalisés, pour les éditeurs SaaS B2B mid-market
                FR et EU.
              </p>
              <div className="flex flex-col gap-2 text-sm text-cream/70">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-orange" />
                  Paris, équipe distribuée FR et EU
                </span>
                <Link
                  href="mailto:liedel.lam@rocket-school.eu"
                  className="inline-flex items-center gap-2 hover:text-orange"
                >
                  <Mail size={14} className="text-orange" />
                  liedel.lam@rocket-school.eu
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  className="inline-flex items-center gap-2 hover:text-orange"
                >
                  <LinkedInIcon className="text-orange" />
                  Suivre Revelo sur LinkedIn
                </Link>
              </div>
            </div>

            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                  {column.title}
                </p>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/75 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
            <p>
              Revelo, projet hackathon Rocket School #17. Équipe de 7 : 2 CSM, 2 Growth, 3 BizDev.
            </p>
            <p className="flex items-center gap-3">
              <span>Made in France</span>
              <span aria-hidden>·</span>
              <span>RGPD natif, hébergement Europe</span>
              <span aria-hidden>·</span>
              <span>© {new Date().getFullYear()} Revelo</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
