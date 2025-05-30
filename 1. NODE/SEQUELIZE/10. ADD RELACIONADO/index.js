const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const app = express()
const User = require('./models/User')
const { where } = require('sequelize')
const { USE } = require('sequelize/lib/index-hints')
const Address = require('./models/Address')

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
 
app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({
        raw: true,
        where: {
            id: id
        }
    })

    res.render('userviews', {user})
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id

    await User.destroy({
        raw: true,
        where: {
            id: id
        }
    })

    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({
        raw: true,
        where: {id: id}
    })

    res.render('useredit', {user})
})

app.post('/users/update', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter == 1){
        newsletter = true
    }else{
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {
        where: {id: id}
    })

    res.redirect('/')
})

app.post('/address/create', async (req, res) => {
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const address = {
        UserId,
        street,
        number,
        city
    }

    await Address.create(address)

    res.redirect('/')

})

app.get('/', async (req, res) => {

    // raw trás um array só com os dados do banco de dados
    const users = await User.findAll({raw:true})
    console.log(users)

    res.render('home',{ users: users})
})

conn.sync().then(() => {
    app.listen(3003)
}).catch((err) => {
    console.log(err)
})
//reseta toda a tabela
//.sync({force: true})