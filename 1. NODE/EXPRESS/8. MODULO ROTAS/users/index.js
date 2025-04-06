const express = require('express')
const path = require('path')
const router = express.Router()

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`, (err) => {
        console.log(err)
    })
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O seu nome é: ${name}, e você tem ${age} anos.`)
    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id',(req, res) => {

    const id = req.params.id

    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`, (err) => {
        console.log(err)
    })
})

module.exports = router