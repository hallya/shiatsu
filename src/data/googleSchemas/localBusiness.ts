import { LocalBusiness } from "schema-dts";
import { organization } from "./organization";
import { person } from "./person";
import { reviews } from "./review";

export const localBusiness: LocalBusiness = {
  "@type": "LocalBusiness",
  "@id": "localBusiness",
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
  openingHours: ["Mo-Th 08:00-20:00", "Fr 09:00-19:00", "Sa 09:00-13:00"],
  priceRange: "€€",
  paymentAccepted: "Cash",
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
          name: "Séance de Shiatsu Thérapeutique",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    ratingCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.slice(0, 5), // Limiter à 5 avis pour éviter la surcharge
  image: ["https://www.shiatsutherapie78.info/img/nathalie_de_loeper_praticienne_shiatsu.jpg"],
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
};
