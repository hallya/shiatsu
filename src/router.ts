import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListPost from './components/ListPost.vue';
import SinglePost from './components/SinglePost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: Home,
      meta: {
        title: 'Shiatsu - Accueil',
      },
      name: 'home',
      path: '/home',
    },
    {
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'Shiatsu - À propos',
      },
      name: 'about',
      path: '/about',
    },
    {
      component: () =>
        import(/* webpackChunkName: "reviews" */ './views/WIP.vue'),
      path: '/blog',
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
      component: () =>
        import(/* webpackChunkName: "reviews" */ './views/WIP.vue'),
      meta: {
        title: 'Shiatsu - Avis',
      },
      name: 'reviews',
      path: '/reviews',
    },
    {
      component: () =>
        import(/* webpackChunkName: "contacts" */ './views/Contacts.vue'),
      meta: {
        title: 'Shiatsu - Contacts',
      },
      name: 'contacts',
      path: '/contacts',
    },
    {
      path: '**',
      redirect: { name: 'home' },
    },
  ],
});
