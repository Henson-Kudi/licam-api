const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        id : {
            type : String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        }
    }
)

module.exports = mongoose.model('Product', productSchema)