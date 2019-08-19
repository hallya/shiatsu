<template>
  <ul v-if="articles.length" class="articles-list">
    <li v-for="article of articles" :key="article.id" class="articles-list-item">
      <Article :article="article" :shareLink="shareLink(article.id)"/>
    </li>
  </ul>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import TransitionFadeHeight from '@/transitions/Transition-fade-height.vue';

import Articles from '@/services/api/api.service';
import { Post, PostFormated } from '@/services/api/api.types';
import { convertToHtml } from '@/services/converter/markdownToHtml';

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
      frontendHostname: this.$store.state.domains.frontendHostname,
    };
  },
  metaInfo() {
    return {
      meta: [
        { property: 'og:title', content: 'Shiatsu et bien être' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Partages d\'articles rédigé par Nathalie sur \
        le Shiatsu et le bien-être' },
        { property: 'og:image', content: this.frontendHostname + nenupharShareDefaultImage },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const results: Post[] = await Articles.getAll();
      this.articles = this.format(results);
    },
    format(results: Post[]): PostFormated[] {
      return results.map((article: Post): PostFormated => ({
        ...article,
        content: convertToHtml(article.content),
        preview: convertToHtml(article.content.substring(0, 100)),
        contentIsVisible: false,
      })).sort(this.sortByDate);
    },
    shareLink(id: string): string {
      return 'https://www.facebook.com/sharer/sharer.php?u='
      + encodeURIComponent(this.frontendHostname + this.$route.fullPath + '/' + id)
      + '&amp;src=sdkpreparse';
    },
    sortByDate(a: PostFormated, b: PostFormated): number {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();

      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    },
  },
};
</script>

<style lang="scss">
@import '@/main.scss';

  .articles-list {
    overflow: auto;

    .articles-list-item {
      box-sizing: border-box;
      width: 100%;
      margin: 0 auto 50px;

      @include tablet {
        width: 80%;
      }
      @include laptop {
        width: 40%;
        min-width: 650px;
      }
    }
  }
</style>