//백틱 사용하여 문자열 작성 -> 엔터키, 변수 구멍을 통해서 사용가능

let sonny = 'HEUNG MIN SON';
let totNo7 = `
tottenham 
no.7 
${sonny}`;

console.log(totNo7);

// 태그드 리터럴

function func1() {
    return 10;
}

// func1(); // 원래는 이렇게 써야하지만
// func1`` //이렇게 해서 사용 가능

// function 해체분석기(문자들, 변수들){
//     console.log(문자들); //[ 'Hello, Iam ', '. Good to see you.' ]
//     console.log(변수들); //HEUNG MIN SON
// }

// 해체분석기`Hello, Iam ${sonny}. Good to see you.`;

// 태그드 리터럴 양 옆을 배열에 저장.


let pants = 20;
let socks = 100;

function taggedLit(strings, Exp1, Exp2) {
    let text = strings[0] + Exp2 + strings[1] + Exp1;
    console.log(text)
}

taggedLit`바지${pants} 양말${socks}`;