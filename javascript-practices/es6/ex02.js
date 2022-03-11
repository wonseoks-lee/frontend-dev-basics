/**
 * const: Block Scope의 상수
 */

//1. block scope확인
try {
    if(true) {
        const NUM = 10;
    }
} catch(e) {
    console.log('[error] ' + e);
}

//2. error: 대입(Assginment 에러)
try {
    const NUM = 10;
    NUM = 20;
} catch(e) {
    console.log('[error] ' + e);
}