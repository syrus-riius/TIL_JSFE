/* 
식별자 명명 규칙
숫자시작 안됨
공백안됨
길이 제한 없음
*/

let age = 10;

/*
속성명
식별자 규칙과 동일

*/
const o = {
  age: 10,
  ["myName"]: "김",
  ["123my Name"]: "박",
};

//myName은 데이터이지만 식별자이다.
// 이 경우는 식별자 규칙을 따르지 않음
console.log(o.myName);

console.log(o["123my Name"]);

const AGES = 10;

//상수는 대문자로 작성하는 네이밍 컨벤션 : 대문자=상수구나!

function setAge() {}

//카멜 케이스 : 공백을 하기 어려우므로 생겨난 표기법

function snake_case() {}
//
