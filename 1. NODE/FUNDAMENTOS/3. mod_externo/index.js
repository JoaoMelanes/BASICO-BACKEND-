// modulos externos
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(nome)
console.log(profissao)

console.log(`O seu nome é: ${nome} e você é: ${profissao}`)