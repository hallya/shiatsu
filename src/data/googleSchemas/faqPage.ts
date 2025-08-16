import { FAQPage, WithContext } from "schema-dts";
import { organization } from "./organization";
import { faqs } from "../faqs";

export const faqPageSchemaContext: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "FAQPage",
      "@id": "faqPage",
      name: "Questions Fréquentes - Shiatsu Thérapeutique Nathalie de Loeper",
      description:
        "Toutes vos questions sur le shiatsu thérapeutique : définition, bienfaits, déroulement d'une séance. Réponses détaillées par Nathalie de Loeper, praticienne diplômée à Saint-Cyr-l'École.",
      url: "https://www.shiatsutherapie78.info/about/quick-answer",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.join(" "),
        },
      })),
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
          {
            "@type": "ListItem",
            position: 2,
            name: "À propos",
            item: "https://www.shiatsutherapie78.info/about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Questions Fréquentes",
            item: "https://www.shiatsutherapie78.info/about/quick-answer",
          },
        ],
      },
    },
  ],
};
