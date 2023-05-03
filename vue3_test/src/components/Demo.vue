<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="testAction">测试触发一下Demo组件的自定义事件</button>
  <br />
  <slot name="qwe"></slot>
  <slot name="qaz"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  beforeCreate() {
    console.log("--- beforeCreate ---");
  },
  // setup的执行时机：在beforeCreate之前执行一次，this是undefined
  
  /** setup的参数：
   * props: 值为对象，包含：组件外部传递过来，且组件内部声明接受了的属性
   * context: 上下文对象
   *    attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于this.$attrs
   *    slots: 收到的插槽内容，相当于 this.$slots
   *    emit: 分发自定义事件的函数，相当于 this.$emit
   */
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {
    console.log("--- setup: props ---", props);
    console.log("--- setup: attrs ---", context.attrs); // 相当于Vue2中的$attrs
    console.log("--- setup: slots ---", context.slots); // 相当于Vue2中的$slots 插槽
    console.log("--- setup: emit ---", context.emit);   // 相当于Vue2中的$emit,触发自定义事件
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });

    function testAction() {
        // 直接调用
        context.emit('hello', `${person.name} ：${person.age}`)
    }

    // 返回一个对象 常用
    return {
      person,
      testAction,
    };
  },
};
</script>
