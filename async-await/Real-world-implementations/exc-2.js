/*
    !!!!!!!!Fetching Multiple Data Concurrently!!!!!!!!
    Write an async function that fetches data from two APIs concurrently using Promise.all:
        https://jsonplaceholder.typicode.com/posts/1
        https://jsonplaceholder.typicode.com/comments/1
    Log both results. Handle errors if any of the requests fail.

*/

async function concurrentFetch(){
    const API_URL1 = "https://jsonplaceholder.typicode.com/posts/1";
    const API_URL2 = "https://jsonplaceholder.typicode.com/comments/1";

    try {
        const [posts,comments] = await Promise.all([ 
        // Notice that await key word returns resolved promises that is the value returned after promise is resolved
        // What if we did not use await keyword. This would mean that promise.all would return promise object which is not iterable 
        // Henece this will give a type error 
        //The bottom line is dont forget to use the await keyword 
            fetch(API_URL1).then((response)=>{
                if(!response.ok) throw new Error("Http error response status " + response.status);
                return response.json();
            }),
            fetch(API_URL2).then((response)=>{
                if(!response.ok) throw new Error("Http error response status " + response.status);
                return response.json();
            })
        ]);
        console.log("Post Title : " + posts.title);
        console.log("Comment Body : " + comments.body);
    } catch (error) {
        console.log("Error Occured");
        console.log(error);
    }
}
concurrentFetch();
