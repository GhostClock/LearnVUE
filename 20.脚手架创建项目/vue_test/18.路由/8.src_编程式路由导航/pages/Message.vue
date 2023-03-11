<template>
    <div>
        <ul>
            <li v-for="obj in messageList" :key="obj.id"> 
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${obj.id}/${obj.title}`">{{ obj.title }}</router-link> -->

                <!-- 跳转路由并携带params参数，to的对象写法  推荐写法-->
                <router-link :to="{
                    name: 'detail', // 使用params传递参数时，必须使用name，不能用path
                    query:{
                        id: obj.id,
                        title:obj.title
                    }
                }">
                    {{ obj.title }}
                </router-link>
                <button @click="pushShow(obj)">push查看</button>
                <button @click="replaceShow(obj)">replace查看</button>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                messageList: [
                    {id: "001", title: "消息001"},
                    {id: "002", title: "消息002"},
                    {id: "003", title: "消息003"},
                    {id: "004", title: "消息004"},
                ],
            }
        },
        methods: {
            pushShow(obj) {
                // console.log(this.$router);
                this.$router.push({
                    name: 'detail', 
                    query:{
                        id: obj.id,
                        title:obj.title
                    }
                })
            },
            replaceShow(obj) {
                this.$router.replace({
                    name: 'detail', 
                    query:{
                        id: obj.id,
                        title:obj.title
                    }
                })
            }
        },
    }
</script>
