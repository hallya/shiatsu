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
      title: "FAQ",
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
