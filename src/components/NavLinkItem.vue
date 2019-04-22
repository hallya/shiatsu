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
  font-weight: bold;
  color: $font-base;
  display: flex;
  position: relative;
  align-items: center;

  &.router-link-exact-active {
    color: #42b983;

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
  }
}
</style>