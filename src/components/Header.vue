<template>
  <header>
    <picture id="logoHeader">
      <img src="../assets/images/logos/leaf.svg" alt="" srcset="">
    </picture>
    <h1>
      Shiatsu<br>
      À l'aube de l'énergie
    </h1>
    <nav id="nav">
      <router-link to="/">
        <img id="logoHome" src="../assets/images/logos/home.svg"/>
        <p>Accueil</p>
      </router-link>
      <span> | </span>
      <router-link to="/about">
        <img id="logoAbout" src="../assets/images/logos/about.svg"/>
        <p>À propos</p>
      </router-link>
      <span> | </span>
      <router-link to="/reservation">
        <img id="logoAbout" src="../assets/images/logos/calendar.svg"/>
        <p>Réservation</p>
      </router-link>
    </nav>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss">
@import '@/main.scss';
header {

  #logoHeader {
    img {
      height: 40px;
      width: 40px;
    }
  }
  h1 {
    margin-top: 0px;
  }
  #nav {
    padding: 0 30px;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;
    span {
      display: none;
    }
    a {
      font-weight: bold;
      color: $font-base;
      display: flex;
      align-items: center;

      &.router-link-exact-active {
        color: #42b983;
      }
      img {
        width: 35px;
        height: 35px;
      }
      p {
        display: none;
      }
    }
  }
}
</style>
