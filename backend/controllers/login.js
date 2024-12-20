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

        return response.status(401).send({
            error: `username or password is invalid`
        })
        

    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken,process.env.SECRET,{expiresIn: 60*30})

    response.status(200).send({token,username:user.username,name:user.name})

})



module.exports = loginRouter