// 1. for - lặp với dk đúng
var myArray = [
    "Nghi",
    "Tùng",
    "Uyên",
    "Anh"
];

var arrayLength = myArray.length

for (var i = 0; i < arrayLength; i++) {
    // console.log(myArray[i]);
};
// 2. for in - lặp với key 
var myInfo = {
    name: "Nghi",
    age: 18,
    address: "HCM, VN"  
};

for(var key in myInfo) {
    console.log(key);
    console.log(myInfo[key]);
};

var languages = [
    "Java",
    "Javascript",
    "Python"
];

for(var key1 in languages) {
    console.log(languages[key1]);
    console.log(key1);
};

var myString = "Javascript";
for(var key2 in myString) {
    console.log(myString[key2]);
    console.log(key2);
};
// 3. for of - lặp với value (với Object thì phải lấy key và value ra trước r mới sd for/of)
var myObject = {
    name: "lùn",
    age: 4,
    status: "single"
};

//cách lấy key và value: Object.keys(myObject) || Object.values(myObject)

for(var values of Object.values(myObject)) {
    console.log(value);
};

for(var value of myString) {
    console.log(value);
};

for(var value of languages) {
    console.log(value);
};
// 4. while - lặp khi dk đúng
var i = 0;
// while(i <= 1000) {
//     i++;
//     console.log(i);
// };

while(i < languages.length) {
   
    console.log(languages[i])
    i++;
};
// 5. do/while - lặp ít nhất 1 lần, sau đó lặp khi dk đúng

var i1 = 0;
var isSuccess = false;

do{
    i1++;
    console.log("Thực hiện lần " + i1);
    
    if(i1 > 3) {
        isSuccess = true;
    }
} while(!isSuccess);

// break và continue
for(var p = 0; p < 10; p++) {
    
    if(p % 2 !== 0) {
        continue;
    }
   
    if(p >= 5){
        break;
    }
    console.log(p);
};

//nest loop
var myArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for(var i = 0; i < myArr.length; i++) {
    for(var j = 0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
};

var myArray1 = [1, 8, 4, 2, 5];
var a = 0;
for(var n = 0; n < myArray1.length; n++) {
    if(myArray1[n] > a) {
        a = myArray1[n];
    }

};
console.log("Giá trị lớn nhất là: " + a);