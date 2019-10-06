import jpg from '@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.jpg';
import webp from '@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole.webp';
import webpMobile from '@/assets/images/pictures/nathalie_cabinet_saint-cyr-lecole-mobile.webp';
import { Definition } from '../about.type';

const infos: Definition = {
  title: 'Infos pratiques et tarifs',
  description: [
    '<strong>Saint-Cyr-l’Ecole</strong> 60€',
    '<strong>Bouloire</strong> 50€',
    '<strong>Paris et proches banlieues séances à domicile avec un surcoût de 30 euros</strong>',
    'Une séance dure 60 minutes, parfois un peu plus.',
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};

export default infos;