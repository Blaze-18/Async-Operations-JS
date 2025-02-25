//Write an async function that returns a resolved Promise with the string 
// "Hello, World!". Use .then() to log the result.

async function helloWorld() {
    return "Hello, World!";
}
  
helloWorld().then((result) => console.log(result));