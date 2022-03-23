const ex01 =  function(param, callback) {
    //
    //  비동기 코드: 파일 시스템 접근, 네트워크통신, SQL to DB, setTimeout
    //
    setTimeout(function() {
        if(param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 2000);
}




//  callback은 무조건 앞자리를 error로 주고 사용해라 -> 아래형식으로 사용해라
//  test01 : success
ex01('param-data', function(error, res) {
    if(error) {
        console.error(error);
    } else {
        console.log(res);
    }
});

//  test01 : fail
ex01('param-error', function(error, res) {
    if(error) {
        console.error(error);
    } else {
        console.log(res);
    }
});

console.log("wait..........");