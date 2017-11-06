"use strict"

const TYPE_MARKUP = {
  "food" : 0.13,
  "pharmaceutical": 0.075,
  "electronic": 0.02,
};
const VALID_MARKUP_TYPES = Object.keys(TYPE_MARKUP);

const BASIC_MARKUP = {
  "flat": 0.05,
  "person": 0.012
};

const Errors = {
  INVALID_NUM_HUMANS : "Invalid number of humans working",
  INVALID_BASE_PRICE : "Invalid number of base price"
};

module.exports = {
  TYPE_MARKUP,
  BASIC_MARKUP,
  VALID_MARKUP_TYPES,
  Errors
};
