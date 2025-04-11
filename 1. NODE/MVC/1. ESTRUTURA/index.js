const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

conn.default.sync().then(() => {
    app.listen(3003)
}).catch((err) => {
    console.log(err)
})