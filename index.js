const MARKUP = {
  "food" : 0.13,
  "pharmaceutical": 0.075,
  "electronic": 0.02,
  "flat": 0.05,
  "person": 0.012
}

const pricePackager = {
  calculate: (price, people, type) => {
    console.log(`Input: ${price}, ${people}, ${type} /n`);
    console.log(`Base Price: ${price}`);
    let total = price;
    // calculate the total after Flat Markup
    let flatTotal = total * MARKUP['flat'];
    console.log(`Flat Markup: ${MARKUP["flat"] * 100}% = ${flatTotal}`)
    total += flatTotal
    console.log(`Subtotal: ${total}`)
    // calculate the total after Persons Markup
    let numPeople = pricePackager.parsePeople(people)
    let peopleMarkup = MARKUP["person"] * numPeople
    let personsTotal = total * peopleMarkup
    console.log(`Persons Markup: ${numPeople} * ${MARKUP["person"] * 100}% = ${(peopleMarkup * 100).toFixed(1)}% = ${personsTotal}`)

    // calculing typeTotal
    let typeTotal = total * pricePackager.typeMarkup(type);
    console.log('Type markup:' + (pricePackager.typeMarkup(type) ? `${MARKUP[type] * 100}% = ${typeTotal}`: "0" ))
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
    if (MARKUP[type]){
      return MARKUP[type]
    } else {
      return 0
    }
  },

}


module.exports = pricePackager;
