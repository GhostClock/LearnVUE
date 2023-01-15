
export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 3)
        })
        
        // 全局自定义指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时 一上来
            bind(element, binding) {
                console.log(this); //注意：此处的this是Window
                console.log('bind');
                element.value = binding.value
            },
            // 指令所在元素被插入页面是
            inserted(element, binding) {
                console.log('inserted');
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                console.log('updated');
                element.value = binding.value
            },
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })

        // getVue原型上面加一个方法(vm和vc都能用)
        Vue.prototype.hello = () => { alert("Hello !!!") }

    }
}
