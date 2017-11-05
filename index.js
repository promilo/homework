"use strict"

const TYPE_MARKUP = {
  "food" : 0.13,
  "pharmaceutical": 0.075,
  "electronic": 0.02,
}

const BASIC_MARKUP = {
  "flat": 0.05,
  "person": 0.012
}

const pricePackager = {
  calculate: (price, people, type) => {
    console.log(`Input: ${price}, ${people}, ${type} /n`);
    console.log(`Base Price: ${price}`);
    let total = price;
    // calculate the total after Flat Markup
    let flatTotal = total * BASIC_MARKUP['flat'];
    console.log(`Flat Markup: ${BASIC_MARKUP["flat"] * 100}% = ${flatTotal}`)
    total += flatTotal
    console.log(`Subtotal: ${total}`)
    // calculate the total after Persons Markup
    let numPeople = pricePackager.parsePeople(people)
    let peopleMarkup = BASIC_MARKUP["person"] * numPeople
    let personsTotal = total * peopleMarkup
    console.log(`Persons Markup: ${numPeople} * ${BASIC_MARKUP["person"] * 100}% = ${(peopleMarkup * 100).toFixed(1)}% = ${personsTotal}`)

    // calculing typeTotal
    let typeTotal = total * pricePackager.typeMarkup(type);
    console.log('Type markup:' + (pricePackager.typeMarkup(type) ? `${TYPE_MARKUP[type] * 100}% = ${typeTotal}`: "0" ))
    // calculating the total
    total += typeTotal + personsTotal
    console.log(`Total: ${total} /n`);
    total = Math.round(total * 100) /100
    console.log(`Output: ${total}`)
    return total


  },
  parsePeople: (people) => {
    return parseInt(people.charAt(0))
  },
  typeMarkup: (type) => {
    if (TYPE_MARKUP[type]){
      return TYPE_MARKUP[type]
    } else {
      return 0
    }
  },

}

console.log(pricePackager.calculate(1232, "2 person", "flat"));


module.exports = pricePackager;
