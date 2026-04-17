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
    "Studio ALPHA PRODUCTION propose la production video, la photographie, la prise de vue drone, la diffusion live et la formation drone a Cotonou.",
  domain: normalizedSiteUrl.replace(/\/$/, ""),
  email: "contact@studio-alpha-production.com",
  phoneDisplay: "+229 01 67 06 09 77",
  phoneHref: "+2290167060977",
  whatsappDisplay: "+229 67 06 09 77",
  whatsappApi: "https://wa.me/22967060977",
  city: "Cotonou",
  country: "Benin",
  githubUrl: "https://github.com/SenaDev007/Studio-ALPHA-PRODUCTION.git",
  tagline: "Vision. Image. Impact."
};

export const heroStats = [
  { value: "150+", label: "Projets livres" },
  { value: "5", label: "Piliers de service" },
  { value: "3", label: "Axes: sol, live, drone" }
];

export const services = [
  {
    index: "01",
    title: "Production video",
    description:
      "Clips institutionnels, publicites, documentaires et evenements. Le studio construit des recits propres avec une execution soignee.",
    cta: "#contact"
  },
  {
    index: "02",
    title: "Prise de vue drone",
    description:
      "Vues aeriennes pour l'immobilier, les evenements, les activations et les films de marque avec trajectoires maitrisees.",
    cta: "#formation"
  },
  {
    index: "03",
    title: "Photographie",
    description:
      "Portraits, reportages, produits et images corporate pour renforcer l'identite visuelle sur tous les supports.",
    cta: "#contact"
  },
  {
    index: "04",
    title: "Postproduction",
    description:
      "Montage, etalonnage, sound design, sous-titrage et declinaisons multi-formats pour une diffusion immediate.",
    cta: "#contact"
  },
  {
    index: "05",
    title: "Diffusion live",
    description:
      "Streaming de conferences, concerts, ceremoniees et prises de parole avec une mise en ligne fluide sur les plateformes utiles.",
    cta: "#contact"
  },
  {
    index: "06",
    title: "Formation drone",
    description:
      "Apprentissage progressif du pilotage et de la prise de vue aerienne, du debutant au niveau professionnel.",
    cta: "#formation"
  }
];

export const showcaseProjects = [
  {
    slug: "tower-inauguration",
    category: "Drone · Corporate",
    title: "Summit Tower inauguration",
    image: "/gallery/brand-campaign.svg",
    span: "lg:col-span-7 lg:row-span-2"
  },
  {
    slug: "elegance-wedding",
    category: "Evenement",
    title: "Mariage Elegance 2024",
    image: "/gallery/event-recap.svg",
    span: "lg:col-span-5"
  },
  {
    slug: "coastal-series",
    category: "Drone · Nature",
    title: "Cote sauvage serie aerienne",
    image: "/gallery/institution-report.svg",
    span: "lg:col-span-5"
  },
  {
    slug: "arts-festival",
    category: "Festival",
    title: "Festival des arts",
    image: "/gallery/event-recap.svg",
    span: "lg:col-span-4 lg:row-span-2"
  },
  {
    slug: "prestige-residence",
    category: "Immobilier",
    title: "Residence Prestige",
    image: "/gallery/brand-campaign.svg",
    span: "lg:col-span-4 lg:row-span-2"
  },
  {
    slug: "official-clip",
    category: "Clip musical",
    title: "Artiste clip officiel",
    image: "/gallery/institution-report.svg",
    span: "lg:col-span-4 lg:row-span-2"
  }
];

export const droneModules = [
  {
    index: "01",
    title: "Reglementation & securite",
    description:
      "Cadre legal du pilotage, espaces aeriens, protocoles de securite et gestion des risques."
  },
  {
    index: "02",
    title: "Pilotage fondamental",
    description:
      "Prise en main du drone, manoeuvres de base, decollage, atterrissage et vol stationnaire."
  },
  {
    index: "03",
    title: "Pilotage avance",
    description:
      "Trajectoires complexes, vol en conditions difficiles, retour automatique et gestion des pannes."
  },
  {
    index: "04",
    title: "Prise de vue aerienne",
    description:
      "Composition d'image en vol, reglages camera, mouvements cinematographiques et narration aerienne."
  },
  {
    index: "05",
    title: "Postproduction drone",
    description:
      "Traitement des rushes aeriens, etalonnage et integration dans un projet final exploitable."
  }
];

export const pricingPlans = [
  {
    category: "Video",
    name: "Essentiel",
    price: "150K",
    unit: "a partir de / projet",
    features: [
      "Captation demi-journee",
      "Montage standard",
      "1 livraison HD",
      "2 revisions incluses",
      "Delai 5 jours ouvres"
    ]
  },
  {
    category: "Video + Drone",
    name: "Premium",
    price: "350K",
    unit: "a partir de / projet",
    featured: true,
    features: [
      "Captation journee entiere",
      "Prise de vue drone incluse",
      "Montage cinematographique",
      "Etalonnage colorimetrique",
      "Habillage sonore",
      "4 revisions incluses",
      "Livraison 4K + HD"
    ]
  },
  {
    category: "Formation",
    name: "Pilote pro",
    price: "200K",
    unit: "formation complete",
    features: [
      "5 modules complets",
      "40h de formation",
      "Pratique sur le terrain",
      "Materiel fourni",
      "Attestation de formation",
      "Support continu"
    ]
  }
];

export const blogPosts = [
  {
    category: "Drone",
    date: "12 Jan 2025",
    title: "5 techniques de vol pour des plans cinematographiques plus propres",
    excerpt:
      "Comment stabiliser les trajectoires, anticiper les mouvements et rendre les plans aeriens plus utiles au montage.",
    image: "/gallery/brand-campaign.svg",
    large: true
  },
  {
    category: "Tendances",
    date: "8 Jan 2025",
    title: "Pourquoi la video verticale compte encore en 2025",
    excerpt:
      "Le format vertical n'est pas une option secondaire. Il structure deja une partie de la diffusion des marques.",
    image: "/gallery/event-recap.svg"
  },
  {
    category: "Formation",
    date: "2 Jan 2025",
    title: "Ce qu'il faut savoir avant de piloter un drone",
    excerpt:
      "Reglementation, zones de vol, securite et bons reflexes avant toute prise de vue aerienne.",
    image: "/gallery/institution-report.svg"
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
    question: "La formation drone inclut-elle la pratique ?",
    answer:
      "Oui. Le parcours presente sur le site inclut la prise en main, la pratique terrain et la logique de production aerienne."
  }
];
