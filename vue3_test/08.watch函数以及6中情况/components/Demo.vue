<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <hr />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.j1.salary++">增加薪资</button>
</template>

<script>
import { ref, watch, reactive } from "vue";
export default {
  name: "Demo",
  /* Vue2里面的写法
  watch: {
    // 简写
    // sum(newValue, oldValue) {
    //   console.log('sum的值变化了', newValue, ' ', oldValue);
    // } 
    // 完整写
    sum: {
      immediate: true, // 立即监视
      deep: true, // 深度监视
      handler(newValue, oldValue) {
        console.log('sum的值变化了', newValue, ' ', oldValue);
      }
    }
  }, */
  setup() {
    // 数据
    let sum = ref(0);

    /** watch的两个小坑
     * 1.监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视 deep配置无效
     * 2.监视reactive定义的响应式数据中某个属性时 deep配置有效
     */

    // 情况一：监视ref所定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log('sum的值变化了', newValue, ' ', oldValue);
    }, {
      immediate: true, // 立即监视
    }) */

    let msg = ref("你好啊");
    // 情况一：监视ref所定义的多个响应式数据
    /* watch([sum, msg], (newValue, oldValue) => {
      console.log('sum/msg的值变化了', newValue, ' ', oldValue);
    }, {
      immediate: true, // 立即监视
    }) */

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // 情况三：监视reactive所定义的一个响应式数据,全部属性 实际编码中常用
    //  1.注意：此处无法正确的获得oldValue ⚠️
    //  2.注意：强制开启了深度监视  deep配置无效
    /* watch(person, (newValue, oldValue) => {
      console.log("person变化了", newValue, oldValue);
    }, {
      deep: false // deep在Vue3里面无效
    }); */

    // 情况四：监视reactive所定义的响应式数据中的某一个数据
    /* watch(() => { // 写成函数返回值
      return person.age
    }, (newValue, oldValue) => {
      console.log("person的age变化了", newValue, oldValue);
    }); */

    // 情况五：监视reactive所定义的响应式数据中的某些属性
    // 写成数组
    /* watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log("person的age/name变化了", newValue, oldValue);
    }); */

    // 特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log("person的job变化了", newValue, oldValue);
    }, {
      deep: true // 这里由于是监视的是reactive定义的对象中的某个属性,所以deep有效
    })

    // 返回一个对象 常用
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
