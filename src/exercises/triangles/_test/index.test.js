const testTriagles = require('../index.js')

function assert(value, description) {
  if(!value) throw new Error(`Teste failed: ${description}`)
}

console.log('Test passed: Verify if testTriagles is a function ...')
assert(typeof(testTriagles === "functions"), "testTriagles should be a function")

console.log("Teste passed: Verify if testTriagles is a triangle ...")
assert(testTriagles(3, 5, 1), "testTriangles should be a triangle")