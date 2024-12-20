const usersRouter = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")


usersRouter.get("/",async (request,response) => {

    const users = await User.find({})

    response.json(users)

})

usersRouter.post("/", async (request,response) => {

    const {username,name,email,password} = request.body


    const passwordHash = await bcrypt.hash(password,10)

    const user = new User({
        username: username.trim(),
        name: name,
        email: email,
        passwordHash: passwordHash
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
    
})

module.exports = usersRouter