const storage = localStorage

function testCreateTask () {
  const taskData = new TaskData(storage)

  const createTask = taskData.create('buy milk', false)

  assert(typeof(createTask) === 'object', 'the task created must be equal to object')
  assert(typeof (createTask.text) === 'string', 'the text key must be a string')
  assert(createTask.text === 'buy milk', 'the text of the task of being "buy milk"')
  assert(createTask.done === false, 'the done key must be a boolean')
}

test('Successfully created task', testCreateTask)

function testListTask () {
  const taskData = new TaskData(storage)

  const listTask = taskData.list()

  assert(Object.prototype.toString.call(listTask) == '[object Array]', 'listTask must return a array of objects')
}

test('Successfully list of task', testListTask)

function testUpdateTask () {
  const taskData = new TaskData(storage)

  const task = taskData.create('buy milk', false)
  
  const updateTask = taskData.update(task.id, true)

  assert(task.id === updateTask.id && task.done !== updateTask.done, 'the key "done" of the task must have been updated to "true"')
}

test('Successfully update of task', testUpdateTask)

function testDeleteTaskById () {
  const taskData = new TaskData(storage)

  const task = taskData.create('buy milk', false)

  const deleteTask = taskData.delete(task.id)

  const retrieveTask = taskData.retrieve(task.id)


  assert(retrieveTask === undefined, 'the task must have been erased')
}

test('Successfully delete of task', testDeleteTaskById)