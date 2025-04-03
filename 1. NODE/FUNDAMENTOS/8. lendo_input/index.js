const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question("Qual a sua linguem favorita? ", (language) => {
    
    if (language === 'Python'){
        console.log('Isso nem é uma linguagem!')
    } else {
    console.log(`A minha linguagem preferida é: ${language}`)
    }

    readLine.close()
})