import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListPost from './components/ListPost.vue';
import SinglePost from './components/SinglePost.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {
        title: 'Accueil - Shiatsu',
      },
    },
    {
      name: 'about',
      path: '/about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'À propos - Shiatsu',
        auth: false,
      },
    },
    {
      path: '/blog/posts',
      component: () => import(/* webpackChunkName: "reviews" */  './views/Blog.vue'),
      children: [
        {
          name: 'articles',
          path: '',
          component: ListPost,
          meta: {
            title: 'Blog - Shiatsu',
            auth: false,
          },
        },
        {
          name: 'article',
          path: ':id',
          component: SinglePost,
          meta: {
            title: 'Blog - Shiatsu',
            auth: false,
          },
        },
      ],
    },
    {
      component: () =>
        import(/* webpackChunkName: "reviews" */ './views/WIP.vue'),
      meta: {
        title: 'Avis - Shiatsu',
        auth: false,
      },
      name: 'reviews',
      path: '/reviews',
    },
    {
      component: () =>
        import(/* webpackChunkName: "contacts" */ './views/Contacts.vue'),
      meta: {
        title: 'Contacts - Shiatsu',
        auth: false,
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
