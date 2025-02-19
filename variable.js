var a = 10;
var b = 15;
var c = a + b;
console.log(c);
// var a = 1;
// var b = 2;

// var c = a + b;
// console.log(c);

var a = 8;
a++;
a++;
a++;

console.log("a = ", a);

var a = 1; // number
var fullName = " Hang Man Nghi" // String
var isSuccess = true; // boolean
var age; // undefined
var isNull = null; // null
// 

var myFunction = function(){ // function
    console.log();
}
var myObject = { // object
    "name" : "Nghi",
    "age" : 18,
    "job" : "dev",
    myFunction: function(){

    }
};
console.log("myObject", myObject);

var firstName = "Nghi"
var lastName = "Hang"

console.log(firstName.length); // ktra do dai chuoi
console.log(`ten: ${firstName} ${lastName}`); // su dung cho String
 
// dung typeOf de kiem tra datatype
console.log(typeOf(firstName));