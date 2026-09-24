import webp from "@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.webp";
import webpMobile from "@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole-mobile.webp";
import jpg from "@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.jpg";
import { FAQElement } from ".";

export const infos: FAQElement = {
  id: "9",
  question: "Infos pratiques et tarifs",
  answer: [
    'Pour connaître la tarification de la séance n\'hésitez pas à m\'envoyer un sms au <a style="display: inline" href="tel:+33612387928">06 12 38 79 28</a>'
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
