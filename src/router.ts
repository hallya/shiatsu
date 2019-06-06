import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Article from './components/Article.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'Shiatsu - Accueil',
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Shiatsu - À propos',
      },
      component: () => import(/* webpackChunkName: "about" */  './views/About.vue'),
    },
    {
      path: '/blog/posts',
      name: 'blog',
      component: () => import(/* webpackChunkName: "reviews" */  './views/Blog.vue'),
      children: [
        {
          path: '',
          component: Article,
          meta: {
            title: 'Shiatsu - Blog',
          },
        },
        {
          path: 'article/:id',
          component: Article,
          meta: {
            title: 'Shiatsu - Blog',
          },
        },
      ],
    },
    {
      path: '/reviews',
      name: 'reviews',
      meta: {
        title: 'Shiatsu - Avis',
      },
      component: () => import(/* webpackChunkName: "reviews" */  './views/Reviews.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      meta: {
        title: 'Shiatsu - Contacts',
      },
      component: () => import(/* webpackChunkName: "contacts" */  './views/Contacts.vue'),
    },
    {
      path: '**',
      redirect: { name: 'home' },
    },
  ],
});
