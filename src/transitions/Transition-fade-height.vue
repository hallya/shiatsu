<template>
  <transition name="fadeHeight" mode="out-in">
    <slot></slot>
  </transition>
</template>
<script>
export default {};
</script>
<style>
.fadeHeight-enter-active, 
.fadeHeight-leave-active {
  max-height: 9000px;
  opacity: 1;
  transition: .5s;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 50px;
}
</style>