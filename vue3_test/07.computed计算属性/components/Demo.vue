<template>
  <h1>一个人的信息</h1>
  姓：<input type="input" v-model="person.firstName" />
  <br />
  名：<input type="input" v-model="person.lastName" />
  <br />
  <span>全名：{{ person.fullName }}</span>
  <br />
  全名：<input type="input" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  /* 这是Vue2的写法
  computed: {
    fullName() {
      return this.person.firstName + "-" + this.person.lastName;
    },
  }, */
  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    
    // Vue3里面的计算属性
    // 计算属性：简写 没有考虑计算属性被修改的情况
    /* person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    }) */

    // 计算属性：完整写法 考虑读和写
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(newValue) {
        const nameArr = newValue.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    // 返回一个对象 常用
    return {
      person,
    };
  },
};
</script>
