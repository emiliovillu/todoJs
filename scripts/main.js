const taskLogic = new TaskLogic(localStorage)

const taskTextInput = document.getElementById('text')
const todoList = document.getElementById('todo-list')
const doneTitle = document.getElementById('done-title')
const doneList = document.getElementById('done-list')
const removeAllButton = document.getElementById('removeAll')
const addButton = document.getElementById('add')

const render = () => {
  const tasks = taskLogic.listAllTasks()

  todoList.innerHTML = ''

  tasks.forEach(task => {
    if (!task.done) {
      const taskItem = document.createElement('li')
      const markTaskCheckbox = document.createElement('input')
      const taskText = document.createTextNode(task.text)
      const removeButton = document.createElement('button')

      markTaskCheckbox.type = 'checkbox'

      markTaskCheckbox.addEventListener('change', () => {
        taskLogic.markTaskDone(task.id)

        render()
      })

      markTaskCheckbox.className = 'check'

      removeButton.className = 'removeMe'
      removeButton.innerHTML = ' DELETE!'

      removeButton.addEventListener('click', () => {
        taskLogic.removeTask(task.id)
        
        render()
      })

      taskItem.appendChild(markTaskCheckbox)
      taskItem.appendChild(taskText)
      taskItem.appendChild(removeButton)

      todoList.appendChild(taskItem)
    }
  })

  doneTitle.style.display = taskLogic.hasTasksDone()? 'block' : 'none'

  doneList.innerHTML = ''

  tasks.forEach(task => {
    if (task.done) {
      const taskItem = document.createElement('li')
      const markTaskCheckbox = document.createElement('input')
      const taskText = document.createTextNode(task.text)
      const removeButton = document.createElement('button')

      markTaskCheckbox.type = 'checkbox'
      markTaskCheckbox.checked = true

      markTaskCheckbox.addEventListener('change', () => {
        taskLogic.markTaskToDo(task.id)

        render()
      })

      markTaskCheckbox.className = 'check'

      removeButton.className = 'removeMe'
      removeButton.innerHTML = ' DELETE!'

      removeButton.addEventListener('click', () => {
        taskLogic.removeTask(task.id)

        render()
      })

      taskItem.appendChild(markTaskCheckbox)
      taskItem.appendChild(taskText)
      taskItem.appendChild(removeButton)

      doneList.appendChild(taskItem)
    }
  })

  return tasks
}

addButton.onclick = () => {
  const taskTextValue = taskTextInput.value
  taskTextInput.value = ''

  const task = taskLogic.addTask(taskTextValue)

  render()
}

removeAllButton.onclick = () => {
  taskLogic.removeAllTasks()

  render()
}

render()