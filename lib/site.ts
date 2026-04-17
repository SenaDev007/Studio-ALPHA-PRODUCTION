const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "localhost:3000";

const normalizedSiteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const siteConfig = {
  name: "Studio ALPHA PRODUCTION",
  shortName: "ALPHA PRODUCTION",
  description:
    "Studio ALPHA PRODUCTION accompagne les marques, institutions et evenements a Cotonou avec une production audiovisuelle structuree, sobre et pensee pour la visibilite.",
  domain: normalizedSiteUrl.replace(/\/$/, ""),
  email: "contact@studio-alpha-production.com",
  phoneDisplay: "+229 01 67 06 09 77",
  phoneHref: "+2290167060977",
  whatsappDisplay: "+229 67 06 09 77",
  whatsappHref: "https://wa.me/22967060977",
  city: "Cotonou",
  country: "Benin",
  githubUrl: "https://github.com/SenaDev007/Studio-ALPHA-PRODUCTION.git"
};

export const services = [
  {
    index: "01",
    title: "Production video",
    description:
      "Films corporate, interviews, teasers et formats courts pour les entreprises, structures publiques et marques locales."
  },
  {
    index: "02",
    title: "Captation evenementielle",
    description:
      "Couverture de conferences, ceremonies, lancements et activations avec livrables adaptes a la diffusion rapide."
  },
  {
    index: "03",
    title: "Photographie professionnelle",
    description:
      "Portraits, reportages, produits et images de communication utilisables sur site web, dossier ou reseaux sociaux."
  },
  {
    index: "04",
    title: "Montage et postproduction",
    description:
      "Assemblage, etalonnage, sous-titrage et declinaisons verticales, carrees ou horizontales selon le canal."
  }
];

export const sectors = [
  {
    tag: "Marques",
    title: "Lancement de produit et image de marque",
    description:
      "Concevoir des contenus courts qui clarifient l'offre, soutiennent la distribution et ameliorent la presence digitale."
  },
  {
    tag: "Institutionnel",
    title: "Communication d'organisation",
    description:
      "Documenter les actions, les equipes et les resultats dans un langage visuel coherent et plus credible."
  },
  {
    tag: "Evenement",
    title: "Captation et recapitulatif",
    description:
      "Etendre la portee d'un evenement avec des resumes rapides, des interviews et des declinaisons reseaux."
  }
];

export const showcaseProjects = [
  {
    slug: "brand-campaign",
    category: "Campagne de marque",
    title: "Narration produit pour une marque locale",
    summary:
      "Direction visuelle, tournage court et declinaisons social media pour installer une identite plus nette.",
    deliverables: "Film hero, reels, formats sponsorises",
    image: "/gallery/brand-campaign.svg"
  },
  {
    slug: "institution-report",
    category: "Institutionnel",
    title: "Couverture d'activites et valorisation d'equipe",
    summary:
      "Captation terrain, interviews et montage structure pour documenter les actions et produire des preuves visuelles.",
    deliverables: "Interview, recap, phototheque",
    image: "/gallery/institution-report.svg"
  },
  {
    slug: "event-recap",
    category: "Evenementiel",
    title: "Resume d'evenement et diffusion rapide",
    summary:
      "Couverture de conference ou lancement avec livraison exploitable dans les heures qui suivent l'evenement.",
    deliverables: "Aftermovie, capsules, stories",
    image: "/gallery/event-recap.svg"
  }
];

export const processSteps = [
  {
    index: "01",
    title: "Cadrage",
    description: "Objectif, audience, ton, formats livrables et calendrier de production."
  },
  {
    index: "02",
    title: "Production",
    description: "Preparation, captation, direction de prise de vue et gestion des sequences utiles."
  },
  {
    index: "03",
    title: "Livraison",
    description: "Montage final, ajustements cibles et exports pour web, diffusion interne ou reseaux."
  }
];

export const faqs = [
  {
    question: "Quels types de clients accompagne Studio ALPHA PRODUCTION ?",
    answer:
      "Le studio intervient pour les entreprises, institutions, associations, artistes et organisateurs d'evenements bases a Cotonou ou au Benin."
  },
  {
    question: "Les contenus peuvent-ils etre adaptes aux reseaux sociaux ?",
    answer:
      "Oui. Les livrables peuvent etre declines en formats verticaux, carres et horizontaux afin de rester coherents sur Instagram, Facebook, TikTok, YouTube ou un site web."
  },
  {
    question: "Le studio travaille-t-il uniquement a Cotonou ?",
    answer:
      "Le studio est base a Cotonou mais peut intervenir dans d'autres zones du Benin selon le perimetre du projet et les contraintes logistiques."
  }
];
