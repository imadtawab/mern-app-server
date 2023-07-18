const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    mainImage: {
        type: String,
        required: true
    } ,
    rating: {
        type: Object,
        childSchemas: {
            rate: Number,
            count: Number
        }
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product