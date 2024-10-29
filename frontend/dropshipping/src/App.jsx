import { useEffect, useState } from 'react'
import "./components/Styles/Login.css"
import './App.css'
import Login from "./components/Login"
import userService from "./services/users"
import Home from './components/Home/HomePage'

const App = () => {

  const [user,setUser] = useState(null)

  useEffect(() => {

    const loggedUser = window.localStorage.getItem("user")

    if(loggedUser){
      setUser(loggedUser)
    }

  })


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
      window.localStorage.setItem("user",user)
    }


    console.log(result)
  }

  const logoutUser = ()=> {
     
    setUser(null)
    window.localStorage.removeItem("user")
  }


  return (
    <>
    {user === null ? <Login createUser={createUser} loginUser={loginUser} /> : <Home  logoutUser = {logoutUser} />}
    </>
  )
}


export default App
