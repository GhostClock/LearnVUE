<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: blue">Count组件的求和为：{{ sum }}</h3>
    <input v-model="name" type="text" placeholder="请输入名字"/>
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
    import { nanoid } from "nanoid";
    export default {
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {
                if (!this.name) return alert('输入不能为空')
                const personObj = {id: nanoid(), name: this.name}
                console.log(personObj);
                this.$store.commit('ADD_PERSON', personObj)
                this.name = ''
            }
        },
        computed:{
            personList() {
                return this.$store.state.personList
            },
            sum() {
                return this.$store.state.sum
            },
        },
    }
</script>

<style>

</style>