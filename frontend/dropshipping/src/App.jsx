import { useState } from 'react'
import "./components/Styles/Login.css"
import './App.css'
import Login from "./components/Login"
import userService from "./services/users"


const App = () => {

  const [user,setUser] = useState(null)

  const createUser = async (user,handleError) => {
     

    const result = await userService.create(user,handleError)

    if(result){
      alert("successfully created the account, you can login now")
    } else {
      return result 
    }



  }

  const loginUser = async (user,handleLoginError) => {

    const result = await userService.login(user,handleLoginError)

    if(result){
      alert("Successfully logged in")
      setUser(result)
    }


    console.log(result)
  }


  return (
    <>
    {user === null ? <Login createUser={createUser} loginUser={loginUser} /> : null}
    </>
  )
}


export default App
