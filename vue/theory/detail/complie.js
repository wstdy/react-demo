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
        }
    }
    //编译元素节点,处理指令
    compileElement(node) {
        console.log('node', node)
        Array.from(node).forEach((attr) => {
            //获取属性名字
            let attrName = attr.name;
            if (this.isDirective(attrName)) {

            }
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