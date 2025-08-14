import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Home from "./views/Home.vue";

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
