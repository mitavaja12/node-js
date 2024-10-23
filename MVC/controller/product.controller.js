const product = require('../model/product.model')

const createProduct = async (req, res) => {
    let data = await product.craete(req.body)
    res.send(data)
}

const getProduct = async (req, res) => {
    let data = await product.find()
    res.send(data)
}

const getProductByUserId = async (req, res) => {
    let { userId } = req.params
    let data = await product.find({ userId })
    res.send(data)
}

module.exports= { createProduct, getProduct, getProductByUserId }