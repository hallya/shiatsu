<template>
  <footer id="footer">
    <a href="https://www.facebook.com/nathaliedeloeper/" target="_blank">
      <picture>
          <img id="facebook" v-bind:src="facebook" alt="">
      </picture>
    </a>
    <a href="tel:0033612387928">
      <picture>
          <img v-bind:src="phone" alt="Phone">
      </picture>
    </a>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import facebook from '@/assets/images/logos/facebook.svg';
import phone from '@/assets/images/logos/phone.svg';

@Component({
  data() {
    return {
      facebook,
      phone,
    }
  }
})
export default class Footer extends Vue {}
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 40px;
    margin: 0 20px;

    picture {
      img {
        width: 100%;
      }
    }
  }
}
</style>