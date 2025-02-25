/*
    This exercise simulates an asynchronus operation using promises. 
    That is checking if your favourite language is javaScript or not.
    It focuses on basic creation of promise and handling for resolve and reject event
     
*/

function createPromise(lang){
    
    const myPromise = new Promise(function(resolve,reject){
       // Write async operation inside the promise 
       setTimeout(function(){
            if(lang == "javaScript")
                resolve("correct language");
            else
                reject("wrong language");
       },1000);
    
    });

    return myPromise;
}
const fvrt_lang = "javaScript";//"python"
createPromise(fvrt_lang)
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
