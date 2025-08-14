<template>
  <main>
    <h3 class="wip-header">En cours de développement . . .</h3>
  </main>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "WIP",
  metaInfo() {
    return {
      title: "Page en cours de développement - Shiatsu Thérapeutique Nathalie de Loeper",
      meta: [
        {
          name: "description",
          content:
            "Cette page est en cours de développement. Retournez à l'accueil pour découvrir les services de shiatsu thérapeutique de Nathalie de Loeper à Saint-Cyr-l'École.",
        },
        {
          name: "robots",
          content: "noindex, nofollow",
        },
        {
          property: "og:title",
          content: "Page en cours de développement - Shiatsu Thérapeutique",
        },
        {
          property: "og:description",
          content:
            "Cette page est en cours de développement. Retournez à l'accueil pour découvrir nos services.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/wip",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/animations.scss";

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
