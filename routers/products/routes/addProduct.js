const Product = require('../../../mongooseModels/productSchema')

const addProduct = (req, res) => {
    const product = new Product(req.body);

    product.save(err => {
        if (err) {
            return console.log(err);
        }
        console.log('Product saved successfully');
    })
    res.send(res.send({message: 'Product saved successfully'}))
}

module.exports = addProduct;