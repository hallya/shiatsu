import { AboutPage, Question, WithContext } from "schema-dts";
import thumbnailPicture from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { faqs } from "../faqs/index";
import { person } from "./person";

const lastReviewed = "2021-02-17";

export const aboutPageSchemaContext: WithContext<AboutPage> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      lastReviewed,
      "@type": "AboutPage",
      about: {
        lastReviewed,
        "@type": "FAQPage",
        mainEntity: faqs.map(
          (subject): Question => ({
            "@type": "Question",
            name: subject.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: subject.answer.join(""),
            },
          }),
        ),
      },
      author: person,
      accessMode: ["textual", "visual", "auditory"],
      accessibilityFeature: [
        "alternativeText",
        "longDescription",
        "captions",
        "structuralNavigation",
        "resizeText/CSSEnabled",
        "highContrast/CSSEnabled",
      ],
      accessModeSufficient: [
        {
          "@type": "ItemList",
          itemListElement: ["textual"],
          description: "See the text",
        },
        {
          "@type": "ItemList",
          itemListElement: ["textual", "visual"],
          description: "See the text and images",
        },
        {
          "@type": "ItemList",
          itemListElement: ["auditory"],
          description: "Hear the text and image descriptions",
        },
        {
          "@type": "ItemList",
          itemListElement: ["auditory", "visual"],
          description: "Hear the text and see the images",
        },
        {
          "@type": "ItemList",
          itemListElement: ["auditory", "visual", "textual"],
          description: "Hear the text and see the text and images",
        },
      ],
      accessibilityAPI: "ARIA",
      conditionsOfAccess: {
        "@type": "PronounceableText",
        textValue: "Accessible sur rendez-vous par téléphone ou échange email",
      },
      mainContentOfPage: {
        "@type": "WebPageElement",
        author: person,
        description:
          "Informations relatives à la réception ou la pratique d'un shiastu ainsi qu'à la praticienne elle-même",
        keywords:
          "shiatsu, soin, rencontre, choix, conscience, soigner, séance, traitement, expérience, extraordinaire, information, infos, tarif, médecin, médecine, alternative, maladie, patient, bien, doigts, pression, acupuncture, énergie, corps, harmonieux, coeur, moral, esprit, ancrage, émotions, fatigue, fragilité, fragilisé, circulation, santé, force, vieillesse, apaisement, allègement",
        name: "À propos",
      },
      url: "https://shiatsutherapie78.info/about",
      name: "À propos",
      typicalAgeRange: "18-",
      thumbnailUrl: `https://shiatsutherapie78.info${thumbnailPicture}`,
    },
  ],
};
