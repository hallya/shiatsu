<template>
  <main class="blog">
    <section class="articles" key="content">
      <TransitionFade>
        <router-view></router-view>
      </TransitionFade>
    </section>
  </main>
</template>

<script>
import Vue from 'vue';
import router from '@/router';
import TransitionFade from '@/transitions/Transition-fade.vue';

export default Vue.extend({
  name: 'Blog',
  components: {
    TransitionFade,
  },
  metaInfo() {
    return {
      title: 'Mes articles',
      meta: [
        {
          name: 'Description',
          content: 'Articles autour de la santé et du shiatsu',
        },
        {
          property: 'og:title',
          content: 'Mes articles',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'Articles autour de la santé et du shiatsu',
        },
        { property: 'og:image', content: baseUrlFrontend + siteCoverUrl },
      ],
    };
  },
});
</script>

<style lang="scss">
@import '@/styles/vars.scss';
@import '@/styles/mixin.scss';

main.blog {
  padding: 0;

  section.articles {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto 50px;
    padding: 10px 8px;

    @include tablet {
      width: 80%;
    }
    @include laptop {
      width: 40%;
      min-width: 650px;
    }

    .articles-link {
      display: block;
      text-align: left;
      width: 95%;
      color: $dark-gray;
      text-decoration: underline;
    }
    h2.articles-header {
      padding: 0 10px;
      width: 100%;
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
</style>
