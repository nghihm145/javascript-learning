//math object
// -Math.PI
console.log(Math.PI);
// -Math.round() - làm tròn số
console.log(Math.round(4.5));
// -Math.abs() - trả về giá trị tuyệt đối
console.log(Math.abs(-4.5));
// -Math.ceil() - làm tròn lên
console.log(Math.ceil(4.1));
// -Math.floor() - làm tròn xuống
console.log(Math.floor(4.9));
// -Math.random() - trả về 1 số ngẫu nhiên từ 0 - 1
console.log(Math.random());

console.log(Math.floor(Math.random() * 10)); // trả về số ngẫu nhiên từ 0 - 9

var random = Math.floor(Math.random() *  5);
var bonus = [
    "10 coin",
    "20 coin",
    "30 coin",
    "40 coin",
    "50 coin"
];
console.log(bonus[random]);

//áp dụng làm tỉ lệ cường hoá trong game
var random1 = Math.floor(Math.random() *  100);
if(random1 < 5) {
    console.log("Cường hoá thành công");
};
//math.min() - trả về số nhỏ nhất
console.log(Math.min(1, 2, 3, 4, 5));
//math.max() - trả về số lớn nhất
console.log(Math.max(1, 2, 3, 4, 5));