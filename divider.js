const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

rl.on('line', (input) => {
  console.log((Number.parseFloat(input)/360*100).toFixed(2) + 'vw')
})
