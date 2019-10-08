import jpg from '@/assets/images/pictures/champ_de_tournesols.jpg';
import webp from '@/assets/images/pictures/champ_de_tournesols.webp';
import webpMobile from '@/assets/images/pictures/champ_de_tournesols-mobile.webp';
import { Definition } from '../about.type';

const timeForTreatment: Definition = {
  title: 'Combien de séances pour un traitement',
  description: [
    'Sont à considérer les causes qui nous amènent à ce soin, notre état général, l’ancienneté, l’importance ou la \
    chronicité de ce qui nous fatigue ou nous fait souffrir.',
    'Il peut être nécessaire de recevoir des séances rapprochées, comme suffisant de venir  quand nous en ressentons \
    le besoin pour dépasser un souci ponctuel ou un moment difficile.',
    'Dans tous les cas, si recevoir une séance unique est toujours bénéfique et peut suffire à résoudre une fatigue ou \
    une douleur ponctuelles, il faudra une répétition de séances étalées dans le temps pour améliorer en profondeur \
    un état général affaibli et déficient, un problème ancien ou la chronicité d’un souci de santé.',
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};

export default timeForTreatment;
