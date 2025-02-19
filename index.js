// var a = 1;
// var b = 2;

// var c = a + b;
// console.log(c);

var a = 8;
a++;
a++;
a++;

console.log("a = ", a);

var a = 1;
var fullName = " Hang Man Nghi"
var isSuccess = true;
var age;
var isNull = null;
// 

var myFunction = function(){
    console.log();
}
var myObject = {
    "name" : "Nghi",
    "age" : 18,
    "job" : "dev",
    myFunction: function(){

    }
};
console.log("myObject", myObject);

var i = 0;
var isSuccess = false;
while(!isSuccess) {
    i++;
    console.log("Số lần nhập " + i);
    if(i >= 3){
        isSuccess = true;
    }
};