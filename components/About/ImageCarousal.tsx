"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

const ImageCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 5000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16">
      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[600px] 2xl:h-[650px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out hover:scale-105"
                  priority={index === 0} 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
