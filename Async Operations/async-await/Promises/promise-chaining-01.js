/* 
    This example illustrates promise chaining by simulating tasks in order
    making them dependent on each other
*/
function p1(){
    const str = "anan";
    const promise1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve(str);
        },1000);
    });
    return promise1;
}

function p2(str){
    const promise2 = new Promise(function(resolve,reject){
        const num = Math.random();
        setTimeout(function(){
            if(str == "anan")
                resolve(0.9);
            else
                reject("Wrong string");
        },2000);
    });
    return promise2;
}

function p3(num){
    const promise3 = new Promise(function(resolve,reject){
        
        setTimeout(function(){
            if(num > 0.5)
                resolve("Task 3 completed");
            else
                reject("Number less than 0.5");
        },3000);
    });

    return promise3;
}

p1()
    .then((result) =>{
        console.log("Task 1 completed");
        return p2(result);
    })
    .then((result) =>{
        console.log("Task 2 completed");
        return p3(result);
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));



