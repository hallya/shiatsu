import jpg from "@/assets/images/pictures/oiseau_qui_chante.jpg";
import webp from "@/assets/images/pictures/oiseau_qui_chante.webp";
import webpMobile from "@/assets/images/pictures/oiseau_qui_chante-mobile.webp";
import { FAQElement } from ".";

export const generosity: FAQElement = {
  id: "6",
  question: "Soyez généreux, partagez votre expérience !",
  answer: [
    "Si le shiatsu vous a fait du bien, parlez-en, il est encore trop peu connu en France et a besoin de chaque voix pour faire parler de lui !",
    "A l’heure où les nouvelles vont vites, souvent les tristes et les fausses, ne gardez pas pour vous les effets bénéfiques d’une séance ou d’un suivi. Ce qui vous a fait du bien peu aussi faire du bien à d’autres et il est dommage par ignorance de passer à côté de la possibilité d’être soulagé.",
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
