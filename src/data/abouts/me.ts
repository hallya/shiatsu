import jpg from "@/assets/images/pictures/nathalie_de_loeper.jpg";
import webp from "@/assets/images/pictures/nathalie_de_loeper.webp";
import webpMobile from "@/assets/images/pictures/nathalie_de_loeper-mobile.webp";
import { FAQElement } from ".";

export const me: FAQElement = {
  id: "2",
  question: "Me présenter à vous",
  answer: [
    "J’ai suivi les quatre années d’enseignement de Bernard Bouheret, jusqu’à l’obtention du diplôme de son Ecole de Shiatsu Thérapeutique.",
    "L’E.S.T. est affiliée à l’UFPST (Union Française des Professionnels de Shiatsu Thérapeutique).",
    "Soulager autant que je le peux, alléger ce qui souffre, prendre soin de l’autre a été chez moi une ligne de vie.",
    "Faire du plus avec du moins, du mieux avec du peu est l’enseignement que j’ai reçu de mes parents. J’ai puisé force et créativité de cette économie de moyens qui pousse chaque jour à inventer, à puiser en soi, à développer des qualités qui nous augmentent et nous procurent de la joie.",
    "Faire du bien avec deux mains, relancer l’énergie par l’œuvre bienveillante des pressions, améliorer la santé comme ça, c’est simple et les effets peuvent être parfois extraordinaires.",
    "Jeune j’ai commencé par faire la cuisine, j’ai aimé prendre soin de mes proches en les nourrissant bien. Très vite j’ai fait des livres de cuisine tout en m’occupant plus tard de mes enfants, associant santé, plaisir et simplicité dans mes recettes qui en leur temps ont rencontré un certain succès.",
    "Soigner, nourrir est toute ma vie.",
    "Dans le cadre de ma formation, je suis intervenue auprès des entreprises ou institutions comme LA POSTE, MACSF, la BNF, le Ministère de la Recherche et de l’enseignement Supérieur et en milieu hospitalier auprès du personnel ( hôpital Cochin).",
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
