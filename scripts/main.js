const taskLogic = new TaskLogic,
  taskTextInput = document.getElementById('text'),
  todoList = document.getElementById('todo-list'),
  doneList = document.getElementById('done-list'),
  removeAllButton = document.getElementById('removeAll'),
  addButton = document.getElementById('add')
 


addButton.onclick = addTask

function render () {
  todoList.innerHTML = ''
  const tasks = taskLogic.listAllTasks()
  tasks.forEach(task => {
    if (!task.done) {
    taskItem = document.createElement('li'),
    markDoneCheckbox = document.createElement('input'),
    taskText = document.createTextNode(task.text),
    removeButton = document.createElement('button')

    markDoneCheckbox.type = 'checkbox'

    
    
      markDoneCheckbox.addEventListener('change', () => {
         taskLogic.markTaskDone(task.id)
      })

      markDoneCheckbox.className = 'check'
      removeButton.className = 'removeMe'
      removeButton.innerHTML = ' DELETE!'
      removeButton.addEventListener('click', () => {
        taskLogic.removeTask(task.id)
        console.log(task.id)
    
        render()
      })
    
      taskItem.appendChild(markDoneCheckbox)
      taskItem.appendChild(taskText)
      taskItem.appendChild(removeButton)
    
      todoList.appendChild(taskItem)
    }
  })  
  
  tasks.forEach(task => {
    if (task.done) {
    taskItem = document.createElement('li'),
    markDoneCheckbox = document.createElement('input'),
    taskText = document.createTextNode(task.text),
    removeButton = document.createElement('button')

    markDoneCheckbox.type = 'checkbox'

    
    
      markDoneCheckbox.addEventListener('change', () => {
         taskLogic.markTaskDone(task.id)
      })

      markDoneCheckbox.className = 'check'
      removeButton.className = 'removeMe'
      removeButton.innerHTML = ' DELETE!'
      removeButton.addEventListener('click', () => {
        taskLogic.removeTask(task.id)
        console.log(task.id)
    
        render()
      })
    
      taskItem.appendChild(markDoneCheckbox)
      taskItem.appendChild(taskText)
      taskItem.appendChild(removeButton)
    
      doneList.appendChild(taskItem)
    }
  })
  
  return tasks
}

function addTask() {
  const taskTextValue = taskTextInput.value
  taskTextInput.value = ''

  const task = taskLogic.addTask(taskTextValue)

  render()
}


const removeTaskItem = item => {
  const parent = item.parentElement
  parent.parentElement.removeChild(parent)
  render()
}




removeAllButton.onclick = () => {
  taskLogic.removeAllTasks()

  todoList.innerHTML = ''
}

render()