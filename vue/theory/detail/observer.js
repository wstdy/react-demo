class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) {
        if (!data || typeof data !== 'object') {
            return;
        }
        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key]);
        })
    }
    defineReactive(obj, key, value) {
        let that = this;
        this.walk(value)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function(){
                return value;
            },
            set: function(news) {
                if (value === news) {
                    return;
                } else {
                    value = news
                    that.walk(news)
                    //发送通知更新视图
                }
            }
        })
    }
}