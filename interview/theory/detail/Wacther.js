class Wacther{
    constructor(vm, key ,cb) {
        this.vm = vm;
        //data中属性的名称
        this.key = key;
        //回调函数,负责更新视图
        this.cb = cb;
        Dep.target = this;
        //获取更新前的旧值
        this.oldValue = vm[key];
        Dep.target = null;
    }
    update() {
        let newValue = this.vm[this.key];
        if (this.oldValue === newValue) {
            return;
        }
        this.cb(newValue)
    }
}
