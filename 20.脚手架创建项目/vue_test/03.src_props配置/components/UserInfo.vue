
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>用户姓名：{{ name }}</h2>
    <h2>用户性别：{{ sex }}</h2>
    <h2>用户年龄：{{ myAge+1 }}</h2>
    <button @click="updateAge">点击修改年龄</button>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            //【注意】：再准备data数据
            return {
                msg: "我是0号用户",
                myAge: this.age
            }
        },
        methods: {
            updateAge() {
                this.myAge ++
            }
        },
        // 1.简单声明接受数据 【注意】：先准备外部传入的数据
        props:[ 'name', 'sex', 'age']

        // 2.接受的同时对数据进行类型限制
        /* props:{
            name: String,
            sex: String,
            age: Number
        }, */

        // 3.接受的同时对数据：进行类型限制+默认值指定+必要性的限制
        // 最完整的写法
        /* props:{
            name:{
                // 数据类型为字符串
                type: String,
                // 必须要传
                required: true,
            },
            age:{
                type: Number,
                default: 99 // 默认值
            },
            sex:{
                type: String,
                required: true
            }
        } */
        
    }
</script>