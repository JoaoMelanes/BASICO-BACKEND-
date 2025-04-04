const path = require('path')

// path absoluto
console.log(path.resolve('test.txt'))

// formar path

const midFolder = 'relatorios'
const fileFolder = 'joao.txt'

const finalPath = path.join('/','arquivos',midFolder,fileFolder)

console.log(finalPath)