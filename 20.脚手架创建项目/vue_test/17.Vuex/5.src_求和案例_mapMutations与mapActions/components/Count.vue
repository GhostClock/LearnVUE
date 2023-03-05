<template>
  <div >
    <h1>当前求和为：{{ sum }} </h1>
    <h3>放大10倍后为：{{ bigSum }} </h3>
    <h3>我在{{ school }}，学习{{ subject }} </h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment(number)">+</button>
    <button @click="decrement(number)">-</button>
    <button @click="addOdd(number)">当前求和为奇数再加</button>
    <button @click="addWait(number)">等一等再加</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
  export default {
    name: "Count",
    data() {
      return {
        number: 1, //用户选择的数字
      }
    },
    computed: {
      // 靠程序员自己生成的计算属性
      /*
      sum(){
        return this.$store.state.sum
      },
      school() {
        return this.$store.state.school
      },
      subject() {
        return this.$store.state.subject
      },
      */
      // 借助mapState生成计算属性，从state中读取数据 --（对象写法）
      // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),

      // 借助mapState生成计算属性，从state中读取数据 --（数组写法）
      ...mapState(['sum', 'school', 'subject']),

      /*
      bigSum() {
        return this.$store.getters.bigSum
      }
      */
      // 借助mapGetters生成计算属性，从getters中读取数据 --（对象写法）
      // ...mapGetters({bigSum: 'bigSum'}),
      
      // 借助mapGetters生成计算属性，从getters中读取数据 --（数组写法）
      ...mapGetters(['bigSum']),
     
    },
    methods: {
      /* 程序员自己写方法
      // +
      increment() {
        // Vuex：第一步
        // this.$store.dispatch('add', this.number)
        // 无重要处理逻辑，可以直接向mutations发送数据
        this.$store.commit('ADD', this.number)
      },

      // -
      decrement() {
        // this.$store.dispatch('sub', this.number)
        this.$store.commit('SUB', this.number)
      },
      */
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations -- (对象写法)
      ...mapMutations({increment: 'ADD', decrement: 'SUB'}),
      
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations -- (对象写法)
      // ...mapMutations(['ADD', 'SUB']),
      
      /* 程序员自己写方法
      // 当前求和为奇数再加
      incrementOdd() {
        this.$store.dispatch('addOdd', this.number)
      },

      // 等一等再加
      incrementWait() {
        this.$store.dispatch('addWait', this.number)    
      },
      */

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions -- (对象写法)
    // ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'})

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions -- (数组写法)
    ...mapActions(['addOdd', 'addWait'])

    },
    mounted() {
      console.log("Count组件", this);
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
  
</style>