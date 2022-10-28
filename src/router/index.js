import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';
import Map from '../pages/Map.vue';
import Board from '../pages/Board.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/Map',
      component: Map,
    },
    {
      path: '/Board',
      component: Board,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
