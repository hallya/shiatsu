<template>
  <footer id="footer">
    <a class="footer-icon" href="https://www.facebook.com/nathaliedeloeper/" target="_blank">
      <img v-bind:src="facebookFilled" alt="go to my page">
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
  padding: 0 0 20px;
  
  a {
    height: 40px;
    width: 40px;
    margin: 0 20px;
    &.social-media-1 {
      top: -2px;
    }
    &.footer-icon {
      position: relative;
      img {
        position: absolute;
        transition: .2s ease-in;
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