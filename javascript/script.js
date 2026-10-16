console.log("Hello, JavaScript!");
console.log(10 + 5);
console.log(Number("12") + 3);
console.log(String(25));
console.log(Boolean(1));
console.log("12" + 3);
console.log("12 - 3");


let number = "12";
let n = 12;

console.log(number == n);
console.log(number === n);


//truthy and falsy values,combined conditions
let age = 18;
if(age>18 && age<65){
    console.log('You are eligible to work');
}
else{
    console.log('You are not eligible to work');
}

//switch case
let day = 'Monday'; 
switch(day){
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    default:
        console.log('Not a valid day');
}

// == and === operator
let a = 5;
let b = '5';
console.log(a == b); // true
console.log(a === b); // false

//for loop
let i=0
for( i; i<=5; i++){
    console.log(i);
}
console.log("check here",i);

//while loop
let j=0;    
while(j<5){
    console.log(j);
    j++;
}

//do while loop
let k=0;
do{
    console.log(k);
    k++;
}while(k<5);    

//for of and for in loop
let arr = [10, 20, 30, 40, 50]; 
for (let value of arr) {
    console.log(value); // 10, 20, 30, 40, 50
}   
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]); // a 1, b 2, c 3
}
// task1 print your name, course and a number using console.log()
console.log("Name: Monish Kumar R");
console.log("Course: CSE(CyberSecurity)");
console.log("Reg No: 111923CB01031");

//task2 create variables for an evbent name ,ticket price and seats left,print them
let eventName = ("Cybersecurity Workshop");
let ticketPrice = 100;
let seatsLeft = 20;
console.log("Event Name: " + eventName);
console.log("Ticket Price: $" + ticketPrice);
console.log("Seats Left: " + seatsLeft)

//task3 calculate the total price for 3 tickets and check whether it exceeds 500
let totalTickets = 3;
let totalPrice = totalTickets * ticketPrice;
if (totalPrice > 500) {
    console.log('The total price exceeds 500.');
} else {
    console.log('The total price does not exceed 500.');
}

//task4 use if else to check whether a number is positive,negative or zero
let numbers = 10;    
if (numbers > 0) {
    console.log('The numbers is positive.');
}   
else if (numbers < 0) {
    console.log('The numbers is negative.');
}   
else {
    console.log('The numbers is zero.');
}

//task5 use a loop to print even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}