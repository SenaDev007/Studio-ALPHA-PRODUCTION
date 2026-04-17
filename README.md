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

## Variables d'environnement

Copier `.env.example` vers `.env.local` en local si vous voulez forcer l'URL canonique :

```bash
NEXT_PUBLIC_SITE_URL=https://studio-alpha-production.vercel.app
```

Sur Vercel, definir `NEXT_PUBLIC_SITE_URL` avec :

- l'URL Vercel de production, ou
- le domaine final personnalise

Le projet sait aussi retomber automatiquement sur `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL`, mais `NEXT_PUBLIC_SITE_URL` reste la source la plus propre pour le SEO.

## Deploiement Vercel

1. Importer le depot GitHub `SenaDev007/Studio-ALPHA-PRODUCTION` dans Vercel.
2. Laisser Vercel detecter `Next.js`.
3. Ajouter la variable d'environnement `NEXT_PUBLIC_SITE_URL`.
4. Lancer le premier deploiement.
5. Si vous ajoutez un domaine personnalise, mettre a jour la meme variable avec ce domaine.

Les elements SEO suivants s'aligneront alors automatiquement :

- canonical URL
- Open Graph
- sitemap
- robots host
- donnees structurees

## Depot GitHub

Remote cible :

`https://github.com/SenaDev007/Studio-ALPHA-PRODUCTION.git`
