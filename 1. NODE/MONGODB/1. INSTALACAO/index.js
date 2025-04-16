const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// read body
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.listen(3003)
