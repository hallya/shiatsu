<template>
  <div
    class="fb-share-button"
    :data-href="sharedLink"
    data-layout="button"
    data-size="large"
  >
    <a
      target="_blank"
      :href="
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          sharedLink,
        )}&amp;src=sdkpreparse`
      "
      class="fb-xfbml-parse-ignore"
    >
      Partager
    </a>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'FacebookShare',
  props: ['sharedLink'],
});
</script>

<style lang="scss">
@import '@/styles/vars.scss';

.fb-share-button {
  background: transparent;
  padding: 0;
  border: none;
  box-shadow: 0px 10px 8px -8px $light-gray;
  transition: 0.3s;
  will-change: transform, box-shadow;

  &:hover {
    box-shadow: 0px 10px 8px -8px;
    transform: translateY(-5px);
  }
  a {
    box-shadow: 0 0 0 1px $light-gray;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
