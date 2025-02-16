// 05-event-handling-with-callbacks.js
// Demonstrates event handling with callbacks

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

function handleClick(callback) {
    button.addEventListener("click", callback);
}


handleClick(() => {
    console.log("Button clicked!");
});