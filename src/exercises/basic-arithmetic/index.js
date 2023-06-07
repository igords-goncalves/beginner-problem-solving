const mathOperations = (a, b) => {
  const operations = {
    sum: a + b,
    sub: a - b,
    mult: a * b,
    div: a / b
  }
  return operations
}
console.log(mathOperations(6, 6).sum)
console.log(mathOperations(6, 6).div)
console.log(mathOperations(6, 6).mult)

module.exports = mathOperations
