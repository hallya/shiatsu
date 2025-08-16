<template>
  <main>
    <section class="section-about">
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
import { abouts } from "@/data/abouts";
import Faq from "@/components-ui/FAQ.vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { aboutPageSchemaContext } from "@/data/googleSchemas";

export default {
  components: {
    Faq,
  },
  data() {
    return {
      abouts,
    };
  },
  mounted() {
    this.$injectSchema(aboutPageSchemaContext);
  },
  beforeDestroy() {
    this.$clearSchemas();
  },
  metaInfo() {
    return {
      title: "Informations Détaillées - Shiatsu Thérapeutique Nathalie de Loeper",
      meta: [
        {
          name: "description",
          content:
            "Informations détaillées sur le shiatsu thérapeutique, la praticienne Nathalie de Loeper, les tarifs et le déroulement des séances à Saint-Cyr-l'École.",
        },
        {
          name: "keywords",
          content:
            "shiatsu détaillé, informations shiatsu, tarifs shiatsu, séance shiatsu, Nathalie de Loeper, Saint-Cyr-l'École",
        },
        {
          property: "og:title",
          content: "Informations Détaillées - Shiatsu Thérapeutique",
        },
        {
          property: "og:description",
          content:
            "Informations détaillées sur le shiatsu thérapeutique, la praticienne Nathalie de Loeper et les séances.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about/in-depth-answer",
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
          content: "Informations détaillées sur le shiatsu thérapeutique et les séances.",
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
