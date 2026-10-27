const registration = new Promise((resolve, reject) => {
    const isValid = false;
    if (isValid) {
        resolve("Registration successful");
    } else {
        reject("Registration failed");
    }
});
registration.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

function registerStudent(isSuccessful) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccessful) {
                resolve("Student registered successfully");
            } else {
                reject("Student registration failed");
            }
        }, 2000);
    });

}
// Call the function
registerStudent(true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });