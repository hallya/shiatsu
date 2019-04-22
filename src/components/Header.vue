<template>
  <header>
    <!-- <section id="group-title"> -->
      <h1 id="title">Shiatsu</h1>
      <picture id="logoHeader">
        <img src="../assets/images/logos/nenuphar.svg" alt="" srcset="">
      </picture>
    <!-- </section> -->
    <nav id="nav">
      <NavLinkItem link="/home" v-bind:imgSrc="navlinks.home" label="Accueil"/>
      <span> | </span>
      <NavLinkItem link="/about" v-bind:imgSrc="navlinks.about" label="À propos"/>
      <span> | </span>
      <NavLinkItem link="/blog" v-bind:imgSrc="navlinks.blog" label="Blog"/>
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
import blog from '../assets/images/logos/blog.svg';
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
        blog,
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

  picture {
    img {
      height: 50px;
      width: 50px;
    }
  }
  h1 {
    margin-right: 10px;
    font-size: 42px;
  }
  h2 {
    width: 100%;
    margin: 0;
  }
  #nav {
    padding: 10px 30px;
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;
    align-items: center;

    span {
      display: none;
      font-size: 20px;
      font-weight: 100;
    }
  }
}
</style>
