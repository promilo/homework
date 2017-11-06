"use strict"

const constants = require('./constants');

const TYPE_MARKUP  = constants.TYPE_MARKUP;
const BASIC_MARKUP = constants.BASIC_MARKUP;
const Errors = constants.Errors;

const pricePackager = {
  calculate: (price, numPeople, markupType) => {
    if (price < 0){
      // Throw an error is Base price is negative
      throw new Error(Errors.INVALID_BASE_PRICE);
    }
    console.log(`Input: ${price}, ${numPeople}, ${markupType} \n`);
    console.log(`Base Price: ${price}`);
    let total = price;
    // calculate the total after Flat Markup

    total += pricePackager.calculateTotalafterFlat(total);
    console.log(`Subtotal: ${total}`);

    // calculate the total after Persons Markup
    let personsTotal = pricePackager.calculatePersonsMarkup(numPeople, total);

    // calculating markupTypeTotal
    let markupTypeTotal = pricePackager.calculateTypeMarkup(markupType, total);

    // calculating the total
    total += markupTypeTotal + personsTotal;
    console.log(`Total: ${total} \n`);
    total = Math.round(total * 100) / 100;
    console.log(`Output: ${total} \n`);
    return total;
  },
  calculateTotalafterFlat: (number) =>{
    // Find the flat total by checking the basic markup.
    let flatTotal = number * BASIC_MARKUP['flat'];
    console.log(`Flat Markup: ${BASIC_MARKUP["flat"] * 100}% = ${flatTotal}`);
    return flatTotal
  },
  calculatePersonsMarkup: (persons, subtotal) => {
    // Extracting the integer from the number of persons string
    let parsedNumPeople = pricePackager.parsePeople(persons);
    // find the total people markup % by multiplying the number of people and person markup
    let peopleMarkup = BASIC_MARKUP["person"] * parsedNumPeople;
    let personsTotal = subtotal * peopleMarkup;

    console.log(`Persons Markup: ${parsedNumPeople} * ${BASIC_MARKUP["person"] * 100}% = ${(peopleMarkup * 100).toFixed(1)}% = ${personsTotal}`)
    return personsTotal;
  },
  calculateTypeMarkup: (type, subtotal) => {
    // find the markup type and handle the case if the inputted item is capitalized. If it can't find it return 0
    const markupTypePercentage =  TYPE_MARKUP[type.toLowerCase()] || 0;
    let markupTypeTotal = subtotal * markupTypePercentage;
    console.log(
      'Type markup:' + (
        markupTypePercentage !== 0
        ? `${markupTypePercentage * 100}% = ${markupTypeTotal}`
        : "0"
      )
    );
    return markupTypeTotal;

  },
  parsePeople: (numPeople) => {
    const parsedNumPeople = parseInt(numPeople);
    // check if it is a number or its greater than 0. If it isn't raise an error
    if (isNaN(parsedNumPeople) || parsedNumPeople < 0){
      throw new Error(Errors.INVALID_NUM_HUMANS);
    }
    return parsedNumPeople;
  }
}


module.exports = pricePackager;
