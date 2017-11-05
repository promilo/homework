"use strict"

const constants = require('./constants')

const TYPE_MARKUP  = constants.TYPE_MARKUP;
const BASIC_MARKUP = constants.BASIC_MARKUP;


const pricePackager = {
  calculate: (price, numPeople, markupType) => {
    console.log(`Input: ${price}, ${numPeople}, ${markupType} /n`);
    console.log(`Base Price: ${price}`);
    let total = price;
    // calculate the total after Flat Markup
    let flatTotal = total * BASIC_MARKUP['flat'];
    console.log(`Flat Markup: ${BASIC_MARKUP["flat"] * 100}% = ${flatTotal}`)
    total += flatTotal
    console.log(`Subtotal: ${total}`)
    // calculate the total after Persons Markup
    let parsedNumPeople = pricePackager.parsePeople(numPeople)
    let peopleMarkup = BASIC_MARKUP["person"] * parsedNumPeople
    let personsTotal = total * peopleMarkup
    console.log(`Persons Markup: ${parsedNumPeople} * ${BASIC_MARKUP["person"] * 100}% = ${(peopleMarkup * 100).toFixed(1)}% = ${personsTotal}`)

    // calculing markupTypeTotal
    let markupTypeTotal = total * pricePackager.findMarkup(markupType);
    console.log('Type markup:' + (pricePackager.findMarkup(markupType) ? `${TYPE_MARKUP[markupType] * 100}% = ${markupTypeTotal}`: "0" ))
    // calculating the total
    total += markupTypeTotal + personsTotal
    console.log(`Total: ${total} /n`);
    total = Math.round(total * 100) / 100
    console.log(`Output: ${total}`);
    return total;


  },
  parsePeople: (numPeople) => {
    return parseInt(numPeople);
  },
  findMarkup: (markupType) => {
      return TYPE_MARKUP[markupType] || 0;
  },

}


module.exports = pricePackager;
