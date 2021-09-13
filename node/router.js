const express = require("express");

const router = express.Router();

//连接mysql
const {mysqlUtil} = require('./mysql/index')

mysqlUtil.query('select * from parent').then((res)=>{
    console.log(res[0].id);
})

//登录
router.get("/login",(req,res)=>{
    console.log('req', req.params);
    console.log('req', req.body);
    res.send({code: 1})
})

module.exports = router