const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let N
    N = input[0];
    let P;
    P = input[(1, N)];
    let PoidTotal
    PoidTotal = 0;
    for (let  i = 0; i < N; i++) {
      PoidTotal += P[i]
      PoidTotal = parseInt(PoidTotal,10)
    }
    if (PoidTotal < 100) {
      return 1
    } else {
      return PoidTotal / 100
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