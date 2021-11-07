const Product = require('../../../mongooseModels/productSchema')

const deleteProduct = (req, res) => {
    const _id = req.body._id
    Product.findOneAndDelete(_id, req.body, (err, result) =>{
        if (err) {
            return console.log(err);
        }
        res.send({message: 'Deleted product successfully.'})
    })
    
    
}

module.exports = deleteProduct