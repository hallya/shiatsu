<template>
  <section class="address">
    <figure>
      <picture>
        <img :src="`https://maps.googleapis.com/maps/api/staticmap?center=${mapsApiAddressName}&zoom=17&size=800x400&maptype=roadmap&key=AIzaSyBIpZM5Rd2uy9aYV3_DByJrYS1okNf3dJY`" alt="Plan d'accès au cabinet de Saint-Cyr-l'Ecole">
      </picture>
      <figcaption>
        <p v-for="line of fullAddress" v-bind:key="line">{{line}}</p>
      </figcaption>
    </figure>
  </section>
</template>
<script>
export default {
  name: 'Address',
  props: ['mapsApiAddressName', 'fullAddress'],
};
</script>
<style lang="scss">
@import '@/main.scss';

section.address {
  border: 1px solid $light-gray;
  border-radius: 8px;
  padding: 0 0 10px;

  @include laptop {
    width: 45%;
  }
  img {
    width: 100%;
  }
  p {
    padding: 0 20px;
  }
}
</style>