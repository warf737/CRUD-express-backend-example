import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import  ElementUI from 'element-ui';
Vue.use(Router);
Vue.use(ElementUI);

// const router = new Router({
//   routes: [
//     {
//       path:'/notes/main',
//       name: 'main',
//       component: ''
//     },
//     {
//       path: '/notes/stub',
//       name: 'stub',
//       component: '',
//     },
//     {
//       path: '/notes/:id',
//       name: 'note',
//       component: '',
//       props: 'true'
//     },
//     {
//       path: '/notes/modal',
//       name: 'modalNote',
//       component: '',
//       props: true
//     }
//   ], mode: 'history'
// });

// router.replace('/note/stub');

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
}).$mount("app");
