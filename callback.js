//CallBack function
function myFunction1(param) {
    if(typeof param === "function") {
        param("Nghi");
    }
    
}
function myCallback(value) {
    console.log("value: ",value);
}

myFunction1(myCallback);

Array.prototype.map2 = function(callback) {
    var output = [];
    var arrayLength = this.length;
    for(var i = 0; i < this.length; i++ ) {
        var result = callback(this[i], i)
    }
    return output;
};

var courses = [
    "Javascript",
    "PHP",
    "Ruby"
];

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));
// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join("")); //join("") để nối các phần tử trong mảng thành 1 chuỗi