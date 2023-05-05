<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点击+1</button>
  <hr>

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h3 v-show="person.car">座驾：{{ person.car }}</h3>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
  <button @click="showRawPerson">输入最原始的person</button>
  <button @click="addCar">给Person添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price += 10">换价格</button>
</template>

<script>
/**
 * toRaw
 *  作用：将一个由reactive生成的响应式对象转为普通对象
 *  使用场景：用于读取响应式对象的普通对象，对这个普通对象的所有操作，不会引起页面更新
 * 
 * markRaw
 *  作用：标记一个对象，起始永远不会再成为响应式对象
 *  使用场景：
 *    1.有些值应被设置为响应式的，例如复杂的第三方类库等
 *    2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
 */
import { reactive, toRefs, ref, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 方法
    function showRawPerson() {
      // toRaw：把响应式数据还原成原始数据
      const p = toRaw(person)
      console.log(p);
    }
    function addCar() {
      let car = {
        name: '奔驰',
        price: 40
      }
      person.car = markRaw(car) // 不会变成响应式的了
    }    

    // 返回一个对象 常用
    return {
      sum,
      showRawPerson,
      addCar,
      person,
      ...toRefs(person) // 只返回一层key
    };
  },
};
</script>
