<template>
  <Article v-if="article" :article="article" :frontendOrigin="frontendOrigin" />
  <Loader v-else></Loader>
</template>

<script>
import Vue from 'vue';
import Articles from '@/services/api/articles.service';
import Article from '@/components-ui/Article';
import Loader from '@/components-ui/Loader';
import TransitionFadeHeight from '../transitions/Transition-fade-height.vue';
import showdown from 'showdown';

export default Vue.extend({
  name: 'SinglePost',
  props: ['id'],
  components: {
    Article,
    Loader,
    TransitionFadeHeight,
  },
  data() {
    return {
      article: null,
      meta: [],
      ogUrl: this.$store.state.domains.baseUrlFrontend + this.$store.state.domains.hash,
      frontendOrigin: this.$store.state.domains.frontendOrigin,
      backendOrigin: this.$store.state.domains.backendOrigin,
    };
  },
  mounted() {
    this.init();
  },
  metaInfo() {
    return {
      meta: [
        { property: 'title', content: this.article.title },
        { property: 'author', content: this.article.author },
        { property: 'url', content: this.ogUrl },
        { property: 'og:type', content: 'article' },
        { property: 'description', content: this.article.preview },
        {
          property: 'og:image',
          content: this.backendOrigin + this.article.image.url,
        },
      ],
    };
  },
  methods: {
    async init() {
      this.article = await new Articles().get(this.id);
    },
  },
});
</script>

<style lang="scss"></style>
