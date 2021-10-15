# 服务端渲染 
## React.js(Next.js https://www.nextjs.cn/) Vue.js(Nuxt.js https://www.nuxtjs.cn/)
# 网络请求
 ## get与post区别
  1. get请求快一倍添加到书签中,也可以保存在浏览器历史记录中,post不能
  2. get请求可以被浏览器缓存,post不能
  3. get请求受到url长度的限制,post请求理论上不会
  4. get请求只能传输ASCII字符,而POST请求可以传输二进制数据
  5. get请求产生一个TCP数据包post请求产生两个TCP数据包
 ## 网络七层协议
  * 物理层--数据链路层--网络层--传输层(TCP/IP)--会话层--表示层--应用层
 ## 域名解析过程
  * 本地域名服务器->根域名服务器->com顶级域名服务器->google.com域名服务器
 ## 三次握手四次挥手
 * https://blog.csdn.net/u012194956/article/details/79110212
 ## http状态码
 * 1xx: 信息，服务器收到请求，需要请求者继续执行操作
 * 2xx: 成功，操作被成功接收并处理
 * 3xx: 重定向,需要进一步操作以完成请求 (301永久重定向,302临时重定向)
 * 4xx: 请求错误,客户端发送的请求有问题 (401要求用户的身份认证,404表示请求资源不存在)
 * 5xx: 服务器错误,表示服务端在处理请求的时候发生了错误
# 闭包
 ## 概念
  * 闭包是有权限访问其他函数作用域内的变量的一个函数
  * 由于在js中,变量的作用域属于函数作用域,在函数执行后作用域及就会被清理,内存也随之回收,但是由于闭包是建立
    在一个函数内部的子函数,由于其可以访问上级作用域的原因,即使上级函数执行完,作用域也不会随之销毁,这时子函
    数--也就是闭包,便拥有访问上级作用域中的变量的权限,即使上级函数执行完后作用域内的值也不会被销毁
  * 产生闭包必须保证外层函数执行完毕时,内部函数的引用持续存在
 ## 场景
  * setTimeout
    ```javascript
    //setTimeout一个函数不能传递参数
    function fn(a) {
        return function() {
            console.log(a)
        }
    }
    setTimeout(fn(1), 1000);
    ```
  * 封装私有属性
    ```javascript
    //setTimeout一个函数不能传递参数
    function fn(a) {
        return function() {
            console.log(a)
        }
    }
    setTimeout(fn(1), 1000);
    ```
# 原型
 ## 
# 跨域
 ## 出现原因
 * 因为浏览器出于安全的考虑,对同源策略的一种实现,协议/域名/端口不一致就会出现跨域问题
 ## 解决方案
  * 修改浏览器的安全设置(不推荐)
  * JSONP
  * 跨域资源共享CORS(Cross-Origin Resource Sharing)
  * iframe(不推荐)
  * 反向代理
# 技巧
 ## 判断数据类型
  1. typeof 返回结果有: number,boolean,string,function,object,undefined
  2. instanceof 返回true,false
  3. Object.prototype.toString.call() (推荐使用)
  4. contructor
  5. Array.isArray() 返回true,false (判断是否为数组)
 ## 