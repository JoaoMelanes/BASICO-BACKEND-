const inquirer = require('inquirer')

inquirer.default.prompt([{
    name: "p1",
    message: 'Qual a primeira nota?',
},
{
    name: 'p2',
    message: 'Qual a segunda nota? ',
},
]).then((answers) => {
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`A media é: ${media}`)
}).catch((err) => console.log(err))