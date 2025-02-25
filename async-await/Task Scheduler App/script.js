
//Add tasks to list
function addTask(){
    event.preventDefault();
    console.log("addTask function running");
    const taskTitle = document.getElementById('task-name').value.trim();
    const taskDescription = document.getElementById("task-description").value.trim();
    const taskDate = document.getElementById("task-due-date").value.trim();
    
    if(taskTitle !== '' && taskDescription !== '' && taskDate !== ''){
        const listItem = `
            <li class="task-item">
                
                <div class="task-content">
                    <div style="display:flex;">
                        <input type="checkbox" class="task-checkbox">
                        <h3 id="task-title">${taskTitle}</h3>
                    </div>              
                    <p id="due-date">${taskDate}</p>
                </div>
                <div class="task-actions">
                    <button onclick="showDialog('Task Title', 'Task Description')">View</button>
                </div>
            </li>
        `
        document.getElementById('task-list').insertAdjacentHTML('beforeend', listItem);
        document.getElementById('task-form').reset();

    }else{
        alert("Please fill-out all the filed");
    }
  
    
}
async function fetchQuote() {
    try {
      const response = fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      document.getElementById("quote").innerHTML = `
        <p>"${data.content}"</p>
        <p>- ${data.author}</p>
      `;
      console.log("it works");
      return data; // Return the quote data for chaining
    } catch (error) {
      console.error("Error fetching quote:", error);
      document.getElementById("quote").innerHTML = "<p>Failed to load quote. Please try again later.</p>";
      throw error; // Re-throw the error for chaining
    }
}
async function showDialog(title, description) {
    try {
        // Set the task details in the dialog
        document.getElementById('dialog-title').textContent = title;
        document.getElementById('dialog-description').textContent = description;

        // Fetch and display the quote
        const quoteData = await fetchQuote();
        document.getElementById('quote').innerHTML = `
            <p>"${quoteData.content}"</p>
            <p>- ${quoteData.author}</p>
        `;

        // Show the dialog
        document.getElementById('task-dialog').showModal();
    } catch (error) {
        console.error("Error in showDialog:", error);
        document.getElementById('quote').innerHTML = "<p>Failed to load quote. Please try again later.</p>";
        document.getElementById('task-dialog').showModal(); // Still show the dialog even if quote fails
    }
}

