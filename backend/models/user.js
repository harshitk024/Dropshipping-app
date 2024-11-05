const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: String,
    passwordHash: String,
    cart: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
          quantity: { type: Number, default: 1 },
        }
    ],
})


userSchema.set("toJSON",{

    transform: (document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})
const User = mongoose.model("User",userSchema)


module.exports = User