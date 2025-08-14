<template>
  <main>
    <h1 class="sr-only">Informations Détaillées sur le Shiatsu Thérapeutique</h1>
    <section class="section-inDepth">
      <Faq
        v-for="(about, index) of abouts"
        :index="index"
        :definition="about"
        :key="`Definition : ${about.question}`"
      />
    </section>
  </main>
</template>
<script>
import Faq from "@/components-ui/FAQ.vue";
import { abouts } from "@/data/abouts";
import { aboutPageSchemaContext } from "@/data/googleSchemas";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";

export default {
  components: {
    Faq,
  },
  data() {
    return {
      abouts,
    };
  },
  metaInfo() {
    return {
      title:
        "Informations Détaillées - Shiatsu Thérapeutique Nathalie de Loeper | Saint-Cyr-l'École",
      meta: [
        {
          name: "description",
          content:
            "Informations détaillées sur la pratique du shiatsu thérapeutique, la formation de Nathalie de Loeper et son approche thérapeutique. Découvrez les bienfaits du shiatsu à Saint-Cyr-l'École (78).",
        },
        {
          name: "keywords",
          content:
            "shiatsu thérapeutique, informations détaillées, formation shiatsu, bienfaits shiatsu, Nathalie de Loeper, Saint-Cyr-l'École, Yvelines, médecine traditionnelle chinoise",
        },
        {
          name: "Description",
          content:
            "Informations détaillées sur la pratique du shiatsu thérapeutique, la formation de Nathalie de Loeper et son approche thérapeutique. Découvrez les bienfaits du shiatsu à Saint-Cyr-l'École (78).",
        },
        {
          property: "og:title",
          content: "Informations Détaillées - Shiatsu Thérapeutique Nathalie de Loeper",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about/in-depth-answer",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Informations détaillées sur la pratique du shiatsu thérapeutique, la formation de Nathalie de Loeper et son approche thérapeutique. Découvrez les bienfaits du shiatsu.",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
        {
          name: "twitter:title",
          content: "Informations Détaillées - Shiatsu Thérapeutique",
        },
        {
          name: "twitter:description",
          content:
            "Informations détaillées sur la pratique du shiatsu thérapeutique et l'approche de Nathalie de Loeper.",
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
          innerHTML: JSON.stringify(aboutPageSchemaContext),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section-inDepth {
  display: grid;
  row-gap: 16px;

  .definitionsContainer {
    max-width: 100%;
    padding: 0;
  }
}
</style>
