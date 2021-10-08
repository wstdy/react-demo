function fn() {
    console.log(x);
}

function show(f) {
    var x = 20;
    (function(){
        console.log('x', x)
        f()
    })()
}

show(fn)