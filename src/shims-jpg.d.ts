declare module '*.jpg' {
  import { VNode } from 'vue';

  type Jpg = VNode;

  const content: Jpg;
  export default content;
}