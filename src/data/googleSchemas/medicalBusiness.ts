import { MedicalBusiness } from "schema-dts";
import { organization } from "./organization";
import { person } from "./person";
import imageNathalieJpg from "../../assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import imageNathalieWebp from "../../assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.webp";
import imageNathalieWebpMobile from "../../assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu-mobile.webp";
import { hoursAvailable } from "./openingHoursSpecification";
import { reviews } from "./review";

export const medicalBusiness: MedicalBusiness = {
  "@type": "MedicalBusiness",
  "@id": "medicalBusiness",
  name: "Nathalie de Loeper - Shiatsu Thérapeutique",
  alternateName: "Cabinet de Shiatsu Saint-Cyr-l'École",
  description:
    "Praticienne de shiatsu thérapeutique diplômée EST-UFPST. Séances pour soulager stress, fatigue, douleurs et améliorer le bien-être. Cabinet à Saint-Cyr-l'École (78) et Bouloire (72).",
  url: organization["url"],
  telephone: person["telephone"],
  email: person["email"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 rue Jean Zay",
    addressLocality: "Saint-Cyr-l'École",
    postalCode: "78210",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.809106,
    longitude: 2.05806,
  },
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"],
  priceRange: "€€",
  paymentAccepted: "Cash, Check",
  currenciesAccepted: "EUR",
  areaServed: [
    "Saint-Cyr-l'École, Île-de-France, France",
    "Bouloire, Pays de la Loire, France",
    "Paris, Île-de-France, France",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Shiatsu",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Séance de Shiatsu Thérapeutique - Saint-Cyr-l'École",
          description:
            "Séance de 75 minutes pour soulager stress, fatigue, douleurs et rétablir l'équilibre énergétique",
          provider: {
            "@type": "Person",
            name: "Nathalie de Loeper",
          },
        },
        price: "70",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Séance de Shiatsu Thérapeutique - Bouloire",
          description:
            "Séance de 75 minutes pour soulager stress, fatigue, douleurs et rétablir l'équilibre énergétique",
          provider: {
            "@type": "Person",
            name: "Nathalie de Loeper",
          },
        },
        price: "60",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  image: [
    `https://www.shiatsutherapie78.info${imageNathalieJpg}`,
    `https://www.shiatsutherapie78.info${imageNathalieWebp}`,
    `https://www.shiatsutherapie78.info${imageNathalieWebpMobile}`,
  ],
  sameAs: [
    "https://www.facebook.com/nathaliedeloeper/",
    "https://www.linkedin.com/in/nathalie-de-loeper-shiatsu-97910988/",
  ],
  founder: person,
  foundingDate: "2015-01-08",
  knowsAbout: [
    "Shiatsu thérapeutique",
    "Médecine traditionnelle chinoise",
    "Méridiens d'acupuncture",
    "Gestion du stress",
    "Bien-être",
    "Énergie vitale",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    ratingCount: reviews.length,
    ratingExplanation:
      'based on reviews on the Google Company Profile of "Loeper Shiatsu Therapeutics"',
    bestRating: 5,
    worstRating: 1,
    reviewCount: reviews.reduce((total, review) => (review.reviewBody ? total + 1 : total), 0),
  },
  contactPoint: [
    {
      hoursAvailable,
      "@type": "ContactPoint",
      telephone: "+33612387928",
      contactType: "Prise de rendez-vous",
      areaServed: ["FR"],
      availableLanguage: ["English", "French"],
    },
    {
      hoursAvailable,
      "@type": "ContactPoint",
      telephone: "+33612387928",
      contactType: "Informations",
      areaServed: ["FR"],
      availableLanguage: ["English", "French"],
    },
    {
      hoursAvailable,
      "@type": "ContactPoint",
      telephone: "+33612387928",
      contactType: "Service après-vente",
      areaServed: ["FR"],
      availableLanguage: ["English", "French"],
    },
  ],
  review: reviews,
  isAccessibleForFree: false,
  hasMap: {
    "@type": "Map",
    url:
      "https://www.google.com/maps/dir/?api=1&destination=Nathalie+de+loeper+shiatsu+saint+cyr+lecole&travelmode=driving",
  },
};
