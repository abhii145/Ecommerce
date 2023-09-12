import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="object-contain object-center">
      <Slider {...settings}>
        <div>
          <img
            src="/banner2.jpg"
            alt="Image1"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <img
            src="/banner3.jpg"
            alt="Image1"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <img
            src="/banner2.jpg"
            alt="Image1"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
