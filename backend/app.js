const express = require("express")
const config = require("./utils/config")
const app = express()
require("express-async-errors")
const mongoose = require("mongoose")
const cors = require("cors")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
const productRouter = require("./controllers/products")
const middleware = require("./utils/middleware")
const syncProducts = require("./models/saveProducts")
mongoose.set("strictQuery",false)


mongoose.connect(config.MONGODB_URI)
        .then(() => {
          console.log("Connected to MONGODB")
          syncProducts()
        })
        .catch(() => {
            console.log("Can't connect to MONGODB")
        })



app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use("/api/users",usersRouter)
app.use("/api/users/login",loginRouter)
app.use("/api/products",productRouter)


app.use(middleware.errorHandler)


module.exports = app