import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      meta: {
        title: 'Shiatsu - Blog',
      },
      component: () => import(/* webpackChunkName: "reviews" */  './views/Blog.vue'),
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
