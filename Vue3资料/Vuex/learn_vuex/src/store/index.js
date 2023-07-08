import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'GC',
      age: 18,
      height: 1.88,

      number1: 100,
      number2: 200,

      books: [
        {name: 'book1', price: 100, count: 5},
        {name: 'book2', price: 200, count: 4},
        {name: 'book3', price: 300, count: 3},
        {name: 'book4', price: 400, count: 2},
        {name: 'book5', price: 500, count: 1},
      ],
      discount: 0.6,
    }
  },
  actions() {

  },
  mutations: {
    add() {

    },
    sub() {

    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      state.books.forEach(book => {
        totalPrice += book.price * book.count
      });
      return totalPrice * getters.currentDiscount // 使用getters调用另一个getter
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    // 返回大于n的价格
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let totalPrice = 0
        for (const book of state.books) {
          if (book.count <= n) continue
          totalPrice += book.count * book.price
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    },
    heightInfo(state) {
      return `height: ${state.height}`
    },
  }
})

export default store

