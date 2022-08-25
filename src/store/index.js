import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userID:'0000000012',
    userName:'院士金'
  },
  getters: {
  },
  mutations: {
    changeValue_Name(state,newVal){
      state.userName = newVal
    },
    changeValue_ID(state,newVal){
      state.userID = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
