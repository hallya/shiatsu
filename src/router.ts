import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListPost from './components/ListPost.vue';
import SinglePost from './components/SinglePost.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/blog',
      component: () =>
        import(/* webpackChunkName: "reviews" */ './views/Blog.vue'),
      children: [
        {
          name: 'articles',
          path: '',
          component: ListPost,
        },
        {
          name: 'article',
          path: ':id',
          component: SinglePost,
        },
      ],
    },
    {
      name: 'contacts',
      path: '/contacts',
      component: () =>
        import(/* webpackChunkName: "contacts" */ './views/Contacts.vue'),
    },
    {
      path: '**',
      redirect: { path: '/' },
    },
  ],
});

export default router;
