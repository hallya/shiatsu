import jpg from '@/assets/images/pictures/pressions_mains_shiatsu.jpg';
import webp from '@/assets/images/pictures/pressions_mains_shiatsu.webp';
import webpMobile from '@/assets/images/pictures/pressions_mains_shiatsu-mobile.webp';
import { Definition } from '.';

export const healingPath: Definition = {
  id: '8',
  title: 'Des mains qui soignent',
  description: [
    'J’ai lu cette histoire un jour, cela se passait au Japon, un retraité avait l’habitude de se rendre tous les \
    jours en un lieu connu pour être celui des suicidés. Des gens venaient pour mettre fin à leurs jours, se jetant du \
    haut d’une falaise. Lorsque le vieil homme voyait une personne s’approcher trop près du bord il venait poser une \
    main dans son dos. Cette main empathique apaisait le désespéré le détournant aussitôt de son élan funeste.',
    'La main, lorsqu’elle est prolongement du cœur, soigne et parfois sauve la vie.',
    'L’action du shiatsu est celle-là, elle travaille à soigner, à soulager l’être qui souffre dans son \
    corps/cœur/esprit.',
    'Notre force de vie est relancée par la bienveillance soignante d’une main de cœur.',
    'S’il n’y avait qu’un geste technique, qu’un protocole scolairement appris sans l’intention de soin du cœur qui \
    l’accompagne, les effets n’auraient pas cette résonnance profonde ni cette force.',
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
