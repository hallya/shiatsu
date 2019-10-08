<template>
  <main class="home">
    <section class="left-side" v-on:wheel="lazyLoadImage">
      <Picture
        :images="tournesol"
        :shouldLoadPicture="true"
        description="Un magnifique tournesol en gros plan"
      />
      <blockquote class="home_citation">
        « […] le soin, lorsqu’il se conçoit comme relation et attention à la
        souffrance et aux besoins du malade, peut réparer son image dévastée,
        réveiller son désir de vivre, le libérer de l’amertume ou l’inquiétude
        propres à la maladie.&nbsp;»
        <footer>
          Claire Marin –
          <cite>La maladie, catastrophe intime</cite>
        </footer>
      </blockquote>
    </section>
    <section class="right-side">
      <p>
        Fatigué ou vite fatigable, anxieux, déprimé, tendu, irascible,
        colérique, à fleur de peau, agité, angoissé, stressé, triste, sans
        entrain, sans énergie, sans appétit, en train de suivre un régime, de
        santé fragile, toujours enrhumé, sujet aux gastro à répétition, aux maux
        de dos, aux tensions dans les épaules et la nuque, aux douleurs
        articulaires, aux points douloureux se déplaçant ici ou là, aux crampes
        et/ou aux jambes lourdes, en burn out, épuisée par une grossesse, par
        l’accouchement, par l’allaitement, en baby blues, en période de
        ménopause, douloureux à la suite d’un accident, d’une fracture, d’une
        opération, en période d’études difficiles, dans le trac d’un examen, en
        traitement pour le cancer, dans le chagrin à la suite d’une séparation,
        d’un deuil, dans l’angoisse d’une maladie incurable, en fin de vie…
      </p>
      <p>
        Ou simplement pour prévenir plutôt que guérir, pour avoir plus de force,
        plus de calme, plus d’entrain et de légèreté, pour se sentir un peu ou
        beaucoup mieux…
      </p>
      <Picture
        :images="nenuphar"
        :shouldLoadPicture="loadNenuphar"
        description="Quelques nenuphar côte à côte sur un plan d'eau"
      />
      <p>
        Le shiatsu vous apporte le soin qui vous permet selon les cas de vous
        rétablir, d’être réaccordé, un ancrage et un apaisement dans la
        situation qui est la vôtre.
      </p>
      <p>
        J’ai constitué cette liste à partir des maux, légers ou graves,
        passagers ou persistants pour lesquels femmes, hommes ou enfants sont
        venus me voir et à qui j’ai fait du bien en réunifiant l’être, corps,
        cœur, esprit.
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { MetaInfo } from '@/types/metaInfo.interface';

import Picture from '@/components-ui/Picture.vue';

import tournesolJpg from '@/assets/images/pictures/tournesol.jpg';
import tournesolWebp from '@/assets/images/pictures/tournesol.webp';
import tournesolWebpMobile from '@/assets/images/pictures/tournesol-mobile.webp';
import nenupharJpg from '@/assets/images/pictures/plateau_nenuphar.jpg';
import nenupharWebp from '@/assets/images/pictures/plateau_nenuphar.webp';
import nenupharWebpMobile from '@/assets/images/pictures/plateau_nenuphar-mobile.webp';
import defaultImage from '@/assets/images/pictures/defaultImageForSharing.jpg';

export default {
  name: 'Home',
  components: {
    Picture,
  },
  data() {
    return {
      baseUrl: this.$store.state.domains.baseUrlFrontend,
      tournesol: {
        defaultImage: tournesolJpg,
        imageWebp: tournesolWebp,
        imageWebpMobile: tournesolWebpMobile,
      },
      nenuphar: {
        defaultImage: nenupharJpg,
        imageWebp: nenupharWebp,
        imageWebpMobile: nenupharWebpMobile,
      },
      loadNenuphar: false,
    };
  },
  methods: {
    lazyLoadImage(section) {
      if (section.offsetY > 200) {
        this.loadNenuphar = true;
      }
    },
  },
  metaInfo(): MetaInfo {
    return {
      meta: [
        {
          property: 'og:title',
          content: 'Nathalie de Loeper, votre praticienne de Shiatsu',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content:
            'Découvrez une pratique thérapeutique unique \
        au travers du regard de Nathalie de Loeper, praticienne de Shiatsu',
        },
        { property: 'og:image', content: this.baseUrl + defaultImage },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/styles/mixin.scss';

main.home {
  width: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-flow: wrap row;

  @include tablet {
    padding: 40px 10vw;
  }
  @include laptop {
    padding: 40px 20vw;
  }
  section {
    width: 100%;
    padding: 0 5px;

    @include tablet {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
    }
    @include laptop {
      justify-content: center;
    }
    h2 {
      text-align: center;
      padding: 0px 0 20px;
    }
    picture {
      img {
        width: 100%;

        @include tablet {
          margin: 40px 0;
        }
        @include laptop {
          width: 80%;
        }
      }
    }
    blockquote,
    cite {
      @include tablet {
        width: 240px;
      }
      @include laptop {
        width: 400px;
      }
    }
    blockquote.home_citation {
      min-height: 0;
      margin: 40px 20px 20px;

      @include laptop {
        margin: 40px 80px;
      }
      footer {
        margin-top: 10px;
        cite {
          span {
            font-style: normal;
          }
        }
      }
    }

    p {
      margin: 10px 0;
      font-size: 16px;
      text-align: justify;
      padding: 0 6vw;

      @include tablet {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
}
</style>
