<template>
  <article :id="article.id" class="article">
    <header class="article-header">
      <div class="article-date">
        <picture>
          <img class="article-date-icon" src="../assets/images/logos/calendar.svg" alt="">
        </picture>
        <time :datetime="article.updatedAt | timestamp" class="article-date-label">{{ article.updatedAt | frenchDate | capitalize }}</time>
      </div>
      <h2 class="article-title">{{article.title}}</h2>
      <h3 class="article-subtitle">{{article.subtitle}}</h3>
    </header>
    <section class="article-main">
      <section class="article-main-image">
        <picture v-if="article.image">
          <img class="article-cover" v-bind:src="`https://strapi.lcn-dlc.dev${article.image.url}`" alt="">
        </picture>
      </section>
      <TransitionFadeHeight>
        <section 
          v-if="!article.hasOwnProperty('contentIsVisible') || article.contentIsVisible" 
          class="article-main-content"
          key="content"
          v-html="article.content"></section>
        <section 
          v-else
          class="article-main-content" 
          key="preview"
          v-html="article.preview"></section>
      </TransitionFadeHeight>
    </section>
    <footer class="article-footer">
      <small class="article-author">
        <p>rédaction : {{article.author}}</p>
      </small>
      <button class="fb-share-button" :data-href="frontendOrigin" data-layout="button" data-size="large">
        <a target="_blank" :href="article.shareLink" class="fb-xfbml-parse-ignore">Partager</a>
      </button>
      <button v-if="article.hasOwnProperty('contentIsVisible')" class="article-toggle-content" v-on:click="article.contentIsVisible = !article.contentIsVisible">
        {{ article.contentIsVisible ? 'Réduire l\'article' : 'Lire l\'article' }}
      </button>
    </footer>
  </article>
</template>

<script lang="ts">
import TransitionFadeHeight from '../transitions/Transition-fade-height.vue';

export default {
  name: 'Article',
  components: {
    TransitionFadeHeight,
  },
  data() {
    return {
      frontendOrigin: this.$store.state.domains.frontendOrigin,
    };
  },
  props: ['article'],
};
</script>

<style lang="scss">
@import '@/main.scss';

.article {
    margin: 20px auto;
    border-radius: 8px;
    padding: 0px 0px;
    box-shadow: 0 0 0 0px $dark-gray;
    border: 1px solid $light-gray;
    overflow: hidden;
    transition: .5s;

    @include laptop {
      will-change: transform;
      
      &:hover {
        box-shadow: 0 25px 15px -22px;
        transform: translateY(-10px);
      }
    }
    .article-header {
      min-height: auto;
      border-top-right-radius: 8px;

      .article-date {
        width: -moz-fit-content;
        width: fit-content;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 8px 16px;
        border-radius: 8px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
        background: #ffeebe;
        margin: 0px 0 10px auto;
        transition: .3s;

        &:hover {
          box-shadow: 10px 5px 10px -9px;
          transform: translate3d(0px, -4px, 0);
        }

        .article-date-icon {
          width: 25px;
        }
        .article-date-label {
          margin: 0 0 0 10px;
          text-align: right;
          font-weight: bold;
          color: $dark-gray;
          white-space: nowrap;
        }
      }
      .article-title, 
      .article-subtitle {
        margin: 10px 0 0;
        padding: 0 20px;
        text-align: justify;
        font-weight: normal;

        @include laptop {
          padding: 0 40px;
        }
      }
    }
    .article-main-image {
      .article-cover {
        margin: 15px 0;
        width: 100%;
        box-shadow: 0 3px 8px -2px;
        min-height: 100px;
        background: gray;
      }
    }
    .article-main-content {
      padding: 5px 20px;

      h3 {
        width: 100%;
        margin: 20px 0;
        text-align: left;
        font-weight: bold;
      }
      p {
        margin: 5px 0;
        text-align: justify;
      }

        @include laptop {
          padding: 0 40px;
        }

    }
    .article-footer {
      min-height: auto;
      padding: 10px 20px;
      display: flex;
      flex-flow: wrap row;
      justify-content: space-between;
      align-items: flex-end;

      .article-author {
        width: 100%;
        margin-bottom: 10px;
        color: $gray;
        text-align: right;
        
      }
      .fb-share-button {
        background: transparent;
        padding: 0;
        border: none;
        box-shadow: 0px 10px 8px -8px $light-gray;
        transition: .3s;
        will-change: transform, box-shadow;

        &:hover {
          box-shadow: 0px 10px 8px -8px;
          transform: translateY(-5px);
        }
        a {
          box-shadow: 0 0 0 1px $light-gray;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
        }
      }
      .article-toggle-content {
        display: block;
        border: none;
        border-radius: 8px;
        padding: 8px 16px;
        font-weight: bold;
        font-size: 14px;
        color: $dark-gray;
        background: none;
        box-shadow: 0px 0px 0px 1px $light-gray;
        will-change: width, transform;
        transition: .3s;

        &:hover {
          box-shadow: 0 0 0 1px $light-gray, 0px 10px 8px -8px;
          transform: translateY(-5px);
        }
      }
    }
  }
</style>