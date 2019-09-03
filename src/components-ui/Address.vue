<template>
  <address class="postale">
    <figure>
      <div class="google-map" ref="googleMap"></div>
      <template v-if="Boolean(this.google) && Boolean(this.map)">
        <slot :google="google" :map="map" />
      </template>
      <figcaption>
        <p v-for="line of fullAddress" v-bind:key="line">{{line}}</p>
      </figcaption>
    </figure>
  </address>
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
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(
        mapContainer, this.config
      );
    },
  },
};
</script>
<style lang="scss">
@import '@/main.scss';

address.postale {
  width: 100%;
  margin: 0 0 15px;
  border: 1px solid $light-gray;
  border-radius: 8px;
  padding: 0 0 10px;

  @include tablet {
    width: 65%;
    margin: 0 auto 30px;
  }
  @include laptop {
    width: 45%;
  }

  figure {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .google-map {
      flex: 1 1 200px;

      @include tablet {
        flex: 1 1 300px;
      }
      @include laptop {
        flex: 1 1 350px;
      }
    }
    figcaption {
      flex: 1 1 0;

      p {
        padding: 0 20px;
        line-height: 28px;
        color: $gray;
      }
    }
  }
}
</style>