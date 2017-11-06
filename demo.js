"use strict"

const pricePackager = require('./index');

pricePackager.calculate(1299.99, "3 people", "food");
pricePackager.calculate(5432.00, "1 person", "pharmaceutical");
pricePackager.calculate(12456.95, "4 people", "books");
