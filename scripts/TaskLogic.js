class TaskLogic {
  constructor(storage) {
    this.taskData = new TaskData(storage)
  }

  addTask(text) {
    return this.taskData.create(text, false)
  }

  listAllTasks() {
    return this.taskData.list()
  }

  markTaskDone(id) {
      const task = this.taskData.retrieve(id)

      this.taskData.update(id, task.text, true)
  }

  markTaskToDo(id) {
    const task = this.taskData.retrieve(id)
    
    this.taskData.update(id, task.text, false)
  }

  removeTask(id) {
    this.taskData.delete(id)
  }

  removeAllTasks() {
    this.taskData.deleteAll()
  }

  hasTasksDone() {
    const tasks = this.listAllTasks()

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].done) return true
    }

    return false
  }
}