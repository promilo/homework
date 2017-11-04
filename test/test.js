const assert = require('chai').assert

const app = require('../index');

describe('test', () => {
  it('Example 1: should return 6199.81', () => {
    let result = app.calculate(1299.99, "3 people", "food")
    assert.equal(result, '1591.58')
  })
})


describe('test', () => {
  it('Example 2: should return 1591.58', () => {
    let result = app.calculate(5432.00, "1 person", "pharmaceutical")
    assert.equal(result, '1591.58')
  })
})

describe('test', () => {
  it('Example 3: should return 13707.63', () => {
    let result = app.calculate(12456.95, "4 people", "books")
    assert.equal(result, '1591.58')
  })
})
