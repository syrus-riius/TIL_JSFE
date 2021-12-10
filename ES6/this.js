'use strict';

console.log(this);

function 함수() {
    console.log(this);
}

함수();


//메소드 안에서 this는 그 함수를 가지고있는 오브젝트를 뜻함.

let 오브젝트 = {
    data : 'kim',
    함수 : function() {
        console.log(this);
    }
}

console.log(오브젝트.data);
console.log(오브젝트.함수());


let obj = {
    data : {
        함수 : function() { // 함수() { } <- 이렇게 선언 가능
            console.log(this); // 이 경우에 바로 윗 오브젝트인 data 지칭.
        },
    },
}

console.log(obj.data.함수());

let objArrow = {
    data : { 
        함수 : () => {
            console.log(this); // 화살표 함수의 경우에는 최상위요소 선택됨
        }
    }
}

console.log(objArrow.data.함수());



// object 찍어내는 기계 : Constructor
// Constructor로 생성되는 오브젝트 : Instance
function 기계(){
    this.이름 = 'kim';
}

let 오브젝트2 = new 기계();

console.log(오브젝트2);

let 오브젝트3 = {
    이름들 : ['김', '이', '박'],
    함수 : function(){
        오브젝트.이름들.forEach(function(){
            console.log(this);
        });
    }
}

오브젝트3.함수()