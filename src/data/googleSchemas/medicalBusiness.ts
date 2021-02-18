import { organization } from "./organization";
import { MedicalBusiness } from "schema-dts";
import imageNathalieJpg from "@/assets/images/pictures/nathalie_de_loeper.jpg";
import imageNathalieWebp from "@/assets/images/pictures/nathalie_de_loeper.webp";
import imageNathalieWebpMobile from "@/assets/images/pictures/nathalie_de_loeper-mobile.webp";
import { hoursAvailable } from "./openingHoursSpecification";
import { person } from "./person";
import { reviews } from "./review";

export const medicalBusiness: MedicalBusiness = {
  "@type": "MedicalBusiness",
  "@id": "medicalBusiness",
  address: {
    "@id": "address",
  },
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
  areaServed: {
    "@type": "GeoCircle",
    "@id": "businessArea",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.809106,
      longitude: 2.05806,
    },
  },
  brand: "de Loeper Shiatsu thérapeutique",
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
  currenciesAccepted: "EUR",
  description:
    "Le shiatsu est une technique de massothérapie d'origine japonaise qui utilise la pression des doigts sur les points d'acuponcture pour ramener l'équilibre dans le corps et ainsi promouvoir la santé",
  email: person["email"],
  founder: organization["founder"],
  foundingDate: organization["foundingDate"],
  isAccessibleForFree: false,
  image: [
    `https://shiatsutherapie78.info${imageNathalieJpg}`,
    `https://shiatsutherapie78.info${imageNathalieWebp}`,
    `https://shiatsutherapie78.info${imageNathalieWebpMobile}`,
  ],
  name: "Shiatsu thérapeutique",
  openingHours: ["Mo-Th 08:00-20:00", "Fr 09:00-19:00", "Sa 09:00-13:00"],
  openingHoursSpecification: hoursAvailable,
  paymentAccepted: "Cash",
  priceRange: "$$",
  review: reviews,
  url: organization["url"],
  slogan: "Soigner votre énergie c'est améliorer votre santé",
  telephone: person["telephone"],
  hasMap: {
    "@type": "Map",
    url:
      "https://www.google.com/maps/dir/?api=1&destination=Nathalie+de+loeper+shiatsu+saint+cyr+lecole&travelmode=driving",
  },
};
