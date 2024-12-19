const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load tasks from local storage when the page loads
loadTasks();

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const newTask = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTaskCompletion);

    newTask.textContent = taskText;
    newTask.prepend(checkbox);

    taskList.appendChild(newTask);
    taskInput.value = "";

    // Save tasks to local storage
    saveTasks();
  }
}

function toggleTaskCompletion(event) {
  const task = event.target.parentNode;
  if (event.target.checked) {
    task.style.textDecoration = "line-through";
  } else {
    task.style.textDecoration = "none";
  }

  // Save tasks to local storage
  saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
  const tasks = [];
  const taskItems = taskList.querySelectorAll("li"); // Get all the task items

  taskItems.forEach(taskItem => {
    const taskText = taskItem.textContent;
    const isCompleted = taskItem.querySelector("input").checked;
    tasks.push({ text: taskText, completed: isCompleted });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    const newTask = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", toggleTaskCompletion);

    newTask.textContent = task.text;
    newTask.prepend(checkbox);

    taskList.appendChild(newTask);
  });
}