<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <keep-alive exclude="Blog">
        <router-view />
      </keep-alive>
    </transition>
    <Footer />
  </div>
</template>
<script lang="ts">
import { MetaInfo } from '@/types/metaInfo.interface';
import Header from '@/components/Header.vue';
const Footer = () => import('@/components/Footer.vue');

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      ogUrl:
        this.$store.state.domains.baseUrlFrontend +
        this.$store.state.domains.hash,
    };
  },
  metaInfo(): MetaInfo {
    return {
      meta: [
        {
          property: 'og:url',
          content: this.ogUrl,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
