<template>
  <section class="address">
    <figure>
      <div class="google-map" ref="googleMap"></div>
      <template v-if="Boolean(this.google) && Boolean(this.map)">
        <slot :google="google" :map="map" />
      </template>
      <figcaption>
        <p v-for="line of fullAddress" v-bind:key="line">{{line}}</p>
      </figcaption>
    </figure>
  </section>
</template>
<script>
export default {
  name: 'Address',
  props: ['fullAddress', 'google', 'mapConfig'],
  data() {
    return {
      map: null,
      config: {
        ...this.mapConfig,
        zoom: 17,
        mapTypeControl: false,
        streetViewControl: false,
      }
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.config
      )
    }
  }
};
</script>
<style lang="scss">
@import '@/main.scss';

section.address {
  width: 100%;
  border: 1px solid $light-gray;
  border-radius: 8px;
  padding: 0 0 10px;

  @include laptop {
    width: 45%;
  }
  figure {
    .google-map {
      height: 200px;
      width: 100%;

      @include tablet {
        height: 300px;
      }
      @include laptop {
        height: 350px;
      }
    }
  }
  p {
    padding: 0 20px;
  }
}
</style>