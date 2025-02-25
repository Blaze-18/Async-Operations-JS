//Write an async function that uses await to wait for a Promise that resolves after 1 second (use setTimeout). 
// Log the result after the Promise resolves.

const myPromise = new Promise(function(resolve){
    setTimeout(function(){
        const str = "Hello World";
        resolve(str);
    },4000)
})

async function handlePromise(){
    const val = await myPromise;
    console.log(val);
    console.log("Hi");
}

