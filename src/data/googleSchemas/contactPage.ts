import { ContactPage, WithContext } from "schema-dts";
import { organization } from "./organization";
import { person } from "./person";

export const contactPageSchemaContext: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "ContactPage",
      "@id": "contactPage",
      name: "Contact - Nathalie de Loeper Shiatsu Thérapeutique",
      description:
        "Prenez rendez-vous pour une séance de shiatsu thérapeutique à Saint-Cyr-l'École (78) ou à Bouloire (72). Contactez Nathalie de Loeper par téléphone ou email.",
      url: "https://www.shiatsutherapie78.info/contact",
      mainEntity: {
        "@type": "Person",
        "@id": "person",
      },
      publisher: {
        "@type": "Organization",
        "@id": "organization",
      },
      about: person,
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
            name: "Contact",
            item: "https://www.shiatsutherapie78.info/contact",
          },
        ],
      },
    },
  ],
};
