import { createStore } from 'vuex';
import axios from 'axios';
import { INCREMENT_N } from "./mutation-typs";

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
      banners: [],
    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    },
    decrement(state) {
      state.counter --
    },
    [INCREMENT_N](state, payload) { // 接受参数
      state.counter += payload.num
    },
    getBannerData(state, payload) {
      state.banners = payload
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
  },
  actions: {
    // 放置函数
    incrementAction(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    },
    getHomeMultidata({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('http://123.207.32.32:8000/home/multidata').then(response => {
          commit('getBannerData', response.data.data.banner.list)
          resolve('OK')
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
})

export default store

