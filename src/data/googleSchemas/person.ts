import { Person } from "schema-dts";
import nathaliePicture from "../../assets/images/pictures/nathalie_de_loeper.jpg";

export const person: Person = {
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    "@id": "address",
    addressLocality: "Saint-Cyr-l'École, France",
    postalCode: "F-78210",
    streetAddress: "5 rue Jean Zay",
  },
  birthDate: "1960-12-06",
  email: "mailto:natloeper@gmail.com",
  image: `https://shiatsutherapie78.info${nathaliePicture}`,
  jobTitle: "Praticienne de shiatsu",
  gender: "female",
  name: "Nathalie de Loeper",
  nationality: "French",
  telephone: "+33612387928",
  url: "https://shiatsutherapie78.info/about",
  sameAs: [
    "https://www.facebook.com/nathaliedeloeper/",
    "https://www.linkedin.com/in/nathalie-de-loeper-shiatsu-97910988/",
    "https://www.koifaire.com/ile-de-france/deloeper,shiatsu-140396.html",
  ],
};
