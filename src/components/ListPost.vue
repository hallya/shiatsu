<template>
  <ul v-if="articles.length" class="articles-list">
    <li
      v-for="article of articles"
      :key="article.id"
      class="articles-list-item"
    >
      <Article :article="article" :frontendOrigin="frontendOrigin" />
    </li>
  </ul>
  <Loader v-else />
</template>

<script lang="ts">
import TransitionFadeHeight from '@/transitions/Transition-fade-height.vue';

import Articles from '@/services/api/articles.service';
import { Post, PostFormated } from '@/services/api/articles.types';

import Article from '@/components-ui/Article.vue';
import Loader from '@/components-ui/Loader.vue';

import nenupharShareDefaultImage from '@/assets/images/pictures/nenuphars_et_fleurs.jpg';
import content from '@/assets/images/pictures/nenuphars_et_fleurs.jpg';

export default {
  name: 'ListPost',
  components: {
    Article,
    Loader,
    TransitionFadeHeight,
  },
  data() {
    return {
      articles: [],
      baseUrl: this.$store.state.domains.baseUrlFrontend,
      frontendOrigin: this.$store.state.domains.frontendOrigin,
    };
  },
  metaInfo() {
    return {
      meta: [
        { property: 'og:title', content: 'Shiatsu et bien être' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content:
            'Suivez les articles rédigé par Nathalie sur \
        le Shiatsu et le bien-être',
        },
        {
          property: 'og:image',
          content: this.baseUrl + nenupharShareDefaultImage,
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.articles = await new Articles().getAll();
    },
  },
};
</script>

<style lang="scss">
@import '@/main.scss';

.articles-list {
  overflow: auto;

  .articles-list-item {
    margin: 0 auto 50px;
  }
}
</style>
