import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'GC',
      age: 18,
      height: 1.88
    }
  },
  actions() {

  },
  mutations: {
    add() {

    },
    sub() {

    }
  }
})

export default store

