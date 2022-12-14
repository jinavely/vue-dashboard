import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import Vue2Filters from 'vue2-filters';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Vue2Filters);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
