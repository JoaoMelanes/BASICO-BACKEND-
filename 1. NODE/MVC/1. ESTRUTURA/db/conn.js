const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Banco conectado')

}catch(err){
    console.log(`Não conectou ao banco: ${err}`)
}

exports.default = sequelize