const conn = require('../db/conn')

const {ObjectId} = require('mongodb')

class Product {
    constructor(image,name, price, description){

        this.image = image
        this.name = name
        this.price = price
        this.description = description
    }

    save(){
        const product = conn.db().collection('products').insertOne({
            image: this.image,
            name: this.name,
            price: this.price,
            description: this.description
        })

        return product
    }

    static getProducts(){
        const products = conn.db().collection('products').find().toArray()

        return products
    }

    static async getProductById(id){
        const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id)})

        return product
    }

}

module.exports = Product