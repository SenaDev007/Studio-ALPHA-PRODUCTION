import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Studio de production audiovisuelle à Cotonou`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "studio de production audiovisuelle Cotonou",
    "production vidéo Cotonou",
    "studio photo Cotonou",
    "captation événementielle Bénin",
    "montage vidéo Bénin",
    "contenu de marque Cotonou"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.domain,
    title: `${siteConfig.name} | Production audiovisuelle à Cotonou`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} à Cotonou`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Production audiovisuelle à Cotonou`,
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
        className={`${manrope.variable} ${outfit.variable} font-[family-name:var(--font-manrope)] antialiased`}
      >
        <div className="grid-shell" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
