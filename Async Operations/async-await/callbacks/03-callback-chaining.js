// 03-callback-chaining.js
// Demonstrates callback chaining

function step1(callback) {
    console.log("Step 1 completed.");
    callback(null, "Data from Step 1");
}

function step2(data, callback) {
    console.log(`Step 2 received: ${data}`);
    console.log("Step 2 completed.");
    callback(null, "Data from Step 2");
}

function step3(data, callback) {
    console.log(`Step 3 received: ${data}`);
    console.log("Step 3 completed.");
    callback(null, "Data from Step 3");
}


step1((error, data1) => {
    if (error) {
        console.log(`Error in Step 1: ${error.message}`);
    } else {
        step2(data1, (error, data2) => {
            if (error) {
                console.log(`Error in Step 2: ${error.message}`);
            } else {
                step3(data2, (error, data3) => {
                    if (error) {
                        console.log(`Error in Step 3: ${error.message}`);
                    } else {
                        console.log(`Final data: ${data3}`);
                    }
                });
            }
        });
    }
});