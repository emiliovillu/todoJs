function test(title, unit) {
    try {
        unit()

        console.log(`Test "${title}" PASSED`)
    } catch (err) {
        console.error(`Test "${title}" FAILED ${err.message}`)
    }
}

function assert(condition, description) {
    if (!condition) throw new Error(`condition not passed: "${description}"`)
}