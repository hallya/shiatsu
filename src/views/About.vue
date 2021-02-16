<template>
  <main class="about">
    <Definition
      v-for="definition of definitions"
      :definition="definition"
      :key="`Definition : ${definition.title}`"
    />
  </main>
</template>
<script>
import Definition from '@/components-ui/Definition.vue';
import { definitions } from '@/data/Definitions';

export default {
  components: {
    Definition,
  },
  data() {
    return {
      definitions,
    };
  },
  metaInfo() {
    return {
      title: 'À propos',
      htmlAttrs: {
        itemscope: 'itemscope',
        itemtype: 'https://schema.org/FAQPage',
      },
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
