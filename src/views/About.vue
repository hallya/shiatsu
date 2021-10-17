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
import defaultImageForSharingJpg from "@/assets/images/pictures/defaultImageForSharing.jpg";

export default {
  components: { NavLinkItem },
  metaInfo() {
    return {
      title: "À propos",
      meta: [
        {
          property: "og:title",
          content: "À propos",
        },
        {
          property: "og:url",
          content: "https://www.shiatsutherapie78.info/about",
        },
        {
          name: "Description",
          content:
            "Plus d'informations en bref ou en détails concernant la pratique du shiatu ainsi que sur votre praticienne",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Plus d'informations en bref ou en détails concernant la pratique du shiatu ainsi que sur votre praticienne",
        },
        {
          property: "og:image",
          content: `https://www.shiatsutherapie78.info/${defaultImageForSharingJpg}`,
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
