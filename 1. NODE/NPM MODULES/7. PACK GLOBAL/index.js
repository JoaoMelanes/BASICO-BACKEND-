console.log('o comando "npm install -g" instala o pacote na maquina, e permite o uso em qualquer projeto')
console.log('o comando "npm link " instala os modulos que estão na maquina')
const _ = require('lodash')

const a = [1,2,2,3,3,4,4,5,5,]
const sortUni = _.sortedUniq(a)

console.log(sortUni)