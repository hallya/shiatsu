import { Review, AggregateRating } from "schema-dts";

export const reviews: Review[] = [
  {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Marie L.",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody:
      "Excellente praticienne de shiatsu. Nathalie a su me soulager de mes douleurs de dos et de mon stress. Je recommande vivement ses séances.",
    datePublished: "2024-01-15",
    itemReviewed: {
      "@type": "Service",
      name: "Séance de Shiatsu Thérapeutique",
    },
  },
  {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Pierre D.",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody:
      "Très professionnelle et à l'écoute. Les séances de shiatsu m'ont beaucoup aidé pour ma fatigue chronique. Cabinet agréable à Saint-Cyr-l'École.",
    datePublished: "2024-01-10",
    itemReviewed: {
      "@type": "Service",
      name: "Séance de Shiatsu Thérapeutique",
    },
  },
  {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Sophie M.",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody:
      "Nathalie est une praticienne exceptionnelle. Son shiatsu m'a permis de retrouver mon énergie et de mieux gérer mon stress. Je vais régulièrement.",
    datePublished: "2024-01-05",
    itemReviewed: {
      "@type": "Service",
      name: "Séance de Shiatsu Thérapeutique",
    },
  },
  {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Jean-Claude R.",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody:
      "Excellent accueil et séance de shiatsu très efficace pour mes douleurs articulaires. Nathalie est très compétente et bienveillante.",
    datePublished: "2023-12-20",
    itemReviewed: {
      "@type": "Service",
      name: "Séance de Shiatsu Thérapeutique",
    },
  },
  {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Isabelle B.",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody:
      "Praticienne de shiatsu remarquable. Ses séances m'ont aidée à traverser une période difficile. Je recommande sans hésitation.",
    datePublished: "2023-12-15",
    itemReviewed: {
      "@type": "Service",
      name: "Séance de Shiatsu Thérapeutique",
    },
  },
];

export const aggregateRating: AggregateRating = {
  "@type": "AggregateRating",
  ratingValue: 5,
  ratingCount: reviews.length,
  bestRating: 5,
  worstRating: 1,
};
