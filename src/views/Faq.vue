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

<script>
import { faqs } from "@/data/faqs";
import Faq from "@/components-ui/FAQ.vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { faqPageSchemaContext } from "@/data/googleSchemas";

export default {
  components: {
    Faq,
  },
  data() {
    return {
      faqs,
    };
  },
  mounted() {
    this.$injectSchema(faqPageSchemaContext);
  },
  beforeDestroy() {
    this.$clearSchemas();
  },
  metaInfo() {
    return {
      title: "Questions Fréquentes - Shiatsu Thérapeutique Nathalie de Loeper | Saint-Cyr-l'École",
      link: [
        {
          rel: "canonical",
          href: "https://www.shiatsutherapie78.info/about/quick-answer",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Toutes vos questions sur le shiatsu thérapeutique : définition, bienfaits, déroulement d'une séance. Réponses détaillées par Nathalie de Loeper, praticienne diplômée à Saint-Cyr-l'École.",
        },
        {
          name: "keywords",
          content:
            "FAQ shiatsu, questions shiatsu, bienfaits shiatsu, séance shiatsu, tarifs shiatsu, déroulement shiatsu, Nathalie de Loeper",
        },
        {
          property: "og:title",
          content: "Questions Fréquentes - Shiatsu Thérapeutique Nathalie de Loeper",
        },
        {
          property: "og:description",
          content:
            "Toutes vos questions sur le shiatsu thérapeutique : définition, bienfaits, déroulement d'une séance. Réponses détaillées.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about/quick-answer",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
        {
          name: "twitter:title",
          content: "Questions Fréquentes - Shiatsu Thérapeutique",
        },
        {
          name: "twitter:description",
          content:
            "Toutes vos questions sur le shiatsu thérapeutique : définition, bienfaits, déroulement d'une séance.",
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

<style lang="scss" scoped>
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";

main {
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .section-faq {
    display: grid;
    row-gap: 16px;
  }
}
</style>
