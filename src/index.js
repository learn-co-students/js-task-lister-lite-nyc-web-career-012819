document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  const taskUl = document.getElementById("tasks");
  const newTaskInput = document.getElementById("new-task-description");

  function addTask(text){
    let listItem = document.createElement("li");
    listItem.setAttribute("id", `${text}`);
    listItem.innerText = text;
    listItem.innerHTML += "<button>X</button>";
    taskUl.append(listItem);
  };

  createTaskForm.addEventListener("click", (e) => {
    e.preventDefault();

    if(e.target.type === "submit"){
      addTask(newTaskInput.value);
    }
  })

  taskUl.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      taskUl.removeChild(e.target.parentNode);
    }
  });

});
