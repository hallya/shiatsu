<template>
  <main>
    <h3 class="wip-header">En cours de développement . . .</h3>
  </main>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'WIP',
  metaInfo() {
    return {
      title: 'À venir - Shiatsu',
    };
  },
});
</script>

<style lang="scss">
@import '@/styles/animations.scss';

main {
  align-items: center;

  h3.wip-header {
    width: 100%;
    margin: auto;
    text-align: center;
    animation: 2s appearsInOut infinite;
  }
}
</style>
