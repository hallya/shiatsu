import "./registerServiceWorker";
import "./pipe";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Vue from "vue";
import "./main.scss";
import schemaInjection from "./plugins/schemaInjection";

Vue.config.productionTip = false;

Vue.use(schemaInjection);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
