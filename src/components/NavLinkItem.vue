<template>
  <router-link :to="link" tabindex="0" exact>
    <!-- <SpinningRings /> -->
    <img class="header-nav-item-image" v-bind:src="imgSrc" v-bind:alt="label" />
    <p>{{ label }}</p>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import SpinningRings from '../components-ui/SpinningRings.vue';

export default Vue.extend({
  name: 'NavLinkItem',
  props: {
    link: String,
    imgSrc: String,
    label: String,
  },
  components: {
    SpinningRings,
  },
});
</script>

<style lang="scss">
@import '@/styles/vars.scss';
@import '@/styles/mixin.scss';

a {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 50px;
  padding: 10px;
  font-weight: bold;
  color: $dark-gray;
  transition: 0.2s;

  @include mobile {
    &:focus {
      background-color: gray;
      box-shadow: 0 0 0 8px gray;
    }
  }
  @include tablet {
    border-radius: 0;
  }
  &:hover {
    color: $jungle-green;
  }
  &.router-link-exact-active {
    color: $meadow-green;
    padding: 5px 0;
    img {
      filter: grayscale(1);
    }
    @include tablet {
      box-shadow: 0 2px 0 -1px black;
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
  p {
    display: none;
    font-family: 'Arbutus Slab';

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
