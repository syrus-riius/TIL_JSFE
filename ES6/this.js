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
        함수 : function() {
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


