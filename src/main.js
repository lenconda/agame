// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/custome.css';
import App from './App';
import router from './router';
import vueResource from 'vue-resource';

Vue.use(elementUI);
Vue.use(vueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    eventHub: new Vue()
  },
  template: '<App/>',
  components: { App }
});
