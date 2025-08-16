<template>
  <main>
    <nav class="about-nav">
      <router-link to="/about/quick-answer" tabindex="0" exact>en bref</router-link>
      <router-link to="/about/in-depth-answer" tabindex="0" exact>en détails</router-link>
    </nav>
    <router-view></router-view>
  </main>
</template>
<script>
import NavLinkItem from "@/components/NavLinkItem.vue";
import defaultImageForSharingJpg from "@/assets/images/pictures/nathalie_de_loeper_praticienne_shiatsu.jpg";
import { localBusiness } from "@/data/googleSchemas";

export default {
  components: { NavLinkItem },
  mounted() {
    this.$injectSchema(localBusiness);
  },
  beforeDestroy() {
    this.$clearSchemas();
  },
  metaInfo() {
    return {
      title: "À propos - Nathalie de Loeper | Shiatsu Thérapeutique Saint-Cyr-l'École",
      meta: [
        {
          name: "description",
          content:
            "Découvrez Nathalie de Loeper, praticienne de shiatsu thérapeutique diplômée EST-UFPST. Informations détaillées sur la pratique du shiatsu, son parcours et son approche thérapeutique à Saint-Cyr-l'École (78).",
        },
        {
          name: "keywords",
          content:
            "Nathalie de Loeper, shiatsu thérapeutique, praticienne shiatsu, EST-UFPST, Saint-Cyr-l'École, Yvelines, médecine traditionnelle chinoise, bien-être, énergie vitale",
        },
        {
          property: "og:title",
          content: "À propos - Nathalie de Loeper | Shiatsu Thérapeutique",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about",
        },
        {
          name: "Description",
          content:
            "Découvrez Nathalie de Loeper, praticienne de shiatsu thérapeutique diplômée EST-UFPST. Informations détaillées sur la pratique du shiatsu, son parcours et son approche thérapeutique à Saint-Cyr-l'École (78).",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Découvrez Nathalie de Loeper, praticienne de shiatsu thérapeutique diplômée EST-UFPST. Informations détaillées sur la pratique du shiatsu, son parcours et son approche thérapeutique à Saint-Cyr-l'École (78).",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info${defaultImageForSharingJpg}`,
        },
        {
          name: "twitter:title",
          content: "À propos - Nathalie de Loeper | Shiatsu Thérapeutique",
        },
        {
          name: "twitter:description",
          content:
            "Découvrez Nathalie de Loeper, praticienne de shiatsu thérapeutique diplômée EST-UFPST à Saint-Cyr-l'École.",
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

<style lang="scss">
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";

.about-nav {
  background: white;
  color: $dark-gray;
  column-gap: 40px;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: center;
  padding: 20px 0;
  position: sticky;
  top: 50px;
  z-index: 9999;

  &:focus {
    background-color: transparent;
  }
  @include laptop {
    top: 60px;
  }

  a {
    font-family: "Arbutus Slab";
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;

    &.router-link-exact-active {
      color: $meadow-green;
      padding: 0px;
    }
  }
}
</style>
