<template>
  <address class="postale">
    <figure>
      <Picture :image="location.image" :loadImage="true" />
      <figcaption>{{ location.description }}</figcaption>
    </figure>
    <p v-for="line of location.fullAddress" v-bind:key="line">{{ line }}</p>
    <a
      class="fontawesome-road navigation"
      :href="location.direction"
      target="_blank"
      >Itinéraire</a
    >
  </address>
</template>
<script>
import Picture from './Picture/Picture.vue';

export default {
  name: 'Address',
  components: {
    Picture,
  },
  props: ['location'],
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import '@/styles/vars.scss';
@import '@/styles/mixin.scss';

address.postale {
  width: 100%;
  margin: 0 0 15px;
  border: 1px solid $light-gray;
  border-radius: 8px;
  padding: 0 0 10px;
  overflow: hidden;

  @include tablet {
    width: 65%;
    margin: 0 auto 30px;
  }
  @include laptop {
    width: 45%;
    margin: 0 auto auto auto;
  }

  figure {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .google-map {
      flex: 1 1 200px;
    }
    picture {
      width: 100%;

      img {
        flex: 1 1 200px;
        width: 100%;

        @include tablet {
          flex: 1 1 300px;
        }
        @include laptop {
          flex: 1 1 350px;
        }
      }
    }
    figcaption {
      text-align: right;
      margin-right: 10px;
      font-size: 0.8rem;
      line-height: 20px;
      color: $gray;
    }
  }
  p {
    width: 100%;
    padding: 0 20px;
    line-height: 28px;
    color: $gray;
  }
  .navigation {
    margin: 10px 10px 0 auto;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
