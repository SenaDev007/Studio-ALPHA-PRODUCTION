import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"]
});

const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Vision. Image. Impact.`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "studio de production audiovisuelle Cotonou",
    "production video Cotonou",
    "studio photo Cotonou",
    "captation evenementielle Benin",
    "montage video Benin",
    "contenu de marque Cotonou"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.domain,
    title: `${siteConfig.name} | Production audiovisuelle, drone et formation a Cotonou`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} a Cotonou`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Production audiovisuelle, drone et formation a Cotonou`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${body.variable} ${display.variable} ${serif.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[color:var(--orange)] focus:px-4 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.2em] focus:text-[color:var(--white)]"
        >
          Aller au contenu
        </a>
        <div className="grid-shell" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
