import axios from "axios"

const baseUrl = "http://localhost:3002/api/users"


const create =  async (user,handleError) => {


    try {
 
    const result = await axios.post(baseUrl,user)

    return result.data

    } catch(error){

        handleError(error.response.data.message)
        
    }

}

const login = async (user,handleLoginError) => {
    
    try{

    const result = await axios.post(`${baseUrl}/login`,user)
    return result.data

    } catch (error){

        handleLoginError(error.response.data.error)
        return null
    }


}

export default {create,login}
