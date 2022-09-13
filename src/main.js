import Vue from 'vue';
import Apple from './App.vue';
import routeslist from './router.js';
import VueRouter from 'vue-router';
import './utils/axios';

Vue.config.productionTip = false

Vue.use(VueRouter)
const routerrr = new VueRouter({
  routes: routeslist
});
new Vue({
  router: routerrr,
  render: h => h(Apple)
}).$mount('#app');






























// new Vue({
//   data:{
//     msggg:'qwqe'
//   },
//   render: h => h(App),
// }).$mount('#app')
