import { WithContext, ContactPage } from "schema-dts";
import { medicalBusiness } from "./medicalBusiness";
import { person } from "./person";

const lastReviewed = "2021-02-17";

export const contactPageSchemaContext: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusiness,
    {
      lastReviewed,
      "@type": "ContactPage",
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
          "Informations de contact pour une séance de shiatsu à Saint-Cyr-L'école (78210) ou Bouloire (72440)",
        keywords:
          "shiatsu, soin, rencontre, choix, conscience, soigner, séance, traitement, expérience, extraordinaire, information, infos, tarif, médecin, médecine, alternative, maladie, patient, bien, doigts, pression, acupuncture, énergie, corps, harmonieux, coeur, moral, esprit, ancrage, émotions, fatigue, fragilité, fragilisé, circulation, santé, force, vieillesse, apaisement, allègement, bouloire, saint-cyr-l'ecole, saint-cyr-lecole, saint cyr l'ecole, contact, itinéraire",
        name: "Contact",
      },
      name: "Contact",
      typicalAgeRange: "18-",
      url: "https://shiatsutherapie78.info/contacts",
    },
  ],
};
