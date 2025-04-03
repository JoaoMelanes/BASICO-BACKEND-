// nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1]
const idade = args[1].split("=")[1]

console.log(nome)
console.log(idade)

console.log(`O nome dele é: ${nome} e a idade é: ${idade}`)