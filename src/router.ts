import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';

const router = new VueRouter({
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
      component: Blog,
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
      path: '/*',
      component: () => import(/* webpackChunkName: "contacts" */ './views/404.vue'),
    },
  ],
});

Vue.use(VueRouter);

export default router;
