import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    users
  }
})

export default store