<template>
  <div class="container">
    <CategoryList title="美食">
      <img src="https://img2.baidu.com/it/u=2192935436,1889428079&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800" alt="火锅">
    </CategoryList>

    <CategoryList title="游戏" :listData="games" >
      <ul>
        <li v-for="(game, index) in games" :key="index"> {{ game }} </li>
      </ul>
    </CategoryList>

    <CategoryList title="电影">
      <video controls autoplay>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>
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
  .container {
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
</style>