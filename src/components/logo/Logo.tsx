"use client";

import React from "react";
import Slider from "react-slick";


const Logo2 = () => {
  // Slick slider settings
  const settings = {
    dots: false, // Hide navigation dots
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Show 4 slides at once on larger screens
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay delay (2 seconds)
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets)
        settings: {
          slidesToShow: 3, // Show 3 slides at once
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens (mobile)
        settings: {
          slidesToShow: 2, // Show 2 slides at once
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For extra small screens (mobile portrait)
        settings: {
          slidesToShow: 2, // Show 1 slide at once
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="logo overflow-hidden py-10 px-4 border-b border-[#ccc]">
      <div className="container">
        <div className="grid items-center md:grid-cols-12">
          <div className="md:col-span-4 col-span-12 mb-10 md:mb-0">
            <h4 className="max-w-[330px] text-center md:text-start">The partners who sell our products</h4>
          </div>
          <div className="col-span-12 overflow-hidden md:col-span-8">
           
            <Slider {...settings}>
              <div >
                <img
                  src="/images/logo1.svg"
                  alt="Partner 1"
                  className="w-[100px] mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/logo2.svg"
                  alt="Partner 2"
                  className="w-[100px] mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/logo3.svg"
                  alt="Partner 3"
                  className="w-[100px] mx-auto"
                />
              </div>
              <div>
                <img
                  src="/images/logo4.svg"
                  alt="Partner 4"
                  className="w-[100px] mx-auto"
                />
              </div>
            </Slider>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo2;
