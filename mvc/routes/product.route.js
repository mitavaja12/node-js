const { Router } = require('express');
const productController = require('./product.controller'); 

const productRouter = Router(); 

productRouter.get('/products', productController.getProducts);
productRouter.get('/products/:id', productController.getProductById);
productRouter.post('/products', productController.createProduct);
productRouter.patch('/products/:id', productController.updateProduct);
productRouter.delete('/products/:id', productController.deleteProduct);

module.exports = productRouter;
