const express = require('express')
const path = require('path')

const app = express()
const basePath = path.join(__dirname, 'templates')

const checkAuth = (req, res, next) => {

    req.authStatus = true

    if(req.authStatus){
        console.log('Esta logado, pode continuar!')
        next()
    } else{
        console.log('Não está logado, faça o login para continuar!')
        next()
    }
}

app.use(checkAuth)

const port = 3000 

app.get('/',(req, res) => {

    res.sendFile(`${basePath}/index.html`, (err) => {
        console.log(err)
    })
})

app.listen(port, () => {

    console.log(`App rodando na porta: ${port}`)
})