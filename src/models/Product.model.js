const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    imagePath: { type: [String], required: true },
    name: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false,
        minimum: 0,
    },
    product_type: {
        type: [String],
        required: false
    },
    description: {
        type: String,
        required: false
    },
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product;