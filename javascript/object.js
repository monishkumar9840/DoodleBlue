//objects

//object methods
const person = {
    firstName: 'John',  
    greet: function() {
        console.log('Hello, ' + this.firstName + '!');
    }   
}
console.log(person.firstName); // John
person.greet(); // Hello, John!

//array of objects
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },   
]
console.log(people.length); // 2
console.log(people[0].name); // Alice

// Object Destructuring 

const student = {
    name : "Monish",
    age : 21,
    course : "js"
};

const {name, age} = student;
console.log(name);
console.log(age);

// Object methods 

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//object vs array
//object is a collection of key-value pairs, while an array is an ordered list of values. Objects are used to represent entities with properties, while arrays are used to represent collections of items. Objects are accessed using keys, while arrays are accessed using indices. Objects can have methods, while arrays do not have methods. Objects can be iterated using for...in loop, while arrays can be iterated using for loop or forEach() method.

//object references and shallow copy
const originalObj = { name: 'Monish Kumar', age: 21 };
const referenceObj = originalObj;
referenceObj.age = 30;
console.log(originalObj.age); // 30

const shallowCopyObj = { ...originalObj };
shallowCopyObj.age = 35;
console.log(originalObj.age);   
console.log(shallowCopyObj.age)//
