// Write an async function that uses await on a rejected Promise. 
// Handle the error using try/catch and log the error message.

const myPromise = new Promise(function(resolve,reject){
    reject("Error occured"); // trigger the rejection
});

async function handlePromise(){
    console.log("handlePromise() is running"); // Check if the function is called
    try{
        let val = await myPromise;
        console.log("Promise resolved with:", val); // This should not happen because it rejects
    }catch(error){
        console.log("Caught an error:");
        console.log(error); // We expect this to run
    }
}

handlePromise();


