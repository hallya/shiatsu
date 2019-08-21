<template>
  <Article v-if="article" :article="article" :frontendHostname="frontendHostname"/>
  <Loader v-else></Loader>
</template>

<script>
import Articles from '@/services/api/articles.service';
import Article from '@/components-ui/Article';
import Loader from '@/components-ui/Loader';
import TransitionFadeHeight from '../transitions/Transition-fade-height.vue';

export default {
  components: {
    Article,
    Loader,
    TransitionFadeHeight,
  },
  data() {
    return {
      article: null,
      meta: [],
      frontendHostname: this.$store.state.domains.frontendHostname,
    };
  },
  mounted() {
    this.init();
  },
  metaInfo() {
    return {
      meta: this.meta,
    };
  },
  methods: {
    async init() {
      this.article = await new Articles().get(this.$route.params.id);
      this.meta = [
        { property: 'og:title', content: this.article.title },
        { property: 'og:author', content: this.article.author },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: this.article.preview },
        { property: 'og:image', content: this.article.image.url },
      ];
    },
  },
};
</script>

<style lang="scss">
</style>