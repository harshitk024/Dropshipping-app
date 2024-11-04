    const {response, request} = require("../app")


    const requestLogger = (request,response,next) => {

        console.log("Method: ",request.method)
        console.log("Path: ",request.path)
        console.log("Body: ",request.body)
        console.log("------")

        next()
    }

    const errorHandler = (error,request,response,next) => {

        console.log(error)

        if(error.name === "CastError"){

            return response.status(400).send({error: "malformatted id"})
                                      
        } else if (error.name === "ValidationError"){

            return response.status(400).send({error: error})

        } else if (error.name === "Internal Server Error"){

            return response.status(500).send({error: error})

        } else if (error.name === "MongoServerError") {

            if(error.code === 11000){
                
                return response.status(400).send({message: "Username is already taken", error : error.message})
            }

            return response.status(400).send({error: error})
            
        } else if (error.name === "TokenExpiredError"){

            return response.status(401).json({
                error: "token expired"
            })
        }
    }


    module.exports = {requestLogger,errorHandler    }