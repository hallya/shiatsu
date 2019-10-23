<template>
  <div class="circle-multiple">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SpinningRings',
});
</script>

<style lang="scss">
@import '@/styles/mixin.scss';

@mixin border-gradient($from, $to, $weight: 0) {
  $mix-main: mix($from, $to);
  $mix-sub-from: mix($mix-main, $from);
  $mix-sub-to: mix($mix-main, $to);

  box-shadow: 0 1px 0 $weight rgba($mix-sub-to, 0.25),
    0 -1px 0 $weight rgba($mix-sub-from, 0.25),
    1px 0 0 $weight rgba($mix-sub-to, 0.25),
    -1px 0 0 $weight rgba($mix-sub-from, 0.25),
    1px -1px 0 $weight rgba($mix-main, 0.5),
    -1px 1px 0 $weight rgba($mix-main, 0.5), 1px 1px 0 $weight rgba($to, 0.75),
    -1px -1px 0 $weight rgba($from, 0.75);
}

.circle {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  transition: 0.4s;

  &:nth-of-type(2) {
    @include border-gradient(skyblue, #42b983);
    animation: rotateThis 3s linear infinite;
  }

  &:nth-of-type(3) {
    @include border-gradient(#53a000, #3b7200);
  }

  &-multiple {
    height: 50px;
    width: 50px;
    left: -7px;
    top: -7px;
    position: absolute;
    transition: opacity 0.2s;

    @include tablet {
      display: none;
    }
  }
  &-multiple & {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: opacity 0.2s;
  }
}

a.router-link-exact-active {
  & .circle {
    opacity: 1;
    transition: opacity 0.4s;

    &:nth-of-type(1) {
      animation: psycho 1s ease-out;
    }

    &:nth-of-type(2) {
      animation: psycho 1s ease-out 0.1s;
    }

    &:nth-of-type(3) {
      animation: psycho 1s ease-out 0.25s;
    }
  }
}

@keyframes rotateThis {
  from {
    transform: rotate(0deg) scale(1);
  }

  to {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes psycho {
  0% {
    transform: rotate(360deg) scale(1) translate(3px, 3px);
    opacity: 0;
  }
  // 5% {
  //   transform: rotate(400deg) scale(1) translate(2px, 2px);
  // }
  50% {
    opacity: 1;
  }

  100% {
    transform: rotate(1080deg) scale(1) translate(0, 0);
  }
}
</style>
