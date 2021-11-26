// 06 함수

//함수의 기본형
function myFn(x){
    return x + 100;
}

const result = myFn(10);
// result에 100+10 이라는 함수의 실행결과가 리턴됨

// 함수의 변형 - 값으로써의 함수, 이름 없는 함수 - 익명함수

function () {
    return 100;
}

//익명함수는 호출이 안되지만 JS 특징으로 변수에 넣을 수 있다.

const myFnV2 = function() { return 100; };

myFnV2();

// 즉시실행 함수 : 코드 내 한번만 실행됨.


(function() {
    console.log('즉시 실행 함수 실행!');
})();


// 가변인자
function sum(a, b, c) {
    return a + b + c;
}

const abcSum = sum(10, 20, 30); //60


// 인자의 개수가 가변적일 때도 처리하게끔. arguments


function sum2(){
    let s = 0
    // arguments : 호출 당시 받은 인자가 배열로 차곡차곡 들어있음.
    // 인자 필요없음.

    for(let i = 0; i < arguments.length; i++){
        s = s + arguments[i];
    }

    return s;
}

// 위의 문제는 가변 인자를 받는지, 파라미터를 안받는지 파악 할 수 없음.

// 전개 파라미터 : rest parameter 

function sum3(...args) {
    let s = 0
    for(let i = 0; i < args.length; i++){
        s = s + args[i];
    }

    return s;
}


function sum3(a, b, ...args) { // a, b는 필수값, 나머지는 가변인자..
    let s = 0
    for(let i = 0; i < args.length; i++){
        s = s + args[i];
    }

    return s;
}
const abcSum2 = sum2(10, 20, 30); //60

/* 
//함수 호출 방법
()
call() :
apply() :
*/

myFnV2();

// .call() .apply() 공통점 : 첫번째 인자로 context 객체를 받음. 
// 차이점
/* 
call : 인자를 10, 20, 30처럼 작성
apply : 인자를 배열에 담아서 작성 [10, 20, 30]
*/


function sum4(a, b, ...args) { // a, b는 필수값, 나머지는 가변인자..
    let s = 0
    for(let i = 0; i < args.length; i++){
        s = s + args[i];
    }
    return s;
}
sum4.call(null, 10, 20, 30);
//call의 경우 호출부를 손 봐야함.

sum4.apply(null, [10, 20, 30]);

const arr = [10, 20, 30];
// arr에 값을 추가해도 함수 호출 코드를 변경하지 않아도 됨.

sum4.apply(null, arr);

// 화살표 함수 : 익명함수가 기본값이다.
// 호출을 위해서 변수에 담는다.
// context, prototype 학습 요.

const sumV2 = (a, b, ...args) => { // a, b는 필수값, 나머지는 가변인자..
    let s = 0
    for(let i = 0; i < args.length; i++){
        s = s + args[i];
    } 
    return s;
}

//화살표 함수의 변형 : 한줄함수

const ten = () => 100;
// 함수인데 바로 값이 온다 : 코드가 한 줄이고 결과를 바로 리턴하는 경우 한줄 표시 가능
/*
아래와 같은의미
const ten = () => {
    return 100;
}
*/ 

// 인자가 하나일 때 괄호 생략 가능
const ten = x => 100 + x;
ten(10); // 110

//인자가 여러개일때는 괄호 쓰고, 여러 줄일때는 여러 줄로 표현 return 필수

// 많이 쓰기 때문에 의도적으로 사용/훈련 필요

//생성기 함수 (generator function)
// 최초에 호출하면 함수가 실행되지 않고 실행 준비상태로만 만듦
// 객체를 하나 만들고 리턴

function* gen() {
    // yield

    yield 10;
    yield 20;
    return 30;
}


const g = gen();

g.next();// yield 10
g.next(); // yield 20
g.next();  // return 30

// 비동기 함수 async 함수
// promise, callback(1급함수) 이해가 필요함.
async function myTask() {

}




