import { useEffect } from "react"
import axios from "axios"
const runHomeEffect = (setProducts) => {

    useEffect(() => {

        const user = document.querySelector("#user-icon-svg")
        const popup = document.querySelector("#popup")
    
        user.addEventListener("mouseover",() => {
           popup.style.display = "block"
        })
    
        popup.addEventListener("mouseover",() => {
          popup.style.display = "block"
        })
    
        user.addEventListener("mouseout",() => {
          popup.style.display = "none"
        })
    
        popup.addEventListener("mouseout",() => {
          popup.style.display = "none"
        })
    },[])

    useEffect( () => {

        const getProducts = async () => {
    
        const result = await axios.get("http://localhost:3002/api/products")
        console.log(result.data)
        setProducts(result.data)
    
        }
        getProducts()
    },[])


}

export default runHomeEffect