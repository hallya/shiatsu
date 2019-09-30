import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListPost from './components/ListPost.vue';
import SinglePost from './components/SinglePost.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {
        title: 'Shiatsu - Accueil',
      },
    },
    {
      name: 'about',
      path: '/about',
      meta: {
        title: 'Shiatsu - À propos',
      },
      component: () => import(/* webpackChunkName: "about" */  './views/About.vue'),
    },
    {
      path: '/blog/posts',
      component: () => import(/* webpackChunkName: "reviews" */  './views/WIP.vue'),
      children: [
        {
          name: 'articles',
          path: '',
          component: ListPost,
          meta: {
            title: 'Shiatsu - Blog',
          },
        },
        {
          name: 'article',
          path: ':id',
          component: SinglePost,
          meta: {
            title: 'Shiatsu - Blog',
          },
        },
      ],
    },
    {
      name: 'reviews',
      path: '/reviews',
      meta: {
        title: 'Shiatsu - Avis',
      },
      component: () => import(/* webpackChunkName: "reviews" */  './views/WIP.vue'),
    },
    {
      name: 'contacts',
      path: '/contacts',
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
