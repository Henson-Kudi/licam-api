const Product = require('../../../mongooseModels/productSchema')


const UpdateProduct = async (req, res) =>{
    const _id = req.body._id
    Product.findOneAndUpdate(_id, req.body, (err, result) =>{
        if (err) {
            return console.log(err);
        }
        res.send({message: 'Updated product successfully.'})
    })
    
}

module.exports = UpdateProduct