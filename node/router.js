const express = require("express");

const router = express.Router();

//连接mysql
const {mysqlUtil} = require('./mysql/index')

mysqlUtil.query('select * from parent').then((res)=>{
    console.log(res[0].id);
})

//登录
router.post("/login",(req,res)=>{
    let name = req.body.name
    let password = req.body.password
    User.findOne({name:name,password:password},(err,result)=>{
        if(result == null){
            res.send("no")
        }else{
            res.send(result)
            console.log(result)
            var str = `管理员:${result.username},登录成功`
            system(str)
        }
    })
})

module.exports = router