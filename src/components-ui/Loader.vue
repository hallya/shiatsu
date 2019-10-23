<template>
  <figure class="loader">
    <picture class="loader">
      <img
        class="loader"
        src="../assets/images/logos/loader.png"
        alt="Loading..."
      />
    </picture>
    <figcaption>un instant de méditation</figcaption>
  </figure>
</template>

<script lang="ts">
export default {
  name: 'Loader',
};
</script>

<style lang="scss">
figure.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  picture.loader {
    img.loader {
      width: 50px;
      height: 50px;
      margin: 40px 0;
      animation: rotateThis 2s linear infinite;
    }
  }
  figcaption {
    letter-spacing: 5px;
    font-size: 1.3rem;
    line-height: 28px;
    text-align: center;
  }
}
</style>
