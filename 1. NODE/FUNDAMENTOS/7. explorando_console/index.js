// mais de um valor
const x = 10
const y = [1,2]
const z = "João"
console.log(x,y,z)

// contagem de impressões
console.count(`O valor de x é:${x}, contagem`)
console.count(`O valor de x é:${x}, contagem`)
console.count(`O valor de x é:${x}, contagem`)
console.count(`O valor de x é:${x}, contagem`)

// variavel entre string
console.log("O nome é %s, ele é programdor", z)

//limpar o console
setTimeout(() => {
    console.clear()
}, 3000)