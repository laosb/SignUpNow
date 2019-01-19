import Vue from 'vue'
import VueMaterialIcon from 'vue-micon'
import App from './App.vue'
import router from './router/'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import 'holakit/dist/holakit.css'
import * as deviceDetect from './utils/device'

try {
  Vue.component('m-icon', VueMaterialIcon)

  Vue.prototype.$device = deviceDetect
  Vue.config.productionTip = false
  const init = async () => {
    axios.defaults.baseURL = store.state.BASE_URL
    await store.dispatch('init')
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  init()

  window._setupDebug = key => {
    if (key % (1926 * 1e4 + 817) === 0) {
      window._hduhelpDebug = {
        router,
        store,
        Vue,
        axios
      }
    }
  }
} catch (e) { window._hduhelpErrorRecover(e) }
