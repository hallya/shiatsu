<template>
  <router-link :to="link">
    <img class="header-nav-item-image" v-bind:src="imgSrc" v-bind:alt="label" />
    <span class="navLinkText">{{ label }}</span>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavLinkItem",
  props: {
    link: String,
    imgSrc: String,
    label: String,
  },
});
</script>

<style lang="scss">
@import "@/styles/vars.scss";
@import "@/styles/mixin.scss";

a {
  align-items: center;
  border-radius: 50px;
  color: $dark-gray;
  display: flex;
  font-weight: bold;
  padding: 10px;
  position: relative;
  transition: 0.2s;

  @include tablet {
    border-radius: 0;
  }
  &:hover {
    color: $jungle-green;
  }
  &.router-link-exact-active {
    color: $meadow-green;
    padding: 0px;

    img {
      filter: grayscale(1);
    }
  }
  .header-nav-item-image {
    width: 35px;
    height: 35px;
    transition: 0.3s;
    @include tablet {
      display: none;
    }
  }
  &.home {
    width: 37px;
    height: 37px;
  }

  .navLinkText {
    display: none;
    font-family: "Arbutus Slab";

    @include tablet {
      letter-spacing: 2px;
      display: initial;
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
