<template>
  <section class="section-faq">
    <Faq
      v-for="(faq, index) of faqs"
      :index="index"
      :definition="faq"
      :key="`Definition : ${faq.question}`"
    />
  </section>
</template>

<script lang="ts">
import { faqs } from "@/data/faqs";
import Faq from "@/components-ui/FAQ.vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";

export default {
  components: {
    Faq,
  },
  data() {
    return {
      faqs,
    };
  },
  metaInfo() {
    return {
      title: "En bref",
      meta: [
        {
          name: "Description",
          content:
            "Plus d'informations en bref concernant la pratique du shiatu ainsi que sur votre praticienne",
        },
        {
          property: "og:title",
          content: "En bref",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about/quick-answer",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Plus d'informations en bref concernant la pratique du shiatu ainsi que sur votre praticienne",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section-faq {
  display: grid;
  row-gap: 16px;
}
</style>
