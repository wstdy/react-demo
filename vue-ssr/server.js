const Vue = require('vue')
const express = require("express");
const file = require('fs');
const renderer = require('vue-server-renderer').createRenderer(
    {template: file.readFileSync('./template.html', 'utf-8')}
);

const app = express()

app.get('/',(req,res) => {
    const app = new Vue({
        template: `<div id="app">
                    <h1>{{message}}</h1></div>
                    <div>
                        <input type="text" v-model="message" ></input>
                    </div>
                    </div>`,
        data: {
            message: '你好'
        }
    })
    
    renderer.renderToString(
        app,
        {
            meta: '<meta name="description" content="个人简介">',
            title: '服务端渲染'
        },
        (err, html) => {
            if (err) {
                res.status(500).end('Server Error')
            }
            res.setHeader('Content-type', 'text/html;charset=utf-8')
            res.end(html);
        }
    )
})

app.listen(7000, () => {
    console.log('7000端口启动成功')
})