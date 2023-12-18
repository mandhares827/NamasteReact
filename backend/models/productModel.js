const mongoose = require('mongoose')

const menuSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
    }
)

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        cuisine: {
            type: String,
            required:true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
        menu: [menuSchema]
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;