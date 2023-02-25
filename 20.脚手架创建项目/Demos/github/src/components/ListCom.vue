<template>
  <div class="row">
    <div class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px;"/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ListCom",
        data() {
          return {
            users: []
          }
        },
        mounted() {
          // 使用全局事件总线获得数据
          this.$bus.$on("getUsers", (users) => {
            console.log("List 组件收到了数据：", users);
            this.users = users
          })
        },
    }
</script>

<style scoped>
.album {
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }
  .card {
    float: left;
    widows: 33.33%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
  }
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text {
    font-size: 85%;
  }
</style>