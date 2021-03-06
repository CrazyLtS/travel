import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import fastClick from 'fastclick'
import store from './store/index'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'
import 'styles/one-px.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同，返回不同的内容
