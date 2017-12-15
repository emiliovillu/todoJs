class Storage {
    constructor(storage) {
        this.storage = storage
    }

    getObject(key) {
        return JSON.parse(this.storage.getItem(key))
    }

    setObject(key, value) {
        this.storage.setItem(key, JSON.stringify(value))
    }
}