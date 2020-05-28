import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
import { domains } from './modules/domains';
import { RootStore } from './store.type';

// Allow use of Vue's store
Vue.use(Vuex);

const store: StoreOptions<RootStore> = new Store({
  modules: {
    domains,
  },
});

export default new Vuex.Store<RootStore>(store);
