<template>
  <Article v-if="article" :article="article" :frontendOrigin="frontendOrigin" />
  <Loader v-else></Loader>
</template>

<script lang="ts">
import Vue from 'vue';
import Articles from '@/services/api/articles.service';
import Article from '@/components-ui/Article.vue';
import Loader from '@/components-ui/Loader.vue';

export default Vue.extend({
  name: 'SinglePost',
  props: ['id'],
  components: {
    Article,
    Loader,
  },
  data(): any {
    return {
      article: null,
      meta: [],
      ogUrl: this.$store.state.domains.baseUrlFrontend,
      frontendOrigin: this.$store.state.domains.frontendOrigin,
      backendOrigin: this.$store.state.domains.backendOrigin,
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
      this.article = await new Articles().get(this.id);
      this.meta = [
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.article.title },
        {
          property: 'article:author',
          content: 'https://www.facebook.com/profile.php?id=100010640928675',
        },
        { property: 'article:publisher', content: 'https://www.facebook.com/nathaliedeloeper/' },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:description', content: this.article.preview },
        { property: 'og:image', content: this.article.image.url },
      ];
    },
  },
});
</script>

<style lang="scss"></style>
