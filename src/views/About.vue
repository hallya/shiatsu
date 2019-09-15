<template>
  <main class="about">
    <dl>
      <Definition 
        v-for="definition of definitions"
        :title="definition.title"
        :description="definition.description"
        :image="definition.image"
        :key="`Definition : ${definition.title}`"></Definition>
    </dl>
  </main>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Definition from '@/components-ui/Definition.vue';
import { definitions } from '@/data/Definitions/about';

export default {
  components: {
    Definition,
  },
  data() {
    return {
      definitions,
    };
  },
  methods: {
    seeDescription(e) {
      debugger;
      this.openDescription = e.target.innerHtml;
    },
  },
};
</script>

<style lang="scss">
@import '@/main.scss';

.about {
  padding: 10px 0;
  dl {
    padding: 0;
    max-width: 100%;
  }
}
</style>