"use client";
import React, { useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import ServicesCard from "./ServicesCard";
import "./Services.css";

const servicesData = [
    {
        id: 1,
        title: "Airport Transfers",
        description:
            "One of the joys of intercity travel is the opportunity to witness the beauty of...",
        image: "/images/service1.jpg",
    },
    {
        id: 2,
        title: "City Tours",
        description:
            "Experience the beauty and culture of your city like never before...",
            image: "/images/service1.jpg",
    },
    {
        id: 3,
        title: "Corporate Travel",
        description:
            "Business trips made easy with our seamless and comfortable services...",
            image: "/images/service1.jpg",
    },
    {
        id: 4,
        title: "Event Transport",
        description:
            "From weddings to conferences, travel in style with our premium services...",
            image: "/images/service1.jpg",
    },
];

const Services = () => {
    const sliderRef = useRef<Slider>(null);
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
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
        <div className="services  relative overflow-hidden  py-14 px-4">
            <div className="container">
                <div data-aos="fade-up"  className="flex relative z-10 mb-10 justify-between">
                    <h2>Our Services</h2>
                    <a href="#" className="font-semibold w-fit flex gap-2 items-center">
                        <span>More Fleet</span> <FiArrowUpRight />
                    </a>
                </div>
                <div className="slider-over">
                    <div className="start"></div>
                    <div className="center"></div>
                    <div className="end"> </div>
                </div>
                <div data-aos="fade-up" >
                <Slider  ref={sliderRef} {...sliderSettings} className="services-slider">
                    {servicesData.map((service) => (
                        <div key={service.id} className="px-2">
                            <ServicesCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        </div>
                    ))}
                </Slider>
                </div>
                <div className="mt-10 relative z-10 services-btn flex">
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
    );
};

export default Services;
