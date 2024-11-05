import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import myImage1 from "../../assets/keagan-henman-ufuk99QfQTg-unsplash.jpg"
import myImage2 from "../../assets/nimble-made-NS2BZsGxOLE-unsplash.jpg"
import myImage3 from "../../assets/parker-burchfield-tvG4WvjgsEY-unsplash.jpg"


const SwiperSlideshow = () => {
  return (

    <>
    <div style= {{position: "relative"}}>
    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{
        
        width: '100%',
        height: '100%',
        objectFit: "cover"
      }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide><img src = {myImage1} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src={myImage2} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src={myImage3} alt="Slide 3" /></SwiperSlide>
    </Swiper>


    <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          zIndex: 1,
        }}
      ></div>

    <div style={{
          position: 'absolute',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 2,
        }} className='slide-info'>
        <h2 id = "slide-header" style={{fontFamily: "Anton SC"}}>Welcome to Gozai<span style={{color: "lightgreen"}}>Store</span></h2>
        <div id = "slide-description">
         Discover a world of incredible products, all handpicked for quality and style, right here at Gozaistore. We bring you the best in modern essentials, from the latest tech gadgets to chic home decor, stylish fashion, and unique finds—all delivered straight to your door with just a click.
        </div>
        <div style={{marginTop: "10px",fontWeight: "600", fontFamily: "Roboto",fontStyle: "italic"}}>
          Shop smart, Shop Easy.
        </div>
     </div>
     </div>
    </>
  );
};

export default SwiperSlideshow;
