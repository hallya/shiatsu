<template>
  <picture>
    <img id="loader" src="../assets/images/logos/loader.png" alt="Loading...">
  </picture>
</template>

<script lang='ts'>
export default {
  name: 'Loader',
};
</script>

<style lang="scss">
@import '@/main.scss';

picture {
  margin: auto;
  display: block;
  width: 100%;
  img#loader {
    width: 30px;
    margin: 40px 0;
    animation: rotateThis 2s linear infinite;
  }
}
</style>