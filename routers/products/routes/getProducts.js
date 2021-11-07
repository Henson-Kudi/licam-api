const Product = require('../../../mongooseModels/productSchema')

const getProducts = async (req, res) =>{
    Product.find({}, (err, products) =>{
        if (err) {
            return console.log(err);
        }
        res.send(products)
    })
}

module.exports = getProducts;