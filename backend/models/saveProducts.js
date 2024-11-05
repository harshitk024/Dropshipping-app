const axios = require("axios")
const Product = require("./product")

const fetchProductsFromApi = async () => {

    try {

    const result = await axios.get("https://fakestoreapi.com/products")
    return result.data

    } catch (error) {

        console.error("Error in fetching data: ", error)
        return []
    }

}

const upsertProducts = async (products) => {

    const bulkOps = products.map(product => ({
        updateOne: {
            filter: {apiId: product.id},
            update: {
                $set: {
                    apiId: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                    description: product.description,
                    rating: product.rating
                },
            },
            upsert: true
        }
    })) 

    try {
        await Product.bulkWrite(bulkOps)
        console.log("upserted successfully")
    } catch(error) {
        console.error("Error upserting products",error)
    }
}

const syncProducts = async () => {

    const products = await fetchProductsFromApi()

    if(products.length){
        await upsertProducts(products)
    } else {
        console.log("No products fetched")
    }
}

module.exports = syncProducts