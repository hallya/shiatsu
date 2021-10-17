<template>
  <main class="home">
    <section v-on:wheel="lazyLoadImage">
      <Picture
        :image="tournesol"
        :loadImage="tournesol.loadImage"
        description="Un magnifique tournesol en gros plan"
      />
      <section class="covid-section">
        <h2 class="covid-text">☝️Infos covid☝️</h2>
        <p class="covid-text">
          Pendant le confinement ou au-delà de l'horaire imposé par le couvre-feu vous pouvez venir
          recevoir un shiatsu. Il suffit de cocher la case de l'attestation : déplacement pour soins
          ne pouvant être assurés à distance, etc...
        </p>
        <p class="covid-text">
          Le shiatsu thérapeutique, médecine alternative, entre dans la liste des activités de santé
          humaine non classées ailleurs, sa pratique est autorisée.
        </p>
        <p class="covid-text center">&#9888;&#65039;</p>
        <p class="covid-text">
          Les rendez-vous sont espacés de 2 heures afin d'aérer longuement après chaque patient.
        </p>
        <p class="covid-text">Il n'y a pas d'attente ni de croisement de personnes.</p>
        <p class="covid-text center">😷Port du masque obligatoire😷</p>
      </section>

      <blockquote class="home_citation">
        <p>
          Le principe fondamental d'une séance de shiatsu est d'établir un "écho de vie" entre le
          praticien et le receveur.
        </p>
        <p>Il est un moyen de guérison des forces vitales du corps.</p>
        <footer>
          <cite>Shizuto Masunaga</cite>
        </footer>
      </blockquote>
    </section>
    <section
      aria-label="Le shiatsu, pourquoi ?"
      aria-describedby="p-1 p-2 p-3 p-4"
      class="shiatsu-description"
    >
      <p id="p-1">
        Fatigué ou vite fatigable, anxieux, déprimé, tendu, irascible, colérique, à fleur de peau,
        agité, angoissé, stressé, triste, sans entrain, sans énergie, sans appétit, en train de
        suivre un régime, de santé fragile, toujours enrhumé, sujet aux gastro à répétition, aux
        maux de dos, aux tensions dans les épaules et la nuque, aux douleurs articulaires, aux
        points douloureux se déplaçant ici ou là, aux crampes et/ou aux jambes lourdes, en burn out,
        épuisée par une grossesse, par l’accouchement, par l’allaitement, en baby blues, en période
        de ménopause, douloureux à la suite d’un accident, d’une fracture, d’une opération, en
        période d’études difficiles, dans le trac d’un examen, en traitement pour le cancer, dans le
        chagrin à la suite d’une séparation, d’un deuil, dans l’angoisse d’une maladie incurable, en
        fin de vie…
      </p>
      <p id="p-2">
        Ou simplement pour prévenir plutôt que guérir, pour avoir plus de force, plus de calme, plus
        d’entrain et de légèreté, pour se sentir un peu ou beaucoup mieux…
      </p>
      <Picture
        :image="nenuphar"
        :loadImage="nenuphar.loadImage"
        description="Quelques nenuphar côte à côte sur un plan d'eau"
      />
      <p id="p-3">
        Le shiatsu thérapeutique vous apporte le soin qui vous permet selon les cas de vous
        rétablir, d’être réaccordé, un ancrage et un apaisement dans la situation qui est la vôtre.
      </p>
      <p id="p-4">
        J’ai constitué cette liste à partir des maux, légers ou graves, passagers ou persistants
        pour lesquels femmes, hommes ou enfants sont venus me voir et à qui j’ai fait du bien en
        réunifiant l’être, corps, cœur, esprit.
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Picture from "@/components-ui/Picture/Picture.vue";
import { Home } from "./Home.interface";
import tournesolJpg from "@/assets/images/pictures/tournesol.jpg";
import tournesolWebp from "@/assets/images/pictures/tournesol.webp";
import tournesolWebpMobile from "@/assets/images/pictures/tournesol-mobile.webp";
import nenupharJpg from "@/assets/images/pictures/plateau_nenuphar.jpg";
import nenupharWebp from "@/assets/images/pictures/plateau_nenuphar.webp";
import nenupharWebpMobile from "@/assets/images/pictures/plateau_nenuphar-mobile.webp";
import defaultImageForSharingJpg from "@/assets/images/pictures/defaultImageForSharing.jpg";
import { homePageSchemaContext } from "@/data/googleSchemas";

export default Vue.extend({
  name: "Home",
  components: {
    Picture,
  },
  data(): Home {
    return {
      tournesol: {
        defaultImage: tournesolJpg,
        imageWebp: tournesolWebp,
        imageWebpMobile: tournesolWebpMobile,
        loadImage: true,
      },
      nenuphar: {
        defaultImage: nenupharJpg,
        imageWebp: nenupharWebp,
        imageWebpMobile: nenupharWebpMobile,
        loadImage: false,
      },
    };
  },
  methods: {
    lazyLoadImage(section: MouseEvent): void {
      if (section.offsetY > 200) {
        this.nenuphar.loadImage = true;
      }
    },
  },
  metaInfo() {
    return {
      title: "Nathalie de Loeper, votre praticienne de Shiatsu",
      meta: [
        {
          property: "og:title",
          content: "Nathalie de Loeper, votre praticienne de Shiatsu",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info",
        },
        {
          name: "Description",
          content:
            "Découvrez la pratique thérapeutique unique au contact de Nathalie de Loeper, praticienne diplômé de  l'E.S.T (Ecole de Shiatsu Thérapeutique) affiliée à l’UFPST (Union Française des Professionnels de Shiatsu Thérapeutique).",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Découvrez la pratique thérapeutique unique au contact de Nathalie de Loeper, praticienne diplômé de  l'E.S.T (Ecole de Shiatsu Thérapeutique) affiliée à l’UFPST (Union Française des Professionnels de Shiatsu Thérapeutique).",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info/${defaultImageForSharingJpg}`,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(homePageSchemaContext),
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/vars.scss";

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
  .shiatsu-description {
    padding: 0 16px;
  }
  .covid-section {
    margin-top: 20px;
    padding: 0 16px;
  }
  section {
    box-sizing: border-box;
    padding: 0;
    width: 100%;

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
    .covid-text {
      line-height: 20px;
      color: $jungle-green;
    }
    .center {
      text-align: center;
    }
    blockquote,
    cite {
      @include tablet {
        width: 350px;
      }
      @include laptop {
        width: 500px;
      }
    }
    blockquote.home_citation {
      line-height: 22px;
      min-height: 0;
      margin: 40px 20px 20px;

      @include laptop {
        margin: 40px 80px;
      }
      p {
        text-align: center;
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

      @include tablet {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
}
</style>
