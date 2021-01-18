import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false
Vue.component('v-select-filter', vSelect)

new Vue({
  router, // 追記
  vuetify,
  render: h => h(App)
}).$mount('#app')
