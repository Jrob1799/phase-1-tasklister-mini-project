document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")
  
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newTask = document.createElement("li");
    const taskDescription = document.querySelector("#new-task-description")
    newTask.textContent = taskDescription.value;
    taskList.appendChild(newTask);
    taskDescription.value = ""

    // create delete button for new task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    newTask.appendChild(deleteButton);

    // add event listener to delete button
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });
  })
})
