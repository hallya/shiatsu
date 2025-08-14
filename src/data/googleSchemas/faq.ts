import { FAQPage, Question } from "schema-dts";
import { organization } from "./organization";

export const faqSchema: FAQPage = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que le shiatsu thérapeutique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le shiatsu est une technique de massage japonaise basée sur les principes de la médecine traditionnelle chinoise. Il utilise des pressions sur les méridiens d'acupuncture pour rétablir l'équilibre énergétique du corps et favoriser le bien-être.",
      },
    },
    {
      "@type": "Question",
      name: "Pour qui le shiatsu est-il recommandé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le shiatsu s'adresse à tous : personnes stressées, fatiguées, souffrant de douleurs, en période de convalescence, ou simplement souhaitant améliorer leur bien-être général. Il est particulièrement efficace pour le stress, la fatigue, les douleurs articulaires et les troubles du sommeil.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure une séance de shiatsu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Une séance de shiatsu thérapeutique dure environ 75 minutes, incluant un temps d'échange avant et après la séance pour adapter le soin à vos besoins.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les bienfaits du shiatsu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Le shiatsu aide à réduire le stress, améliorer la circulation énergétique, soulager les douleurs, favoriser la relaxation, renforcer le système immunitaire et rétablir l'équilibre corps-esprit.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il une prescription médicale pour consulter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Non, le shiatsu est une pratique de bien-être qui ne nécessite pas de prescription médicale. Cependant, il est recommandé de consulter votre médecin en cas de problèmes de santé spécifiques.",
      },
    },
  ],
  publisher: organization,
  about: {
    "@type": "Thing",
    name: "Shiatsu thérapeutique",
  },
};
