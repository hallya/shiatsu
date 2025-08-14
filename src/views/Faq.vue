<template>
  <main>
    <h1>Questions Fréquentes sur le Shiatsu Thérapeutique</h1>
    <section class="section-faq">
      <Faq
        v-for="(faq, index) of faqs"
        :index="index"
        :definition="faq"
        :key="`Definition : ${faq.question}`"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { faqs } from "@/data/faqs";
import Faq from "@/components-ui/FAQ.vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { faqSchema } from "@/data/googleSchemas";

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
      title: "FAQ Shiatsu - Questions Fréquentes | Nathalie de Loeper",
      meta: [
        {
          name: "description",
          content:
            "Toutes vos questions sur le shiatsu thérapeutique : définition, bienfaits, déroulement d'une séance, tarifs, lieux de consultation. Réponses détaillées par Nathalie de Loeper.",
        },
        {
          name: "keywords",
          content:
            "FAQ shiatsu, questions shiatsu, bienfaits shiatsu, séance shiatsu, tarifs shiatsu, déroulement shiatsu, Nathalie de Loeper",
        },
        {
          property: "og:title",
          content: "FAQ Shiatsu - Questions Fréquentes | Nathalie de Loeper",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about/quick-answer",
        },
        {
          property: "og:description",
          content:
            "Toutes vos questions sur le shiatsu thérapeutique : définition, bienfaits, déroulement d'une séance. Réponses détaillées.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(faqSchema),
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
