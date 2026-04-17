import Link from "next/link";
import { ArrowRight, InstagramLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#formation", label: "Formation" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6 bg-[color:var(--dark)] px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <div className="hero-glass-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div>
            <BrandMark large />
            <p className="mt-5 max-w-xl text-sm leading-7 text-[color:var(--gray-light)]">
              Production video, photographie, drone, diffusion live et formation avec une execution
              pensee pour des parcours de contact reels.
            </p>
            <Link
              href="/?project=Forfait%20sur%20mesure&intent=devis#contact"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--orange)] transition-colors duration-300 hover:text-[color:var(--orange-light)]"
            >
              Demarrer un devis
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--gray-light)] transition-colors duration-300 hover:text-[color:var(--orange)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-4">
              <a
                href={siteConfig.whatsappApi}
                target="_blank"
                rel="noreferrer"
                className="hero-glass-button inline-flex w-full items-center justify-between rounded-full px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-white"
              >
                WhatsApp
                <ArrowRight size={14} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hero-glass-button inline-flex w-full items-center justify-between rounded-full px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-white"
              >
                Email
                <ArrowRight size={14} />
              </a>
              <div className="flex gap-3 pt-2">
                {[InstagramLogo, YoutubeLogo, TiktokLogo].map((Icon, index) => (
                  <span
                    key={index}
                    className="hero-glass-button inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--gray-light)]"
                  >
                    <Icon size={16} weight="light" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 pt-5 text-[11px] text-[color:var(--gray-mid)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Studio Alpha Production. Tous droits reserves. Vision. Image. Impact.</p>
          <p>{siteConfig.city}, {siteConfig.country}</p>
        </div>
      </div>
    </footer>
  );
}
