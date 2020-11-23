import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/styles/style.scss'
import 'material-design-icons-iconfont'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
