import axios from "axios"

const baseUrl = "http://localhost:3002/api/users"


const create =  async (user) => {
 
    const result = await axios.post(baseUrl,user)

    return result.data

}

const login = async (user) => {
    
    try{

    const result = await axios.post(`${baseUrl}/login`,user)
    return result.data

    } catch (Error){

        console.log(Error)
        return null
    }


}

export default {create,login}
