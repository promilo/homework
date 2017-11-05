"use strict"

const assert = require('chai').assert;
const app = require('../index');

const validMarkupTypes = require('../constants').TYPE_MARKUP;

describe('Calculate final price based on different numbers of humans working', () => {

  const validMarkupType = "pharmaceutical";

  it('Should calculate the correct final price for 1 human', () => {
    let result = app.calculate(5432.00, "1 person", validMarkupType)
    assert.equal(result, '6199.81')
  });

  it('Should calculate the correct final price for more than one digit number of humans working', () => {
    let result = app.calculate(5432.00, "1234 person", validMarkupType)
    assert.equal(result, '6199.81')
  });

  it('Should fail gracefully for invalid number of humans working', () => {
    let result = app.calculate(5432.00, "-1 person", validMarkupType)
    assert.equal(result, '6199.81')
  });
})


describe('test ', () => {
  it('Test with multiple people', () => {
    let result = app.calculate(1299.99, "3 people", "food")
    assert.equal(result, '1591.58')
  })
})



describe('test', () => {
  it('Example 3: should return 13707.63', () => {
    let result = app.calculate(12456.95, "4 people", "books")
    assert.equal(result, '13707.63')
  })
})
