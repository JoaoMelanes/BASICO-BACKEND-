const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Ola Mundo, este é meu primeiro server com html</h1><p>testando atualização</p>')
})

server.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})