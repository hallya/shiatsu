import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
      children: [
        {
          path: ':id',
          props: true,
          component: () =>
            import(/* webpackChunkName: "singlepost" */ './components/SinglePost.vue'),
        },
        {
          path: '',
          component: () => import(/* webpackChunkName: "listpost" */ './components/ListPost.vue'),
        },
        {
          path: '**',
          redirect: { path: '/blog' },
        },
      ],
    },
    {
      path: '/contacts',
      component: () => import(/* webpackChunkName: "contacts" */ './views/Contacts.vue'),
    },
    {
      path: '/404-page-not-found',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
    },
    {
      path: '/*',
      redirect: {
        path: '/404-page-not-found',
      },
    },
  ],
});
