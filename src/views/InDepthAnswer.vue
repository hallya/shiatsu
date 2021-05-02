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
      title: "À propos",
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
