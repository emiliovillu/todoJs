function test(title, unit) {
    try {
        unit()
        
        const testList = document.getElementById('test')
        const testItem = document.createElement('li')
        const testText = document.createTextNode(`Test "${title}" PASSED`)
        
        testList.style.color = '#0f0'
        
        testItem.appendChild(testText)
        
        testList.appendChild(testItem)
        
        console.log(`Test "${title}" PASSED`)
    } catch (err) {
        const testList = document.getElementById('testKo')
        const testItem = document.createElement('li')
        const testText = document.createTextNode(`Test "${title}" FAILED ${err.message}`)
        
        testList.style.color = 'red'
        
        testItem.appendChild(testText)
        
        testList.appendChild(testItem)
        
        console.error(`Test "${title}" FAILED ${err.message}`)
    }
}

function assert(condition, description) {
    if (!condition) throw new Error(`condition not passed: "${description}"`)
}