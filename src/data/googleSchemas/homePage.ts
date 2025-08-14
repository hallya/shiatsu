import { AboutPage, MedicalBusiness, WithContext } from "schema-dts";
import { organization } from "./organization";
import { localBusiness } from "./localBusiness";

export const homePageSchemaContext: WithContext<MedicalBusiness | AboutPage> = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "Service",
      areaServed: {
        "@type": "GeoCircle",
        "@id": "businessArea",
      },
      serviceType: "Shiatsu thérapeutique",
      provider: {
        "@type": "MedicalBusiness",
        "@id": "medicalBusiness",
      },
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
  ],
};
