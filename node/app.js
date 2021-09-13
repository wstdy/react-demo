const express = require("express");
const router = require("./router")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(5000,()=>{
    console.log("端口5000，服务启动成功!")
})