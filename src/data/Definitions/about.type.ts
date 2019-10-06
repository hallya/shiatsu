import { VNode } from 'vue';

export interface Definition {
  title: string;
  description: string[];
  images: Images;
}

export interface Images {
  defaultImage: VNode | null;
  imageWebp: VNode | null;
  imageWebpMobile: VNode | null;
}