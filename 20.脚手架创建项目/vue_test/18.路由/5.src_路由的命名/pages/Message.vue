<template>
    <div>
        <ul>
            <li v-for="obj in messageList" :key="obj.id"> 
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${obj.id}&title=${obj.title}`">{{ obj.title }}</router-link> -->

                <!-- 跳转路由并携带query参数，to的对象写法  推荐写法-->
                <router-link :to="{
                    name: 'detail',
                    query:{
                        id: obj.id,
                        title:obj.title
                    }
                }">
                    {{ obj.title }}
                </router-link>
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
    }
</script>
