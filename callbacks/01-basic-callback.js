// 01-simple-callback.js
// Demonstrates a simple callback function

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Execute the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}


greet("blazeNinja", sayGoodbye);