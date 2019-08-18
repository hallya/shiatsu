<template>
  <section>
    <Article v-if="article" :article="article" :shareLink="shareLink(article.id)" :frontendHostname="frontendHostname"/>
    <Loader v-else></Loader>
  </section>
</template>

<script>
import Articles from '@/services/api/api.service';
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
      frontendHostname: this.$store.state.environmentStore.frontendHostname,
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
      this.article = await Articles.get(this.$route.params.id);
      this.article = this.formatArticle(this.article);

      this.meta = [
        { property: 'og:title', content: this.article.title },
        { property: 'og:author', content: this.article.author },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: this.article.content[0] },
        { property: 'og:image', content: this.article.cover.url },
      ];
    },
    shareLink(id) {
      return `https://www.facebook.com/sharer/sharer.php?u=\
      ${encodeURIComponent(`${this.frontendHostname + this.$route.fullPath}/${id}`)}&amp;src=sdkpreparse`;
    },
    toArray: (sentence) => sentence.split('\r\n'),
    formatArticle(article) {
      return {
        ...article,
        content: this.toArray(article.content),
      };
    },
  },
};
</script>

<style lang="scss">
</style>