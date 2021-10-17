<template>
  <section class="section-inDepth">
    <Faq
      v-for="(about, index) of abouts"
      :index="index"
      :definition="about"
      :key="`Definition : ${about.question}`"
    />
  </section>
</template>
<script>
import Faq from "@/components-ui/FAQ.vue";
import { abouts } from "@/data/abouts";
import { aboutPageSchemaContext } from "@/data/googleSchemas";
import defaultImageForSharingJpg from "@/assets/images/pictures/defaultImageForSharing.jpg";

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
      title: "En détails",
      meta: [
        {
          name: "Description",
          content:
            "Plus d'informations en détails concernant la pratique du shiatu ainsi que sur votre praticienne",
        },
        {
          property: "og:title",
          content: "En détails",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about/in-depth-answer",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Plus d'informations en détails concernant la pratique du shiatu ainsi que sur votre praticienne",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info/${defaultImageForSharingJpg}`,
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
