const fs = require('fs')

console.log('inicio')

fs.writeFile("async.txt", "hello world", (err) => {
    setTimeout(() => {
        console.log("Arquivo criado")
    }, 2000)
})

console.log('fim')