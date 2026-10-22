
// Event Loop

console.log("A");
setTimeout(() => {
    console.log("B");
}, 2000);
Promise.resolve().then(() => {
    console.log("C");
})
console.log("D");

// Task 1: Event Loop Example

// flow of execution in the event loop
// 1. Synchronous code is executed first and added to the call stack
// 2. Asynchronous code is executed next and added to the event loop
// 3. The event loop checks the call stack and executes any pending tasks in the microtask queue (Promises)
// 4. The event loop then checks the macrotask queue (setTimeout, setInterval) and executes any pending tasks

console.log("Start"); //  it will be executed first because it is synchronous code and it is in the call stack
setTimeout(() => {
    console.log("Timer"); // it will be executed fourth because it is a macrotask and it is in the macrotask queue
}, 10000);
Promise.resolve().then(() => {
    console.log("Promise"); // it will be executed third because it is microtask and it is in the microtask queue
});
console.log("End"); // it will be executed second because it is synchronous code and it is in the call stack