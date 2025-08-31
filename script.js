const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");  

const li=document.createElement("li");

function updateCounters() {
    const completedTasks = listContainer.querySelectorAll(".completed").length;
    const uncompletedTasks = listContainer.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = `Completed: ${completedTasks}`;
    uncompletedCounter.textContent = `Uncompleted: ${uncompletedTasks}`;
}

function addTask() {
    const task = inputBox.value.trim();
    if (!task){
        alert("Please enter a task.");
        return;
    }

    li.innerHTML= `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;
    
    listContainer.appendChild(li);
    inputBox.value = "";
}

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("click",function(){
    li.classList.toggle("completed",checkbox.checked);
    updateCounters();
})

editBtn.addEventListener("click",function(){
    const update = prompt("Edit task:",taskSpan.textContent);
    if(update !== null){
        taskSpan.textContent = update;
        li.classList.remove("completed");
        checkbox.checked = false;
        updateCounters();
    }
});

deleteBtn.addEventListener("click",function(){
    if(confirm("Are you sure you want to delete this task?")){
        li.remove();
        updateCounters();
    }
});

updateCounters();
