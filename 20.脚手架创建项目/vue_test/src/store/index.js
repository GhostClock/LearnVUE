// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 使用Vuex
Vue.use(Vuex)

// 准备actions --- 用于相应组件中的动作
const actions = {
    // Vuex：第二步
    /*
    add(context, value) {
        console.log("actions中的add被调用了");
        context.commit('ADD', value)
    },

    sub(context, value) {
        console.log("actions中的sub被调用了");
        context.commit("SUB", value)
    },
    */
    // 处理业务逻辑 耗时操作、网络请求操作
    addOdd(context, value) {
        console.log("actions中的addOdd被调用了");
        console.log("处理了一些事情---addOdd");
        if (context.state.sum % 2) {
            context.commit("ADD", value)
        }

        // context.dispatch("demo1", value)
    },

    // demo1(context, value) {
    //     console.log("处理了一些事情---demo1");
    //     context.dispatch("demo2", value)
    // },
    // demo2(context, value) {
    //     console.log("处理了一些事情---demo2");
    //     if (context.state.sum % 2) {
    //         context.commit("ADD", value)
    //     }
    // },

    addWait(context, value) {
        console.log("actions中的addWait被调用了");
        setTimeout(() => {
            context.commit("ADD", value)
        }, 500);
    },
    
}
// 准备mutations --- 用于操作数据（state）
const mutations = {
    // Vuex：第三步
    ADD(state, value) { // 函数一般写成大写
        console.log("mutations中的ADD被调用了");
        state.sum += value
    },

    SUB(state, value) {
        console.log("mutations中的SUB被调用了");
        state.sum -= value
    },

}
// 准备state --- 用于存储数据
const state = {
    // Vuex：第零部
    sum: 0 // 当前的合
}

// 创建并导出(暴露)store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

