// var myFunction = function() {
//     console.log();
// }
// var myObject = {
//     "name" : "Nghi",
//     "age" : 18,
//     "job" : "dev",
//     myFunction: function(){

//     }
// };

// cách tạo hàm
function showDialog() {
    alert("Bui Thanh Tung");
}; // Hàm không thực thi khi định nghĩa, hàm chỉ thực thi khi được gọi.
// cách call hàm như sau: ten_function();

function writeLog(message) {
    console.log(message);
}; //message được gọi là tham số

writeLog("test"); //test được gọi là đối số


// Dùng arguments để nhận đối số khi gọi từ bên ngoài mà không cần cho tham số
function writeLog2() {
    console.log(arguments); //argument là array
};
writeLog2("Nghi", 1, 14, 5, 2000, "Nữ");

function writeLog3() {
    var myString = "";
    for(var param of arguments) {
        myString += `${param} - `
    };
    console.log(myString);
};

writeLog3("Log1", "Log2", "Log3", 4, 5);

//return trong function
function cong(a, b) {
    return a + b;
};
var result = cong(2, 9);
console.log(result)

// 1. declaration function được hosting (được phép gọi trc khi định nghĩa)
function showMess() {

}; 

// 2. expression function (có thể đặt tên hoặc không)không được hosting (không được phép gọi trc khi định nghĩa)
var showMess2 = function() {

};
