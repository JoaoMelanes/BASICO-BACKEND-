const express = require('express')
const path = require('path')

const app = express()
const basePath = path.join(__dirname, 'templates')

const port = 3000 

app.get('/users/:id',(req, res) => {

    const id = req.params.id

    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`, (err) => {
        console.log(err)
    })
})

app.get('/',(req, res) => {

    res.sendFile(`${basePath}/index.html`, (err) => {
        console.log(err)
    })
})

app.listen(port, () => {

    console.log(`App rodando na porta: ${port}`)
})