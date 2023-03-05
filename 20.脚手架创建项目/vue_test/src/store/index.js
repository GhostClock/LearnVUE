// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 使用Vuex
Vue.use(Vuex)

// 准备actions --- 用于相应组件中的动作
const actions = {}
// 准备mutations --- 用于操作数据（state）
const mutations = {}
// 准备state --- 用于存储数据
const state = {}

// 创建并导出(暴露)store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

