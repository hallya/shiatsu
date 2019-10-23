<template>
  <picture v-if="loadImage">
    <source
      v-if="image.imageWebp"
      media="(min-width: 500px)"
      :srcset="image.imageWebp"
      type="image/webp"
    />
    <source
      v-if="image.imageWebpMobile"
      :srcset="image.imageWebpMobile"
      type="image/webp"
    />
    <img :src="image.defaultImage" :alt="description || ''" />
  </picture>
</template>

<script lang="ts">
import { Picture } from './Picture.interface';

export default {
  name: 'Picture',
  props: {
    image: {
      type: Object,
      require: true,
    },
    loadImage: Boolean,
    description: String,
  },
};
</script>
