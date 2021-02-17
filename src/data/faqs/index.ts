import { VNode } from "vue";
import { shiatsu } from "./shiatsu";
import { me } from "./me";
import { meeting } from "./meeting";
import { cost } from "./cost";
import { timeForTreatment } from "./timeForTreatment";
import { generosity } from "./generosity";
import { extraordinary } from "./extraordinary";
import { healingPath } from "./healingPath";
import { infos } from "./infos";
import { toTheDoctors } from "./toTheDoctors";

export interface FAQElement {
  id: string;
  question: string;
  answer: string[];
  images: Images;
}

export interface Images {
  defaultImage: VNode | null;
  imageWebp: VNode | null;
  imageWebpMobile: VNode | null;
}

export const faqs = [
  shiatsu,
  me,
  meeting,
  cost,
  timeForTreatment,
  generosity,
  extraordinary,
  healingPath,
  infos,
  toTheDoctors,
];
