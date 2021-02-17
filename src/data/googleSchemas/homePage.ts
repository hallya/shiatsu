import { AboutPage, MedicalBusiness, WithContext } from "schema-dts";
import { medicalBusiness } from "./medicalBusiness";

export const homePageSchemaContext: WithContext<MedicalBusiness | AboutPage> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",

      areaServed: medicalBusiness["areaServed"],
      serviceType: "Shiatsu thérapeutique",
      provider: medicalBusiness,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Séance de shiatsu",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Shiatsu sur place",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Saint-Cyr-L'école",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Bouloire",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Shiatsu à domicile",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Saint-Cyr-L'école, Paris et proche banlieux",
                },
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "SpecialAnnouncement",
      name: "Infos covid",
      text:
        "Pendant le confinement ou au-delà de l'horaire imposé par le couvre-feu vous pouvez venir recevoir un shiatsu. Il suffit de cocher la case de l'attestation : déplacement pour soins ne pouvant être assurés à distance, etc... Le shiatsu thérapeutique, médecine alternative, entre dans la liste des activités de santé humaine non classées ailleurs, sa pratique est autorisée. Les rendez-vous sont espacés de 2 heures afin d'aérer longuement après chaque patient. Il n'y a pas d'attente ni de croisement de personnes. Port du masque obligatoire.",
      datePosted: "2021-01-20",
      category: "https://www.wikidata.org/wiki/Q81068910",
    },
  ],
};
