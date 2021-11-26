// 06 함수

//함수의 기본형
function myFn(x){
    return x + 100;
}

const result = myFn(10);
// result에 100+10 이라는 함수의 실행결과가 리턴됨

//g함수의 변형 - 값으로써의 함수, 이름 없는 함수 - 익명함수

function() {
    return 100;
}

//익명함수는 호출이 안되지만 JS 특징으로 변수에 넣을 수 있다.

const myFnV2 = function() { return 100; };

myFnV2();

// 즉시실행 함수 : 코드 내 한번만 실행됨.


(function() {
    console.log('즉시 실행 함수 실행!');
})();



