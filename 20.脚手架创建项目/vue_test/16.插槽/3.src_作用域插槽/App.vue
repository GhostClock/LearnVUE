<template>
  <div class="container">

    <CategoryList title="游戏" >
      <!-- Vue2.5以上的版本使用scope有警告，需要使用slot-scope -->
      <template slot-scope="data">
        <ul>
          <li v-for="(game, index) in data.games" :key="index"> {{ game }} </li>
        </ul>
      </template>
    </CategoryList>

    <CategoryList title="游戏" >
      <!-- 结构赋值 -->
      <template slot-scope="{games}">
        <ol>
          <li style="color:green" v-for="(game, index) in games" :key="index"> {{ game }} </li>
        </ol>
      </template>
    </CategoryList>

    <CategoryList title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(game, index) in games" :key="index"> {{ game }} </h4>
      </template>
    </CategoryList>

  </div>
</template>

<script>
  import  CategoryList  from "./components/CategoryList.vue";
  export default {
    name: "App",
    components: { CategoryList },
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