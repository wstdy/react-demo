//防抖
function debounce(fn, wait = 500) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, wait)
    }
}

//节流
function throttle(fn, wait = 500) {
    let now = Date.now();
    let old = 0;
    return function() {
        if (now - old > wait) {
            fn()
            old = now;
        }
    }
}

let count = 0;
document.onclick = throttle(() => {
    console.log(count++)
})