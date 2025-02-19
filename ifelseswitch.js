var date = 2;

if(date === 2) {
    console.log("today is monday");
} else if(date === 3) {
    console.log("today is tuesday");
} else if(date === 4) {
    console.log("today is wednesday");
} else {
    console.log("nothing");
};

switch(date) {
    case 2:
        console.log("today is monday");
        break;
    case 3:
        console.log("today is tuesday");
            break; 
    case 4:
        console.log("today is wednesday");
            break;
    case 5:
        console.log("today is thursday");
            break;
}

// toán tử 3 ngôi:
var date = date === 2 ? `${"today is monday"}` : `${"today is tuesday"}`; // điều kiện ? lệnh nếu đúng : lệnh nếu sai