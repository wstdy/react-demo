class Vue {
    constructor(options) {
        this.$option = options || {};
        // 1.接收传递过来的选项,并且进行保存
        this.$data = options.data || {};
        this.$el = typeof options.el === 'string'?document.querySelector(options.el) : el;
        // 2.把data转换成getter,setter方法
        this._proxyData(this.$data);
        // 3.调用observer对象监听数据变化
        new Observer(this.$data);
        // 4.调用complier解析指令或者插值表达式
        new Compiler(this)
    }
    _proxyData(data) {
        Object.keys(data).forEach((key) => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get: function(){
                    return data[key];
                },
                set: function(news) {
                    if (data[key] === news) {
                        return;
                    } else {
                        data[key] = news
                    }
                }
            })
        })
    }
}