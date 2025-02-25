// 04-simulating-fetch-data.js
// Simulates fetching data asynchronously

function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const data = { id: 1, name: "Blaze Ninja" };
        callback(null, data);
    }, 2000);
}

// Usage
fetchData("https://api.example.com/user", (error, data) => {
    if (error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(`Data received: ${JSON.stringify(data)}`);
    }
});