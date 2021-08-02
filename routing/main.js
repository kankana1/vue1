import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import About from './components/About.vue'
import Home from './components/Home'
import Settings from './components/Settings'
import User from './components/User'
Vue.use(VueRouter);
const routes=[
  {path:"/",component:Home},
  {path:"/about",component:About},
  {path:"/settings",component:Settings},
  {path:"/user/:id",component:User}
]
const router = new VueRouter(
  {
    routes
  }
)

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
