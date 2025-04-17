const { MongoUnexpectedServerResponseError } = require('mongodb')
const mongoose = require('mongoose')

async function  main() {
    await mongoose.connect('mongodb://localhost:27017/mongoose')
    console.log('Conectado ao mongoose')
}

main().catch((err) => {
    console.log(err)
})

module.exports = mongoose