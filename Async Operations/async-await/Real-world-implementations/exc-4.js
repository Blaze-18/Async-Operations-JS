/*
    !!!!!!!!!!!!!!!!!Simulating a Login System!!!!!!!!!!!!!!!!!
Write an async function that simulates a login system:
    1.Use await to simulate a network request that resolves after 1 second.
    2.If the username is "admin" and the password is "password", log "Login successful".
    3.Otherwise, throw an error and log "Invalid credentials".
*/
function validateCred(userName, password){
    return new Promise(function(resolve,reject){
        if(userName === "admin" && password === "password")
            resolve("Login Successful");
        else
            reject("Invalid credentials");
    })
}

async function loginSim(userName, password){
    try{
        const checkValidUser = await validateCred(userName,password);
        console.log(checkValidUser);
    }catch(error){
       // console.log("Did this run");
        console.log(error);
    }
    

}

loginSim("admin","password");
loginSim("notAdmin","wrongPassword");