import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import store from './store'
import router from './router.js'

Vue.config.productionTip = false
Vue.prototype.$moment = moment;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
