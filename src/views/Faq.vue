<template>
  <main class="main-faq">
    <Faq
      v-for="(faq, index) of faqs"
      :index="index"
      :definition="faq"
      :key="`Definition : ${faq.question}`"
    />
  </main>
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
.main-faq {
  display: grid;
  row-gap: 16px;
}
</style>
