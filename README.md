# Studio ALPHA PRODUCTION

Site vitrine SEO pour `Studio ALPHA PRODUCTION`, construit avec `Next.js 15`, `TypeScript`, `Tailwind CSS` et `App Router`.

## Stack

- Next.js 15.5.15
- React 19
- TypeScript 5
- Tailwind CSS 4
- Metadata API, Open Graph, JSON-LD, sitemap et robots

## Demarrage

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Build production

```bash
npm run build
npm start
```

## Fichiers importants

- `app/layout.tsx` : metadata globales et structure generale
- `app/page.tsx` : page d'accueil
- `app/robots.ts` : robots.txt genere par Next
- `app/sitemap.ts` : sitemap.xml genere par Next
- `app/opengraph-image.tsx` : image Open Graph dynamique
- `lib/site.ts` : configuration centralisee du studio

## Mise en ligne

Le projet est pret pour un deploiement sur Vercel.

Apres attribution du domaine final, mettre a jour `domain` dans `lib/site.ts` afin d'aligner :

- canonical URL
- Open Graph
- sitemap
- robots host
- donnees structurees

## Depot GitHub

Remote cible :

`https://github.com/SenaDev007/Studio-ALPHA-PRODUCTION.git`
