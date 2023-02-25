<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading"> Search Github Users </h3>
    <div>
      <input 
        type="text" 
        placeholder="enter the name you search"
        v-model="keyWord"
      />
      &nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  import "bootstrap"
  import axios from "axios"
  export default {
      name: "SearchCom",
      data() {
        return {
          keyWord : ''
        }
      },
      methods: {
        searchUsers(){
          let url = `https://api.github.com/search/users?q=${this.keyWord}`
          axios.get(url).then(
            response => {
              console.log("请求成功了");
              this.$bus.$emit("getUsers", response.data.items)
            },
            error => {
              console.log("请失败了", error.message);
            }
          )
        }
      },
  }
</script>
