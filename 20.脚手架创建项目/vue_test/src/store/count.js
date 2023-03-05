// 求和功能相关的配置
export default {
    namespaced: true,
    actions:{
        addOdd(context, value) {
            console.log("actions中的addOdd被调用了");
            console.log("处理了一些事情---addOdd");
            if (context.state.sum % 2) {
                context.commit("ADD", value)
            }
        },
        addWait(context, value) {
            console.log("actions中的addWait被调用了");
            setTimeout(() => {
                context.commit("ADD", value)
            }, 500);
        },
    },
    mutations:{
        ADD(state, value) { // 函数一般写成大写
            console.log("mutations中的ADD被调用了");
            state.sum += value
        },

        SUB(state, value) {
            console.log("mutations中的SUB被调用了");
            state.sum -= value
        },
    },
    state:{
        sum: 0, // 当前的合
        school: '尚硅谷',
        subject: '前端',
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    },
}