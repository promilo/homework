"use strict"

const constants = require('./constants')

const TYPE_MARKUP  = constants.TYPE_MARKUP;
const BASIC_MARKUP = constants.BASIC_MARKUP;
const Errors = constants.Errors;


const pricePackager = {
  calculate: (price, numPeople, markupType) => {
    console.log(`Input: ${price}, ${numPeople}, ${markupType} /n`);
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
    console.log(`Total: ${total} /n`);
    total = Math.round(total * 100) / 100;
    console.log(`Output: ${total}`);
    return total;
  },
  calculateTotalafterFlat: (number) =>{
    let flatTotal = number * BASIC_MARKUP['flat'];
    console.log(`Flat Markup: ${BASIC_MARKUP["flat"] * 100}% = ${flatTotal}`)
    return flatTotal
  },
  calculatePersonsMarkup: (persons, subtotal) => {
    let parsedNumPeople = pricePackager.parsePeople(persons);
    let peopleMarkup = BASIC_MARKUP["person"] * parsedNumPeople;
    let personsTotal = subtotal * peopleMarkup;
    console.log(`Persons Markup: ${parsedNumPeople} * ${BASIC_MARKUP["person"] * 100}% = ${(peopleMarkup * 100).toFixed(1)}% = ${personsTotal}`)
    return personsTotal;
  },
  calculateTypeMarkup: (type, subtotal) => {
    const markupTypePercentage =  pricePackager.findMarkup(type);
    let markupTypeTotal = subtotal * markupTypePercentage;
    console.log(
      'Type markup:' + (
        markupTypePercentage !== 0
        ? `${markupTypePercentage * 100}% = ${markupTypeTotal}`
        : "0"
      )
    )
    return markupTypeTotal;

  },
  parsePeople: (numPeople) => {
    const parsedNumPeople = parseInt(numPeople);
    // check if it is a number or its greater than 0. If it isn't raise an error
    if (isNaN(parsedNumPeople) || parsedNumPeople < 0){
      throw new Error(Errors.INVALID_NUM_HUMANS);
    }
    return parsedNumPeople;
  },
  findMarkup: (markupType) => {
      return TYPE_MARKUP[markupType] || 0;
  },

}


module.exports = pricePackager;
