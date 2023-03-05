// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

import countOptions from "./count";
import personOptions from "./person";

// 使用Vuex
Vue.use(Vuex)

// 创建并导出(暴露)store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
})

