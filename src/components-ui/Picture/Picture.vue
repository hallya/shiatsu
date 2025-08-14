<template>
  <picture v-if="loadImage">
    <source
      v-if="image.imageWebp"
      media="(min-width: 500px)"
      :srcset="image.imageWebp"
      type="image/webp"
    />
    <source v-if="image.imageWebpMobile" :srcset="image.imageWebpMobile" type="image/webp" />
    <img
      :src="image.defaultImage"
      :alt="description || ''"
      loading="lazy"
      :width="image.width || 800"
      :height="image.height || 600"
      decoding="async"
    />
  </picture>
</template>

<script lang="ts">
export default {
  name: "Picture",
  props: {
    image: {
      type: Object,
    },
    loadImage: Boolean,
    description: String,
  },
};
</script>
