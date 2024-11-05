const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    apiId: String,
    category: String,
    title: String,
    description: String,
    image: String,
    price: Number,
    rating: {
        count: Number,
        rate: Number
    },
    
})

const Product = mongoose.model("product",productSchema)

module.exports = Product