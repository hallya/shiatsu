<template>
  <main class="about">
    <Faq v-for="faq of faqs" :definition="faq" :key="`Definition : ${faq.question}`" />
  </main>
</template>
<script>
import Faq from "@/components-ui/FAQ.vue";
import { faqs } from "@/data/faqs";
import { aboutPageSchemaContext } from "@/data/googleSchemas";

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
.about {
  padding: 10px 0;

  .definitionsContainer {
    max-width: 100%;
    padding: 0;
  }
}
</style>
