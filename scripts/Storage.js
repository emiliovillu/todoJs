class Storage {
    constructor() {
        this.storage = localStorage
    }

    getObject(key) {
        return JSON.parse(this.storage.getItem(key))
    }

    setObject(key, value) {
        this.storage.setItem(key, JSON.stringify(value))
    }
}