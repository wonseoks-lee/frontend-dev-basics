/*
변수와 데이터 타입  
[기본타입(primitive, 원시)]
- undefined
- number
- string
- boolean
[객체]
- object
    1. new 생성자함수() 사용해서 생성
    2. 
    3.
    4.
- function

*/

console.log("=======기본타입(primitive, 원시)========");
var u = undefined; // var u; 동일,
var i = 10;
var s = "Hello World";
var b = true;

console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));


console.log("=======객체1 : object type========");
var i2 = new Number(1);
var s2 = new Number("Hello World");
var b2 = new Boolean(false);
var o = new Object();
var a = new Array(); // 배열도 객체다 !!

console.log("i2:" + typeof(i2));
console.log("s2:" + typeof(s2));
console.log("b2:" + typeof(b2));
console.log("o:" + typeof(o));
console.log("a:" + typeof(a));

function f() {
    console.log("!!!");
}

f();

var o = new f();

console.log("=======객체2 : object type========");


