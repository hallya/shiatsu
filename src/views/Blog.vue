<template>
  <main class="blog">
    <TransitionFade>
      <section v-if="articles.length" class="articles" key="content">
        <h2 class="articles-header">Lisez les derniers articles sur le Shiatsu</h2>
        <article v-for="article in articles" :key="article.id" class="article">
          <div class="article-date">
            <time class="article-date-label">{{article.date | frenchDate | capitalize }}</time>
            <picture>
              <img class="article-date-icon" src="../assets/images/logos/calendar.svg" alt="">
            </picture>
          </div>
          <h2 class="article-header">{{article.title}}</h2>
          <picture v-if="article.cover">
            <img class="article-cover" v-bind:src="article.cover.url" alt="">
          </picture>
          <TransitionFadeHeight>
            <div v-if="article.contentIsVisible">
              <p v-for="(paragraph, index) in article.content" class="article-content" v-bind:key="index">{{paragraph}}</p>
            </div>
            <p v-else class="article-content">{{article.content[0] | textPreview}}</p>
          </TransitionFadeHeight>
          <button class="article-toggle-content" v-on:click="article.contentIsVisible = !article.contentIsVisible">
            {{ article.contentIsVisible ? 'Réduire l\'article' : 'Lire l\'article' }}
          </button>
        </article>
      </section>
      <section v-else key="loader" class="loader">
        <Loader></Loader>
      </section>
    </TransitionFade>
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Loader from '../components-ui/Loader.vue';
import TransitionFade from '../transitions/Transition-fade.vue';
import TransitionFadeHeight from '../transitions/Transition-fade-height.vue';

@Component({
  components: {
    Loader,
    TransitionFade,
    TransitionFadeHeight,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async init() {
      const response = await axios.get('https://backoffice-shiatsu.herokuapp.com/articles');
      this.articles = await response.data.map((article) => ({
        ...article,
        content: this.formatStringToArray(article.content),
        contentIsVisible: false,
      }))
      .sort(this.sortByDate);
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
  mounted() {
    this.init();
  },
})
export default class Blog extends Vue {}
</script>

<style lang="scss">
@import '@/main.scss';
  main.blog {
    padding: 0;

    section {
      &.loader {
        height: $main-mobile-height;
      }
      h2.articles-header {
        width: 100%;
        text-align: left;

        @include tablet {
          width: 70%;
        }
        @include laptop {
          width: 50%;
        }
      }
      &.articles {
        padding: 10px;
        perspective: 3000px;
  
        .article {
          margin: 20px 0;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 5px 15px -10px $dark-gray;
          border: 1px solid $light-gray;
  
          @include tablet {
            width: 70%;
          }
          @include laptop {
            width: 50%;
          }
  
          .article-date {
            width: -moz-fit-content;
            width: fit-content;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 8px 16px;
            border-radius: 8px;
            background: #ffeebe;
            box-shadow: 0px 5px 10px -9px;
            margin: 0px 0 10px auto;
  
            .article-date-icon {
              width: 25px;
            }
            .article-date-label {
              margin: 0 10px 0px 0;
              text-align: right;
              font-weight: bold;
              color: $dark-gray;
            }
          }
          .article-header {
            margin: 20px 0;
            padding: 0;
            text-align: left;
            font-weight: bold;
  
            @include laptop {
              padding: 0 40px;
            }
          }
          picture {
            img.article-cover {
              margin: 20px 0;
            }
          }
          .article-content {
            height: auto;
            @include laptop {
              padding: 0 40px;
            }
          }
          .article-toggle-content {
            display: block;
            margin: 0 0 0 auto;
            border: none;
            border-radius: 8px;
            padding: 8px 16px;
            font-weight: bold;
            font-size: 14px;
            color: $dark-gray;
            background: none;
            box-shadow: 0px 0px 0px 1px $light-gray;
            will-change: width;
            transition: .2s;
  
            &:hover {
              box-shadow: 0px 5px 15px -10px;
            }
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