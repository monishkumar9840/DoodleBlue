//Tasks

//task1
const calculate = (totalPrice, quantity) => {
    return totalPrice * quantity;

}
console.log(calculate(10, 3));

// Task2
function greet(name){
    console.log("Hello", name);
}
greet("Monish")

// task 3
let arr = [1,2,3,4,5];
console.log(arr.length);

// task4
let arr2 = [1,2,3,4,5,6];
let ans = arr2.filter(num => num % 2 == 0);
console.log(ans);

//task 5
let arr3 = [1,2,3,4,5,6];
let result = arr3.map(num => num * 2);
console.log(result);

// Task 6
let arr4 = [1,2,3,4,5,6];
let result1 = arr4.reduce((sum, arr4) => {
    return sum + arr4
});
console.log(result1); 

//task 7
const book = {
  title: "JavaScript Basics",
  author: "John Smith",
  price: 500
};

console.log("Before update:", book);

book.price = 650;

console.log("After update:", book);
console.log("Updated Price:", book.price);

// task 8
const user = {
  name: "Monish",
  age: 21,
  address: {
    city: "Chennai",
    country: "India"
  }
};

console.log(user.address.city);

// task 9
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 1500 }
];

products.forEach(function (product) {
  console.log(product.name);
});

// task 10
const student = {
  name: "Monish",
  age: 21,
  department: "CSE"
};

const { name, age } = student;

console.log(name);
console.log(age);

//task 11
const numbers = [10, 20, 30];

const copiedNumbers = [...numbers];

console.log("Copied array:", copiedNumbers);

const moreNumbers = [40, 50, 60];

const combinedArray = [...numbers, ...moreNumbers];

console.log("Combined array:", combinedArray);

//task 12
function addNumbers(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 30, 40, 50)); //

//task 13
const users = {
  name: "Monish",
  address: {
    city: "Hosur"
  }
};

const city = users?.address?.city ?? "City not available";

console.log(city); // hosur

const anotherUser = {
  name: "Monish"
};

const anotherCity = anotherUser?.address?.city ?? "City not available";

console.log(anotherCity); // city not available



// SCOPE, HOISTING AND CLOSURE

// create a global CampusName and print it from inside a function

const CampusName = "SAEC";
function campus(){
  console.log(CampusName);
}
campus(); // Output: SAEC

// create an if block with let and var variables; teest which is  accessible outside

if(true){
    var varVariable = "var variable";
    let letVariable = "let variable";
}
console.log(varVariable); // var variable
// console.log(letVariable); // Output: ReferenceError: letVariable is not defined

// predict car and let behavior when logged before declaration

console.log(x); // Output: undefined
var x = 5;
console.log(x);


// let and const

//console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;
console.log(y);

// Create makeCounter with a private variable count and return a function that increments it

function makeCounter() {
  let count = 0;
  function add() {
    count++;
    console.log(count);
  };
  return add;
}
const counter = makeCounter();
counter(); // Output: 1
counter(); // Output: 2

const counter2 = makeCounter();
counter2(); // Output: 1
counter2(); // Output: 2