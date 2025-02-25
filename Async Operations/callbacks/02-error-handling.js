// 02-callback-with-error-handling.js
// Demonstrates error handling in callbacks

function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Division by zero is not allowed."), null);
    } else {
        callback(null, a / b);
    }
}


divide(10, 2, (error, result) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(`Result: ${result}`);
    }
});

divide(10, 0, (error, result) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(`Result: ${result}`);
    }
});