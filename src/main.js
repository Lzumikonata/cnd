import Vue from 'vue'
import App from './App.vue'
import routes from './router/index'
import VueRouter from 'vue-router'
import './init/css/reset.less'
import './init/element/element.register'
import 'element-ui/lib/theme-chalk/index.css'
import cndMessage from './components/commen/message.vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

const test = new Vue({data: {a: 1}})
console.log(test, 'test')

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueRx, Rx)
Vue.prototype.$CMessage = cndMessage
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
