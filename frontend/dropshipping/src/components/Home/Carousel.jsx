import myImage from "../../assets/wallhaven-l8x1pr_1920x1080.png"
import myImage2 from "../../assets/pic.png"
import myImage3 from "../../assets/wallhaven-3lv8j6_1600x900.png"

import { useEffect } from "react";

const SlideShow = () => {


  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img class="d-block w-100 active" src={myImage} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src= {myImage2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={myImage3} alt="Third slide"/>
    </div>
  </div>
</div>
    </>
  );
};

export default SlideShow;