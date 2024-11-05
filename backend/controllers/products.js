const Product = require("../models/product")

const productRouter = require("express").Router()


productRouter.get("/", async (request,response) => {

    const products = await Product.find({})
    response.json(products)
})

productRouter.get("/:id", async (request,response) => {

    const id = request.params.id

    const product = await Product.findById(id)
    response.json(product)
})


module.exports = productRouter