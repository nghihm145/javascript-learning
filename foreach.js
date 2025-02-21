// xem lại:
// - array methods
// - object prototype
// -for in
// -hasOwnProperty

Array.prototype.forEach2 = function(callback){
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }

} 

var courses = [
    "Javascript",
    "PHP",
    "Ruby"
];

courses.forEach2(function(course, index, array) { //forEach không duyệt qua phần tử undefined
    console.log(course, index, array);
});