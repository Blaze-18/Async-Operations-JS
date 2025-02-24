/*
    Simualting a logn flow using promise chaining
    User Log in -> User Post -> User Logout
*/

function login(username, password){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(username == "admin" && password == "password"){
                const user = {id: 1, name : "admin"}
                resolve(user); 
            }else{
                reject("Invalid user name or password");
            }
        },1000);
    });
}
function getUserPost(user){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(user.id === 1){
                const posts = [{id : 1, post: "Post 1", }, {id : 1, post: "Post 2"}];
                resolve(posts);
            }else{
                reject("User id not found");
            }
                
        },2000);
    });
}
function logout(userPosts){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(userPosts != null){
                resolve("User logged out");
            }else{
                reject("User isn't logged in");
            }
        },3000);
    });
}

login("admin","password")
    .then((user) =>{
        console.log("User Login Successful !");
        return getUserPost(user);
    })
    .then((userPosts) => {
        console.log("Listed posts : ");
        userPosts.forEach(element => {
            console.log("user " + element.id + " " + element.post)
            
        });
        return logout(userPosts);
    })
    .then((userAlert) => console.log(userAlert))
    .catch((error) => console.log(error));

console.log("Please Login to continue");