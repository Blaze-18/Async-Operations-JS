// Write an async function that performs two asynchronous tasks in sequence:
// 1. Wait for a Promise that resolves after 1 second and logs "Task 1 complete".
// 2. Wait for another Promise that resolves after 2 seconds and logs "Task 2 complete".

const p1 = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        //reject("Task 1 rejected");
        const response = "Task 1 completed";
        resolve(response);
    },1000);
});

const p2 = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        const response = "Task 2 completed";
        resolve(response);
    },2000);
});

async function handlePromise(){
    console.log("HandlePromise executing");
    try{
        const status1 = await p1; // Notice that if p1 rejects catch block is executed so p2 wont be resolved 
        console.log(status1);
        const status2 = await p2;
        console.log(status2);
    }catch(error){
        console.log("error occured");
        console.log(error);
    }

}

handlePromise();
