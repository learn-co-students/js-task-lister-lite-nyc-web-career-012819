function submitHandler(event) {
  event.preventDefault()
  addEvent()
}

function clickHandler(event) {
  if (event.target.tagName === "BUTTON") {
    removeEvent(event.target.dataset.description)
  }
}

function addEvent() {
  const newLi = document.createElement("li")
  newLi.innerHTML = `
    ${descriptionField.value}
    <button data-description="${descriptionField.value}">X</button>
  `
  tasksUl.appendChild(newLi)
}

function removeEvent(identifier) {
  const liTags = Array.from(tasksUl.children)
  const result = liTags.find((element) => {
    if (element.firstChild.data.trim() === identifier) {
      return element
    }
  })

  tasksUl.removeChild(result)
}

const tasksUl = document.getElementById("tasks")
const descriptionField = document.getElementById("new-task-description")

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", submitHandler)

  tasksUl.addEventListener("click", clickHandler)
})