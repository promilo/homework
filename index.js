const MARKUP = {
  "food" : 0.13,
  "pharmaceutical": 0.075,
  "electronic": 0.02,
  "flat": 0.05
}

const pricePackager = {
  calculate: (price, people, type) => {
    console.log(`Input: ${price}, ${people}, ${type}/n/n`);
    console.log(`Base Price: ${price}`);
    let total = price;
    console.log(`Base Price: ${total}`);
    total = total * MARKUP['flat'];
    console.log(`Flat Markup: ${total}`)



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
