const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let place = input[0]
    let gens
    let dr
    let dv
    for (let i = 1; i < 43; i++) {
      gens = input[i].split(' ');
      dr = gens[0]
      dv = gens[1]
      place += dv
      place -= dr
    }
    place = parseInt(place,10)
    if (place <= 100) {
      return 1000
    } else if (place> 100 && place <= 10000) {
      return 100
    } else {
      return "KO"
    }


    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}