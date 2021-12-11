
function 더하기(a, b = 0){ // default 파라미터 : 파라미터 누락되는 경우 적용
    console.log(a + b);
}

더하기(1); // 파라미터 수를 맞추지 않아도 동작됨.


function 더하기2(a, b = 2 * a){ // 수식도 가능, 함수도 가능
    console.log(a + b);
}

더하기2(1); // 값 : 3



function 함수(a,b,c) { // parameter
    // console.log(a,b,c) // argument
    // console.log(arguments[0]); -> 1
    // console.log(arguments[1]); -> 2
    console.log(arguments[2]);
}

함수(1,2,3);


function funcArgs(a,b,c) {
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

funcArgs(2,3,4);