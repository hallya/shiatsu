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
      <NavLinkItem link="/home" v-bind:imgSrc="navlinks.home" label="Accueil"/>
      <span> | </span>
      <NavLinkItem link="/about" v-bind:imgSrc="navlinks.about" label="À propos"/>
      <span> | </span>
      <NavLinkItem link="/contacts" v-bind:imgSrc="navlinks.contacts" label="Contacts"/>
    </nav>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavLinkItem from './NavLinkItem.vue';

import home from '../assets/images/logos/home.svg';
import about from '../assets/images/logos/about.svg';
import contacts from '../assets/images/logos/contacts.svg';

@Component({
  components:  {
    NavLinkItem,
  },
  data() {
    return {
      navlinks: {
        home,
        about,
        contacts,
      },
    };
  },
})
export default class Header extends Vue {}
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
  }
}
</style>
