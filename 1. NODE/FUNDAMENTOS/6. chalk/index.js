const chalk = require('chalk')

const nota = 9
if( nota >= 7){
    console.log(chalk.default.green('Parabéns você está aprovado!'))
} else{
    console.log(chalk.default.red('Você precisa fazer a prova de recuperação'))
}