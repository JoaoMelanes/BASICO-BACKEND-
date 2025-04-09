const mySql = require('mysql')

const pool = mySql.createPool({
    connectionLimit: 10,
    host:'localhost',
    user: 'root',
    password: '',
    database:'nodemysql'
})

console.log("connectou ao poll")
module.exports = pool