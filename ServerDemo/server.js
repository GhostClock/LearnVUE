const express = require("express");

const history = require('connect-history-api-fallback');

const app = express()

// 配置history
app.use(history())

// 配置主页面路径
app.use(express.static(__dirname+'/static'))

app.get('/person', (req, res) => {
    res.send({
        name:"Tom",
        age: 20
    })
})

app.listen(5005, (error) => {
    if (!error) {
        console.log("服务器启动成功！！！");
    }

})