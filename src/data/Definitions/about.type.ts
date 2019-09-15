import { VNode } from 'vue';

export interface Definition {
  title: string;
  description: string[];
  image: VNode | null;
}