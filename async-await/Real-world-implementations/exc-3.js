/*
    !!!!!!!!!!!!!!!!!File Operations (Node.js)!!!!!!!!!!!!!!!!!!
    Write an async function that reads a file (example.txt) 
    using fs.promises and logs its content. Handle errors if the file doesn't exist.
*/

const fs = require("fs").promises;
async function readFile() {
    try{
        const fileData = await fs.readFile("example.txt","utf-8");
        console.log("File Content : ",fileData);
    }catch(error){
        console.log(error);
    }
}

readFile();

