import webp from "@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.webp";
import webpMobile from "@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole-mobile.webp";
import jpg from "@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.jpg";
import { FAQElement } from ".";

export const infos: FAQElement = {
  id: "9",
  question: "Infos pratiques et tarifs",
  answer: [
    "Concernant la tarification,",
    "<strong>Saint Cyr l’Ecole</strong> 65 euros",
    "<strong>Bouloire</strong> 55 euros",
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
