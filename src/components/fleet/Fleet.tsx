"use client";

import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import CardFleet from "./CardFleet"; // Import your CardFleet component
import './Fleet.css'
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
    name: "Electric Class",
    description: "Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar",
    image: "/images/fleet-car1.png",
    passengers: 5,
    luggage: 4,
  },
  {
    id: 3,
    name: "Luxury Class",
    description: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 2,
  },
  {
    id: 4,
    name: "Luxury Class",
    description: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 2,
  },
  {
    id: 5,
    name: "Luxury Class",
    description: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 2,
  },
  {
    id: 6,
    name: "Luxury Class",
    description: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    image: "/images/fleet-car1.png",
    passengers: 4,
    luggage: 2,
  },
];

const Fleet = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="relative fleet-main pt-20 h-[200vh]">
      <div className="fleet sticky top-20 h-screen px-4 ">
        <div className="container">
          <div className="flex mb-10 justify-between">
            <h2>Our Fleet</h2>
            <a href="#" className="font-semibold w-fit flex gap-2 items-center">
              <span>More Fleet</span> <FiArrowUpRight />
            </a>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-hidden h-full ps-2"
          >
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
  );
};

export default Fleet;
