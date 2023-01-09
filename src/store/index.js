import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    getUser: (state) => {
      return state.user
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    },
    clearUser: (state) => {
      state.user = {}
    }
  },
  actions: {
    receiveUser: (context, incomingUser) => {
      context.commit('setUser', incomingUser)
    },
    cleanUser: (context) => {
      context.commit('clearUser')
    }
  },
  modules: {
  }
})
