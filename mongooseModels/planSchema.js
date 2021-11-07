const mongoose = require('mongoose');

const planSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required: true,
        },
        id : {
            type : String,
            required: true,
        },
        category: {
            type : String,
            required: true,
        },
        basicPrice: {
            type : String,
            required: true,
        },
        standardPrice: {
            type : String,
            required: true,
        },
        premiumPrice: {
            type : String,
            required: true,
        },
        plotWidth: String,
        plotLength: String,
        plotArea: String,
        freeSpace: String,
        toilets: String,
        verandas: String,
        rooms: String,
        livingRooms: String,
        balconies: String,
        apartments: String,
        stories: String,
        kitchens: String,
        description: {
            type : String,
            required : true,
        },
        images: {
            type : Array,
            required : true,
        }
    }
)

module.exports = mongoose.model('Plan', planSchema)