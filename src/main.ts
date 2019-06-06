import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import './filters';

Vue.config.productionTip = false;

// Allow metaInfo to be set in all App
Vue.use(VueMeta);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
