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
    console.log(`Base Price: ${total}`);
    let flatTotal = total * MARKUP['flat'];
    console.log(`Flat Markup: ${MARKUP["flat"] * 100}% = ${flatTotal}`)
    total += flatTotal
    console.log(`Subtotal: ${total}`)
    let numPeople = pricePackager.parsePeople(people)
    let peopleMarkup = MARKUP["person"] * numPeople
    let personsTotal = total * peopleMarkup
    console.log(`Persons Markup: ${numPeople} * ${MARKUP["person"] * 100}% = ${(peopleMarkup * 100).toFixed(1)}% = ${personsTotal}`)
    total += personsTotal




  },
  parsePeople: (people) => {
    return parseInt(people.charAt(0))
  },
  typeMarkup: (type) => {
    if (MARKUP[type]){
      return MARKUP[type]
    }
  },

}

console.log(pricePackager.parsePeople("1 person"))
console.log(pricePackager.calculate(1299.99, "3 people", "food"))

module.exports = pricePackager;
