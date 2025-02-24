/*  
   This exercise focuses on parallel execution of promises by simulating
   asyncchronus tasks. 
*/ 
const promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Task 1 completed");
    },1000);
});

const promise2 = new Promise(function(resolve,reject){
    const str = "anan"; //"enan"
    setTimeout(function(){
        if(str == "anan")
            resolve("Task 2 completed");
        else
            reject("wrong string")
    },2000);
});
const promise3 = new Promise(function(resolve,reject){
    const num = 0.9;
    setTimeout(function(){
        if(num > 0.5)
            resolve("Task 3 completed");
        else
            reject("Number less than 0.5");
    },3000);
});

//Prallel execution using Promise.all - that is waits 
//for all promise to resolve and then logs the result 
// if any of them is not resolved then it gives error of the first promise that was not resolved

const p1 = Promise.all([promise1,promise2,promise3])
    .then((results) => console.log(results))
    .catch((error) => console.log(error))

//Promise.any - logs the first promise that is resolved and ignores others 
// returns errors as objects if all the promises fails

const p2 = Promise.any([promise1,promise2,promise3])
    .then((results) => console.log(results))
    .catch((errors) => console.log(errors));

// Promise.race - Whoever resolves first is returned but if failed gives error and dont check others

const p3 = Promise.race([promise2,promise3])
    .then((results) => console.log(results))
    .catch((errors) => console.log(errors));



