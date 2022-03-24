const fetch =  function(param) {
    // 동기로 막아두고 얘는 무조건 반환할거다 = promise
    return new Promise(function(resolve, reject){
        //
        //  비동기 코드: 파일 시스템 접근, 네트워크통신, SQL to DB, setTimeout
        //
        setTimeout(function() {
            if(param === 'param-data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    });
}


if(require.main == module) {
    //  callback은 무조건 앞자리를 error로 주고 사용해라 -> 아래형식으로 사용해라
    //  test01 : success
    fetch('param-data').then(function(res){
        console.log(res);
    })
    
    //  test01 : fail
    fetch('param-error').catch(function(error){
        console.error(error);
    })
    
    //  일반적으로
    // fetch('param....')
    //     .then(res => {
    
    //     })
    //     .catch(error => {
    
    //     })
    
    console.log("wait..........");
} else {
    module.exports = fetch;
}
