const express = require("express")
const config = require("./utils/config")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
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


app.use("/api/users",usersRouter)
app.use("/api/users/login",loginRouter)


module.exports = app