const home = {
  namespace: true,
  state() {
    return {
      counter: 100,
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
    doubleCounter(state) {
      state.counter * 2
    }
  }
}
export default home