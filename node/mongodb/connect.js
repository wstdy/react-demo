const mongose =require('mongoose')
//第一个参数表示连接的数据库test，
//第二个参数表示关闭默认警告
mongose.connect('mongodb://localhost/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err=>{
    if(err){
      console.log("连接失败")
    }else{
      console.log("连接数据库成功")
    }
  })