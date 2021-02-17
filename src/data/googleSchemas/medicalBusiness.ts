import { MedicalBusiness } from "schema-dts";
import logo from "../../assets/images/logos/nenuphar.svg";
import { person } from "./person";

export const medicalBusiness: MedicalBusiness = {
  "@type": "MedicalBusiness",
  currenciesAccepted: "EUR",
  openingHours: ["Mo-Th 08:00-20:00", "Fr 09:00-19:00", "Sa 09:00-13:00"],
  paymentAccepted: "Cash",
  isAccessibleForFree: false,
  name: "Shiatsu",
  description:
    "Le shiatsu est une technique de massothérapie d'origine japonaise qui utilise la pression des doigts sur les points d'acuponcture pour ramener l'équilibre dans le corps et ainsi promouvoir la santé",
  priceRange: "$$",
  url: "https://shiatsutherapie78.info",
  logo: `https://shiatsutherapie78.info${logo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint-Cyr-l'École, France",
    postalCode: "F-78210",
    streetAddress: "5 rue Jean Zay",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.809106,
      longitude: 2.05806,
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    ratingCount: 38,
    ratingExplanation:
      'based on reviews on the Google Company Profile of "Loeper Shiatsu Therapeutics"',
    bestRating: 5,
    worstRating: 1,
    reviewCount: 35,
  },
  brand: "de Loeper Shiatsu thérapeuthique",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33612387928",
    contactType: "contact",
    areaServed: ["FR"],
    availableLanguage: ["English", "French"],
  },
  email: "mailto:natloeper@gmail.com",
  funder: person,
  foundingDate: "2015-01-08",
  slogan: "Soigner votre énergie c'est améliorer votre santé",
  telephone: person["telephone"],
  hasMap: {
    "@type": "Map",
    url:
      "https://www.google.com/maps/dir/?api=1&destination=Nathalie+de+loeper+shiatsu+saint+cyr+lecole&travelmode=driving",
  },
};
