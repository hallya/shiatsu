<template>
  <main>
    <h1>Témoignages Clients - Shiatsu Thérapeutique</h1>
    <section class="reviews-content">
      <p class="reviews-intro">
        Découvrez les témoignages de nos clients satisfaits qui ont bénéficié des séances de shiatsu
        thérapeutique avec Nathalie de Loeper à Saint-Cyr-l'École.
      </p>
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { reviews, aggregateRating } from "@/data/googleSchemas/review";

export default Vue.extend({
  name: "Reviews",
  metaInfo() {
    return {
      title: "Témoignages Clients - Shiatsu Thérapeutique Nathalie de Loeper | Saint-Cyr-l'École",
      meta: [
        {
          name: "description",
          content:
            "Découvrez les témoignages authentiques de nos clients satisfaits. Retours d'expérience sur les séances de shiatsu thérapeutique avec Nathalie de Loeper à Saint-Cyr-l'École (78).",
        },
        {
          name: "keywords",
          content:
            "témoignages shiatsu, avis clients shiatsu, retours d'expérience, Nathalie de Loeper, Saint-Cyr-l'École, shiatsu thérapeutique, satisfaction client",
        },
        {
          property: "og:title",
          content: "Témoignages Clients - Shiatsu Thérapeutique Nathalie de Loeper",
        },
        {
          property: "og:description",
          content:
            "Découvrez les témoignages authentiques de nos clients satisfaits. Retours d'expérience sur les séances de shiatsu thérapeutique avec Nathalie de Loeper.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/reviews",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
        {
          name: "twitter:title",
          content: "Témoignages Clients - Shiatsu Thérapeutique",
        },
        {
          name: "twitter:description",
          content:
            "Découvrez les témoignages authentiques de nos clients satisfaits du shiatsu thérapeutique.",
        },
        {
          name: "twitter:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
        {
          name: "geo.region",
          content: "FR-78",
        },
        {
          name: "geo.placename",
          content: "Saint-Cyr-l'École",
        },
        {
          name: "geo.position",
          content: "48.809106;2.05806",
        },
        {
          name: "ICBM",
          content: "48.809106, 2.05806",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";

main {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    color: $dark-gray;
    text-align: center;
    margin-bottom: 30px;
    font-family: "Arbutus Slab";
    font-size: 2.5rem;

    @include tablet {
      font-size: 3rem;
    }
  }

  .reviews-content {
    .reviews-intro {
      text-align: center;
      font-size: 1.1rem;
      line-height: 1.6;
      color: $dark-gray;
      margin-bottom: 40px;
    }
  }
}
</style>
