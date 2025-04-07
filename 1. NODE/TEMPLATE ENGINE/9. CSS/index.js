const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender nodeJS',
        category: 'Java Script',
        body: 'Este artigo vai te ajudar a aprender nodeJS....',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog',(req, res) =>{

    const posts = [
        {
        title: 'Aprender nodeJS',
        category: 'Java Script',
        body: 'alguma coisa',
        comments: 4
        },
        {
        title: 'Aprender PHP',
        category: 'PHP',
        body: 'alguma coisa',
        comments: 4
        },
        {
        title: 'Aprender Python',
        category: 'Python',
        body: 'alguma coisa',
        comments: 4
        },
    ]
    res.render('blog',{posts})
})

app.get('/dashboard', (req, res) => {

    const itens = ['item a', 'item b', 'item c']

    res.render('dashboard', {itens})
})

app.get('/', (req, res) => {

    const user = {
        name: 'João',
        surname: 'Pedro',
        age: 21
    }

    const palavra = 'Teste'

    const auth = true

    const approved = false

    res.render('home', {user: user, palavra, auth, approved})

})

app.listen(3000, () => {
    console.log("handle funcionando")
})