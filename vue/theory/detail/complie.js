//解析指令和插值表达式
class Compiler{
    constructor(vm) {
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }
    compile(el) {
        let childNodes = el.childNodes;
        Array.from(childNodes).forEach((node) => {
            if (this.isTextNode(node)) {
                this.compileText(node);
            } else if (this.isElement(node)) {
                this.compileElement(node);
            }
            if (node.childNodes && node.childNodes.length !== 0) {
                this.compile(node)
            }
        })
    }
    compileText(node) {
        let reg = /\{\{(.+)\}\}/;
        let value = node.textContent;
        if (value && reg.test(value)) {
            let key = RegExp.$1.trim();
            node.textContent = value.replace(reg, this.vm[key])
            new Wacther(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }
    //编译元素节点,处理指令
    compileElement(node) {
        Array.from(node.attributes).forEach((attr) => {
            //获取属性名字
            let attrName = attr.name;
            if (this.isDirective(attrName)) {
                attrName = attrName.substr(2);
                let key = attr.value;
                this.update(node, key , attrName)
            }
        })
    }
    update(node, key , attrName) {
        let updateFn = this[attrName + 'Updater'];
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }
    //v-text
    textUpdater(node, value, key) {
        node.textContent = value;
        new Wacther(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }
    //v-model
    modelUpdater(node, value, key) {
        node.value = value;
        new Wacther(this.vm, key, (newValue) => {
            node.value = newValue
        })
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }
    //判断元素属性是否为指令
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }
    //判断节点是否为文本节点
    isTextNode(node) {
        return node.nodeType === 3
    }
    //判断节点是否为元素节点
    isElement(node) {
        return node.nodeType === 1
    }
}