const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const app = express()
const User = require('./models/User')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

// async define que a função é assincrona, onde depende de algo para continuar
// await define oque precisar carregar primeiro antes de executar a função

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    } else{
        newsletter = false
    }

    await User.create({name,occupation,newsletter})

    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(3003)
}).catch((err) => {
    console.log(err)
})