<template>
  <article :id="article.id" class="article" >
    <div class="article-date">
      <time :datetime="new Date(article.date).getTime()" class="article-date-label">{{ article.date | frenchDate | capitalize }}</time>
      <picture>
        <img class="article-date-icon" src="../assets/images/logos/calendar.svg" alt="">
      </picture>
    </div>
    <h2 class="article-header">{{article.title}}</h2>
    <picture v-if="article.cover">
      <img class="article-cover" v-bind:src="article.cover.url" alt="">
    </picture>
    <TransitionFadeHeight>
      <div v-if="article.contentIsVisible || article.contentIsVisible === null" class="article-content">
        <p v-for="(paragraph, index) in article.content" class="article-paragraph" v-bind:key="index">{{paragraph}}</p>
      </div>
      <p v-else class="article-paragraph">{{article.content[0] | textPreview}}</p>
    </TransitionFadeHeight>
    <a :href="shareLink" class="article-share-icon">
      <img class="icon-filled" v-bind:src="facebookFilled" alt="link to social media">
      <!-- Partager -->
    </a>
    <button v-if="article.contentIsVisible !== null" class="article-toggle-content" v-on:click="article.contentIsVisible = !article.contentIsVisible">
      {{ article.contentIsVisible ? 'Réduire l\'article' : 'Lire l\'article' }}
    </button>
  </article>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import TransitionFadeHeight from '../transitions/Transition-fade-height.vue';
import facebookFilled from '@/assets/images/logos/social-media-f-full.svg';

@Component({
  data() {
    return {
      shareLink: this.$route.fullPath,
      facebookFilled,
    };
  },
  components: {
    TransitionFadeHeight,
  },
  props: ['article'],
})
export default class Article extends Vue {}
</script>

<style lang="scss">
@import '@/main.scss';

  .article {
    margin: 20px 0;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 0 0 0px $dark-gray;
    border: 1px solid $light-gray;
    transition: .5s;

    @include tablet {
      width: 70%;
    }
    @include laptop {
      width: 50%;

      &:hover {
        box-shadow: 0 5px 15px -12px;
        transform: scale(1.01);
      }
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
        width: 100%;
      }
    }
    .article-paragraph {
      height: auto;
      text-align: justify;

      @include laptop {
        padding: 0 40px;
      }
    }
    .article-share-icon {
      margin: 10px 0 0;
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
      transition: .3s;

      &:hover {
        box-shadow: 0px 5px 15px -10px, 0 0 0 1px $light-gray;
      }
    }
  }
</style>