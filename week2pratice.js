function check(number){
    if(number % 2 === 0) {
        console.log("even number");
    }else{
        console.log("odd number");
    }
}

console.log(check(5));

function check2(age) {
    if(age < 12) {
        console.log("Ticker price: 5");
    }else if(age < 18) {
        console.log("Ticker price: 10");

    }else if(age <60){
        console.log("Ticket price: 20");
    }else{
        console.log("Ticker price: 15");
    }
}

switch(age) {
    case age < 12:
        console.log("Ticker price: 5");
        break;
    case age >= 12 && age < 18:
        console.log("Ticker price: 10");
        break;
    case age >= 18 && age < 60:
        console.log("Ticker price: 20");
        break;
    default:
        console.log("Ticker price: 15");
        break;
}