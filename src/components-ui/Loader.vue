<template>
  <picture>
    <img id="loader" src="../assets/images/logos/loader.png" alt="">
  </picture>
</template>

<style lang="scss">
@import '@/main.scss';
picture {
  img#loader {
    width: 30px;
    margin: 40px 0;
    animation: rotateThis 2s linear infinite;
  }
}
</style>