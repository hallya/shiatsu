import { Organization } from "schema-dts";
import logo from "../../assets/images/logos/nenuphar.svg";

export const organization: Organization = {
  "@type": "Organization",
  "@id": "organization",
  name: "Nathalie de Loeper - Shiatsu Thérapeutique",
  alternateName: "Cabinet de Shiatsu Saint-Cyr-l'École",
  description:
    "Praticienne de shiatsu thérapeutique diplômée EST-UFPST. Séances pour soulager stress, fatigue, douleurs et améliorer le bien-être.",
  url: "https://www.shiatsutherapie78.info/",
  logo: {
    "@type": "ImageObject",
    contentUrl: `https://www.shiatsutherapie78.info${logo}`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33612387928",
    email: "natloeper@gmail.com",
    contactType: "customer service",
    availableLanguage: "French",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 rue Jean Zay",
    addressLocality: "Saint-Cyr-l'École",
    postalCode: "78210",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
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
