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
export default {
  components: { NavLinkItem },
  metaInfo() {
    return {
      title: "À propos",
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
