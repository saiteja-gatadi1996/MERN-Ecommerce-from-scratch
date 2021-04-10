import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()

// http://localhost:5000/api/products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    //gives us everything
    const products = await Product.find({})
    res.json(products)
  })
)

// http://localhost:5000/api/products/:id
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //gives us the id whatever in the url
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      //Product not found can be displayed only when you modify the url on your own instead of removing
      throw new Error('Product not Found')
    }
  })
)

export default router
