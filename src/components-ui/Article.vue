<template>
  <article :id="article.id" :class="articleClass">
    <header class="article-header">
      <div class="article-date">
        <picture>
          <img class="article-date-icon" src="../assets/images/logos/calendar.svg" alt />
        </picture>
        <time :datetime="article.updated_at | timestamp" class="article-date-label">{{
          article.updated_at | frenchDate | capitalize
        }}</time>
      </div>
      <h1 class="article-title">
        <span class="title-background">
          {{ article.title }}
        </span>
      </h1>
      <h2 class="article-subtitle">
        <span class="title-background">
          {{ article.subtitle }}
        </span>
      </h2>
    </header>

    <section class="article-main">
      <section class="article-main-image">
        <picture v-if="article.image">
          <img :class="coverImageClass" :src="article.image.url" alt="" />
        </picture>
      </section>
      <TransitionFadeHeight>
        <section
          v-if="!article.hasOwnProperty('contentIsVisible') || article.contentIsVisible"
          class="article-main-content"
          key="content"
          v-html="article.content"
        ></section>
        <section v-else class="article-main-content" key="preview">
          <p v-html="article.preview"></p>
        </section>
      </TransitionFadeHeight>
    </section>

    <footer class="article-footer">
      <small class="article-author">
        <p>rédaction : {{ article.author }}</p>
      </small>
      <!-- <FacebookShare :sharedLink="article.shareLink" /> -->
      <button
        v-if="article.hasOwnProperty('contentIsVisible')"
        class="article-toggle-content"
        v-on:click="toggleArticleContent"
      >
        {{ article.contentIsVisible ? "Réduire l'article" : "Lire l'article" }}
      </button>
    </footer>
  </article>
</template>

<script lang="ts">
import TransitionFadeHeight from '../transitions/Transition-fade-height.vue';
import FacebookShare from '@/components-ui/FacebookShare.vue';

export default {
  name: 'Article',
  components: {
    FacebookShare,
    TransitionFadeHeight,
  },
  computed: {
    coverImageClass() {
      return `article-cover ${this.article.contentIsVisible ? 'noBoxShadow' : 'boxShadow'}`;
    },
    articleClass() {
      return `article ${this.article.contentIsVisible ? 'boxShadow' : 'noBoxShadow'}`;
    },
  },
  props: ['article', 'frontendOrigin'],
  methods: {
    toggleArticleContent() {
      if (this.article.contentIsVisible) {
        const article = document.getElementById(this.article.id);
        article.scrollIntoView({ block: 'start', behavior: 'smooth' });
        setTimeout(() => {
          this.article.contentIsVisible = !this.article.contentIsVisible;
        }, 300);
      } else {
        this.article.contentIsVisible = !this.article.contentIsVisible;
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/vars.scss';
@import '@/styles/mixin.scss';

.boxShadow {
  transform: scale(0.98);
  box-shadow: 0 21px 8px -10px rgba(0, 0, 0, 0.5);
}
.noBoxShadow {
  box-shadow: 0 0px 0px 0px;
}
.article {
  margin: 20px auto;
  border-radius: 8px;
  padding: 0px 0px;
  border: 1px solid $light-gray;
  overflow: hidden;
  transition: 0.5s;

  @include laptop {
    will-change: transform;
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
      transition: 0.3s;

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
      margin: 0;
      padding: 0 10px;
      text-align: left;
      line-height: 24px;
      font-weight: bold;
      color: $dark-gray;

      @include laptop {
        padding: 0 40px;
      }
      .title-background {
        box-decoration-break: clone;
        padding: 0 10px;
      }
    }
    .article-title {
      letter-spacing: 2px;
      line-height: 34px;

      .title-background {
        background-color: $meadow-green;
      }
    }
    .article-subtitle {
      .title-background {
        background-color: $yellow;
        line-height: 28px;
      }
    }
  }
  .article-main-image {
    .article-cover {
      margin: 15px 0;
      width: 100%;
      min-height: 100px;
      background: grey;
      transition: 0.5s;
    }
  }
  .article-main-content {
    max-width: 100%;
    padding: 0 10px;
    text-align: justify;

    h3 {
      width: 100%;
      margin: 20px 0;
      text-align: left;
      font-weight: bold;
    }
    p {
      padding: 15px 0;
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
    justify-content: space-around;
    align-items: flex-end;

    .article-author {
      width: 100%;
      margin-bottom: 10px;
      color: $gray;
      text-align: right;
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
      transition: 0.3s;

      &:hover {
        box-shadow: 0 0 0 1px $light-gray, 0px 10px 8px -8px;
        transform: translateY(-5px);
      }
    }
  }
}
</style>
