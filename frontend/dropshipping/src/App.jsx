import { useState } from 'react'
import "./components/Styles/Login.css"
import './App.css'
import Login from "./components/Login"
import userService from "./services/users"


const App = () => {

  const [user,setUser] = useState(null)

  const createUser = async (user) => {
     

    const result = await userService.create(user)

    console.log(result)
    
  }

  const loginUser = async (user) => {

    const result = await userService.login(user)

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
