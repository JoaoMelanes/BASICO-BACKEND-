const express = require('express')
const path = require('path')

const app = express()
const basePath = path.join(__dirname, 'templates')

// Ler body post
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const port = 3000 

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`, (err) => {
        console.log(err)
    })
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O seu nome é: ${name}, e você tem ${age} anos.`)
    res.sendFile(`${basePath}/userform.html`)
})

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



