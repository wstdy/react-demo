const express = require("express");

const router = express.Router();
console.log(1)
//连接mysql
const {mysqlUtil} = require('./mysql/index')

// mysqlUtil.query('select * from parent').then((res)=>{
//     console.log(res[0].id);
// })
const jwt = require('jsonwebtoken');

//登录
router.post("/login",(req,res)=>{
    const {userName, password} = req.body;
    let sql = `select * from user a where a.userName = '${userName}' and a.password = '${password}'`;
    mysqlUtil.query(sql).then((data) => {
        if (Array.isArray(data) && data.length > 0) {
            const token = jwt.sign({id: data[0].id, userName: data[0].userName,name : data[0].name}, 'jqwklehqwjklekjlqwhjekq');
            res.send(token)
        } else {
            res.status(400).send({msg: '用户名密码错误!'});
        }
    });
})

module.exports = router