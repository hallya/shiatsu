import jpg from '@/assets/images/pictures/capucine_fleurs_feuilles.jpg';
import webp from '@/assets/images/pictures/capucine_fleurs_feuilles.webp';
import webpMobile from '@/assets/images/pictures/capucine_fleurs_feuilles-mobile.webp';
import { Definition } from '.';

export const toTheDoctors: Definition = {
  id: '10',
  title: 'Chers Médecins',
  description: [
    '<blockquote>« La souffrance de l’autre nous fait vaciller. Cette souffrance est telle que parfois \
    elle détruit même celui qui a fait du soin sa profession. On ne s’habitue pas si facilement au contact de la \
    souffrance. Certains réussissent à la tolérer. D’autres s’y épuisent. »</blockquote>',
    'Claire Marin – <cite>L’Homme sans fièvre</cite>',
    'Certains d’entre vous m’ont envoyé leurs patients à qui j’ai fait du bien et qui ont trouvé dans le shiatsu une \
    aide nouvelle complémentant les thérapies conventionnelles. ',
    'Vous vous donnez aux autres au point de vous oublier vous-même. Je vous invite à venir connaître à votre tour les \
    bénéfices de ce soin si particulier, vous y puiserez un soutien et une énergie renouvelée pour poursuivre votre \
    mission si souvent épuisante.',
    '<blockquote>« C’est le soin qui permet de vivre avec la maladie, qui nous apprend à apprivoiser cette compagne \
    encombrante. Il prend des formes variables, parfois dérisoires dans ses manifestations peu impressionnantes, \
    autrement dit inexistantes dans une société de l’exploit technique. Parler, masser, prendre une main dans la \
    sienne, prodiguer des conseils qui permettent de minimiser la douleur, voilà des gestes bien difficiles à \
    répertorier dans l’inventaire technicisant d’un protocole de soin. Et pourtant… Cette humanité du soin relève \
    d’abord de la relation humaine. D’où son côté « artisanal » : il s’appuie sur une certaine intuition de la \
    relation à autrui, sur une sensibilité, une perception, sur un implicite plus que sur une nomenclature des actes \
    et des gestes. Ce « bricolage » n’entre dans les cadres d’aucune évaluation possible. Le filtre administratif qui \
    catalogue les gestes de soin médical ignore les actes simples, élémentaires qui sont peut-être fondamentaux. \
    Le soin dans ses manifestations les plus spontanées, les plus humaines aussi peut-être, semble trop souvent \
    exclu de son acception contemporaine. »</blockquote>',
    'Claire Marin – <cite>L’homme sans fièvre</cite>',
    'Dans l’espoir de vous rencontrer un jour et de vous faire du bien.',
    'Sincèrement.',
  ],
  images: {
    defaultImage: jpg,
    imageWebp: webp,
    imageWebpMobile: webpMobile,
  },
};
