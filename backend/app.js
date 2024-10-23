const express = require("express")
const config = require("./utils/config")
const app = express()
require("express-async-errors")
const mongoose = require("mongoose")
const cors = require("cors")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
const middleware = require("./utils/middleware")
mongoose.set("strictQuery",false)


mongoose.connect(config.MONGODB_URI)
        .then(() => {
          console.log("Connected to MONGODB")
        })
        .catch(() => {
            console.log("Can't connect to MONGODB")
        })



app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use("/api/users",usersRouter)
app.use("/api/users/login",loginRouter)


app.use(middleware.errorHandler)


module.exports = app