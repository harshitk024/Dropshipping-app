import { useState } from "react";
import SwiperSlideshow from "./Carousel";
import Header from "./Header";
import ProductSection from "./ProductsSection";
import runHomeEffect from "./effects/homeEffect";


const Home = ({logoutUser}) => {

  const [products,setProducts] = useState([])

  runHomeEffect(setProducts)

  return (

        <>
        <Header logoutUser = {logoutUser} />
        <SwiperSlideshow />
        <ProductSection products={products} label={"Check new Fashion Trends"} />
        </>
  )
}

export default Home;