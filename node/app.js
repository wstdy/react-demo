const express = require("express");
const router = require("./router")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(3000,()=>{
    console.log("端口3000，服务启动成功!")
})