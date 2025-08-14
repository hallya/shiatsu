<template>
  <main class="blog">
    <h1 class="sr-only">Blog - Articles sur le Shiatsu Thérapeutique</h1>
    <section class="articles">
      <TransitionFade>
        <router-view></router-view>
      </TransitionFade>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import TransitionFade from "@/transitions/Transition-fade.vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { blogSchema } from "@/data/googleSchemas";

export default Vue.extend({
  name: "Blog",
  components: {
    TransitionFade,
  },
  metaInfo() {
    return {
      title: "Blog - Articles sur le Shiatsu Thérapeutique | Nathalie de Loeper",
      meta: [
        {
          name: "description",
          content:
            "Découvrez nos articles sur le shiatsu thérapeutique, le bien-être et la médecine traditionnelle chinoise. Conseils et informations par Nathalie de Loeper, praticienne diplômée à Saint-Cyr-l'École.",
        },
        {
          name: "keywords",
          content:
            "blog shiatsu, articles shiatsu, bien-être, médecine traditionnelle chinoise, conseils santé, Nathalie de Loeper, Saint-Cyr-l'École, shiatsu thérapeutique",
        },
        {
          property: "og:title",
          content: "Blog - Articles sur le Shiatsu Thérapeutique | Nathalie de Loeper",
        },
        {
          property: "og:description",
          content:
            "Découvrez nos articles sur le shiatsu thérapeutique, le bien-être et la médecine traditionnelle chinoise. Conseils et informations par Nathalie de Loeper.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/blog",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
        {
          name: "twitter:title",
          content: "Blog - Articles sur le Shiatsu Thérapeutique",
        },
        {
          name: "twitter:description",
          content:
            "Découvrez nos articles sur le shiatsu thérapeutique et le bien-être par Nathalie de Loeper.",
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
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(blogSchema),
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";

main.blog {
  padding: 0;

  section.articles {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto 50px;
    padding: 10px 8px;

    @include tablet {
      width: 80%;
    }
    @include laptop {
      width: 40%;
      min-width: 650px;
    }

    .articles-link {
      display: block;
      text-align: left;
      width: 95%;
      color: $dark-gray;
      text-decoration: underline;
    }
    h2.articles-header {
      padding: 0 10px;
      width: 100%;
      text-align: left;

      @include tablet {
        width: 70%;
      }
      @include laptop {
        width: 50%;
      }
    }
  }
  .list-enter-active,
  .list-leave-active {
    transition: 5s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>
