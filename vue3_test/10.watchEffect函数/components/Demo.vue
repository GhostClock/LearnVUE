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
import { ref, watch, reactive, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // 监视
    /* watch(sum, (newValue, oldValue) => {
      console.log('sum值变化了', newValue, oldValue);
    }, { immediate: true }) */
    /**
     * watch的套路：既要指明监视的属性，也要指明监视的回调
     * watchEffect的套路：不用指明监视哪个属性，监视的回调中用到哪个属性，就监视哪个属性
     * watchEffect有点像computed：
     *  1.computed注重的计算出来的值(回调很熟的返回值)，所以必须要写返回值
     *  2.watchEffect更注重的是过程(回调函数的函数体)，所以不用写返回值
     * 
      */
    watchEffect(() => {
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect回调函数执行了');
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
