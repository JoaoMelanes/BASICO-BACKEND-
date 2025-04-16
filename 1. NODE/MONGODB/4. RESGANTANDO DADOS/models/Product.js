const conn = require('../db/conn')

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
}

module.exports = Product