// 변수의 특징 : 선언, 할당, 범위

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