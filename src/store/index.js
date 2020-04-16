import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '西安'
  },
  mutations: {
    changeCity (state, city) {
      this.state.city = city
    }
  }
})
