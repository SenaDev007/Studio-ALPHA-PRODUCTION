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

export const media = {
  hero: "/media/hero-broadcast.jpg",
  serviceLighting: "/media/service-lighting.jpg",
  serviceFilmset: "/media/service-filmset.jpg",
  serviceEditing: "/media/service-editing.jpg",
  dronePilot: "/media/drone-pilot.jpg",
  cityAerial: "/media/city-aerial.jpg",
  cameraOperator: "/media/camera-operator.jpg",
  cinematographer: "/media/cinematographer.jpg"
};

export const projectOptions = [
  "Production video",
  "Prise de vue drone",
  "Photographie",
  "Diffusion live",
  "Formation drone",
  "Forfait sur mesure"
] as const;

export const budgetOptions = [
  "Moins de 150 000 XOF",
  "150 000 a 350 000 XOF",
  "350 000 a 700 000 XOF",
  "Plus de 700 000 XOF"
] as const;

export const heroStats = [
  { value: "150+", label: "Projets livres" },
  { value: "5", label: "Piliers de service" },
  { value: "3", label: "Axes: sol, live, drone" }
];

export const services = [
  {
    index: "01",
    title: "Production video",
    icon: "VideoCamera",
    image: media.cinematographer,
    description:
      "Clips institutionnels, publicites, documentaires et evenements. Le studio construit des recits propres avec une execution soignee.",
    cta: "/?project=Production%20video&intent=devis#contact"
  },
  {
    index: "02",
    title: "Prise de vue drone",
    icon: "AirplaneTilt",
    image: media.dronePilot,
    description:
      "Vues aeriennes pour l'immobilier, les evenements, les activations et les films de marque avec trajectoires maitrisees.",
    cta: "/?project=Prise%20de%20vue%20drone&intent=devis#contact"
  },
  {
    index: "03",
    title: "Photographie",
    icon: "Camera",
    image: media.cameraOperator,
    description:
      "Portraits, reportages, produits et images corporate pour renforcer l'identite visuelle sur tous les supports.",
    cta: "/?project=Photographie&intent=devis#contact"
  },
  {
    index: "04",
    title: "Postproduction",
    icon: "SlidersHorizontal",
    image: media.serviceEditing,
    description:
      "Montage, etalonnage, sound design, sous-titrage et declinaisons multi-formats pour une diffusion immediate.",
    cta: "/?project=Forfait%20sur%20mesure&intent=devis#contact"
  },
  {
    index: "05",
    title: "Diffusion live",
    icon: "Broadcast",
    image: media.hero,
    description:
      "Streaming de conferences, concerts, ceremonies et prises de parole avec une mise en ligne fluide sur les plateformes utiles.",
    cta: "/?project=Diffusion%20live&intent=devis#contact"
  },
  {
    index: "06",
    title: "Formation drone",
    icon: "GraduationCap",
    image: media.serviceLighting,
    description:
      "Apprentissage progressif du pilotage et de la prise de vue aerienne, du debutant au niveau professionnel.",
    cta: "/?project=Formation%20drone&intent=inscription#contact"
  }
];

export const showcaseProjects = [
  {
    slug: "tower-inauguration",
    category: "Drone",
    label: "Drone · Corporate",
    title: "Summit Tower inauguration",
    image: media.cityAerial,
    span: "lg:col-span-7 lg:row-span-2",
    href: "/?project=Prise%20de%20vue%20drone&intent=devis#contact"
  },
  {
    slug: "elegance-wedding",
    category: "Mariages",
    label: "Evenement",
    title: "Mariage Elegance 2024",
    image: media.hero,
    span: "lg:col-span-5",
    href: "/?project=Production%20video&intent=devis#contact"
  },
  {
    slug: "coastal-series",
    category: "Drone",
    label: "Drone · Nature",
    title: "Cote sauvage serie aerienne",
    image: media.dronePilot,
    span: "lg:col-span-5",
    href: "/?project=Prise%20de%20vue%20drone&intent=devis#contact"
  },
  {
    slug: "arts-festival",
    category: "Evenements",
    label: "Festival",
    title: "Festival des arts",
    image: media.serviceFilmset,
    span: "lg:col-span-4 lg:row-span-2",
    href: "/?project=Diffusion%20live&intent=devis#contact"
  },
  {
    slug: "prestige-residence",
    category: "Corporate",
    label: "Immobilier",
    title: "Residence Prestige",
    image: media.cameraOperator,
    span: "lg:col-span-4 lg:row-span-2",
    href: "/?project=Photographie&intent=devis#contact"
  },
  {
    slug: "official-clip",
    category: "Publicite",
    label: "Clip musical",
    title: "Artiste clip officiel",
    image: media.cinematographer,
    span: "lg:col-span-4 lg:row-span-2",
    href: "/?project=Production%20video&intent=devis#contact"
  }
] as const;

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
    href: "/?project=Production%20video&budget=150%20000%20a%20350%20000%20XOF&intent=devis#contact",
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
    href: "/?project=Forfait%20sur%20mesure&budget=350%20000%20a%20700%20000%20XOF&intent=devis#contact",
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
    href: "/?project=Formation%20drone&budget=150%20000%20a%20350%20000%20XOF&intent=inscription#contact",
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
    slug: "techniques-vol-cinematographiques",
    category: "Drone",
    date: "12 Jan 2025",
    title: "5 techniques de vol pour des plans cinematographiques plus propres",
    excerpt:
      "Comment stabiliser les trajectoires, anticiper les mouvements et rendre les plans aeriens plus utiles au montage.",
    image: media.serviceEditing,
    large: true,
    content: [
      "Le plan aerien n'a de valeur que s'il sert la narration. Le premier reflexe consiste a definir le mouvement avant meme de decoller.",
      "Un travelling lateral lent reste plus exploitable qu'un plan spectaculaire mais instable. La regularite du mouvement compte davantage que la vitesse.",
      "Le studio prepare aussi la sortie du plan: point de depart, point de fin et intention de raccord au montage. C'est ce qui rend les rushes vraiment utiles."
    ]
  },
  {
    slug: "video-verticale-2025",
    category: "Tendances",
    date: "8 Jan 2025",
    title: "Pourquoi la video verticale compte encore en 2025",
    excerpt:
      "Le format vertical n'est pas une option secondaire. Il structure deja une partie de la diffusion des marques.",
    image: media.hero,
    large: false,
    content: [
      "La diffusion mobile impose des formats natifs. Produire horizontal puis recadrer a la fin ne suffit plus.",
      "Un bon workflow anticipe les zones de securite, les sous-titres et la lisibilite du sujet en vertical des la captation.",
      "Les marques qui structurent ce travail en amont obtiennent des contenus plus propres et moins de pertes au montage."
    ]
  },
  {
    slug: "pilotage-drone-regles",
    category: "Formation",
    date: "2 Jan 2025",
    title: "Ce qu'il faut savoir avant de piloter un drone",
    excerpt:
      "Reglementation, zones de vol, securite et bons reflexes avant toute prise de vue aerienne.",
    image: media.dronePilot,
    large: false,
    content: [
      "Avant toute prise de vue, il faut clarifier le cadre d'autorisation, l'environnement de vol et les risques au sol.",
      "La preparation technique ne remplace pas la lecture du site. Vent, obstacles, public et trajectoires doivent etre valides avant le decollage.",
      "Une bonne formation drone commence par la securite, puis construit la maitrise du cadre et du mouvement."
    ]
  }
] as const;

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
] as const;
