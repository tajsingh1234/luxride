"use client";

import React, { useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Slider from "react-slick";
import './banner.css';

interface BannerProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

const TopBanner: React.FC<BannerProps & { isActive: boolean }> = ({
    backgroundImage,
    title,
    subtitle,
    isActive,
}) => (
    <div>
        <div
            className="banner relative px-8 pb-[60px] flex align-center pb-0 md:h-screen pt-[220px] bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container relative z-10 text-white">
                <p className="mb-2 font-[18px] font-semibold">{subtitle}</p>
                <h1
                    className={`max-w-[500px] ${isActive ? "animate-slide-in" : "opacity-0"
                        } transition-all duration-700`}
                >
                    {title}
                </h1>
            </div>
        </div>
    </div>
);

const Banner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const settings = {
        dots: false,                // Show navigation dots
        infinite: true,             // Loop slides
        speed: 500,                 // Transition speed in ms
        slidesToShow: 1,            // Number of slides visible
        slidesToScroll: 1,          // Number of slides to scroll at a time
        autoplay: true,             // Enable autoplay
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,

        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        responsive: [               // Responsive breakpoints
            {
                breakpoint: 768,    // Mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,   // Tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const banners = [
        {
            backgroundImage: "/images/banner1.jpg",
            title: "Your Personal \n Chauffeur Services",
            subtitle: "Where Would You Like To Go?",
        },
        {
            backgroundImage: "/images/banner2.jpg",
            title: "Travel In \n Style & Comfort",
            subtitle: "Your Journey, Our Priority",
        },
        {
            backgroundImage: "/images/banner3.jpg",
            title: "Reliable \n Chauffeur Services",
            subtitle: "Experience The Difference",
        },
    ];

    return (
        <div className="overflow-hidden">

            <Slider ref={sliderRef} {...settings}>
                {banners.map((banner, index) => (
                    <TopBanner
                        key={index}
                        backgroundImage={banner.backgroundImage}
                        title={banner.title}
                        subtitle={banner.subtitle}
                        isActive={currentSlide === index}
                    />
                ))}
            </Slider>
           
                <div className="absolute container px-8 md:px-0  pt-[130px]  top-1 left-0 right-0 flex items-center  gap-4">
                    <div className="btns-slider flex">
                        <button
                            className="w-[40px] h-[40px] me-2 rounded-full text-white flex items-center justify-center rounded shadow "
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <GoArrowLeft />
                        </button>
                        <button
                            className=" w-[40px] h-[40px] rounded-full text-white flex items-center justify-center rounded shadow "
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <GoArrowRight />
                        </button>
                    </div>
                    <p className="text-white block">
                        <strong>{currentSlide + 1} </strong> / {banners.length}
                    </p>
                </div>
            </div>
      
    );
};

export default Banner;
