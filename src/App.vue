<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <keep-alive exclude="/blog">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { MetaInfo } from "@/types/metaInfo.interface";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      ogUrl: this.$store.state.domains.baseUrlFrontend + this.$store.state.domains.hash,
    };
  },
  metaInfo(): MetaInfo {
    return {
      meta: [
        {
          property: "og:url",
          content: this.ogUrl,
        },
      ],
    };
  },
});
</script>

<style lang="scss">
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  display: grid;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow-y: scroll;
  text-align: center;
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
