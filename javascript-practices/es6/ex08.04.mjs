/**
 * named export I
 * 
 * exports(require.js)와 유사하다. 이 모듈을 import할 때에는 destructing이 가능하다.
 */

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

o = {
    add,
    subtract
}

export {add, subtract}