var myString = "Hang Mann Mann Mann Nghi";
// 1. Do dai String (length)
console.log(myString.length);

// 2. Tim vi tri ki tu trong chuoi (find index)
console.log(myString.indexOf("Man"));
// Neu trong chuoi co nhieu ki tu giong nhau: tim vi tri đầu tiên nhu tren
// vi tri cuoi cung: lastIndexOf()
// vi tri thu n: indexOf("chuoi", index sau kí tự tìm trc đó)

// 3. cat chuoi (cut string)
console.log(myString.slice(6, 9)); // cat từ kí tự này đến kí tự kia
console.log(myString.slice(6)); // cat từ kí tự này đến hết
console.log(myString.slice(-4,-1)); // cat nguoc tu phai sang trai

// 4. Replace
console.log(myString.replace("Mann", "Man"));  //(chuoi muon thay the, chuoi moi)
console.log(myString.replace(/Mann/g, "Man")); //su dung bieu thuc chinh quy (/chuoi/g) de thay the toan bo chuoi muon replace

// 5. toUpperCase, toLowerCase
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

// 6. Trim (loại bỏ space thừa tại đầu vs cuối)
console.log(myString.trim().length); // .length de ktra do dai sau khi cat

// 7. Split (tach chuoi danh sach sang array)
var ten = "Hang, Man, Nghi"
console.log(ten.split(", ")); // tìm diểm chung để tách, ở đây điểm chung là ", "
var tenDuong = "BuiTuToan";
console.log(tenDuong.split("")); // trường hợp không có điểm chung thì truyền chuỗi rỗng

// 8. get a character by index (lấy kí tự tại index)
const ten = "Nghi Hang";
console.log(ten.charAt(0)); // tra ve chuoi rong neu index kh ton tai ki tu
console.log(typeOf(ten[0])); // tra ve undefined neu index kh ton tai ki tu


// template String `${String}`