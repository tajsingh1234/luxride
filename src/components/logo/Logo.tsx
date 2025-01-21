"use client";

import React from "react";
import Slider from "react-slick";


const Logo2 = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" className="logo overflow-hidden py-10 px-4 border-b border-[#ccc]">
      <div className="container">
        <div className="grid items-center md:grid-cols-12">
          <div className="md:col-span-4 col-span-12 mb-10 md:mb-0">
            <h4 className="max-w-[330px] text-[24px] text-center md:text-start">The partners who sell our products</h4>
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
