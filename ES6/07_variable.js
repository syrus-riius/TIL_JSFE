// 변수의 특징 : 선언, 할당, 범위, 호이스팅


//const, let은 재선언이 금지됨.
//const, let의 스코프는 블록스코프{} (var : 함수스코프)

// const는 재할당이 금지됨. - 상수


const obj = {
    name : 'kim',
}

obj.name = 'park' // 잘 변경됨.
console.log(obj); //park

// 위의 경우는 엄밀히 말하면 변수를 재할당 한것이 아님.

// Object.freeze(obj) - 이 경우에는 불변

Object.freeze(obj)

obj.name = 'lee'
console.log(obj)

//호이스팅 : 변수/함수의 선언을 맨 위로 끌고 오고 할당은 후에 한다.



// 전역변수

// window.변수명 = '값' 형태로 브라우저에서 전역변수 설정 가능


// 예제

if (true) {
    var b = 2;
    if (true) {
        let b = 3;
    }
    console.log(b); // let의 스코프는 {}블록이기 때문에 출력은 2로 된다.

}

for (var i = 0; i < 5; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
}

// 5가 5번 나오는 이유는
// var가 5번 미리 다 돌았기 때문임
// 해결을 위해서는 블록스코프인 let을 사용한다.
