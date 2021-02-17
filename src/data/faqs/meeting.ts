import jpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import webp from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.webp";
import webpMobile from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu-mobile.webp";
import { FAQElement } from ".";

export const meeting: FAQElement = {
  id: "3",
  question: "Le Shiatsu, un soin et une rencontre",
  answer: [
    "Le shiatsu est une voie qui engage celui qui la suit dans la profondeur du cœur et de la conscience.",
    "A genoux, dans cette position d’humilité, durant toute la durée de la séance le praticien de shiatsu se met au service du soin qu’il prodigue.",
    "L’accompagnement et les gestes puisent toute leur force de cette attitude là.",
    "<blockquote>« Peut-être pourrait-on considérer le malade comme un être écorché et proposer l’image d’une « peau de soin »(…)Il y a sans doute un ensemble de touchers, de regards, de paroles qui tissent cette peau de soin, cocon pour le sujet fragile : étayage d’une nouvelle sensation et d’un sentiment neuf de soi. »</blockquote>",
    "Claire Marin – <cite>La maladie, catastrophe intime</cite>",
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
