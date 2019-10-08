import jpg from '@/assets/images/pictures/defaultImageForSharing.jpg';
import webp from '@/assets/images/pictures/defaultImageForSharing.webp';
import webpMobile from '@/assets/images/pictures/defaultImageForSharing-mobile.webp';
import { Definition } from '../about.type';

const cost: Definition = {
  title: 'Le shiatsu, un choix en conscience',
  description: [
    'Se soigner, prendre soin de sa santé est associé dans notre pays à la gratuité. Sécurité Sociale et mutuelle \
    payées, débourser de l’argent nous semble superflu, c’est assez des médicaments et des traitements remboursés pour \
    prendre soin de soi.',
    'Le shiatsu n’est pas remboursé, ou très exceptionnellement par certaines mutuelles et rarement au-delà d’une \
    séance. Pourtant les bienfaits qu’il apporte ne se trouvent pas dans les thérapeutiques prises en charge et sont \
    bel et bien un apport à nul autre comparable.',
    'Une séance de shiatsu n’est pas un moment superficiel, les résultats vont au-delà du confort d’un instant. C’est \
    un choix que l’on fait en conscience, pour retrouver une qualité de santé et d’énergie perdues. Le choix de se \
    faire du bien sans se faire de mal. Un choix pensé, pas une « dé-pense ».',
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
export default cost;
