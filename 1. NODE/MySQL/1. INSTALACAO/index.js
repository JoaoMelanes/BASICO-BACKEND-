const express = require('express')
const exphbs = require('express-handlebars')
const mySql = require('mysql')

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '' ,
    database: 'nodemysql',
})

conn.connect((err) => {
    if(err){
    console.log(err)
    }

    console.log('Conectou ao banco')

    app.listen(3000, () => {
    console.log('conectou a porta 3000.')
    })
})


