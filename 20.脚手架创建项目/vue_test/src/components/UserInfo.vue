
<template>
  <div class="userInfo">
    <h2>用户姓名：{{ name }}</h2>
    <h2>用户性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点击number++</button>
    <button @click="sendUserInfoName">点击把用户名给App</button>
    <button @click="unbind">解绑userInfoAction事件</button>
    <button @click="death">销毁当前UserInfo组件的实例(vc)</button>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                name: "张三",
                sex: "男生",
                number: 0
            }
        },
        methods:{
          sendUserInfoName() {
            // 触发UserInfo组件实例身上的userInfoAction事件
            this.$emit('userInfoAction', this.name, 666, 888, 999)
            this.$emit("demo")
          },
          unbind() {
            // this.$off("userInfoAction")// 解绑一个自定义事件
            // this.$off(["userInfoAction", "demo"]) // 解绑多个自定义事件
            this.$off() //解绑所有自定义事件
          },
          death() {
            this.$destroy()// 销毁了当前UserInfo组件的实例，销毁后所有UserInfo实例的自定义事件全都不奏效了
          },
          add() {
            console.log("add回调被调用了");
            this.number ++
          }
        }
    }
</script>

<style scoped>
  .userInfo {
    background-color: blueviolet;
    padding: 5px;
    margin-top: 30px;
  }
</style>