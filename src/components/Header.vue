<template>
  <header id="header">
    <section id="wrapper-title">
      <h1 id="title">Shiatsu</h1>
      <picture id="logoHeader">
        <img :src="nenuphar" alt="un logo comprenant plusieurs nenuphar" />
      </picture>
      <h2>Soignez votre énergie</h2>
    </section>
    <nav id="nav">
      <NavLinkItem link="home" :imgSrc="navlinks.home" label="Accueil" />
      <span>•</span>
      <NavLinkItem link="about" :imgSrc="navlinks.about" label="À propos" />
      <span>•</span>
      <NavLinkItem link="blog" :imgSrc="navlinks.blog" label="Blog" />
      <span>•</span>
      <!-- <NavLinkItem
        link="/reviews"
        :imgSrc="navlinks.reviews"
        label="Témoignages"
      />
      <span>•</span> -->
      <NavLinkItem
        link="/contacts"
        :imgSrc="navlinks.contacts"
        label="Contacts"
      />
    </nav>
  </header>
</template>

<script lang="ts">
import NavLinkItem from './NavLinkItem.vue';

import nenuphar from '@/assets/images/logos/nenuphar.svg';
import home from '@/assets/images/logos/home.svg';
import about from '@/assets/images/logos/about.svg';
import blog from '@/assets/images/logos/blog.svg';
import reviews from '@/assets/images/logos/reviews.svg';
import contacts from '@/assets/images/logos/contacts.svg';

export default {
  components: {
    NavLinkItem,
  },
  data() {
    return {
      nenuphar,
      navlinks: {
        home,
        about,
        blog,
        reviews,
        contacts,
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/styles/mixin.scss';

#header {
  flex: 0 2 0;
  position: sticky;
  background-color: white;
  box-shadow: 0 0 10px 10px white;
  top: -123px;
  z-index: 9999;

  #wrapper-title {
    height: 100px;
    padding: 10px 0;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;

    picture#logoHeader {
      width: auto;
      margin: 0;

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
      color: rgb(121, 159, 55);
      letter-spacing: 3px;

      @include tablet {
        letter-spacing: 10px;
      }
    }
  }
  #nav {
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;
    align-items: center;

    @include tablet {
      padding: 10px 16vw;
    }
    @include laptop {
      padding: 10px 25vw;
    }
    span {
      display: none;

      @include tablet {
        display: initial;
        font-size: 20px;
        font-weight: 100;
      }
    }
  }
}
</style>
