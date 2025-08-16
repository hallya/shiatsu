import { WebPage, WithContext } from "schema-dts";
import { organization } from "./organization";
import { localBusiness } from "./localBusiness";

export const homePageSchemaContext: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    localBusiness,
    {
      "@type": "WebPage",
      "@id": "homePage",
      name: "Accueil - Nathalie de Loeper Shiatsu Thérapeutique",
      description:
        "Praticienne de shiatsu thérapeutique diplômée EST-UFPST à Saint-Cyr-l'École (78) et Bouloire (72). Séances pour soulager stress, fatigue, douleurs et améliorer le bien-être.",
      url: "https://www.shiatsutherapie78.info/",
      mainEntity: {
        "@type": "LocalBusiness",
        "@id": "localBusiness",
      },
      publisher: {
        "@type": "Organization",
        "@id": "organization",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.shiatsutherapie78.info/",
          },
        ],
      },
    },
  ],
};
