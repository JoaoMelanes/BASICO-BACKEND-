const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.submitProduct)
router.get('/:id', ProductController.getProduct)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/update', ProductController.updateProduct)
router.get('/', ProductController.showProducts)

module.exports = router