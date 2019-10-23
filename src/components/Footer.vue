<template>
  <footer id="footer">
    <a
      class="footer-icon"
      href="https://www.facebook.com/nathaliedeloeper/"
      target="_blank"
    >
      <img v-bind:src="facebookFilled" alt="go to my page" />
    </a>
    <a
      id="koifaire"
      href="http://www.koifaire.com/ile-de-france/deloeper,shiatsu-140396.html"
      target="_blank"
    >
      <img
        src="http://www.koifaire.com/images/reference_sur_koifaire.jpg"
        alt="deloeper-shiatsu sur Koifaire"
      />
    </a>
  </footer>
</template>

<script>
import facebookEmpty from '@/assets/images/logos/social-media-f-empty.svg';
import facebookFilled from '@/assets/images/logos/social-media-f-full.svg';
import phoneEmpty from '@/assets/images/logos/phone-not-filled.svg';
import phoneFilled from '@/assets/images/logos/phone-filled.svg';

export default {
  name: 'Footer',
  data() {
    return {
      facebookEmpty,
      facebookFilled,
      phoneEmpty,
      phoneFilled,
    };
  },
};
</script>

<style lang="scss">
@import '@/styles/vars.scss';

#footer {
  position: relative;
  min-height: $footer-mobile-height;
  padding: 20px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 40px;
    width: 40px;
    margin: 0 20px;

    &#koifaire {
      height: 30px;
      width: auto;
      position: absolute;
      right: 10px;
      bottom: 20px;

      img {
        height: 100%;
        width: auto;
      }
    }
    &.footer-icon {
      position: relative;
      img {
        position: absolute;
        transition: 0.2s ease-in;
      }
    }
    picture {
      img {
        width: 100%;
      }
    }
  }
}
</style>
