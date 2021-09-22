let data = {
    msg: 'hello',
    count: 0,
    child: {
        name: '123',
        child: {
            name: 'gangzi'
        }
    }
}

let handler = {
    get: function(target, key) {
        if (target[key] && typeof target[key] === 'object') {
            return new Proxy(target[key], handler)
        }
        console.log('get key', key, target[key])
        return Reflect.get(target, key);
    },
    set: function(target,key,newValue, proxy) {
        // if (target[key] && typeof target[key] === 'object') {
        //     return new Proxy(target[key], handler)
        // }
        if (target[key] === newValue) {
            return;
        }
        console.log('set key', key, target, newValue, proxy);
        Reflect.set(target, key, newValue)
        document.querySelector('#app').innerHTML = JSON.stringify(proxy);
    }
}

let vm = new Proxy(data,handler)
// vm.msg = 'hello world'
vm.child.child.name = '4566';
// console.error(vm)