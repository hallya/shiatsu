import { BlogPosting, Organization, Person } from "schema-dts";
import { organization } from "./organization";
import { person } from "./person";

export const blogSchema: BlogPosting = {
  "@type": "BlogPosting",
  headline: "Blog - Articles sur le Shiatsu Thérapeutique",
  description:
    "Découvrez nos articles sur le shiatsu thérapeutique, le bien-être et la médecine traditionnelle chinoise. Conseils et informations par Nathalie de Loeper, praticienne diplômée à Saint-Cyr-l'École.",
  author: person,
  publisher: organization,
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.shiatsutherapie78.info/blog",
  },
  image: ["https://www.shiatsutherapie78.info/img/nathalie_de_loeper_praticienne_shiatsu.jpg"],
  keywords: [
    "blog shiatsu",
    "articles shiatsu",
    "bien-être",
    "médecine traditionnelle chinoise",
    "conseils santé",
    "Nathalie de Loeper",
    "Saint-Cyr-l'École",
    "shiatsu thérapeutique",
  ],
  about: [
    {
      "@type": "Thing",
      name: "Shiatsu thérapeutique",
    },
    {
      "@type": "Thing",
      name: "Bien-être",
    },
    {
      "@type": "Thing",
      name: "Médecine traditionnelle chinoise",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Personnes intéressées par le shiatsu et le bien-être",
  },
};
