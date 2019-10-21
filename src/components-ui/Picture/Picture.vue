<template>
  <picture>
    <source
      media="(min-width: 500px)"
      :srcset="image.imageWebp"
      type="image/webp"
    />
    <source :srcset="image.imageWebpMobile" type="image/webp" />
    <img v-if="image.loadImage" :src="image.defaultImage" :alt="description" />
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
    description: String,
  },
};
</script>
