const { deserialize } = require('mongodb')
const Product = require('../models/Product')

module.exports = class ProductController{
    static async showProducts(req, res){
        const products = await Product.find().lean()

        res.render('products/all', {products})
    }

    static createProduct(req, res){
        res.render('products/create')
    }

    static async submitProduct(req, res){
        
        const image = req.body.image
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
    
        const product = new Product({image, name, price, description})

        await product.save()

        res.redirect('/products')
    }

    static async getProduct(req, res){
        const id = req.params.id

        const product = await Product.findById(id).lean()

        res.render('products/product', {product})
    }

    static async removeProduct(req,res){
        const id = req.params.id

        const product = await Product.findByIdAndDelete(id)

        res.redirect('/products')
    }

    static async editProduct(req, res){
        const id = req.params.id

        const product = await Product.findById(id).lean()

        res.render('products/edit', {product})
    }

    static async updateProduct(req, res){

        const id = req.body.id
        const dados = {
            image: req.body.image,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }

        await Product.findByIdAndUpdate(id,dados).lean()

        res.redirect('/products')
    }
}