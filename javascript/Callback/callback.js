//Task 1 : predict the output before running the code
console.log("One");
setTimeout(() => console.log("Two"), 0);
console.log("Three");

//Task 2: Change 0 to 500 ehat changes and what stays the same 

console.log("One");
setTimeout(() => console.log("Two"), 500);
console.log("Three");

//Task 3: Create a registration received message then a delayed confirmation

console.log("Registration received");
setTimeout(() => {
    console.log("Processing registration...");
}, 800);
setTimeout(() => {
    console.log("Registration Confirmed");

}, 2000);