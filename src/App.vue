<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <keep-alive exclude="Blog">
        <router-view/>
      </keep-alive>
    </transition>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from '@/types/metaInfo.interface';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
  metaInfo(): MetaInfo {
    return {
      meta: [
        {
          property: 'og:url',
          content: this.$store.state.environmentStore.frontendHostname + '/#' + this.$route.fullPath,
        },
      ],
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
