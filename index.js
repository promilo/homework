const TYPE_MARKUP = {
  "food" : 0.13,
  "pharmaceutical": 0.075,
  "electronic": 0.02,
  "flat": 0.05
}

const pricePackager = {
  calculate: (price, people, type) => {


  },
  parsePeople: (people) => {
    return parseInt(people.charAt(0))
  },
  typeMarkup: (type) => {
    if (TYPE_MARKUP[type]){
      return TYPE_MARKUP[type]
    }
  }

}

console.log(pricePackager.parsePeople("1 person"))

module.exports = pricePackager;
