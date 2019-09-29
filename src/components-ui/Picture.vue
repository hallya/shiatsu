<template>
  <picture>
    <img v-if="shouldLoadPicture" :src="image" alt />
  </picture>
</template>

<script lang="ts">
export default {
  name: 'Picture',
  props: {
    image: String,
    shouldLoadPicture: Boolean,
  },
  data() {
    return {
      imageLoaded: false,
    };
  },
  methods: {
    loadImage() {
      return this.imageLoaded = true;
    }
  },
};
</script>