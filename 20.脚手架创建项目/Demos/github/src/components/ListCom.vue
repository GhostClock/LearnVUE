<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px;"/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>

    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用!</h1>

    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>

    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>

  </div>
</template>

<script>
    export default {
        name: "ListCom",
        data() {
          return {
            info: {
              isFirst: true,
              isLoading: false,
              errMsg: '',
              users: []
            }
          }
        },
        mounted() {
          // 使用全局事件总线获得数据
          this.$bus.$on("updateListData", (dataObj) => {
            console.log("List 组件收到了数据：", dataObj);
            // 用字面量的形式去合并对象
            this.info = {...this.info, ...dataObj}
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