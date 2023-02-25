<template>
  <div >
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: "App",
    methods: {
      getStudents(){
        // 配置了代理服务器，向代理服务请求数据
        // 请求流程：axios -> proxyServer -> remoteServer
        this.$http.get("http://localhost:8080/ghostclock/get").then(
          response => {
            console.log("请求成功了", response.data);
          },
          error => {
            console.log("请求失败", error.message);
          }
        )
      }
    },
  }
</script>