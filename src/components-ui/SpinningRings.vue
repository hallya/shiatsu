<template>
  <div class="circle-multiple">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SpinningRings extends Vue {}
</script>

<style lang="scss">
@mixin border-gradient($from, $to, $weight: 0) {
  $mix-main: mix($from, $to);
  $mix-sub-from: mix($mix-main, $from);
  $mix-sub-to: mix($mix-main, $to);

  box-shadow: 0 1px 0 $weight rgba($mix-sub-to, .25),
    0 -1px 0 $weight rgba($mix-sub-from, .25),
    1px 0 0 $weight rgba($mix-sub-to, .25),
    -1px 0 0 $weight rgba($mix-sub-from, .25),
    1px -1px 0 $weight rgba($mix-main, .5),
    -1px 1px 0 $weight rgba($mix-main, .5),
    1px 1px 0 $weight rgba($to, .75),
    -1px -1px 0 $weight rgba($from, .75);
}

.circle {
  border-radius: 50px;
  height: 50px;
  width: 50px;

  &:nth-of-type(2) {
    @include border-gradient(skyblue, hotpink);
    animation: rotateThis 3s linear infinite;
  }

  &:nth-of-type(3) {
    @include border-gradient(#E14847, #B53BB4);
  }

  &-multiple {
    opacity: 0;
    height: 50px;
    width: 50px;
    left: -6px;
    position: absolute;
  }
  &-multiple & {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: .2s;

    &:nth-of-type(1) {
      animation: psycho 1s linear infinite;
    }

    &:nth-of-type(2) {
      animation: psycho 1s linear .1s infinite;
    }

    &:nth-of-type(3) {
      animation: psycho 1s linear .25s infinite;
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
    transform: rotate(360deg) scale(1) translate(2px, 2px);
  }
  
  100% {
    transform: rotate(1080deg) scale(1) translate(0, 0);
  }
}
</style>