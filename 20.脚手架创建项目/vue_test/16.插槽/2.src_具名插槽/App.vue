<template>
  <div class="container">
    <CategoryList title="美食">
      <img slot="center" src="https://img2.baidu.com/it/u=2192935436,1889428079&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800" alt="火锅">
      <a class="foot" slot="footer" href="https://www.baidu.com">更多美食</a>
    </CategoryList>

    <CategoryList title="游戏" :listData="games" >
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index"> {{ game }} </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单击游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </CategoryList>

    <CategoryList title="电影">
      <!-- autoplay去掉自动播放 -->
      <video slot="center" controls> 
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>
      <!-- 使用template时，除了slot="footer", 还可以v-slot:footer -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </CategoryList>

  </div>
</template>

<script>
  import  CategoryList  from "./components/CategoryList.vue";
  export default {
    name: "App",
    components: { CategoryList },
    data() {
      return {
        foods: ["火锅", "牛羊", "小龙虾", "牛排"],
        games: ["红色警戒", "穿越火线", "QQ劲舞团", "超级玛丽"],
        films: ["《教父》", "《流浪地球》", "《三体-死神永生》"],
      }
    },
  }
</script>

<style scoped>
  .container, .foot {
    /* 横向布局 */
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>