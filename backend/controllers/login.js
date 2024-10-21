const User = require("../models/user")
require("dotenv").config()
const loginRouter = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

loginRouter.get("/", async (request,response) => {

    response.send("<h1>Login router</h1>")
})

loginRouter.post("/", async (request,response) => {


    const {username,password} = request.body


    const user = await User.findOne({username})
    console.log(user)


    const passwordCorrect = user === null ? false : await bcrypt.compare(password,user.passwordHash)

    if(!(user && passwordCorrect)){

        response.status(401).json({
            error: `username or password is invalid`
        })
        
        return
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken,process.env.SECRET)

    response.status(200).send({token,username:user.username,name:user.name})

})

module.exports = loginRouter