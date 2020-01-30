<template>
  <header id="header">
    <section id="wrapper-title">
      <p id="title">Shiatsu Thérapie</p>
      <picture id="logoHeader">
        <img :src="nenuphar" alt="un logo comprenant plusieurs nenuphar" />
      </picture>
      <h1>Soigner votre énergie c'est améliorer votre santé</h1>
    </section>
    <nav id="nav">
      <NavLinkItem link="/" :imgSrc="navlinks.home" label="Accueil" />
      <span>•</span>
      <NavLinkItem link="/about" :imgSrc="navlinks.about" label="À propos" />
      <span>•</span>
      <NavLinkItem link="/blog" :imgSrc="navlinks.blog" label="Blog" />
      <span>•</span>
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
  top: -260px;
  z-index: 9999;

  @include tablet {
    top: -140px;
  }
  @include laptop {
    top: -120px;
  }

  #wrapper-title {
    padding: 10px;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    @include laptop {
      padding: 0 25vw;
    }
    picture#logoHeader {
      width: auto;
      margin: 0;

      img {
        height: 50px;
        width: 50px;
      }
    }
    #title {
      margin-right: 0px;
      font-size: 42px;
      font-weight: bold;
      letter-spacing: 10px;
      line-height: 50px;
      font-family: 'Arbutus Slab', sans-serif;
    }
    h1 {
      width: 100%;
      color: rgb(121, 159, 55);
      letter-spacing: 3px;
      padding: 0;
      text-align: center;

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
      padding: 0px 25vw;
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
