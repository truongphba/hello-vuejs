import Vue from 'vue'
import Vuex from 'vuex'
import student from'./student'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    student
  }
})
