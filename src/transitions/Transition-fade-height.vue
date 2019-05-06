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
  transition: .5s;
  max-height: 1000px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>