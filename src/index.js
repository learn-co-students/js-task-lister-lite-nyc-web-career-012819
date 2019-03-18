document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskBtn = document.getElementById('new-task-description').nextElementSibling;
  const tasksUl = document.getElementById('tasks');

  createTaskBtn.addEventListener('click', event => {
    event.preventDefault();
    let userInput = document.getElementById('new-task-description').value;

    if (userInput.length === 0) {
      alert('write something');

    } else {
      // const newTaskLi = document.createElement('li')
      // newTaskLi.className = 'task-list';
      tasksUl.innerHTML += `<div class='task-container'>
      <li class='task-list'>${userInput}</li><button type="button" id="delete-me">X</button>
      </div>`;
      // tasksUl.appendChild(newTaskLi)
      document.getElementById('new-task-description').value = '';
    }
  })

  // delete task
  tasksUl.addEventListener('click', event => {
    const deleteBtn = document.getElementById('delete-me');
    if (event.target.id === 'delete-me') {
      event.target.parentNode.remove();
    }
  })

  // edit task - didn't do it because the edit will be done by 'patch'.
  tasksUl.addEventListener('click', event => {
    const taskList = document.getElementsByClassName('task-list');
    if (event.target.className === 'task-list') {
      event.target.style.color = 'firebrick';
      // to edit, I would create input field and submit button to...
      // tasksUl.innerHTML with input tag and button tag.
      // store userinput into a variable and apply the change.
    }
  })

  // priotizing: when creating new task, let users <select> priority.
  // check out learn.co Javascript Foundations => Advanced Functions => First Class Functions Practice
  // https://github.com/stomg7969/js-advanced-first-class-functions-practice-lab-nyc-web-career-012819
  // there is .sort() => maby we can sort it by elements' ids ...?
});
