const classifyTriangles = require('../index.js')

function assert(value, description) {
  if(!value) throw new Error(`Teste failed: ${description}`)
}

console.log('Test passed: Verify if classifyTriangles is a function ...')
assert(typeof(classifyTriangles === "functions"), "classifyTriangles should be a function")

console.log("Test passed: Verify if classifyTriangles is a triangle ...")
assert(classifyTriangles(3, 5, 3), "classifyTriangles should be a triangle")

console.log("Test passed: Verify if classifyTriangles is a Equilateral Triangle ...")
assert(classifyTriangles(3, 3, 3) === "Equilateral Triangle", "classifyTriangle should be a Equilateral Triangle")

console.log("Test passed: Verify if classifyTriangles is a Isosceles Triangle ...")
assert(classifyTriangles(3, 5, 3) === "Isosceles Triangle", "classifyTriangle should be a Isosceles Triangle")

console.log("Test passed: Verify if classifyTriangles is a Scalene Triangle ...")
assert(classifyTriangles(4, 2, 3) === "Scalene Triangle", "classifyTriangle should be a Scalene Triangle")