# Asynchronous Operations in JavaScript

This repository showcases my journey and learnings in mastering asynchronous operations in JavaScript. Through various exercises and projects, I’ve explored and implemented key concepts like callbacks, promises, and async/await.

## What I’ve Learned

### 1. Callbacks
- Understanding the concept of higher-order functions.
- Handling asynchronous behavior using callback functions.
- Managing callback hell and techniques to avoid it.

**Example:**
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'JavaScript', type: 'Programming Language' };
        callback(null, data);
    }, 1000);
}

fetchData((err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
```

### 2. Promises
- Chaining promises for cleaner, more readable code.
- Handling resolved and rejected states.
- Using `Promise.all()`, `Promise.race()`, and `Promise.allSettled()`.

**Example:**
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'JavaScript', type: 'Programming Language' };
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

### 3. Async/Await
- Writing asynchronous code in a synchronous style.
- Error handling with `try...catch` blocks.
- Using `await` for cleaner promise resolution.

**Example:**
```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { name: 'JavaScript', type: 'Programming Language' };
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

getData();
```

## Projects & Exercises
- **API Fetching Project:** Implemented async calls to REST APIs using fetch and async/await.
- **Promise Chain Exercise:** Created a step-by-step data processing pipeline using promises.
- **Error Handling Practice:** Explored robust error handling in async flows.

## How to Run
1. Clone this repo.
2. Navigate to the project directory.
3. Run exercises using `node <filename>.js`.

## Future Plans
- Dive deeper into handling multiple asynchronous operations efficiently.
- Explore libraries like Axios for better API handling.
- Experiment with Web Workers for true parallelism.

---

Feel free to explore the code and suggest improvements!

