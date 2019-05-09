<template>
  <footer id="footer">
    <a class="footer-icon social-media-1" href="https://www.facebook.com/nathaliedeloeper/" target="_blank">
      <img class="icon-filled" v-bind:src="facebookEmpty" alt="link to social media">
      <img class="icon-empty" v-bind:src="facebookFilled" alt="link to social media">
    </a>
    <a class="footer-icon" href="tel:0033612387928">
      <img class="icon-empty" v-bind:src="phoneEmpty" alt="link to phone call">
      <img class="icon-filled" v-bind:src="phoneFilled" alt="link to phone call">
    </a>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import facebookEmpty from '@/assets/images/logos/social-media-f-empty.svg';
import facebookFilled from '@/assets/images/logos/social-media-f-full.svg';
import phoneEmpty from '@/assets/images/logos/phone-not-filled.svg';
import phoneFilled from '@/assets/images/logos/phone-filled.svg';

@Component({
  data() {
    return {
      facebookEmpty,
      facebookFilled,
      phoneEmpty,
      phoneFilled,
    };
  },
})
export default class Footer extends Vue {}
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 40px;
    width: 40px;
    margin: 0 20px;
    &.social-media-1 {
      top: -2px;
    }
    &.footer-icon {
      position: relative;
      &:hover {
        img {
          &.icon-filled {
            opacity: 1;
          }
          &.icon-empty {
            opacity: 0;
          }
        }
      }
      img {
        position: absolute;
        transition: .2s ease-in;

        &.icon-filled {
          opacity: 0;
        }
        &.icon-empty {
          opacity: 1;
        }
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