const getProducts = require('./routes/getProducts');
const addProduct = require('./routes/addProduct');
const deleteProduct = require('./routes/deleteProduct');
const updateProduct = require('./routes/updateProduct');
const router = require('express').Router()

router.route('/').get(getProducts).post(addProduct).patch(deleteProduct).put(updateProduct)

module.exports = router