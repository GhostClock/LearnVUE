<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点击上方的DOM元素</button>
    <WebSite ref="webSite"/>
  </div>
</template>

<script>
    // 导入WebSite组件
    import WebSite from './components/WebSite.vue'
    export default {
        name:'App',
        components:{ WebSite },
        
        data() {
            return {
                msg: "欢迎学习Vue"
            }
        },
        methods: {
            showDOM() {
                // 真实DOM元素
                console.log(this.$refs.title);
                // 真实DOM元素
                console.log(this.$refs.btn);
                // WebSite组件的实例对象（VC）
                console.log(this.$refs.webSite);
            }
        },
    }
</script>

<style>

</style>