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
    const result = app.calculate(price, numPeople, "pharmaceutical");
    const expected = 6199.81;
    assert.equal(result, expected);
  });

  it('Should calculate the correct final price for more than one humans working', () => {
    const numPeople = "2 people";
    const result = app.calculate(price, numPeople, "pharmaceutical");
    const expected = 6268.26;
    assert.equal(result, expected);
  });

  it('Should fail gracefully for invalid number of humans working', () => {
    assert.throws(
      () => app.calculate(price, "-1 person", "pharmaceutical"),
      Error,
      Errors.INVALID_NUM_HUMANS
    );
  });
})

describe('Calculate final price based on different types ', () => {
  it('Test with a valid markup type', () => {
    const result = app.calculate(1299.99, "3 people", "food");
    const expected = '1591.58';
    assert.equal(result, expected);
  }),
  it('Test with a Capitalized Markup', () => {
    const result = app.calculate(1299.99, "3 people", "Food");
    const expected = '1591.58';
    assert.equal(result, expected);
  }),
  it('Test with an invalid Markup', () => {
    let result = app.calculate(12456.95, "4 people", "books");
    const expected = 13707.63;
    assert.equal(result, expected);
  })
})

describe('Check the Base Price', () => {
  it('Should fail gracefully for invalid number of Base Price', () => {
    assert.throws(
      () => app.calculate(-124123, "20 person", "pharmaceutical"),
      Error,
      Errors.INVALID_BASE_PRICE
    );
  });
});
