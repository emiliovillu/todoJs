function testAddTask () {
  const taskLogic = new TaskLogic(storage)
  const taskData = new TaskData(storage)

  const task = taskLogic.addTask('buy milk')
  const retrieveTask = taskData.retrieve(task.id)

  assert(task.id === retrieveTask.id, 'the function must have added an object in LocalStorage with equal "id"')
}

test('Successfully add of task', testAddTask)
