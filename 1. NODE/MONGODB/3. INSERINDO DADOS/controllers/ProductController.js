const Product = require('../models/Product')

module.exports = class ProductController{
    static showProducts(req, res){
        res.render('products/all')
    }

    static createProduct(req, res){
        res.render('products/create')
    }

    static async submitProduct(req, res){
        const product = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
        
        const products = new Product(product)

        products.save()

        res.redirect('/products')
    }
}