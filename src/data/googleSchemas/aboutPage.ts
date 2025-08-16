import { AboutPage, WithContext } from "schema-dts";
import { organization } from "./organization";
import { person } from "./person";
import thumbnailPicture from "../../assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";

export const aboutPageSchemaContext: WithContext<AboutPage> = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "AboutPage",
      "@id": "aboutPage",
      name: "À propos - Nathalie de Loeper Shiatsu Thérapeutique",
      description:
        "Découvrez Nathalie de Loeper, praticienne de shiatsu thérapeutique diplômée EST-UFPST. Informations détaillées sur la pratique du shiatsu, son parcours et son approche thérapeutique à Saint-Cyr-l'École (78).",
      url: "https://www.shiatsutherapie78.info/about",
      mainEntity: {
        "@type": "Person",
        "@id": "person",
      },
      publisher: {
        "@type": "Organization",
        "@id": "organization",
      },
      about: person,
      thumbnailUrl: `https://www.shiatsutherapie78.info${thumbnailPicture}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.shiatsutherapie78.info/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "À propos",
            item: "https://www.shiatsutherapie78.info/about",
          },
        ],
      },
    },
  ],
};
