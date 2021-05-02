import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";

Vue.use(VueRouter);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
      children: [
        {
          path: "quick-answer",
          component: () => import(/* webpackChunkName: "faq" */ "./views/Faq.vue"),
        },
        {
          path: "in-depth-answer",
          component: () =>
            import(/* webpackChunkName: "inDepthAnswer" */ "./views/InDepthAnswer.vue"),
        },
        {
          path: "**",
          redirect: { path: "/about/quick-answer" },
        },
      ],
    },
    {
      path: "/blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue"),
      children: [
        {
          path: ":id",
          props: true,
          component: () =>
            import(/* webpackChunkName: "singlepost" */ "./components/SinglePost.vue"),
        },
        {
          path: "",
          component: () => import(/* webpackChunkName: "listpost" */ "./components/ListPost.vue"),
        },
        {
          path: "**",
          redirect: { path: "/blog" },
        },
      ],
    },
    {
      path: "/contact",
      component: () => import(/* webpackChunkName: "contact" */ "./views/Contact.vue"),
    },
    {
      path: "/404-page-not-found",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
    },
    {
      path: "/*",
      redirect: {
        path: "/404-page-not-found",
      },
    },
  ],
});
