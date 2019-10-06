<template>
  <picture>
    <source media="(min-width: 500px)" :srcset="images.imageWebp" type="image/webp" />
    <source :srcset="images.imageWebpMobile" type="image/webp" />
    <img v-if="shouldLoadPicture" :src="images.defaultImage" :alt="description" />
  </picture>
</template>

<script lang="ts">
export default {
  name: 'Picture',
  props: {
    images: Object,
    shouldLoadPicture: Boolean,
    description: String,
  },
  data() {
    return {
      imageLoaded: false,
    };
  },
};
</script>