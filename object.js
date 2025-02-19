// Cách tạo 1 object
var myInfo = {
    name: "Nghi",
    age: 18,
    address: "TPHCM",
    [emailKey]: "nghi124@gmail.com", //others --> thuộc tính (property)
    getName: function() {
        return this.name; //function --> phương thức (method)
    }

}; // key: value


//thêm key vào object 
var [emailKey] = "email"; // c1
myInfo.email = "nghihm@gmail.com"; // c2
//myInfo[my-email] = "nghihm@gmail.com";

console.log(myInfo);

//lấy value trong object

console.log(myInfo.age);
//console.log(myInfo[age]);

//trường hợp dùng cách 2:
var myKey = "address";

console.log(myInfo[myKey]);

//xoá key
delete myInfo.age;

console.log(myInfo.getName());



