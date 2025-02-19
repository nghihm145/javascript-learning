//viết hoa chữ cái đầu của function constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
};

User.prototype.className = "NAB"; // tạo 1 thuộc tính cho User nhưng không cần phải vào constructor
User.prototype.getClassName = function() {
    return this.className;
};
var user2 = new User("Hang", "Nghi", "Avatar");
var user = new User("Bui", "Tung", "Avatar");

user2.title = "developer";
user.comment = "Nghi đẹp quá";
console.log(user2.className);
console.log(user.getClassName());