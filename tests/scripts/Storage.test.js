const targetStorage = localStorage

function testStorageSetsObjectSuccessfullyInTargetStorage() {
    const storage = new Storage(targetStorage)

    const obj = { hello: 'world' }
    
    storage.setObject('helloworld', obj)

    const res = targetStorage.getItem('helloworld')

    assert(res == JSON.stringify(obj), 'recovered object from target storage must have the same content as the original object')
}

test('Storage sets object successfully', testStorageSetsObjectSuccessfullyInTargetStorage)

function testStorageGetsObjectSuccessfullyFromTargetStorage() {
    const storage = new Storage(targetStorage)

    const obj = { hello: 'world' }
    
    storage.setObject('helloworld', obj)

    const res = storage.getObject('helloworld')

    assert(JSON.stringify(res) == JSON.stringify(obj), 'recovered object from storage must have the same content as the original object')
}

test('Storage gets object successfully', testStorageGetsObjectSuccessfullyFromTargetStorage)
