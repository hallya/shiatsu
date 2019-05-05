<template>
  <main class="blog" v-if:="articles.length" >
    <h1>Blog</h1>
    <section>
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
          <transition name="fadeHeight" mode="out-in">
            <template v-if="article.contentIsVisible">
              <p v-for="(paragraph, index) in article.content" :key="index" class="article-content">{{paragraph}}</p>
            </template>
            <p v-else class="article-content">{{article.content[0] | textPreview}}</p>
          </transition>
          <button class="article-toggle-content" v-on:click="article.contentIsVisible = !article.contentIsVisible">
            {{ article.contentIsVisible ? 'Réduire l\'article' : 'Lire l\'article' }}
          </button>
        </article>
    </section>
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component({
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
      .fadeHeight-enter-active,
      .fadeHeight-leave-active {
        transition: 1s;
        max-height: 2000px;
      }
      .fadeHeight-enter,
      .fadeHeight-leave-to
      {
        opacity: 0;
        max-height: 0px;
      }
    }
  }
</style>