class TaskData {
    constructor() {
        this.storage = new Storage
    }

    create(text, done) {
        const tasks = this.list()

        const task = {
            id: new Date().getTime(),
            text,
            done
        }
        
        tasks.push(task)

        this.set(tasks)

        return task
    }

    _retrieve(id, tasks) {
        let task
        
        for (let i = 0; i < tasks.length; i++) {
            const _task = tasks[i]
    
            if (_task.id == id) {
                task = _task
    
                break
            }
        }

        return task
    }

    retrieve(id) {
        return this._retrieve(id, this.list())
    }

    list() {
        return this.storage.getObject('tasks') || []
    }

    set(tasks) {
        this.storage.setObject('tasks', tasks)
    }

    update(id, text, done) {   
        const tasks = this.list()
        
        const task = this._retrieve(id, tasks)
        
        if (task) {
            task.done = true

            this.set(tasks)
        }

        return task
    }

    delete(id) {
        let tasks = this.list()

        let task

        tasks = tasks.filter(_task => {
            if (_task.id == id) {
                task = _task
            } else
                return _task
        })

        this.set(tasks)

        return task
    }

    deleteAll() {
        this.set([])
    }
}