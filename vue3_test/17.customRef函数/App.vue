<template>
  <input type="text" v-model="keyWord">
  <h3> {{ keyWord }}</h3>

</template>

<script>
import { customRef } from "vue";

/**
 * customRef
 *  作用：创建一个自定义的ref，并对依赖项跟踪和更新触发进行显示控制
 *  下面的代码是实现防抖效果
 */

export default {
  name: "App",
  setup() {
    // 自定义的ref - myRef
    function myRef(value, delay) {
      console.log('-- myRef --', value);
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`外界从myRef这个容器中读取了数据，把 ${value} 返回出去了`);
            track() // 通知Vue追踪value的变化 可以理解成:提前和git商量一下，让其认为这个value是有用的
            return value // 第三步
          },
          set(newValue) {
            console.log(`外界把myRef这个容器中读取了数据修改了， ${newValue} `);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue // 第一步
              trigger() // 通知Vue重新解析模板 第二步
            }, delay);
          },
        }
      })
    }

    // let keyWord = ref('Hello'); // 使用Vue提供的ref
    let keyWord = myRef('Hello', 500); // 使用自定义的ref

    return {
      keyWord,
    };
  },
};
</script>
