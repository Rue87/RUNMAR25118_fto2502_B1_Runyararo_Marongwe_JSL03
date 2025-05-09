/*// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt("Enter task 1 status (todo, doing, done):");
task1Status = task1Status ? task1Status.toLowerCase() : "";

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
let task2Status = prompt("Enter task 2 status (todo, doing, done):");
task2Status = task2Status ? task2Status.toLowerCase() : "";

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}*/

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Use .map() to return only title and status (remove description)
const tasksWithoutDescription = initialTasks.map((task) => ({
  title: task.title,
  status: task.status,
}));

// Print the mapped tasks
console.log(tasksWithoutDescription);

function addNewTask(initialTasks, numberOfNewTasks = 3){
  const newTasks = [];
  const lastId =  initialTasks.length ?initialTasks[initialTasks.length - 1].id:0; // Get the last ID from the initial tasks

  for (let i = 0; i < numberOfNewTasks; i++) {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    let status = prompt("Enter task status (todo, doing, done):");
    
    const newTask = {
      id: lastId + i + 1, // Increment the last ID for each new task
      title: title,
      description: description,
      status: status,
    };
    newTasks.push(newTask);
  }
  
  alert("There are enough tasks on your board, please check them in your console.");

  const updatedTasks = initialTasks.concat(newTasks); 
  return updatedTasks;
}

const updatedTasks = addNewTask(initialTasks);
console.log(updatedTasks);

function getCompletedTasks(tasks){
  return tasks.filter(task => task.status === "done")

}
const completedTasks = getCompletedTasks(updatedTasks);
console.log(completedTasks);