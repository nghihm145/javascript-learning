var languages = [
    "Javascript",
    "Java",
    "PHP",
    "Python",
    null,
    undefined,
    function(){

    },
    {},
]; // array có thể chứa được tất cả các kiểu dữ liệu vào
 console.log(Array.isArray([languages]));// kiểu của array trả về là object, sử dụng đối tượng array 
 console.log(languages.length); //ktra độ dài mảng
 console.log(languages[0]); //lấy phần tử tại vị trí mong muốn

 // 1. toString - biến chuỗi thành String
 console.log(languages.toString());

 // 2. Join - biến chuỗi thành mảng, nhưng có thể thay đổi dấu ngăn cach1 giữa các phần tử
 console.log(languages.join(' - ')); // kq: abc - bcd - kia ...

// 3. Pop - xoá phần tử cuối mảng và trả lại phần tử đã xoá
console.log(languages.pop());

// 4. Push - thêm phần tử vào cuối mảng
console.log(languages.push("Dart", "Ruby"));

//5. Shift - xoá đi phần tử ở đầu mảng và trả về phần tử đầu mảng
console.log(languages.shift());

//6. unshift - thêm phần tử vào đầu mảng
// console.log(languaes.unshift("CSS", "HTML"));

//7. splicing - xoá, chèn,
languages.splice(1, 0, ); //splice(vị trí đặt con trỏ, số lượng phần tử muốn xoá, phần tử muốn chèn vào)
console.log(languages);

//8. concat - nối array
var languages2 = ["C", "C++", "Kotlin"];

console.log(languages.concat(languages2));

//9. slicing - cắt element

console.log(languages2.slice(0)); //copy mảng
console.log(languages2.slice(1, 2)); // cắt từ index 1 đến 2, có thể cắt từ cuối mảng ngược lên -1, -2
console.log(languages2.slice(1)); // cắt từ 1 đến hết

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 0
    },
    {
        id: 3,
        name: "ruby",
        coin: 0
    },
    {
        id: 4,
        name: "PHP",
        coin: 400
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 500
    },
    {
        id: 6,
        name: "ruby",
        coin: 100
    },
    {
        id: 7,
        name: "ruby",
        coin: 100
    }

];


// array with function
//for each - duyệt qua từng phần tử của mảng 

courses.forEach(function(course, index) {
    console.log(index, course)
});

//every - ktra phần tử của mảng phải thoả mãn 1 dk gì đó -> trả về boolean
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//some - ktra phần tử của mảng, chỉ cần 1 phần tử thoả mãn dk là ngưng -> trả về boolean
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//find - tìm kiếm và trả về 1 phần tử
var course = courses.find(function(course, index) {
    return course.name === "ruby";
});
console.log(course);

//filter - tìm kiếm và trả về tất cả các phần tử thoả mãn dk
var listCourse = courses.filter(function(course, index) {
    return course.name === "ruby";
});
console.log(listCourse);

//map - copy và thay đổi array theo ý, hiển thị ra website
function courseHandler(course, index){ // truyền vaò (item, index)
    return {
        id: course.id,
        name: `Khoá học: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray : courses,
    }
};
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//dùng map lấy ra 1 mảng tên
function courseHandler1(course, index){ // truyền vaò (item, index)
    return course.name;
};
var newCourses1 = courses.map(courseHandler1);
console.log(newCourses1);

//reduce - thay thế dòng for để tính tổng
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     var total = accumulator + currentValue.coin;

// console.table({
//     "Lượt chạy: ": h,
//     "Biến lưu trữ: ": accumulator,
//     "Giá khoá học: ": currentValue.coin,
//     "Lưu trữ được: ": total,
// })
// return total;
// };
var totalCoin = courses.reduce(function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}, 0); //inital value - không bắt buộc
console.log(totalCoin);