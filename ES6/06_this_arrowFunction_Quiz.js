// 1

let people = {
    name: '손흥민',
    sayHi : function() {
        console.log('안녕 나는 '+ this.name);
    }
}
people.sayHi();

2

let db = {
    data : [1,2,3,4,5]
}

db.addAll = function() {
    let sum = 0;
    this.data.forEach(function(a){
        sum += a;
    });
    console.log(sum);
}


db.addAll();


//3 

