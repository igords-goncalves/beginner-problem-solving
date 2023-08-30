const testTriagles = require('../index.js')

// Quando verdadeiro o teste passa
// Quando falso retorna o erro
function assert(value) {
  if(!value) throw new Error("Invalid value")
}

console.log('testTriangles shuld be a function', typeof(testTriagles) === 'function')
assert(testTriagles)

console.log('TestTriagles should be a triangle');
assert(testTriagles(3, 5, 1))
// Você pode testar se existe uma função nessa linha de ser um prototype
// ou pode ir construindo seu programa e ir testando
// lembre-se que o teste vem primeiro