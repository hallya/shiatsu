<template>
  <header id="header">
    <!-- <section id="group-title"> -->
      <h1 id="title">Shiatsu</h1>
      <picture id="logoHeader">
        <img src="../assets/images/logos/nenuphar.svg" alt="" srcset="">
      </picture>
      <h2>Soignez votre énergie</h2>
    <!-- </section> -->
    <nav id="nav">
      <NavLinkItem link="/home" v-bind:imgSrc="navlinks.home" label="Accueil"/>
      <span> | </span>
      <NavLinkItem link="/about" v-bind:imgSrc="navlinks.about" label="À propos"/>
      <span> | </span>
      <NavLinkItem link="/blog/posts" v-bind:imgSrc="navlinks.blog" label="Blog"/>
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

#header {
  padding: 20px 0;
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
    font-weight: bold;
    letter-spacing: 10px;
  }
  h2 {
    width: 100%;
    margin: 10px 0;
    color: rgb(121,159,55);
  }
  #nav {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;
    align-items: center;

    @include tablet {
      padding: 10px 6vw;
    }
    @include laptop {
      padding: 10px 15vw;
    }
    a {
      p {
        font-family: 'Arbutus Slab' !important;
      }
    }
    span {
      display: none;
      
      @include tablet {
        // padding: 10px 6vw;
        display: initial;
        font-size: 20px;
        font-weight: 100;
      }
    }
  }
}
</style>
