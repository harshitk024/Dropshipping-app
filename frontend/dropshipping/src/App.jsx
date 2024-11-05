import { useEffect, useState } from 'react'
import {Routes, Route, Link, Navigate, useNavigate} from "react-router-dom"
import "./components/Styles/Login.css"
import './App.css'
import Login from "./components/Login"
import userService from "./services/users"
import Home from './components/Home/HomePage'
import Cart from "./components/Cart"
import Favorite from "./components/Favorite"


const App = () => {

  const [user,setUser] = useState(null)
  const navigate = useNavigate()

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
      navigate("/")
    }

    console.log(result)
  }

  const logoutUser = ()=> {
     
    setUser(null)
    window.localStorage.removeItem("user")
  }

  return (
    <>
    <Routes>
      <Route path='/' element = {user ? <Home /> : <Navigate replace to = "/login" />} />
      <Route path= "/login" element = {<Login createUser={createUser} loginUser={loginUser} user = {user} />} />
      <Route path = "/cart" element = {<Cart />} />
      <Route path = "/fav" element= {<Favorite />} />
    </Routes>
    </>
  )
}


export default App
