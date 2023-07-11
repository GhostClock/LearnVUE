import { createStore } from 'vuex';
import home from './modules/home'
import user from "./modules/user";

const store = createStore({
  state() {
    return {
      counter: 0,
    }
  },
  actions: {
    incrementAction({commit}) {
      commit('increment')
    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    }
  },
  getters: {

  },
  modules:{
    home,
    user
  },
})

export default store

