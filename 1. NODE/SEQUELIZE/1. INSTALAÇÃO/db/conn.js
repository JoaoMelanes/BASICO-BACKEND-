const {Sequelize, Model} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Sequelize Conectado')

} catch (err){
    console.log('Não foi possivel conectar: ', err);
}

module.exports = sequelize