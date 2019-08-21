import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import store from './store/store';
import router from './router';
import './registerServiceWorker';
import './pipe';

Vue.config.productionTip = false;

// Allow metaInfo to be set in all App
Vue.use(VueMeta);

router.beforeEach((to, from, next) => {
  if (to.fullPath === from.fullPath) {
    return;
  }
  document.title = to.meta.title;
  next();
});

router.afterEach((to, from) => {
  // store.commit('environmentStore/updateDomain');
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
