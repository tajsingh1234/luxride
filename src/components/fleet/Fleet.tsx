"use client";

import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import CardFleet from "./CardFleet";
import Slider from "react-slick";
import './Fleet.css'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const fleetData = [
  {
    id: 1,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 2,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 3,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 4,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 5,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 6,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 7,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 8,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 9,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 10,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 11,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  {
    id: 12,
    name: "Audi Q3 Sportback",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 3,
  },
  // Add other fleet data here
];

const Fleet = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sliderRef = useRef<Slider>(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,

  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const container = scrollContainerRef.current;

      if (!section || !container) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      const startScroll = sectionTop;
      const endScroll = sectionTop + sectionHeight - window.innerHeight;

      if (scrollY >= startScroll && scrollY <= endScroll) {
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        container.scrollLeft =
          progress * (container.scrollWidth - container.clientWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="" >

      <div ref={sectionRef} className=" md:block hidden fleet-main pt-20 ">
        <div className="h-[200vh] relative">
          <div className="fleet sticky top-40 h-screen px-4 ">
            <div className=" container">
              <div data-aos="fade-up"  className="flex  mb-12 relative z-10 mb-10 justify-between">
                <h2>Our Fleet</h2>
                <a href="#" className="font-semibold w-fit flex gap-2 items-center">
                  <span>More Fleet</span> <FiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="slider-over">
                <div className="start"></div>
                <div className="center"></div>
                <div className="end"></div>
              </div>
              <div className="overflow-hidden" ref={scrollContainerRef}>
                <div

                  className="flex gap-3  container  ps-2 transition-all duration-500 ease-in-out"
                  style={{
                    transition: "all 1s ease-in-out", // Smooth transition effect
                  }}
                >
                  <div data-aos="fade-up"  className="relative flex gap-3 ">

                    {fleetData.map((fleet) => (
                      <CardFleet
                        key={fleet.id}
                        name={fleet.name}
                        description={fleet.description}
                        image={fleet.image}
                        passengers={fleet.passengers}
                        luggage={fleet.luggage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden py-10 px-4 block">
        <div className="flex relative z-10 mb-10 justify-between">
          <h2>Our Fleet</h2>
          <a href="#" className="font-semibold w-fit flex gap-2 items-center">
            <span>More Fleet</span> <FiArrowUpRight />
          </a>
        </div>
        <div className="">
          <Slider ref={sliderRef} {...sliderSettings} className="services-slider">
            {fleetData.map((fleet) => (
              <CardFleet
                key={fleet.id}
                name={fleet.name}
                description={fleet.description}
                image={fleet.image}
                passengers={fleet.passengers}
                luggage={fleet.luggage}
              />
            ))}
          </Slider>
          <div className="mt-10 relative z-10 services-btn justify-end flex">
            <button
              className="w-[50px] h-[50px] me-2 border border-gray rounded-full text-white flex items-center justify-center   "
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <GoArrowLeft className="text-dark" />
            </button>
            <button
              className=" w-[50px] h-[50px] rounded-full hover:orange text-white border border-gray flex items-center justify-center rounded  "
              onClick={() => sliderRef.current?.slickNext()}
            >
              <GoArrowRight className="text-dark" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
