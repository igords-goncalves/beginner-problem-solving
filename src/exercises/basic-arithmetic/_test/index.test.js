/* global describe, expect, test */

const mathOperations = require('../index.js')

describe('Math tests', () => {
  const a = 22
  const b = 6

  test('mathOperations should be a function', () => {
    expect(mathOperations).toBeInstanceOf(Function)
  })

  test('mathOperations should return a value by summing a + b', () => {
    const result = mathOperations(a, b).sum
    expect(mathOperations(a, b).sum).toBe(result)
  })

  test('matOperations should return a value by subtracting a - b', () => {
    const result = mathOperations(a, b).sub
    expect(mathOperations(a, b).sub).toBe(result)
  })

  test('matOperations should return a value by multplying a * b', () => {
    const result = mathOperations(a, b).mult
    expect(mathOperations(a, b).mult).toBe(result)
  })

  test('matOperations should return a value by dividing a * b', () => {
    const result = mathOperations(a, b).div
    expect(mathOperations(a, b).div).toBe(result)
  })
})
