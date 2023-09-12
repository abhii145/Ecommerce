import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const ImageCarousel = () => {

  return (
    <div className="object-contain object-center">
      <Carousel>
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
        </Carousel>
    </div>
  );
};

export default ImageCarousel;
