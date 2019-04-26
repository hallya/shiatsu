<template>
  <router-link v-bind:to="link">
    <SpinningRings/>
    <img :class="label === 'Accueil' && 'home'" v-bind:src="imgSrc" v-bind:alt="label"/>
    <p>{{label}}</p>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SpinningRings from '../components-ui/SpinningRings.vue';

@Component({
  components: {
    SpinningRings,
  },
  props: ['link', 'imgSrc', 'label'],
})
export default class NavLinkItem extends Vue {}
</script>

<style lang="scss">
@import '@/main.scss';

a {
  border-radius: 50px;
  padding: 10px;
  font-weight: bold;
  color: $dark-gray;
  display: flex;
  position: relative;
  align-items: center;
  transition: .2s;

  &.router-link-exact-active {
    color: $jungle-green;

    img {
      filter: grayscale(1);
    }
  }
  img {
    width: 35px;
    height: 35px;
    transition: .3s;

    &.home {
      width: 37px;
      height: 37px;
    }
  }
  p {
    display: none;

    @include tablet {
      display: initial;
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>