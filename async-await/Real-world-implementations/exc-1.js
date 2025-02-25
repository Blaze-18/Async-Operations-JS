/*
    !!!!!!!!!!!!Fetching Data from an API!!!!!!!!!!!!!!
Write an async function that fetches data from the following API:
https://jsonplaceholder.typicode.com/posts/1
Log the title of the post. Handle errors if the request fails.
*/

async function fetchData(){
    console.log("Fetching Data");
    try {
        const API_URL = "https://jsonplaceholder.typicode.com/posts/1"
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const post = await response.json();
        console.log("Post Title:", post.title);
    } catch (error) {
        console.log("error occured");
        console.log(error);
    }


}

fetchData();