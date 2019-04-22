<template>
  <header>
    <h1>Shiatsu</h1>
    <picture id="logoHeader">
      <img src="../assets/images/logos/nenuphar.svg" alt="" srcset="">
    </picture>
    <h2>Retrouver l’Energie</h2>
    <nav id="nav">
      <NavLinkItem link="/home" v-bind:imgSrc="navlinks.home" label="Accueil"/>
      <span> | </span>
      <NavLinkItem link="/about" v-bind:imgSrc="navlinks.about" label="À propos"/>
      <span> | </span>
      <NavLinkItem link="/reviews" v-bind:imgSrc="navlinks.reviews" label="Avis"/>
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
import reviews from '../assets/images/logos/reviews.svg';
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
        reviews,
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
  display: flex;
  flex-flow: wrap row;
  justify-content: center;

  #logoHeader {
    img {
      height: 40px;
      width: 40px;
    }
  }
  h1 {
    margin-right: 10px;
  }
  #nav {
    padding: 10px 30px;
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;

    span {
      display: none;
    }
  }
}
</style>
