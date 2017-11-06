"use strict"

const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../index');

const validMarkupTypes = require('../constants').VALID_MARKUP_TYPES;
const Errors = require('../constants').Errors;

describe('Calculate final price based on different numbers of humans working', () => {

  const price = 5432.00;

  it('Should calculate the correct final price for 1 human', () => {
    const numPeople = "1 person";
    const result = app.calculate(price, numPeople, validMarkupTypes[1])
    const expected = 6199.81
    assert.equal(result, expected)
  });

  it('Should calculate the correct final price for more than one humans working', () => {
    const numPeople = "2 people";
    const result = app.calculate(price, numPeople, validMarkupTypes[1])
    const expected = 6268.26
    assert.equal(result, expected)
  });

  it('Should fail gracefully for invalid number of humans working', () => {
    assert.throws(
      () => app.calculate(price, "-1 person", validMarkupTypes[1]),
      Error,
      Errors.INVALID_NUM_HUMANS
    );
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
