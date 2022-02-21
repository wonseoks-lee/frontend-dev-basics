/*
변수의 범위 (Scope)
1.  자바스크립트느는 어휘에서 변수의 범위를 알 수 있다. (Lexical Scope)
2.  ES6 이전 ( <= ES5)
    - 자바와 같은 블록범위를 지원하지 못했다.
    - 함수범위
    - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
    - 만약에 var 키워드가 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다. (hoisting)
3.  ES6 이후 (ES6)
    - Block Scope을 적용할 수 있는 두 개의 키워드를 지원(let, const)
    - let : 변수
    - const : 상수

4. 결론
    const / let 만 사용하고 반드시 붙히자. (안붙히면 hoisting)

*/

// 세미콜론은 표현식 -> 구문식 으로 만든다
var i = 10;
var f = function(){
    var i = 20;
    j = 100;
    console.log(i);
    i = j - 1;
}

// var는 함수블록에서 함수 범위 안에서만 적용된다 
if(90 + 10 == 100){
    var k = 20;
}

// 자바에서는 대입[구문]이라고하지만 자바스크립트에서는 대입[식] 이라고 한다

// 블락 범위에서만 쓰고 사라짐
{
let x = 10;
const PI = 3.14;
x = 100;

//상수이기 때문에 에러
// PI = 0;
}

//error : 접근이 안된다
//console.log(x);
//console.log(PI);

// 전역으로 선언
let c = 10;


f();
console.log(i);
console.log(j);
console.log(k);

o = 10;
o;

var p;
console.log(p);