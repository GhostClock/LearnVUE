<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
    export default {
        name: "About",
        mounted() {
          console.log("About组件挂载完毕", this);
        },
        beforeDestroy() {
          console.log("About组件即将被销毁");
        },

        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
          console.log('about组件-beforeRouteEnter');
          if(to.meta.isAuth){
              if (localStorage.getItem('auth') === 'xyz123') {
                  next()
              } else {
                  alert("鉴权不过，不能查看相关内容!!!")
              }
          } else {
              next()
          }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
          console.log('about组件-beforeRouteLeave');

          next()
        }
    }
</script>
