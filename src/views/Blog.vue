<template>
  <main id="blog">
    <TransitionFade>
      <section v-if="articles.length" class="articles" key="content">
        <h2 class="articles-header">Lisez les derniers articles sur le Shiatsu</h2>
        <Article :article="article" v-for="article of articles" :key="article.id"></Article>
      </section>
      <section v-else key="loader" class="loader">
        <Loader></Loader>
      </section>
    </TransitionFade>
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';
import Article from '@/components/Article.vue';
import Loader from '@/components-ui/Loader.vue';
import TransitionFade from '@/transitions/Transition-fade.vue';
import { getArticles, getArticle } from '@/services/strapi/strapi.service';
import nenupharShareDefaultImage from '@/assets/images/pictures/nenuphars_et_fleurs.jpg';

@Component({
  components: {
    Article,
    Loader,
    TransitionFade,
  },
  data() {
    return {
      articles: [],
      meta: [
        { property: 'og:title', content: 'Les articles sur le Shiatsu de Nathalie' },
        { property: 'og:url', content: window.location.href},
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: 'Découvrez une \
        pratique thérapeutique unique au travers du regard de Nathalie de Loeper, praticienne de Shiatsu' },
        { property: 'og:image', content: nenupharShareDefaultImage },
      ],
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
  watch: {
    $route(to, from) {
      if (to.fullPath === from.fullPath) {
        return;
      } else {
        this.init();
      }
    },
  },
  methods: {
    async init() {
      this.articles = this.$route.query.article 
        ? [await getArticle(this.$route.query.article)] 
        : await getArticles();
      this.articles = this.formatAndSortArticles(this.articles);
    },
    formatAndSortArticles(articles) {
      return articles.map(article => ({
        ...article,
        content: this.formatStringToArray(article.content),
        contentIsVisible: articles.length === 1 ? null : false,
      })).sort(this.sortByDate);
    },
    formatStringToArray: (sentence) => sentence.split('\r\n'),
    sortByDate(a, b) {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    },
  },
})
export default class Blog extends Vue {}
</script>

<style lang="scss">
@import '@/main.scss';

main#blog {
  padding: 0;

  section {
    display: flex;
    justify-content: center;
    flex-flow: wrap row;
    &.loader {
      height: $main-mobile-height;
    }
    &.articles {
      padding: 10px;
      perspective: 3000px;

      h2.articles-header {
        padding: 0 10px;
        text-align: left;

        @include tablet {
          width: 70%;
        }
        @include laptop {
          width: 50%;
        }
      }
    }
    .list-enter-active, 
    .list-leave-active {
      transition: 5s;
    }
    .list-enter,
    .list-leave-to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
}
</style>