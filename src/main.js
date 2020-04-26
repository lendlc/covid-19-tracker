import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router'


Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
