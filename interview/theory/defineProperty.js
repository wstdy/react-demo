// const proto = Array.prototype;

// const arrryPorto = Object.create(proto)
// const methodList = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

// methodList.forEach((method) => {
//     arrryPorto[method] = function () {
//         proto[method].apply(this, arguments)
//         console.log('监听赋值成功!', method)
//     }
// })

function set(data, key , val) {
    defineReactive(data, key, val);
}

function defineReactive(data, key, val) {
    observe(val); // 递归遍历所有子属性
    let dep = new Dep(); 
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (Dep.target) { // 判断是否需要添加订阅者
                dep.addSub(Dep.target); // 在这里添加一个订阅者
            }
            console.log(data,key,'读取', val);
            return val;
        },
        
        set: function(newVal) {
            if (newVal === val) return; 
            val = newVal;
            dep.notify();
            console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
        }
    });
}
Dep.target = null;
function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    if (Array.isArray(data)) {
        data.__proto__ = proto;
        for (let i = 0; i < data.length; i++) {
            observe(data[i]);
        }
    } else {
        for (const key in data) {
            defineReactive(data, key, data[key]);
        }
    }
};

function Dep() {
    this.subs = [];
    this.addSub = function(sub) {
        this.subs.push(sub);
    },
    this.notify = function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
}

function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();  // 将自己添加到订阅器的操作
    this.update = function() {
        this.run();
    },
    this.run = function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }, 
    this.get = function () {
        Dep.target = this;  // 缓存自己
        var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
        Dep.target = null;  // 释放自己
        return value;
    }
}

let data = {
    user: {
        name: '123',
        age: 123
    },
    list: []
}
observe(data);
data.list.push('123');